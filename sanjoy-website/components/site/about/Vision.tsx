"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  aboutMotion,
  aboutStaggerContainer,
  aboutStaggerItem,
  ABOUT_SECTION,
} from "@/lib/about-motion"

export function Vision() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="vision-heading"
      className={`${ABOUT_SECTION} relative overflow-hidden bg-background`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-56 max-w-2xl -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--brand-muted),transparent_72%)] opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
        >
          <motion.p
            className="text-eyebrow"
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            Our Vision
          </motion.p>
          <motion.h2
            id="vision-heading"
            className="mt-5 text-3xl leading-[1.1] font-semibold tracking-[-0.055em] text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            To become the enterprise AI operating layer powering organizations
            across industries by enabling responsible, secure, and scalable
            artificial intelligence.
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-body-lg lg:mt-8"
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            We believe the future of AI will not be defined by individual
            models or isolated tools, but by intelligent infrastructure that
            allows organizations to deploy AI with confidence, governance, and
            measurable business impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
