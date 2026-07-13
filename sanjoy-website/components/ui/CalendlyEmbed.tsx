"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Script from "next/script"

import { cn } from "@/lib/utils"

const CALENDLY_SCRIPT_URL =
  "https://assets.calendly.com/assets/external/widget.js"
const CALENDLY_CSS_URL =
  "https://assets.calendly.com/assets/external/widget.css"
const CALENDLY_CSS_ID = "calendly-widget-css"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        prefill?: Record<string, string>
        utm?: Record<string, string>
        resize?: boolean
      }) => void
    }
  }
}

type CalendlyEmbedProps = {
  url: string
  className?: string
  title?: string
}

function CalendlySkeleton() {
  return (
    <div className="flex h-full flex-col p-5 sm:p-6 lg:p-8">
      <div className="space-y-3">
        <div className="h-5 w-2/5 animate-pulse rounded-lg bg-foreground/[0.06]" />
        <div className="h-4 w-3/5 animate-pulse rounded-md bg-foreground/[0.04]" />
      </div>

      <div className="mt-8 grid flex-1 grid-cols-7 gap-2 sm:gap-2.5">
        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "aspect-square rounded-lg bg-foreground/[0.04] animate-pulse",
              index < 7 && "bg-foreground/[0.06]"
            )}
            style={{ animationDelay: `${(index % 7) * 40}ms` }}
          />
        ))}
      </div>

      <div className="mt-6 space-y-2.5">
        <div className="h-4 w-1/3 animate-pulse rounded-md bg-foreground/[0.05]" />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 animate-pulse rounded-xl bg-foreground/[0.04]"
              style={{ animationDelay: `${index * 60}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ensureCalendlyStyles() {
  if (document.getElementById(CALENDLY_CSS_ID)) {
    return
  }

  const link = document.createElement("link")
  link.id = CALENDLY_CSS_ID
  link.rel = "stylesheet"
  link.href = CALENDLY_CSS_URL
  document.head.appendChild(link)
}

export function CalendlyEmbed({
  url,
  className,
  title = "Schedule a discovery call",
}: CalendlyEmbedProps) {
  const widgetRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [scriptReady, setScriptReady] = useState(
    () => typeof window !== "undefined" && Boolean(window.Calendly)
  )

  const initWidget = useCallback(() => {
    const parentElement = widgetRef.current

    if (!parentElement || !window.Calendly) {
      return
    }

    parentElement.replaceChildren()

    window.Calendly.initInlineWidget({
      url,
      parentElement,
      resize: false,
    })

    const markLoaded = () => setIsReady(true)

    const iframe = parentElement.querySelector("iframe")
    if (iframe) {
      iframe.addEventListener("load", markLoaded, { once: true })
      return
    }

    const observer = new MutationObserver(() => {
      const nextIframe = parentElement.querySelector("iframe")
      if (!nextIframe) {
        return
      }

      nextIframe.addEventListener("load", markLoaded, { once: true })
      observer.disconnect()
    })

    observer.observe(parentElement, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [url])

  useEffect(() => {
    ensureCalendlyStyles()
  }, [])

  useEffect(() => {
    if (!scriptReady) {
      return
    }

    const cleanup = initWidget()
    const fallbackTimer = window.setTimeout(() => {
      setIsReady(true)
    }, 8000)

    return () => {
      cleanup?.()
      window.clearTimeout(fallbackTimer)
    }
  }, [scriptReady, initWidget])

  const handleScriptReady = useCallback(() => {
    setScriptReady(true)
  }, [])

  return (
    <>
      <Script
        id="calendly-widget-script"
        src={CALENDLY_SCRIPT_URL}
        strategy="afterInteractive"
        onLoad={handleScriptReady}
        onReady={handleScriptReady}
      />

      <div
        className={cn(
          "relative w-full max-w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-premium",
          "h-[720px] min-h-[720px] md:h-[760px] md:min-h-[760px] lg:h-[780px] lg:min-h-[780px] xl:h-[800px] xl:min-h-[800px]",
          className
        )}
        aria-busy={!isReady}
        aria-label={title}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 bg-surface transition-opacity duration-500 ease-out",
            isReady ? "opacity-0" : "opacity-100"
          )}
          aria-hidden={isReady}
        >
          <CalendlySkeleton />
        </div>

        <div
          ref={widgetRef}
          className={cn(
            "h-full w-full min-w-0 transition-opacity duration-500 ease-out",
            "[&_.calendly-inline-widget]:!min-w-0 [&_.calendly-inline-widget]:h-full [&_.calendly-inline-widget]:w-full",
            "[&_iframe]:!min-w-0 [&_iframe]:h-full [&_iframe]:w-full",
            isReady ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </>
  )
}
