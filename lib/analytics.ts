// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: "config" | "event" | "js" | "set", targetId: string | Date, config?: Record<string, any>) => void
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-6PRLCYKK48", {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track AI Designer usage
export const trackAIDesignerEvent = (action: string, details?: Record<string, any>) => {
  event({
    action,
    category: "AI Designer",
    label: details?.style_name || "unknown",
    value: details?.processing_time || undefined,
  })
}

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  event({
    action: "form_submit",
    category: "Contact",
    label: formType,
  })
}

// Track blog engagement
export const trackBlogEngagement = (action: string, articleTitle: string) => {
  event({
    action,
    category: "Blog",
    label: articleTitle,
  })
}

// Track navigation
export const trackNavigation = (destination: string) => {
  event({
    action: "navigation",
    category: "User Interaction",
    label: destination,
  })
}
