"use client"

import { motion, useReducedMotion } from "framer-motion"

import { HeroActions } from "@/components/site/HeroActions"
import { HeroBackground } from "@/components/site/HeroBackground"
import { HeroDiagram } from "@/components/site/HeroDiagram"
import { HeroStats } from "@/components/site/HeroStats"

import { SECTION_IDS } from "@/lib/site-navigation"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={SECTION_IDS.hero}
      aria-labelledby="hero-heading"
      className="section-band-white relative isolate flex scroll-mt-20 min-h-[calc(100svh-5rem)] overflow-x-clip lg:h-[min(calc(100svh-5rem),900px)] lg:min-h-0"
    >
      <HeroBackground />

      <div className="container-page grid w-full items-center justify-items-center gap-hero-gap py-11 sm:py-14 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:justify-items-stretch lg:gap-hero-gap lg:py-[1.4rem] xl:gap-[4.2rem]">
        <div className="flex w-full max-w-4xl flex-col items-center self-center text-center lg:items-start lg:justify-self-start lg:text-left">
          <motion.p
            className="text-eyebrow text-brand"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Enterprise AI Infrastructure
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="mt-7 max-w-[11ch] text-[3.1875rem] leading-[0.92] font-semibold tracking-[-0.075em] text-foreground sm:text-[3.825rem] lg:text-[5.1rem]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="block">One intelligent platform.</span>
            <span className="block">Every department.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            Sanjoy helps organizations increase revenue, reduce costs, and
            improve productivity by making AI the operating layer across every
            department.
          </motion.p>

          <div className="mt-8 flex w-full justify-start text-left sm:justify-center sm:text-center lg:justify-start lg:text-left">
            <HeroStats />
          </div>

          <div className="mt-10 flex w-full justify-center lg:justify-start">
            <HeroActions />
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center justify-self-center self-center overflow-visible md:max-w-[26rem] lg:mx-0 lg:max-w-[32rem] lg:justify-self-end xl:max-w-[34rem]">
          <HeroDiagram />
        </div>
      </div>
    </section>
  )
}
