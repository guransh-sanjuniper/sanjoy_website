import type { Metadata } from "next"

import { BusinessChallenges } from "@/components/site/BusinessChallenges"
import { FinalCTASection } from "@/components/site/FinalCTASection"
import { Footer } from "@/components/site/Footer"
import { Hero } from "@/components/site/Hero"
import { IndustriesSection } from "@/components/site/IndustriesSection"
import { Navbar } from "@/components/site/Navbar"
import { PilotSection } from "@/components/site/PilotSection"
import { ProductEcosystemSection } from "@/components/site/ProductEcosystemSection"
import { JsonLd } from "@/components/seo/JsonLd"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
} from "@/lib/site-config"
import { webPageSchema } from "@/lib/seo/json-ld"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = createPageMetadata({
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  path: "/",
  keywords: [
    ...DEFAULT_KEYWORDS,
    "increase revenue with AI",
    "reduce costs with AI",
    "improve productivity with AI",
    "enterprise AI ecosystem",
  ],
})

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: DEFAULT_TITLE,
          description: DEFAULT_DESCRIPTION,
          path: "/",
        })}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <BusinessChallenges />
        <ProductEcosystemSection />
        <IndustriesSection />
        <PilotSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
