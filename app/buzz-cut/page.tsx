import { Scissors, Clock, Star, CheckCircle, Zap, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"

export const metadata = {
  alternates: {
    canonical: "https://www.aibuzzcut.shop/buzz-cut",
  },
  openGraph: {
    url: "https://www.aibuzzcut.shop/buzz-cut",
    images: [
      {
        url: "https://www.aibuzzcut.shop/barber-cutting-hair.png",
        width: 800,
        height: 600,
        alt: "Barber Cutting Hair",
      },
    ],
  },
}

const buzzCutStyles = [
  {
    id: 1,
    name: "Professional Classic",
    description: "Clean professional style perfect for business",
    image: "/buzz-cut-man-portrait.png",
    difficulty: "Basic",
    time: "15 min",
    popularity: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Urban Street Style",
    description: "Modern urban buzz cut with contemporary appeal",
    image: "/buzz-cut-street-style.png",
    difficulty: "Medium",
    time: "25 min",
    popularity: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Bold Statement",
    description: "Confident and empowering buzz cut style",
    image: "/buzz-cut-woman-portrait.png",
    difficulty: "Medium",
    time: "20 min",
    popularity: 4,
  },
  {
    id: 4,
    name: "Fashion Forward",
    description: "Trendy and fashionable buzz cut design",
    image: "/buzz-cut-woman-fashion.png",
    difficulty: "Basic",
    time: "10 min",
    popularity: 4,
  },
  {
    id: 5,
    name: "Artistic Creation",
    description: "Professional artistic buzz cut process",
    image: "/artistic-buzz-cut-process.png",
    difficulty: "Advanced",
    time: "35 min",
    popularity: 5,
  },
  {
    id: 6,
    name: "Barber Expertise",
    description: "Professional barber cutting technique",
    image: "/barber-cutting-hair.png",
    difficulty: "Medium",
    time: "30 min",
    popularity: 4,
  },
]

const benefits = [
  { text: "Low maintenance routine", icon: Clock, color: "blue" },
  { text: "Suits all face shapes", icon: Users, color: "purple" },
  { text: "Professional appearance", icon: Award, color: "green" },
  { text: "Enhanced facial features", icon: Star, color: "orange" },
  { text: "Cool and comfortable", icon: Zap, color: "cyan" },
  { text: "Cost effective", icon: CheckCircle, color: "pink" },
]

export default function BuzzCutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg text-xs sm:text-sm">
              <Scissors className="h-3 w-3 mr-1" />
              Premium Styles
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12">
              <span className="block bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
                Buzz Cut
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 sm:mt-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>

            {/* Modern divider */}
            <div className="flex items-center justify-center my-12 sm:my-16">
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full mx-4 sm:mx-6 shadow-lg shadow-purple-500/50"></div>
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover our curated collection of buzz cut styles.
              <br className="hidden sm:block" />
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Each design crafted for perfection.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 text-center py-12 sm:py-16">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Buzz Cuts?
              </CardTitle>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
              <CardDescription className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
                Discover the advantages of choosing a buzz cut
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  const colorClasses = {
                    blue: "from-blue-500 to-cyan-500",
                    purple: "from-purple-500 to-pink-500",
                    green: "from-green-500 to-blue-500",
                    orange: "from-orange-500 to-red-500",
                    cyan: "from-cyan-500 to-blue-500",
                    pink: "from-pink-500 to-purple-500",
                  }
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 group hover:scale-105 transform"
                    >
                      <div className="w-10 sm:w-12 h-10 sm:h-12 relative flex-shrink-0">
                        <div
                          className={`w-full h-full bg-gradient-to-br ${colorClasses[benefit.color]} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                        >
                          <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                        </div>
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{benefit.text}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Style Gallery
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Choose from our expertly designed buzz cut variations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {buzzCutStyles.map((style, index) => (
              <Card
                key={style.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform bg-white overflow-hidden"
              >
                {style.featured && (
                  <div className="absolute -top-px left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-1 text-xs font-semibold tracking-wide rounded-b-lg shadow-lg">
                      FEATURED
                    </div>
                  </div>
                )}

                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <CardTitle className="text-base sm:text-lg font-bold text-gray-900">{style.name}</CardTitle>
                    <div className="flex">
                      {[...Array(style.popularity)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {style.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      {style.time}
                    </div>
                    <Badge variant="outline" className="border-gray-300 text-gray-600 font-medium text-xs">
                      {style.difficulty}
                    </Badge>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    variant="default"
                  >
                    Choose Style
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Care</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Instructions
                </span>
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    number: "01",
                    title: "Regular Maintenance",
                    description: "Schedule touch-ups every 2-3 weeks to maintain the perfect shape",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    number: "02",
                    title: "Scalp Care",
                    description: "Use gentle cleansing products to keep your scalp healthy",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    number: "03",
                    title: "Sun Protection",
                    description: "Apply sunscreen or wear a hat to protect exposed scalp",
                    gradient: "from-orange-500 to-red-500",
                  },
                  {
                    number: "04",
                    title: "Moisturizing",
                    description: "Keep your scalp hydrated with quality moisturizing products",
                    gradient: "from-green-500 to-blue-500",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 sm:gap-8 group">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 relative flex-shrink-0">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${step.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 transform`}
                      >
                        <span className="text-white font-bold text-xs sm:text-sm">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background decoration - hidden on mobile */}
              <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="hidden sm:block absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg">
                  <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900">Expert Consultation</h3>
                <p className="text-gray-600 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
                  Get personalized advice from our professional stylists. We'll help you choose the perfect buzz cut
                  style that complements your face shape and lifestyle.
                </p>
                <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
