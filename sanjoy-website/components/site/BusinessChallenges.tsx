"use client"

import type { LucideIcon } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Clock,
  Layers,
  Puzzle,
  Repeat,
  TrendingDown,
  Users,
} from "lucide-react"

import { SECTION_IDS } from "@/lib/site-navigation"

type Challenge = {
  title: string
  description: string
  icon: LucideIcon
}

const challenges: Challenge[] = [
  {
    title: "Lost Revenue",
    description: "Leads go unconverted and revenue opportunities slip away.",
    icon: TrendingDown,
  },
  {
    title: "Knowledge Silos",
    description: "Critical information stays trapped in departments and systems.",
    icon: Layers,
  },
  {
    title: "Manual Processes",
    description: "Teams repeat the same work instead of focusing on growth.",
    icon: Repeat,
  },
  {
    title: "Disconnected Teams",
    description: "Departments operate in isolation without shared intelligence.",
    icon: Users,
  },
  {
    title: "Slow Customer Response",
    description: "Customers wait too long for answers that should be immediate.",
    icon: Clock,
  },
  {
    title: "AI Adoption Complexity",
    description: "Tools, pilots, and subscriptions add cost without clarity.",
    icon: Puzzle,
  },
]

type ChallengeCardProps = Challenge & {
  index: number
  shouldReduceMotion: boolean | null
}

function ChallengeCard({
  title,
  description,
  icon: Icon,
  index,
  shouldReduceMotion,
}: ChallengeCardProps) {
  return (
    <motion.li
      className="list-none"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <article className="group relative h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md max-md:p-5 sm:p-7">
        <span
          className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
          aria-hidden="true"
        />
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-muted text-foreground">
          <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </article>
    </motion.li>
  )
}

export function BusinessChallenges() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={SECTION_IDS.challenges}
      aria-labelledby="business-challenges-heading"
      className="section-lg section-band-subtle scroll-mt-20"
    >
      <div className="container-page">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 id="business-challenges-heading" className="text-heading-xl">
            Every Business Faces The Same Challenges
          </h2>
        </motion.header>

        <ul className="section-content-gap grid grid-cols-1 gap-5 max-md:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge.title}
              {...challenge}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
