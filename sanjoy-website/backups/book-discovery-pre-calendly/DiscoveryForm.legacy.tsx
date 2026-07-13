/**
 * BACKUP — Pre-Calendly custom booking form (right-side panel only).
 * Extracted from the original DiscoverySessionPage implementation.
 *
 * DO NOT IMPORT. Reference / rollback copy only.
 * Active version: components/site/DiscoverySessionPage.tsx (uses CalendlyEmbed)
 */

"use client"

import { type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

export function DiscoveryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-border bg-surface-subtle p-8 shadow-sm sm:p-10 lg:p-12">
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
          Request received
        </h2>
        <p className="mt-4 text-body">
          Thank you for booking a discovery session. Our team will contact you
          within one business day.
        </p>
      </div>
    )
  }

  return (
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
        <FormField id="contact-date" label="Preferred Contact Date" required>
          <input
            id="contact-date"
            name="contactDate"
            type="date"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="contact-time" label="Preferred Contact Time" required>
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
  )
}
