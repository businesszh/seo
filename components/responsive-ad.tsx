"use client"

import { useEffect } from "react"

interface ResponsiveAdProps {
  adSlot: string
  className?: string
}

export function ResponsiveAd({ adSlot, className = "" }: ResponsiveAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  return (
    <div className={`ad-container my-8 ${className}`}>
      <div className="text-center text-xs text-gray-500 mb-2">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1101436038151360"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
