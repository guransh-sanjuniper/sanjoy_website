import {
  DEFAULT_DESCRIPTION,
  ORGANIZATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site-config"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${ORGANIZATION.logoPath}`,
    description: DEFAULT_DESCRIPTION,
    sameAs: ORGANIZATION.sameAs,
    parentOrganization: {
      "@type": "Organization",
      name: ORGANIZATION.parentOrganization,
    },
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${ORGANIZATION.logoPath}`,
      },
    },
  }
}

type WebPageSchemaOptions = {
  name: string
  description: string
  path: string
}

export function webPageSchema({ name, description, path }: WebPageSchemaOptions) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  }
}
