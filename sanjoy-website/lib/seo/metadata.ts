import type { Metadata } from "next"

import {
  BACKGROUND_COLOR,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  FAVICON,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
} from "@/lib/site-config"

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Enterprise AI Infrastructure`,
} as const

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...DEFAULT_KEYWORDS],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: FAVICON.ico, sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: FAVICON.png32, sizes: "32x32", type: "image/png" },
      { url: FAVICON.png192, sizes: "192x192", type: "image/png" },
      { url: FAVICON.png512, sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: FAVICON.appleTouch,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: FAVICON.ico,
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage.url],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  other: {
    "theme-color": THEME_COLOR,
    "msapplication-TileColor": THEME_COLOR,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

type PageMetadataOptions = {
  title: string | { absolute: string }
  description: string
  path: string
  keywords?: string[]
}

function resolveTitle(title: PageMetadataOptions["title"]) {
  return typeof title === "object" ? title.absolute : title
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`
  const url = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`
  const resolvedTitle = resolveTitle(title)

  return {
    title,
    description,
    keywords: keywords ?? [...DEFAULT_KEYWORDS],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [defaultOgImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export { BACKGROUND_COLOR, THEME_COLOR }
