"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  aboutMotion,
  aboutStaggerContainer,
  aboutStaggerItem,
  ABOUT_GAP,
  ABOUT_SECTION,
} from "@/lib/about-motion"

const platformBenefits = [
  "Connect enterprise knowledge",
  "Automate business workflows",
  "Improve decision-making",
  "Enhance customer engagement",
  "Empower employees with AI",
  "Scale AI adoption securely across the enterprise",
]

const ecosystemProducts = [
  "Sanjoy OS",
  "Sanjoy Sales",
  "Sanjoy Engage",
  "Sanjoy HR",
  "Sanjoy Sales Trainer",
]

export function WhatIsSanjoy() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="what-is-sanjoy-heading"
      className={`${ABOUT_SECTION} border-y border-border/40 bg-surface`}
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
            variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
          >
            <motion.h2
              id="what-is-sanjoy-heading"
              className="text-heading-xl"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              What is Sanjoy?
            </motion.h2>
            <motion.p
              className="mt-5 text-body-lg"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              Sanjoy is an Enterprise AI Platform designed to become the operating
              layer of modern organizations.
            </motion.p>
            <motion.p
              className="mt-4 text-body-lg"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              Rather than offering isolated AI tools, Sanjoy provides an integrated
              ecosystem of intelligent systems that work together to support every
              business function.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
            variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-subtle"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              The platform helps organizations
            </motion.p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {platformBenefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3 text-body"
                  variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
                >
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  {benefit}
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-6 text-body-lg"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              Every product within the Sanjoy ecosystem is designed to operate
              independently while becoming significantly more powerful when deployed
              together.
            </motion.p>
          </motion.div>
        </div>

        <motion.ul
          className={`${ABOUT_GAP} grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
          variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
        >
          {ecosystemProducts.map((name) => (
            <motion.li
              key={name}
              className="list-none"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              <article className="group relative flex h-full min-h-[5.5rem] items-center justify-center rounded-2xl border border-border bg-background px-5 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md sm:min-h-[6rem] sm:px-6">
                <span
                  className="absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-6"
                  aria-hidden="true"
                />
                <h3 className="w-full text-base font-semibold leading-snug tracking-[-0.03em] text-foreground">
                  {name}
                </h3>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
