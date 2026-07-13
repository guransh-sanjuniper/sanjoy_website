"use client"

import { type KeyboardEvent } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

import { BRAND_LOGOS } from "@/lib/brand-logos"
import {
  flipCardArticleClassName,
  flipCardDefaultLayerClassName,
  flipCardLogoClassName,
  flipCardMobilePanelClassName,
  flipCardOverlayClassName,
  flipCardTopLineClassName,
} from "@/lib/flip-card-classes"
import { SECTION_IDS } from "@/lib/site-navigation"
import { useFlipCardGroup } from "@/lib/use-flip-card-group"

type Product = {
  name: string
  description: string
  hoverDetail: string
  logo: string
  id: string
  tabletClassName: string
}

const products: Product[] = [
  {
    name: "Sanjoy OS",
    description:
      "Enterprise AI operating system for deploying, managing, and scaling AI.",
    hoverDetail:
      "The enterprise AI operating layer that securely connects knowledge, workflows, and business systems. Deploy, manage, and scale AI across your organization from one unified platform.",
    logo: BRAND_LOGOS.os,
    id: "sanjoy-os",
    tabletClassName: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Sanjoy Sales",
    description:
      "AI Sales System for conversational engagement and lead qualification.",
    hoverDetail:
      "An AI-powered sales platform that improves lead qualification, customer engagement, and sales productivity. Equip teams with intelligent insights to close opportunities faster.",
    logo: BRAND_LOGOS.sales,
    id: "sanjoy-sales",
    tabletClassName: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Sanjoy Engage",
    description:
      "Enterprise intelligence platform for customer and revenue insights.",
    hoverDetail:
      "Deliver personalized customer interactions using enterprise knowledge and AI-driven conversations. Improve response quality, engagement, and revenue opportunities across every channel.",
    logo: BRAND_LOGOS.engage,
    id: "sanjoy-engage",
    tabletClassName: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Sanjoy HR",
    description:
      "Conversational AI platform for HR operations and employee support.",
    hoverDetail:
      "An intelligent HR platform that streamlines employee support, knowledge access, and everyday HR operations through secure conversational AI and workflow automation.",
    logo: BRAND_LOGOS.hr,
    id: "sanjoy-hr",
    tabletClassName: "md:col-start-2 md:col-span-2 lg:col-start-auto lg:col-span-1",
  },
  {
    name: "Sanjoy Sales Trainer",
    description:
      "AI voice-based coaching and continuous sales training at scale.",
    hoverDetail:
      "A voice-based AI coaching platform that helps sales teams practice conversations, receive instant feedback, and build confidence through continuous, scalable training.",
    logo: BRAND_LOGOS.trainer,
    id: "sanjoy-sales-trainer",
    tabletClassName: "md:col-span-2 lg:col-span-1",
  },
]

type ProductCardProps = Product & {
  index: number
  shouldReduceMotion: boolean | null
  isFlipActive: boolean
  isCoarsePointer: boolean
  onFlipToggle: () => void
}

function ProductCard({
  name,
  description,
  hoverDetail,
  logo,
  id,
  tabletClassName,
  index,
  shouldReduceMotion,
  isFlipActive,
  isCoarsePointer,
  onFlipToggle,
}: ProductCardProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!isCoarsePointer) return

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onFlipToggle()
    }
  }

  return (
    <motion.li
      className={`list-none ${tabletClassName}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <article
        id={id}
        data-flip-card
        data-flip-active={isFlipActive || undefined}
        tabIndex={0}
        className={flipCardArticleClassName(
          isFlipActive,
          "h-full scroll-mt-28 bg-surface-subtle shadow-xs"
        )}
        onClick={() => {
          if (isCoarsePointer) onFlipToggle()
        }}
        onKeyDown={handleKeyDown}
      >
        <span className={flipCardTopLineClassName(isFlipActive)} aria-hidden="true" />

        <div className={flipCardDefaultLayerClassName(isFlipActive)}>
          <div className={flipCardLogoClassName()}>
            <Image
              src={logo}
              alt={`${name} logo`}
              width={320}
              height={96}
              loading="lazy"
              className="h-20 w-44 max-w-full object-contain object-center"
            />
          </div>

          <h3 className="mt-5 text-base font-semibold tracking-[-0.03em] text-foreground">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        <div
          className={flipCardOverlayClassName(
            isFlipActive,
            "bg-surface-subtle/96"
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Overview
          </p>
          <p className="mt-4 text-sm leading-6 text-foreground">{hoverDetail}</p>
        </div>

        <div className={flipCardMobilePanelClassName()}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Overview
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {hoverDetail}
          </p>
        </div>
      </article>
    </motion.li>
  )
}

function EcosystemConnectionLine() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-4 top-[42%] hidden h-20 w-[calc(100%-2rem)] -translate-y-1/2 lg:block xl:inset-x-6"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M 4 11 Q 27 6, 50 10 T 96 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.35"
        className="text-border/80"
      />
      {[4, 27, 50, 73, 96].map((x) => (
        <circle key={x} cx={x} cy={x === 50 ? 10 : 11} r="0.75" className="fill-brand/35" />
      ))}
    </svg>
  )
}

export function ProductEcosystemSection() {
  const shouldReduceMotion = useReducedMotion()
  const { isCoarsePointer, toggleCard, isCardActive } = useFlipCardGroup()

  return (
    <section
      id={SECTION_IDS.products}
      aria-labelledby="product-ecosystem-heading"
      className="section-lg section-band-white scroll-mt-20"
    >
      <div className="container-page">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 id="product-ecosystem-heading" className="text-heading-xl">
            One Platform. Five Intelligent Systems.
          </h2>
          <p className="mt-6 text-body-lg max-md:mt-4">
            Each product solves a specific business challenge while working
            together as one ecosystem.
          </p>
        </motion.header>

        <div className="section-content-gap relative">
          <EcosystemConnectionLine />

          <ul className="relative grid grid-cols-1 gap-5 max-md:mx-auto max-md:max-w-none max-md:gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-4 xl:gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                {...product}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
                isCoarsePointer={isCoarsePointer}
                isFlipActive={isCardActive(product.id)}
                onFlipToggle={() => toggleCard(product.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
