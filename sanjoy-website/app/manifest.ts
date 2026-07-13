import type { MetadataRoute } from "next"

import {
  BACKGROUND_COLOR,
  DEFAULT_DESCRIPTION,
  FAVICON,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  THEME_COLOR,
} from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    lang: "en",
    dir: "ltr",
    orientation: "portrait-primary",
    icons: [
      {
        src: FAVICON.png192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: FAVICON.png512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: FAVICON.png512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    id: SITE_URL,
  }
}
