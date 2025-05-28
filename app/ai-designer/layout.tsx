import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Buzz Cut Designer - Personalized Hair Style Recommendations",
  description:
    "Upload your photo and let our AI find the perfect buzz cut style for you. Personalized recommendations for everyone, regardless of face shape or hair type.",
  keywords: "AI buzz cut designer, AI hair design, personalized haircut, buzz cut AI, hair style AI, virtual haircut",
  alternates: {
    canonical: "https://www.aibuzzcut.shop/ai-designer",
  },
  openGraph: {
    title: "AI Buzz Cut Designer - Personalized Hair Style Recommendations",
    description: "Upload your photo and let our AI find the perfect buzz cut style for you.",
    url: "https://www.aibuzzcut.shop/ai-designer",
    siteName: "Buzz Cut For Everyone",
    images: [
      {
        url: "https://www.aibuzzcut.shop/buzz-cut-professional-glasses.png",
        width: 1200,
        height: 630,
        alt: "AI Buzz Cut Designer - Personalized Hair Style Recommendations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function AIDesignerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
