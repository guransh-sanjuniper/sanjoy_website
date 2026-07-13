import Image from "next/image"
import Link from "next/link"

import { BRAND_LOGOS } from "@/lib/brand-logos"
import { cn } from "@/lib/utils"

type SanjoyLogoProps = {
  className?: string
  href?: string
  priority?: boolean
}

export function SanjoyLogo({
  className,
  href = "/",
  priority = false,
}: SanjoyLogoProps) {
  const logo = (
    <Image
      src={BRAND_LOGOS.main}
      alt="Sanjoy enterprise AI infrastructure logo"
      width={148}
      height={40}
      priority={priority}
      unoptimized
      className={cn("h-8 w-auto", className)}
    />
  )

  if (!href) {
    return logo
  }

  return (
    <Link
      href={href}
      className="inline-flex rounded-xl outline-none transition-opacity hover:opacity-80 focus-visible:ring-3 focus-visible:ring-ring/20"
      aria-label="Sanjoy home"
    >
      {logo}
    </Link>
  )
}
