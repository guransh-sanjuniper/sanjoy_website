"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  aboutMotion,
  aboutStaggerContainer,
  aboutStaggerItem,
  ABOUT_SECTION_CTA,
} from "@/lib/about-motion"
import { discoveryHref, productsHref } from "@/lib/site-navigation"

export function AboutCTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="about-cta-heading"
      className={`${ABOUT_SECTION_CTA} relative overflow-hidden border-t border-border/50 bg-background`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_50%_0%,var(--brand-muted),transparent_60%)] opacity-45"
        aria-hidden="true"
      />

      <div className="container-page">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
        >
          <motion.h2
            id="about-cta-heading"
            className="text-heading-xl"
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            Ready to Build an AI-Powered Enterprise?
          </motion.h2>
          <motion.p
            className="mt-5 text-body-lg"
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            Discover how Sanjoy can help your organization deploy artificial
            intelligence with confidence.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:mx-auto sm:w-auto sm:flex-row sm:justify-center"
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            <a
              href={discoveryHref}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full rounded-2xl px-5 sm:w-auto"
              )}
            >
              Book Discovery Session
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={productsHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full rounded-2xl px-5 sm:w-auto"
              )}
            >
              Explore the Platform
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
