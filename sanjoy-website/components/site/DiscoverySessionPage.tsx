"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"

import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed"

const CALENDLY_URL =
  "https://calendly.com/team-sanjuniper/san-juniper-discovery-call"

const journeySteps = [
  { step: "01", title: "Discovery Call" },
  { step: "02", title: "Business Assessment" },
  { step: "03", title: "Solution Blueprint" },
  { step: "04", title: "45-Day Zero-Risk Pilot" },
] as const

const trustIndicators = [
  "No Obligation",
  "Expert Consultation",
  "Tailored Recommendations",
  "Enterprise-Ready Roadmap",
] as const

type JourneyStepProps = {
  step: string
  title: string
}

function JourneyStep({ step, title }: JourneyStepProps) {
  return (
    <li className="group relative list-none rounded-xl px-2 py-4 transition-colors duration-300 hover:bg-foreground/[0.03]">
      <div className="flex min-h-10 items-center gap-4">
        <span
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-muted text-xs font-semibold tracking-[0.08em] text-brand transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          aria-hidden="true"
        >
          {step}
        </span>
        <p className="text-base font-semibold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-foreground">
          {title}
        </p>
      </div>
    </li>
  )
}

export function DiscoverySessionPage() {
  const shouldReduceMotion = useReducedMotion()

  const fadeIn = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] as const },
  }

  return (
    <section
      aria-labelledby="discovery-heading"
      className="section-lg"
    >
      <div className="container-page">
        <div className="flex flex-col gap-section-content lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-16 xl:gap-20">
          <motion.aside
            className="pb-2 lg:pb-0"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: shouldReduceMotion ? 0 : 0.04 }}
          >
            <div className="mx-auto max-w-md lg:max-w-none">
              <h1 id="discovery-heading" className="text-heading-lg text-balance">
                Let&apos;s Discover What&apos;s Possible.
              </h1>
              <p className="mt-6 text-body-lg">
                Book a conversation with our team to identify where AI can create
                measurable business value across your organization.
              </p>

              <ol
                className="relative -mx-2 mt-12"
                aria-label="Consulting journey"
              >
                <div
                  className="pointer-events-none absolute bottom-9 left-5 top-9 w-px -translate-x-1/2 bg-brand/20"
                  aria-hidden="true"
                />

                {journeySteps.map((item) => (
                  <JourneyStep key={item.step} step={item.step} title={item.title} />
                ))}
              </ol>

              <ul className="mt-12 space-y-3.5 border-t border-border/70 pt-10">
                {trustIndicators.map((indicator) => (
                  <li
                    key={indicator}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground"
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
            </div>
          </motion.aside>

          <motion.div
            className="flex w-full min-w-0 items-start"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <div className="w-full min-w-0 py-2 sm:py-4 lg:px-6 lg:py-0 xl:px-8">
              <CalendlyEmbed url={CALENDLY_URL} title="Book a discovery session" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
