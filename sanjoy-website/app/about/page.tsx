import type { Metadata } from "next"

import { AboutCTA } from "@/components/site/about/AboutCTA"
import { AboutHero } from "@/components/site/about/AboutHero"
import { AboutSanJuniper } from "@/components/site/about/AboutSanJuniper"
import { Principles } from "@/components/site/about/Principles"
import { Vision } from "@/components/site/about/Vision"
import { WhatIsSanjoy } from "@/components/site/about/WhatIsSanjoy"
import { WhySanjoy } from "@/components/site/about/WhySanjoy"
import { Footer } from "@/components/site/Footer"
import { Navbar } from "@/components/site/Navbar"
import { JsonLd } from "@/components/seo/JsonLd"
import { webPageSchema } from "@/lib/seo/json-ld"
import { createPageMetadata } from "@/lib/seo/metadata"

const PAGE_TITLE = "About"
const PAGE_DESCRIPTION =
  "Sanjoy is an enterprise AI platform built on long-term infrastructure, responsible deployment, and business transformation."

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/about",
  keywords: [
    "about Sanjoy",
    "enterprise AI company",
    "San Juniper",
    "responsible AI deployment",
    "AI infrastructure group",
    "business transformation",
  ],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: `${PAGE_TITLE} | Sanjoy`,
          description: PAGE_DESCRIPTION,
          path: "/about",
        })}
      />
      <Navbar />
      <main id="main-content" className="overflow-x-clip">
        <AboutHero />
        <WhySanjoy />
        <WhatIsSanjoy />
        <Vision />
        <AboutSanJuniper />
        <Principles />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
