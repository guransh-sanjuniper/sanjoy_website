"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { SanjoyLogo } from "@/components/site/SanjoyLogo"
import { cn } from "@/lib/utils"
import { aboutHref, discoveryHref, homeHref, mainNavigation } from "@/lib/site-navigation"
import { useScrollSpy } from "@/lib/use-scroll-spy"

const navigationItems = mainNavigation.map((item) => ({
  ...item,
  sectionId: item.href.includes("#") ? (item.href.split("#")[1] ?? "") : "",
}))

const sectionIds = navigationItems
  .map((item) => item.sectionId)
  .filter((id) => id.length > 0)

function isNavItemActive(
  item: (typeof navigationItems)[number],
  pathname: string,
  isHomePage: boolean,
  activeHref: string | null
) {
  if (item.href === aboutHref) {
    return pathname === aboutHref
  }

  return isHomePage && activeHref === item.href
}

export function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === homeHref
  const activeSectionId = useScrollSpy(sectionIds, isHomePage)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const activeHref = useMemo(() => {
    if (!isHomePage || !activeSectionId) return null
    return `/#${activeSectionId}`
  }, [activeSectionId, isHomePage])

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })

    return () => window.removeEventListener("scroll", updateScrollState)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 64rem)")

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener("change", handleViewportChange)
    return () => mediaQuery.removeEventListener("change", handleViewportChange)
  }, [])

  return (
    <header className="sticky top-0 z-50 h-20">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 border-b bg-surface transition-[background-color,box-shadow,border-color] duration-300",
          isScrolled
            ? "border-border/90 bg-surface/90 shadow-sm backdrop-blur-xl"
            : "border-border/60"
        )}
        aria-hidden="true"
      />
      <nav
        className="container-page relative z-10 flex h-full items-center justify-between"
        aria-label="Main navigation"
      >
        <SanjoyLogo priority className="h-20" />

        <div className="hidden items-center gap-10 lg:flex">
          {navigationItems.map((item) => {
            const isActive = isNavItemActive(
              item,
              pathname,
              isHomePage,
              activeHref
            )

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative rounded-lg text-sm font-medium tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
                {isActive ? (
                  <span
                    className="absolute left-1/2 top-[calc(100%+0.5rem)] h-1 w-1 -translate-x-1/2 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href={discoveryHref}
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "rounded-2xl px-5"
            )}
          >
            Book Discovery Session
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 top-20 z-40 bg-foreground/8 lg:hidden"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              id="mobile-navigation"
              className="fixed inset-x-3 top-24 z-50 rounded-3xl border border-border bg-surface p-4 shadow-lg sm:left-auto sm:right-6 sm:w-80 lg:hidden"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="flex flex-col gap-1">
                {navigationItems.map((item) => {
                  const isActive = isNavItemActive(
              item,
              pathname,
              isHomePage,
              activeHref
            )

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-base font-medium tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20",
                        isActive
                          ? "bg-brand-muted text-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
              <Link
                href={discoveryHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "mt-4 w-full"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Discovery Session
              </Link>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
