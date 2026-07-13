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
      className="flex flex-col items-center gap-4 text-sm font-semibold tracking-[-0.02em] text-foreground max-md:mx-auto max-md:grid max-md:w-[12.5rem] max-md:grid-cols-[2.25rem_1fr] max-md:items-center max-md:gap-x-3 max-md:gap-y-3 md:flex md:w-auto md:flex-row md:justify-center md:gap-0 lg:justify-start"
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
          className="flex items-center gap-3 text-foreground max-md:contents"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {index > 0 ? (
            <span
              className="hidden h-10 w-px bg-border md:mx-5 md:block"
              aria-hidden="true"
            />
          ) : null}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-muted text-brand max-md:col-start-1 max-md:h-9 max-md:w-9 max-md:justify-self-center">
            <Icon className="h-4 w-4 max-md:h-3.5 max-md:w-3.5" aria-hidden="true" />
          </span>
          <span className="leading-5 max-md:col-start-2 max-md:text-left max-md:text-[0.8125rem] max-md:leading-4 md:max-w-[6.5rem]">
            {outcome.label}
          </span>
        </motion.li>
        )
      })}
    </motion.ul>
  )
}
