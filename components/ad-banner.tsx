"use client"

import { useEffect } from "react"

interface AdBannerProps {
  adSlot: string
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal"
  fullWidthResponsive?: boolean
  className?: string
}

export function AdBanner({ adSlot, adFormat = "auto", fullWidthResponsive = true, className = "" }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1101436038151360"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  )
}
