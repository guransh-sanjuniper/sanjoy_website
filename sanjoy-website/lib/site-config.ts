export const SITE_NAME = "Sanjoy" as const

export const SITE_SHORT_NAME = "Sanjoy" as const

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sanjoy.com"

export const DEFAULT_TITLE = "Sanjoy | Enterprise AI Infrastructure"

export const DEFAULT_DESCRIPTION =
  "Sanjoy helps organizations increase revenue, reduce costs, and improve productivity with enterprise AI infrastructure."

export const DEFAULT_KEYWORDS = [
  "enterprise AI",
  "AI infrastructure",
  "business AI platform",
  "AI operating layer",
  "Sanjoy OS",
  "Sanjoy Sales",
  "Sanjoy Engage",
  "Sanjoy HR",
  "enterprise AI adoption",
  "business transformation",
] as const

export const SITE_LOCALE = "en_US"

export const THEME_COLOR = "#e84d4d"

export const BACKGROUND_COLOR = "#fafafa"

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: "Sanjoy",
  parentOrganization: "San Juniper",
  logoPath: "/logos/MainSanjoyLogo.svg",
  sameAs: ["https://www.linkedin.com/company/sanjoy"],
} as const

export const FAVICON = {
  png16: "/icons/icon-16.png",
  png32: "/icons/icon-32.png",
  png48: "/icons/icon-48.png",
  png192: "/icons/icon-192.png",
  png512: "/icons/icon-512.png",
  appleTouch: "/icons/apple-touch-icon.png",
  ico: "/favicon.ico",
} as const
