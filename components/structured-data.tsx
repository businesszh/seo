import Script from "next/script"

interface StructuredDataProps {
  type: "WebSite" | "WebPage" | "Article" | "Service" | "Organization"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

// Website Schema
export function WebsiteSchema() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: "Buzz Cut For Everyone",
        description: "AI-powered buzz cut design studio with professional styling services",
        url: "https://www.aibuzzcut.shop",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.aibuzzcut.shop/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: "Buzz Cut For Everyone",
          url: "https://www.aibuzzcut.shop",
          logo: {
            "@type": "ImageObject",
            url: "https://www.aibuzzcut.shop/logo.png",
          },
        },
      }}
    />
  )
}

// Organization Schema
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: "Buzz Cut For Everyone",
        description: "Professional AI-powered buzz cut design studio",
        url: "https://www.aibuzzcut.shop",
        logo: "https://www.aibuzzcut.shop/logo.png",
        image: "https://www.aibuzzcut.shop/logo.png",
        telephone: "+1-555-123-4567",
        email: "businesshow123@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Style Street",
          addressLocality: "Hair City",
          addressRegion: "HC",
          postalCode: "12345",
          addressCountry: "US",
        },
        sameAs: ["https://t.me/paumala"],
        serviceArea: {
          "@type": "Place",
          name: "Worldwide",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Buzz Cut Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Hair Consultation",
                description: "Free AI-powered buzz cut consultation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Buzz Cut",
                description: "Professional buzz cut styling service",
              },
            },
          ],
        },
      }}
    />
  )
}

// Service Schema
export function ServiceSchema() {
  return (
    <StructuredData
      type="Service"
      data={{
        name: "AI Buzz Cut Design",
        description: "AI-powered personalized buzz cut design and consultation service",
        provider: {
          "@type": "Organization",
          name: "Buzz Cut For Everyone",
          url: "https://www.aibuzzcut.shop",
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Buzz Cut Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Hair Consultation",
                description: "Free AI-powered buzz cut style consultation",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Buzz Cut",
                description: "Professional buzz cut styling service",
                offers: {
                  "@type": "Offer",
                  price: "25",
                  priceCurrency: "USD",
                },
              },
            },
          ],
        },
      }}
    />
  )
}
