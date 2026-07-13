"use client"

import { motion, useReducedMotion } from "framer-motion"

import { HeroBackground } from "@/components/site/HeroBackground"
import {
  aboutMotion,
  aboutReveal,
  ABOUT_SECTION_HERO,
} from "@/lib/about-motion"

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="about-hero-heading"
      className={`section-band-white relative isolate overflow-hidden ${ABOUT_SECTION_HERO}`}
    >
      <HeroBackground />

      <div className="container-page section-lg">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={
            shouldReduceMotion
              ? undefined
              : {
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
                  },
                }
          }
        >
          <motion.p
            className="text-eyebrow text-brand"
            variants={aboutMotion(shouldReduceMotion, aboutReveal)}
          >
            About Sanjoy
          </motion.p>

          <motion.h1
            id="about-hero-heading"
            className="mt-6 text-display-lg text-balance sm:mt-7"
            variants={aboutMotion(shouldReduceMotion, aboutReveal)}
          >
            Building Enterprise AI That Lasts.
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-body-lg sm:mt-7"
            variants={aboutMotion(shouldReduceMotion, aboutReveal)}
          >
            Sanjoy helps organizations adopt artificial intelligence responsibly
            by creating one intelligent operating layer that connects people,
            knowledge, and business systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
