import type { Transition, Variants } from "framer-motion"

export const aboutEase: Transition["ease"] = [0.22, 1, 0.36, 1]

export const aboutViewport = {
  once: true,
  margin: "-6% 0px -6% 0px",
} as const

export const aboutStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const aboutStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: aboutEase,
    },
  },
}

export const aboutReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: aboutEase,
    },
  },
}

export function aboutMotion(
  shouldReduceMotion: boolean | null,
  variants: Variants
): Variants {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, scale: 1 },
      visible: { opacity: 1, y: 0, scale: 1 },
    }
  }

  return variants
}

export const ABOUT_SECTION = "about-section scroll-mt-20"
export const ABOUT_SECTION_HERO = "scroll-mt-20"
export const ABOUT_SECTION_CTA = "section-lg scroll-mt-20"
export const ABOUT_GAP = "about-gap"
