import type { Metadata } from "next"

import { DiscoverySessionPage } from "@/components/site/DiscoverySessionPage"
import { Footer } from "@/components/site/Footer"
import { Navbar } from "@/components/site/Navbar"
import { JsonLd } from "@/components/seo/JsonLd"
import { webPageSchema } from "@/lib/seo/json-ld"
import { createPageMetadata } from "@/lib/seo/metadata"

const PAGE_TITLE = "Book Discovery Session"
const PAGE_DESCRIPTION =
  "Begin your enterprise AI journey. Book a discovery conversation to identify where AI can create measurable business value across your organization."

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/book-discovery",
  keywords: [
    "book discovery session",
    "enterprise AI consultation",
    "AI business assessment",
    "AI pilot program",
    "Sanjoy discovery call",
  ],
})

export default function BookDiscoveryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: `${PAGE_TITLE} | Sanjoy`,
          description: PAGE_DESCRIPTION,
          path: "/book-discovery",
        })}
      />
      <Navbar />
      <main id="main-content">
        <DiscoverySessionPage />
      </main>
      <Footer />
    </>
  )
}
