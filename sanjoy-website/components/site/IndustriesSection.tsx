"use client"

import type { KeyboardEvent } from "react"
import type { LucideIcon } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
} from "lucide-react"

import {
  flipCardArticleClassName,
  flipCardDefaultLayerClassName,
  flipCardMobilePanelClassName,
  flipCardOverlayClassName,
  flipCardTopLineClassName,
} from "@/lib/flip-card-classes"
import { SECTION_IDS } from "@/lib/site-navigation"
import { useFlipCardGroup } from "@/lib/use-flip-card-group"

type Industry = {
  name: string
  description: string
  icon: LucideIcon
  useCases: [string, string]
}

const industries: Industry[] = [
  {
    name: "Healthcare",
    description: "Support patients, staff, and operations with governed AI.",
    icon: HeartPulse,
    useCases: [
      "Respond to patient inquiries with consistent, accurate information.",
      "Give clinical and admin teams faster access to policies and knowledge.",
    ],
  },
  {
    name: "Hospitality",
    description: "Turn guest interest into bookings and exceptional experiences.",
    icon: Hotel,
    useCases: [
      "Convert guest inquiries into qualified booking opportunities.",
      "Deliver 24/7 conversational support across digital channels.",
    ],
  },
  {
    name: "Manufacturing",
    description: "Connect teams, knowledge, and operations at enterprise scale.",
    icon: Factory,
    useCases: [
      "Unify knowledge across production and operational teams.",
      "Surface intelligence from fragmented operational and customer data.",
    ],
  },
  {
    name: "Retail",
    description: "Engage customers and coach sales teams with consistency.",
    icon: ShoppingBag,
    useCases: [
      "Qualify customer inquiries and prioritize high-intent buyers.",
      "Train sales teams with repeatable, voice-based coaching.",
    ],
  },
  {
    name: "Education",
    description: "Scale engagement for students, families, and staff.",
    icon: GraduationCap,
    useCases: [
      "Handle enrollment and inquiry conversations around the clock.",
      "Automate repetitive HR and staff support questions.",
    ],
  },
  {
    name: "Finance",
    description: "Improve intelligence, governance, and client engagement.",
    icon: Landmark,
    useCases: [
      "Identify revenue leaks and stalled opportunities earlier.",
      "Deploy governed AI across regulated teams and workflows.",
    ],
  },
]

type IndustryTileProps = Industry & {
  index: number
  shouldReduceMotion: boolean | null
  isFlipActive: boolean
  isCoarsePointer: boolean
  onFlipToggle: () => void
}

function IndustryTile({
  name,
  description,
  icon: Icon,
  useCases,
  index,
  shouldReduceMotion,
  isFlipActive,
  isCoarsePointer,
  onFlipToggle,
}: IndustryTileProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!isCoarsePointer) return

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onFlipToggle()
    }
  }

  return (
    <motion.li
      className="list-none"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.07,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <article
        data-flip-card
        data-flip-active={isFlipActive || undefined}
        tabIndex={0}
        className={flipCardArticleClassName(isFlipActive, "bg-surface shadow-sm")}
        onClick={() => {
          if (isCoarsePointer) onFlipToggle()
        }}
        onKeyDown={handleKeyDown}
      >
        <span className={flipCardTopLineClassName(isFlipActive)} aria-hidden="true" />

        <div className={flipCardDefaultLayerClassName(isFlipActive)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-foreground">
            <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-base font-semibold tracking-[-0.03em] text-foreground">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>

        <div className={flipCardOverlayClassName(isFlipActive, "bg-surface/96")}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            AI Use Cases
          </p>
          <ul className="mt-4 space-y-3" aria-label={`${name} AI use cases`}>
            {useCases.map((useCase) => (
              <li
                key={useCase}
                className="flex items-start gap-2.5 text-sm leading-6 text-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        <div className={flipCardMobilePanelClassName()}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            AI Use Cases
          </p>
          <ul className="mt-3 space-y-2.5">
            {useCases.map((useCase) => (
              <li
                key={`mobile-${useCase}`}
                className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.li>
  )
}

export function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion()
  const { isCoarsePointer, toggleCard, isCardActive } = useFlipCardGroup()

  return (
    <section
      id={SECTION_IDS.industries}
      aria-labelledby="industries-heading"
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
          <h2 id="industries-heading" className="text-heading-xl">
            Built For Every Enterprise.
          </h2>
          <p className="mt-6 text-body-lg">
            One platform. Adapted to every industry.
          </p>
        </motion.header>

        <ul className="section-content-gap grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {industries.map((industry, index) => (
            <IndustryTile
              key={industry.name}
              {...industry}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              isCoarsePointer={isCoarsePointer}
              isFlipActive={isCardActive(industry.name)}
              onFlipToggle={() => toggleCard(industry.name)}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
