import Link from "next/link"

import { SanjoyLogo } from "@/components/site/SanjoyLogo"
import {
  mainNavigation,
  productNavigation,
  SECTION_IDS,
} from "@/lib/site-navigation"

const navigationLinks = [...mainNavigation]
const productLinks = [...productNavigation]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sanjoy",
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id={SECTION_IDS.contact} className="scroll-mt-20 border-t border-border/60 bg-surface">
      <div className="container-page py-section">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SanjoyLogo className="h-30" href="/" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Enterprise AI infrastructure for modern businesses. One intelligent
              operating layer across every department.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <nav aria-label="Footer navigation">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <nav aria-label="Product links">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <nav aria-label="Social media">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Connect
              </h3>
              <ul className="mt-4 flex flex-wrap items-center gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in new tab)`}
                      className="inline-flex items-center rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/30 hover:bg-brand-muted hover:text-brand focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/20"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="section-content-gap flex flex-col gap-4 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Sanjoy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Enterprise AI infrastructure. Business first. AI second.
          </p>
        </div>
      </div>
    </footer>
  )
}
