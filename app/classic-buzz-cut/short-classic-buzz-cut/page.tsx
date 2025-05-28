import type { Metadata } from "next"
import Link from "next/link"
import { Scissors, Star, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { InternalLinks } from "@/components/internal-links"

export const metadata: Metadata = {
  title: "Short Classic Buzz Cut Styles - Ultra Short Traditional Haircuts",
  description:
    "Explore short classic buzz cut styles including military cuts, crew cuts, and ultra-short traditional haircuts. Perfect for professional and clean looks.",
  keywords: "short classic buzz cut, military buzz cut, crew cut, ultra short haircut, short traditional buzz cut",
  alternates: {
    canonical: "https://www.aibuzzcut.shop/classic-buzz-cut/short-classic-buzz-cut",
  },
  openGraph: {
    title: "Short Classic Buzz Cut Styles - Ultra Short Traditional Haircuts",
    description:
      "Explore short classic buzz cut styles including military cuts, crew cuts, and ultra-short traditional haircuts.",
    url: "https://www.aibuzzcut.shop/classic-buzz-cut/short-classic-buzz-cut",
    siteName: "Buzz Cut For Everyone",
    images: [
      {
        url: "https://www.aibuzzcut.shop/buzz-cut-man-portrait.png",
        width: 1200,
        height: 630,
        alt: "Short Classic Buzz Cut Styles - Professional Ultra Short Haircuts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

const shortClassicStyles = [
  {
    id: 1,
    name: "Professional Style",
    image: "/buzz-cut-man-portrait.png",
    description: "Clean, professional buzz cut perfect for business environments",
    length: "2-3mm",
    maintenance: "Weekly",
  },
  {
    id: 2,
    name: "Urban Classic",
    image: "/buzz-cut-street-style.png",
    description: "Modern classic buzz cut for everyday urban lifestyle",
    length: "3-4mm",
    maintenance: "Bi-weekly",
  },
  {
    id: 3,
    name: "Crew Cut",
    image: "/placeholder.svg?height=300&width=300&text=Crew",
    description: "Traditional crew cut with slightly longer top section",
    length: "3-6mm",
    maintenance: "Bi-weekly",
  },
  {
    id: 4,
    name: "Induction Cut",
    image: "/placeholder.svg?height=300&width=300&text=Induction",
    description: "Ultra-short induction style for maximum cleanliness",
    length: "0.5-1mm",
    maintenance: "Weekly",
  },
  {
    id: 5,
    name: "Number 2 Cut",
    image: "/placeholder.svg?height=300&width=300&text=Number2",
    description: "Classic number 2 guard cut for perfect balance",
    length: "6mm",
    maintenance: "Bi-weekly",
  },
  {
    id: 6,
    name: "Professional",
    image: "/placeholder.svg?height=300&width=300&text=Professional",
    description: "Business-appropriate short cut for professional environments",
    length: "4-6mm",
    maintenance: "Bi-weekly",
  },
]

export default function ShortClassicBuzzCutPage() {
  const parentLinks = [
    {
      text: "Buzz Cut",
      href: "/",
      description: "Explore all buzz cut styles and variations",
    },
    {
      text: "Classic Buzz Cut",
      href: "/classic-buzz-cut",
      description: "Traditional and timeless buzz cut styles",
    },
  ]

  const siblingLinks = [
    {
      text: "Long Classic Buzz Cut",
      href: "/classic-buzz-cut/long-classic-buzz-cut",
      description: "Longer traditional buzz cut variations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Buzz Cut
            </Link>
            <span>/</span>
            <Link href="/classic-buzz-cut" className="hover:text-blue-600 transition-colors">
              Classic Buzz Cut
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Short Classic Buzz Cut</span>
          </nav>

          <div className="text-center">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-gray-500 text-white border-0 shadow-lg">
              <Star className="h-3 w-3 mr-1" />
              Ultra Short Styles
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-clip-text text-transparent">
                Short Classic Buzz Cut
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Ultra-short{" "}
              <Link
                href="/classic-buzz-cut"
                className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                classic buzz cut
              </Link>{" "}
              styles for the cleanest, most professional look. Perfect for those who prefer minimal maintenance and
              maximum impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/classic-buzz-cut">
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Classic Styles
                </Button>
              </Link>
              <Link href="/ai-designer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-gray-700 text-white"
                >
                  <Scissors className="h-4 w-4 mr-2" />
                  Try AI Designer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Short Classic Styles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                buzz cut
              </Link>{" "}
              styles designed for those who prefer ultra-short, low-maintenance hair.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortClassicStyles.map((style) => (
              <Card key={style.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={style.image || "/placeholder.svg"}
                    alt={`${style.name} - Short Classic Buzz Cut Style`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.name}</h3>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Length: {style.length}</span>
                    <span>Maintenance: {style.maintenance}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose This Style</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Short Classic Buzz Cut?</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ultra-low maintenance - perfect for busy lifestyles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional appearance suitable for all work environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cool and comfortable in all weather conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cost-effective with longer intervals between cuts</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Tips</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Short{" "}
                  <Link href="/classic-buzz-cut" className="text-blue-600 hover:text-blue-800 font-medium">
                    classic buzz cuts
                  </Link>{" "}
                  require minimal maintenance but benefit from regular touch-ups to maintain the clean appearance.
                </p>
                <p>
                  Visit your barber every 1-2 weeks depending on your hair growth rate. Use quality scalp moisturizer
                  and sunscreen to protect exposed skin.
                </p>
                <Link href="/blog">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Read Care Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="Short Classic Buzz Cut" parentLinks={parentLinks} siblingLinks={siblingLinks} />
    </div>
  )
}
