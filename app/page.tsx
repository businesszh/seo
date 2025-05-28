import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { InternalLinks } from "@/components/internal-links"

export const metadata: Metadata = {
  title: "Buzz Cut For Everyone - AI Hair Design Studio | Professional Buzz Cut Styles",
  description:
    "Experience the future of hair design with AI-powered personalization and expert craftsmanship. Professional buzz cut variations, geometric patterns, and AI-enhanced styling for everyone.",
  keywords:
    "buzz cut, AI hair design, hair styling, buzz cut styles, AI buzz cut, hair design, professional haircut, geometric hair patterns, hair salon, buzz cut studio",
  alternates: {
    canonical: "https://www.aibuzzcut.shop",
  },
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
}

export default function HomePage() {
  const childLinks = [
    {
      text: "Classic Buzz Cut",
      href: "/classic-buzz-cut",
      description: "Traditional and timeless buzz cut styles",
    },
    {
      text: "Modern Buzz Cut",
      href: "/modern-buzz-cut",
      description: "Contemporary buzz cut styles with modern flair",
    },
    {
      text: "Artistic Buzz Cut",
      href: "/artistic-buzz-cut",
      description: "Creative and artistic buzz cut designs",
    },
    {
      text: "AI Buzz Cut Designer",
      href: "/ai-designer",
      description: "AI-powered personalized buzz cut recommendations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg text-xs sm:text-sm">
            <Star className="h-3 w-3 mr-1" />
            AI Hair Design Studio
          </Badge>

          {/* H1 - Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Buzz Cut
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Experience the future of hair design with AI-powered personalization and expert craftsmanship. From{" "}
            <Link
              href="/classic-buzz-cut"
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              classic buzz cut
            </Link>{" "}
            styles to{" "}
            <Link
              href="/modern-buzz-cut"
              className="font-semibold text-purple-600 hover:text-purple-800 transition-colors"
            >
              modern buzz cut
            </Link>{" "}
            variations and{" "}
            <Link
              href="/artistic-buzz-cut"
              className="font-semibold text-pink-600 hover:text-pink-800 transition-colors"
            >
              artistic buzz cut
            </Link>{" "}
            designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0 mb-16">
            <Link href="/ai-designer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                Try AI Designer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Buzz Cut Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our expertly crafted buzz cut styles for every personality and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/buzz-cut-man-portrait.png"
                  alt="Professional classic buzz cut for men - clean business style haircut"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Classic</h3>
                <p className="text-gray-600">Clean, professional buzz cut perfect for business environments</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/buzz-cut-street-style.png"
                  alt="Urban street style buzz cut - modern casual haircut for everyday wear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Urban Street Style</h3>
                <p className="text-gray-600">Modern urban buzz cut with contemporary appeal</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/buzz-cut-woman-portrait.png"
                  alt="Bold buzz cut for women - confident feminine short haircut style"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bold Statement</h3>
                <p className="text-gray-600">Confident and empowering buzz cut for women</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/geometric-buzz-cut.jpg"
                  alt="Geometric artistic buzz cut design - intricate mandala pattern haircut"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Geometric Art</h3>
                <p className="text-gray-600">Intricate geometric patterns and artistic designs</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/buzz-cut-woman-fashion.png"
                  alt="Fashion forward buzz cut for women - trendy modern short hairstyle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fashion Forward</h3>
                <p className="text-gray-600">Trendy and fashionable buzz cut designs</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/barber-cutting-hair.png"
                  alt="Professional barber cutting buzz cut - expert hair cutting technique demonstration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Professional barber techniques and precision cutting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Explore Buzz Cut Styles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the perfect buzz cut style for you with our comprehensive collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/buzz-cut-man-portrait.png"
                    alt="Classic buzz cut styles - traditional short haircuts for men and women"
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/classic-buzz-cut" className="hover:text-blue-600 transition-colors">
                    Classic Buzz Cut
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Traditional and timeless styles</p>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/classic-buzz-cut/short-classic-buzz-cut"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Short Classic Buzz Cut
                  </Link>
                  <Link
                    href="/classic-buzz-cut/long-classic-buzz-cut"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Long Classic Buzz Cut
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/buzz-cut-street-style.png"
                    alt="Modern buzz cut styles - contemporary trendy haircuts with fades"
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/modern-buzz-cut" className="hover:text-purple-600 transition-colors">
                    Modern Buzz Cut
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Contemporary and trendy styles</p>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/modern-buzz-cut/fade-modern-buzz-cut"
                    className="block text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Fade Modern Buzz Cut
                  </Link>
                  <Link
                    href="/modern-buzz-cut/textured-modern-buzz-cut"
                    className="block text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Textured Modern Buzz Cut
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/geometric-buzz-cut.jpg"
                    alt="Artistic buzz cut designs - creative geometric patterns and unique hair art"
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/artistic-buzz-cut" className="hover:text-pink-600 transition-colors">
                    Artistic Buzz Cut
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Creative and unique designs</p>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/artistic-buzz-cut/geometric-artistic-buzz-cut"
                    className="block text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    Geometric Artistic Buzz Cut
                  </Link>
                  <Link
                    href="/artistic-buzz-cut/creative-artistic-buzz-cut"
                    className="block text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    Creative Artistic Buzz Cut
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src="/buzz-cut-professional-glasses.png"
                    alt="AI buzz cut designer - artificial intelligence powered hair style recommendations"
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/ai-designer" className="hover:text-green-600 transition-colors">
                    AI Buzz Cut
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">AI-powered recommendations</p>
                <div className="space-y-2 text-sm">
                  <span className="block text-green-600">Personalized Analysis</span>
                  <span className="block text-green-600">Smart Recommendations</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="Buzz Cut" childLinks={childLinks} />

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">
            Ready for Your
            <br />
            <span className="text-yellow-300">Perfect Buzz Cut?</span>
          </h2>

          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90 px-4 sm:px-0">
            Start your transformation journey today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <Link href="/ai-designer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-12 py-3 sm:py-4 bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform font-semibold"
              >
                Get Started Now
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-12 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
