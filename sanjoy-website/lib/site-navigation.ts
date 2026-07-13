export const SECTION_IDS = {
  hero: "hero",
  challenges: "challenges",
  products: "products",
  industries: "industries",
  pilot: "pilot",
  discovery: "discovery",
  contact: "contact",
} as const

export const homeHref = "/" as const
export const aboutHref = "/about" as const

export const mainNavigation = [
  { label: "Home", href: `/#${SECTION_IDS.hero}` },
  { label: "Challenges", href: `/#${SECTION_IDS.challenges}` },
  { label: "Products", href: `/#${SECTION_IDS.products}` },
  { label: "Industries", href: `/#${SECTION_IDS.industries}` },
  { label: "Pilot", href: `/#${SECTION_IDS.pilot}` },
  { label: "About", href: aboutHref },
] as const

export const productNavigation = [
  { label: "Sanjoy OS", href: "/#sanjoy-os" },
  { label: "Sanjoy Sales", href: "/#sanjoy-sales" },
  { label: "Sanjoy Engage", href: "/#sanjoy-engage" },
  { label: "Sanjoy HR", href: "/#sanjoy-hr" },
  { label: "Sanjoy Sales Trainer", href: "/#sanjoy-sales-trainer" },
] as const

export const discoveryHref = "/book-discovery"
export const contactHref = `/#${SECTION_IDS.contact}`
export const productsHref = `/#${SECTION_IDS.products}`
