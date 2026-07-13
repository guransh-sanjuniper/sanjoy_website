"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { discoveryHref, productsHref } from "@/lib/site-navigation"

const actions = [
  {
    label: "Book a Business Discovery Session",
    href: discoveryHref,
    variant: "default" as const,
  },
  {
    label: "Explore the Ecosystem",
    href: productsHref,
    variant: "outline" as const,
  },
]

export function HeroActions() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center gap-3 max-md:max-w-[20rem] md:w-auto md:flex-row"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className={cn(
            buttonVariants({ variant: action.variant, size: "lg" }),
            "w-full rounded-2xl px-5 max-md:h-11 max-md:px-4 max-md:text-[0.9375rem] md:w-auto"
          )}
        >
          {action.label}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </motion.div>
  )
}
