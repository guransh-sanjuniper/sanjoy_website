"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, TrendingUp, Zap } from "lucide-react"

const outcomes = [
  { label: "Increase Revenue", icon: TrendingUp },
  { label: "Reduce Costs", icon: ArrowDown },
  { label: "Improve Productivity", icon: Zap },
]

export function HeroStats() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.ul
      className="flex flex-col items-start gap-4 text-sm font-semibold tracking-[-0.02em] text-foreground sm:flex-row sm:items-center sm:justify-center sm:gap-0 lg:justify-start"
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.18,
          },
        },
      }}
      aria-label="Primary business outcomes"
    >
      {outcomes.map((outcome, index) => {
        const Icon = outcome.icon

        return (
        <motion.li
          key={outcome.label}
          className="flex items-center gap-3 text-foreground"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {index > 0 ? (
            <span
              className="hidden h-10 w-px bg-border sm:mx-5 sm:block"
              aria-hidden="true"
            />
          ) : null}
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-muted text-brand">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="max-w-[6.5rem] leading-5">{outcome.label}</span>
        </motion.li>
        )
      })}
    </motion.ul>
  )
}
