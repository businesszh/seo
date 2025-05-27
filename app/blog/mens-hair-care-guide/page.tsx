import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Complete Guide to Men's Hair Care for Buzz Cuts | Buzz Cut For Everyone",
  description:
    "Master the essential steps to keep your buzz cut healthy and looking sharp. Professional techniques from top barbers for optimal scalp health and maintenance.",
  keywords: "mens hair care, buzz cut maintenance, scalp health, hair care routine, professional hair tips",
}

export default function MensHairCareGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <Badge className="mb-4 bg-blue-500 text-white">Hair Care Basics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Guide to Men's Hair Care for Buzz Cuts
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Expert Barber Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          <img
            src="/mens-hair-care-guide.jpeg"
            alt="Complete Guide to Men's Hair Care"
            className="w-full h-96 object-cover rounded-2xl shadow-xl mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              If you're not having as many good hair days as you'd like, then it's probably due to an improper haircare
              regimen. For buzz cut enthusiasts, maintaining healthy hair and scalp is even more crucial since there's
              nowhere to hide imperfections.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Scalp</h2>
            <p className="text-gray-700 mb-6">
              With a buzz cut, your scalp becomes the star of the show. Unlike longer hairstyles that can mask scalp
              issues, buzz cuts require optimal scalp health for the best appearance. Your scalp type determines
              everything from how often you should wash to which products will work best.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Quick Scalp Assessment</h3>
              <ul className="space-y-2 text-blue-700">
                <li>
                  <strong>Oily Scalp:</strong> Feels greasy within 24 hours of washing
                </li>
                <li>
                  <strong>Dry Scalp:</strong> Feels tight, may have flaking or itching
                </li>
                <li>
                  <strong>Normal Scalp:</strong> Comfortable for 2-3 days between washes
                </li>
                <li>
                  <strong>Sensitive Scalp:</strong> Reacts to products with irritation or redness
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Essential Buzz Cut Care Routine</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Daily Cleansing</h3>
            <p className="text-gray-700 mb-6">
              Unlike longer hair that can go days between washes, buzz cuts benefit from daily cleansing due to
              increased exposure to environmental pollutants and oils. Use a gentle, sulfate-free shampoo that won't
              strip your scalp's natural oils.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Moisturizing</h3>
            <p className="text-gray-700 mb-6">
              Your exposed scalp needs protection and hydration. Apply a lightweight, non-greasy scalp moisturizer
              daily. Look for ingredients like hyaluronic acid, glycerin, and natural oils that provide hydration
              without clogging pores.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Sun Protection</h3>
            <p className="text-gray-700 mb-6">
              This is crucial for buzz cut maintenance. Your scalp is directly exposed to UV rays, which can cause
              burning, premature aging, and even skin cancer. Use a broad-spectrum SPF 30+ sunscreen daily, or wear a
              hat when outdoors for extended periods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Morning Routine</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Gentle cleanse with lukewarm water</li>
                    <li>• Apply lightweight moisturizer</li>
                    <li>• Use broad-spectrum sunscreen</li>
                    <li>• Style if desired</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Evening Routine</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Remove sunscreen and daily buildup</li>
                    <li>• Deep cleanse with quality shampoo</li>
                    <li>• Apply nourishing scalp treatment</li>
                    <li>• Gentle massage to stimulate circulation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Selection Guide</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shampoos for Buzz Cuts</h3>
            <p className="text-gray-700 mb-4">Choose shampoos based on your scalp type:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Oily Scalp:</strong> Clarifying shampoos with tea tree oil or salicylic acid
              </li>
              <li>
                <strong>Dry Scalp:</strong> Moisturizing shampoos with ceramides and natural oils
              </li>
              <li>
                <strong>Normal Scalp:</strong> Gentle, balanced formulas with minimal sulfates
              </li>
              <li>
                <strong>Sensitive Scalp:</strong> Fragrance-free, hypoallergenic formulations
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Styling Products</h3>
            <p className="text-gray-700 mb-6">
              Even buzz cuts can benefit from styling products. Light-hold pomades, texturizing sprays, and matte pastes
              can add definition and control to your style without weighing down your short hair.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">What NOT to Do</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Over-washing with harsh shampoos</li>
                <li>• Skipping moisturizer because hair is short</li>
                <li>• Forgetting sun protection</li>
                <li>• Using products meant for longer hair</li>
                <li>• Neglecting regular maintenance cuts</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Maintenance</h2>
            <p className="text-gray-700 mb-6">
              Regular visits to a professional barber are essential for maintaining the perfect buzz cut. Schedule
              appointments every 2-3 weeks to keep your cut looking fresh and to address any scalp concerns with expert
              advice.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Pro Tip</h3>
              <p className="text-green-700">
                "The key to a perfect buzz cut is consistency. Establish a routine and stick to it. Your scalp will
                thank you, and your buzz cut will always look its best." - Master Barber Rodriguez
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-8">
              Maintaining a buzz cut requires a different approach than caring for longer hair. By focusing on scalp
              health, using appropriate products, and maintaining a consistent routine, you can ensure your buzz cut
              always looks professional and feels comfortable. Remember, a healthy scalp is the foundation of any great
              hairstyle.
            </p>

            <div className="flex gap-4 mb-8">
              <Badge variant="outline">Hair Care</Badge>
              <Badge variant="outline">Scalp Health</Badge>
              <Badge variant="outline">Professional Tips</Badge>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src="/buzz-cut-man-portrait.png"
                    alt="Understanding Hair Types"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Understanding Your Hair Type</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn how different hair types affect your buzz cut maintenance routine.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src="/barber-cutting-hair.png"
                    alt="Professional Techniques"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Maintenance Techniques</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Discover the secrets that professional barbers use for perfect buzz cuts.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
