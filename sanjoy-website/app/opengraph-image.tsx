import { ImageResponse } from "next/og"

import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/site-config"

export const alt = `${SITE_NAME} — Enterprise AI Infrastructure`

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          backgroundColor: "#fafafa",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(17 17 17 / 0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            borderRadius: "24px",
            border: "1px solid #e8e8e8",
            backgroundColor: "#ffffff",
            padding: "64px 72px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#e84d4d",
            }}
          >
            Enterprise AI Infrastructure
          </p>
          <p
            style={{
              margin: "24px 0 0",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#111111",
              maxWidth: "900px",
            }}
          >
            {SITE_NAME}
          </p>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: 32,
              lineHeight: 1.45,
              color: "#5c5c5c",
              maxWidth: "880px",
            }}
          >
            {DEFAULT_DESCRIPTION}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
