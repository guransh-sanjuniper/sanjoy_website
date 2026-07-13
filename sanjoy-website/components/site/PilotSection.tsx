"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { discoveryHref, SECTION_IDS } from "@/lib/site-navigation"

const milestones = [
  {
    step: "01",
    title: "Business Discovery",
    period: "Days 1–5",
    description:
      "Understand your business, identify opportunities, and define pilot objectives.",
  },
  {
    step: "02",
    title: "Pilot Deployment",
    period: "Days 6–20",
    description:
      "Deploy Sanjoy in a selected department with guided implementation.",
  },
  {
    step: "03",
    title: "Measure Results",
    period: "Days 21–35",
    description:
      "Track productivity, efficiency, and business outcomes using predefined KPIs.",
  },
  {
    step: "04",
    title: "Scale Across the Enterprise",
    period: "Days 36–45",
    description:
      "Review results, optimize the solution, and prepare for organization-wide rollout.",
  },
]

const trustIndicators = [
  "Guided Implementation",
  "Measurable ROI",
  "No Long-Term Commitment",
]

type MilestoneItemProps = (typeof milestones)[number] & {
  index: number
  shouldReduceMotion: boolean | null
}

function MilestoneItem({
  step,
  title,
  period,
  description,
  index,
  shouldReduceMotion,
}: MilestoneItemProps) {
  return (
    <motion.li
      className="relative list-none lg:flex lg:flex-col lg:items-center"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <div className="relative w-full pl-12 md:pl-0">
        <span
          className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-brand-muted text-xs font-semibold tracking-[0.08em] text-brand md:relative md:mb-5 md:h-11 md:w-11 lg:mx-auto lg:mb-6"
          aria-hidden="true"
        >
          {step}
        </span>

        <article className="group relative rounded-2xl border border-border bg-surface-subtle p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-sm md:p-6">
          <span
            className="absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-6"
            aria-hidden="true"
          />

          <h3 className="text-base font-semibold tracking-[-0.03em] text-foreground">
            {title}
          </h3>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {period}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </article>
      </div>
    </motion.li>
  )
}

export function PilotSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={SECTION_IDS.pilot}
      aria-labelledby="pilot-heading"
      className="section-lg section-band-white scroll-mt-20"
    >
      <div className="container-page">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 id="pilot-heading" className="text-heading-xl">
            Start Small. Scale with Confidence.
          </h2>
          <p className="mt-6 text-body-lg max-md:mt-4">
            Experience the impact of Enterprise AI through a structured 45-Day
            Zero-Risk Pilot before committing to a full rollout.
          </p>
        </motion.header>

        <div className="section-content-gap relative">
          {/* Desktop horizontal connector — spans center of step badges */}
          <div
            className="pointer-events-none absolute inset-x-[12.5%] top-[1.375rem] z-0 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          {/* Mobile vertical connector */}
          <div
            className="pointer-events-none absolute bottom-8 left-5 top-5 z-0 w-px bg-border max-md:left-[1.375rem] md:hidden"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-1 gap-8 max-md:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {milestones.map((milestone, index) => (
              <MilestoneItem
                key={milestone.step}
                {...milestone}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </ol>
        </div>

        <motion.div
          className="section-content-gap rounded-3xl border border-border bg-surface-subtle p-6 shadow-xs max-md:p-5 sm:p-8 lg:p-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground max-md:text-xl sm:text-3xl">
              45-Day Zero-Risk Pilot
            </h3>
            <p className="mt-4 text-body">
              Experience measurable business outcomes before making a long-term
              commitment. Every pilot is designed to deliver clear ROI, minimal
              disruption, and a roadmap for enterprise-wide adoption.
            </p>

            <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3">
              {trustIndicators.map((indicator) => (
                <li
                  key={indicator}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-brand"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {indicator}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex w-full justify-center">
              <a
                href={discoveryHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full rounded-2xl px-5 max-md:h-11 max-md:px-4 max-md:text-[0.9375rem] sm:w-auto"
                )}
              >
                Book a Discovery Session
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="section-content-gap mx-auto max-w-2xl text-center text-xl font-semibold tracking-[-0.035em] text-foreground max-md:text-lg sm:text-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          The best way to understand Enterprise AI is to experience it.
        </motion.p>
      </div>
    </section>
  )
}
