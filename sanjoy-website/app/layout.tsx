import type { Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { JsonLd } from "@/components/seo/JsonLd"
import { organizationSchema, websiteSchema } from "@/lib/seo/json-ld"
import { rootMetadata, THEME_COLOR } from "@/lib/seo/metadata"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata = rootMetadata

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  )
}
