"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { discoveryHref, SECTION_IDS } from "@/lib/site-navigation"

export function FinalCTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={SECTION_IDS.discovery}
      aria-labelledby="final-cta-heading"
      className="section-lg section-band-subtle scroll-mt-20"
    >
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 id="final-cta-heading" className="text-heading-xl">
            Ready to Build an AI-Powered Enterprise?
          </h2>
          <p className="mt-6 text-body-lg">
            Transform every department with one intelligent operating layer.
          </p>

          <div className="mt-10 flex w-full justify-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
