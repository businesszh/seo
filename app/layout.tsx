import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { WebsiteSchema, OrganizationSchema } from "@/components/structured-data"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Buzz Cut For Everyone - AI Hair Design Studio",
  description:
    "Experience the future of hair design with AI-powered personalization and expert craftsmanship. Professional buzz cut variations and AI-enhanced styling for everyone.",
  keywords:
    "buzz cut, AI hair design, hair styling, buzz cut styles, AI buzz cut, hair design, professional haircut, geometric hair patterns",
  authors: [{ name: "Buzz Cut For Everyone" }],
  creator: "Buzz Cut For Everyone",
  publisher: "Buzz Cut For Everyone",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Buzz Cut For Everyone - AI Hair Design Studio",
    description: "Experience the future of hair design with AI-powered personalization and expert craftsmanship.",
    url: "https://www.aibuzzcut.shop",
    siteName: "Buzz Cut For Everyone",
    images: [
      {
        url: "https://www.aibuzzcut.shop/logo.png",
        width: 1200,
        height: 630,
        alt: "Buzz Cut For Everyone - AI Hair Design Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz Cut For Everyone - AI Hair Design Studio",
    description: "Experience the future of hair design with AI-powered personalization and expert craftsmanship.",
    images: ["/logo.png"],
    creator: "@buzzcutforeveryone",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code-here",
  },
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.aibuzzcut.shop" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1101436038151360"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <WebsiteSchema />
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6PRLCYKK48" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6PRLCYKK48', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
