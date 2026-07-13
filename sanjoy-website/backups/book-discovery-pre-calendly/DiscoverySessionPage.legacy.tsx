/**
 * BACKUP — Pre-Calendly version of DiscoverySessionPage.
 * Restored from the implementation that existed before Calendly integration.
 *
 * DO NOT IMPORT. Reference / rollback copy only.
 * Active version: components/site/DiscoverySessionPage.tsx
 */

"use client"

import { type FormEvent, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

const inputClassName =
  "h-12 w-full rounded-2xl border border-border bg-surface px-4 text-sm text-foreground shadow-xs transition-all duration-300 placeholder:text-muted-foreground focus-visible:border-foreground/25 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/10"

const labelClassName =
  "text-sm font-medium tracking-[-0.01em] text-foreground"

type FormFieldProps = {
  id: string
  label: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
  className?: string
}

function FormField({
  id,
  label,
  required,
  optional,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <label htmlFor={id} className={labelClassName}>
        {label}
        {required ? (
          <span className="ml-0.5 text-brand" aria-hidden="true">
            *
          </span>
        ) : null}
        {optional ? (
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
            (Optional)
          </span>
        ) : null}
      </label>
      {children}
    </div>
  )
}

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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeIn = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] as const },
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section
      aria-labelledby="discovery-heading"
      className="section-lg"
    >
      <div className="container-page">
        <div className="flex flex-col gap-section-content md:grid md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:gap-20">
          <motion.aside
            className="pb-2 md:pb-0"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: shouldReduceMotion ? 0 : 0.04 }}
          >
            <div className="mx-auto max-w-md md:max-w-none">
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
            className="flex w-full items-start"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <div className="w-full py-2 sm:py-4 lg:py-6 lg:px-6 xl:px-8">
              {isSubmitted ? (
                <div className="rounded-3xl border border-border bg-surface-subtle p-8 shadow-sm sm:p-10 lg:p-12">
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    Request received
                  </h2>
                  <p className="mt-4 text-body">
                    Thank you for booking a discovery session. Our team will
                    contact you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-8"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Book a discovery session"
                >
                  <FormField id="full-name" label="Full Name" required>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      className={inputClassName}
                      placeholder="Your full name"
                    />
                  </FormField>

                  <FormField id="business-email" label="Business Email" required>
                    <input
                      id="business-email"
                      name="businessEmail"
                      type="email"
                      autoComplete="email"
                      required
                      className={inputClassName}
                      placeholder="you@company.com"
                    />
                  </FormField>

                  <FormField id="phone-number" label="Phone Number" required>
                    <input
                      id="phone-number"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      required
                      className={inputClassName}
                      placeholder="+1 (555) 000-0000"
                    />
                  </FormField>

                  <FormField id="company-name" label="Company Name" optional>
                    <input
                      id="company-name"
                      name="companyName"
                      type="text"
                      autoComplete="organization"
                      className={inputClassName}
                      placeholder="Your company"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <FormField
                      id="contact-date"
                      label="Preferred Contact Date"
                      required
                    >
                      <input
                        id="contact-date"
                        name="contactDate"
                        type="date"
                        required
                        className={inputClassName}
                      />
                    </FormField>

                    <FormField
                      id="contact-time"
                      label="Preferred Contact Time"
                      required
                    >
                      <input
                        id="contact-time"
                        name="contactTime"
                        type="time"
                        required
                        className={inputClassName}
                      />
                    </FormField>
                  </div>

                  <FormField
                    id="business-details"
                    label="Tell us about your business"
                    optional
                  >
                    <textarea
                      id="business-details"
                      name="businessDetails"
                      rows={5}
                      className={cn(
                        inputClassName,
                        "h-auto min-h-[8.5rem] resize-y py-3.5 leading-6"
                      )}
                      placeholder="Share your goals, challenges, or departments you'd like to explore..."
                    />
                  </FormField>

                  <div className="flex flex-col items-center space-y-4 pt-3 text-center">
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="h-12 w-full rounded-2xl text-base sm:w-auto sm:min-w-[16rem]"
                    >
                      Book Discovery Session
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Our team will contact you within one business day.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
