"use client"

import type { LucideIcon } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Building2, Expand, Shield, TrendingUp } from "lucide-react"

import {
  aboutMotion,
  aboutStaggerContainer,
  aboutStaggerItem,
  ABOUT_GAP,
  ABOUT_SECTION,
} from "@/lib/about-motion"

const principles: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: "Infrastructure Before Intelligence",
    description: "Strong AI begins with strong foundations.",
    icon: Building2,
  },
  {
    title: "Business Before Technology",
    description: "Technology should solve measurable business challenges.",
    icon: TrendingUp,
  },
  {
    title: "Responsible by Design",
    description:
      "Governance, security, and trust are built into every deployment.",
    icon: Shield,
  },
  {
    title: "Designed to Scale",
    description: "Every solution is built to grow with the enterprise.",
    icon: Expand,
  },
]

export function Principles() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="principles-heading"
      className={`${ABOUT_SECTION} bg-background`}
    >
      <div className="container-page">
        <motion.h2
          id="principles-heading"
          className="text-heading-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
          variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
        >
          Our Principles
        </motion.h2>

        <motion.ul
          className={`${ABOUT_GAP} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
          variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
        >
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <motion.li
                key={principle.title}
                className="list-none"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
              >
                <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md sm:p-7">
                  <span
                    className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {principle.description}
                  </p>
                </article>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
