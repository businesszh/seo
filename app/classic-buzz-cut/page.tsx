import type { Metadata } from "next"
import Link from "next/link"
import { Scissors, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { InternalLinks } from "@/components/internal-links"

export const metadata: Metadata = {
  title: "Classic Buzz Cut Styles - Traditional Short Hair Cuts | Buzz Cut For Everyone",
  description:
    "Discover timeless classic buzz cut styles. From military cuts to traditional short hair, find the perfect classic buzz cut for your style.",
  keywords: "classic buzz cut, traditional buzz cut, military buzz cut, short classic haircut, traditional hair styles",
  alternates: {
    canonical: "https://www.aibuzzcut.shop/classic-buzz-cut",
  },
  openGraph: {
    title: "Classic Buzz Cut Styles - Traditional Short Hair Cuts",
    description: "Discover timeless classic buzz cut styles. From military cuts to traditional short hair.",
    url: "https://www.aibuzzcut.shop/classic-buzz-cut",
    siteName: "Buzz Cut For Everyone",
    images: [
      {
        url: "https://www.aibuzzcut.shop/barber-cutting-hair.png",
        width: 1200,
        height: 630,
        alt: "Classic Buzz Cut Styles - Professional Traditional Haircuts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function ClassicBuzzCutPage() {
  const parentLinks = [
    {
      text: "Buzz Cut",
      href: "/",
      description: "Explore all buzz cut styles and variations",
    },
  ]

  const childLinks = [
    {
      text: "Short Classic Buzz Cut",
      href: "/classic-buzz-cut/short-classic-buzz-cut",
      description: "Ultra-short traditional buzz cut styles",
    },
    {
      text: "Long Classic Buzz Cut",
      href: "/classic-buzz-cut/long-classic-buzz-cut",
      description: "Longer traditional buzz cut variations",
    },
  ]

  const siblingLinks = [
    {
      text: "Modern Buzz Cut",
      href: "/modern-buzz-cut",
      description: "Contemporary buzz cut styles",
    },
    {
      text: "Artistic Buzz Cut",
      href: "/artistic-buzz-cut",
      description: "Creative and artistic buzz cut designs",
    },
    {
      text: "AI Buzz Cut",
      href: "/ai-designer",
      description: "AI-powered buzz cut recommendations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-gray-500 text-white border-0 shadow-lg">
            <Star className="h-3 w-3 mr-1" />
            Traditional Styles
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-clip-text text-transparent">
              Classic Buzz Cut
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover timeless{" "}
            <Link href="/" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              buzz cut
            </Link>{" "}
            styles. Classic designs that never go out of style, perfect for any occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
            <Link href="/classic-buzz-cut/short-classic-buzz-cut">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-gray-700 text-white"
              >
                <Scissors className="h-4 w-4 mr-2" />
                Short Classic Styles
              </Button>
            </Link>
            <Link href="/classic-buzz-cut/long-classic-buzz-cut">
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500">
                Long Classic Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/barber-cutting-hair.png"
                alt="Professional barber creating classic buzz cut"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Professional Classic Buzz Cut Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience the precision and expertise of professional{" "}
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  buzz cut
                </Link>{" "}
                styling. Our skilled barbers use traditional techniques combined with modern precision.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Short Classic Buzz Cut</h2>
              <p className="text-gray-600 mb-6">
                The foundation of all{" "}
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  buzz cut
                </Link>{" "}
                styles. Short classic cuts offer clean, professional looks perfect for business and formal settings.
              </p>
              <Link href="/classic-buzz-cut/short-classic-buzz-cut">
                <Button className="bg-blue-600 hover:bg-blue-700">Explore Short Styles</Button>
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Long Classic Buzz Cut</h2>
              <p className="text-gray-600 mb-6">
                Extended classic{" "}
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  buzz cut
                </Link>{" "}
                variations that provide more versatility while maintaining the traditional aesthetic.
              </p>
              <Link href="/classic-buzz-cut/long-classic-buzz-cut">
                <Button className="bg-blue-600 hover:bg-blue-700">Explore Long Styles</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        currentPage="Classic Buzz Cut"
        parentLinks={parentLinks}
        childLinks={childLinks}
        siblingLinks={siblingLinks}
      />
    </div>
  )
}
