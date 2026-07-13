"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  aboutMotion,
  aboutStaggerContainer,
  aboutStaggerItem,
  ABOUT_GAP,
  ABOUT_SECTION,
} from "@/lib/about-motion"

const paragraphs = [
  "Artificial intelligence has become widely accessible, yet many organizations continue to struggle with fragmented tools, disconnected knowledge, and inconsistent adoption.",
  "Businesses don't need another standalone AI application.",
  "They need an intelligent operating layer that connects people, knowledge, workflows, and business systems into one unified enterprise ecosystem.",
  "Sanjoy was created to solve this challenge.",
  "By bringing AI into the core of business operations, Sanjoy enables organizations to improve productivity, accelerate decision-making, reduce operational complexity, and create measurable business outcomes.",
]

const pullQuote =
  "They need an intelligent operating layer that connects people, knowledge, workflows, and business systems into one unified enterprise ecosystem."

export function WhySanjoy() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="why-sanjoy-heading" className={`${ABOUT_SECTION} bg-background`}>
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
            variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
          >
            <h2 id="why-sanjoy-heading" className="text-heading-xl">
              Why Sanjoy Exists
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
            variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
          >
            {paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                className="text-body-lg"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.blockquote
          className={ABOUT_GAP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
          variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface px-7 py-8 shadow-premium sm:px-10 sm:py-10 lg:px-12">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-muted/50 blur-3xl"
              aria-hidden="true"
            />
            <p className="relative border-l-2 border-brand/40 pl-6 text-xl font-medium leading-9 tracking-[-0.03em] text-foreground sm:pl-8 sm:text-2xl sm:leading-10">
              &ldquo;{pullQuote}&rdquo;
            </p>
          </div>
        </motion.blockquote>
      </div>
    </section>
  )
}
