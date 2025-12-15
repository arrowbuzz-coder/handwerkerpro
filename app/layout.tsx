import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-sans" })
const inter = Inter({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Handwerker Pro - Expert Tradespeople at Your Service",
  description:
    "Professional electricians, plumbers, carpenters, mechanics, and painters. Quality craftsmanship, reliable service, and competitive pricing.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo_nav.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_nav.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo_nav.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo_nav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
