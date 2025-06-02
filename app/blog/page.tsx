import type { Metadata } from "next"
import { Calendar, User, Clock, Tag, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { ResponsiveAd } from "@/components/responsive-ad"

export const metadata: Metadata = {
  title: "Buzz Cut Care Blog - Professional Hair Care Tips & Guides",
  description:
    "Professional buzz cut care knowledge, maintenance tips and styling advice. Everything you need to keep your buzz cut looking perfect and your scalp healthy.",
  keywords: "buzz cut care, hair maintenance, scalp health, professional hair tips, buzz cut blog, hair care guide",
  alternates: {
    canonical: "https://www.aibuzzcut.shop/blog",
  },
  openGraph: {
    title: "Buzz Cut Care Blog - Professional Hair Care Tips & Guides",
    description: "Professional buzz cut care knowledge, maintenance tips and styling advice.",
    url: "https://www.aibuzzcut.shop/blog",
    siteName: "Buzz Cut For Everyone",
    images: [
      {
        url: "https://www.aibuzzcut.shop/mens-hair-care-guide.jpeg",
        width: 1200,
        height: 630,
        alt: "Buzz Cut Care Blog - Professional Hair Care Tips & Guides",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Men's Hair Care for Buzz Cuts",
    excerpt:
      "From understanding your scalp type to choosing the right products, master the essential steps to keep your buzz cut healthy and looking sharp. Learn professional techniques used by top barbers.",
    image: "/mens-hair-care-guide.jpeg",
    author: "Expert Barber Team",
    date: "2024-01-20",
    readTime: "8 min read",
    category: "Hair Care Basics",
    tags: ["Hair Care", "Scalp Health", "Professional Tips"],
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Your Hair Type: A Buzz Cut Perspective",
    excerpt:
      "Not all hair is created equal. Discover how different hair types - from fine to coarse, straight to curly - affect your buzz cut maintenance routine and product selection.",
    image: "/buzz-cut-man-portrait.png",
    author: "Hair Specialist Dr. Chen",
    date: "2024-01-18",
    readTime: "6 min read",
    category: "Hair Analysis",
    tags: ["Hair Type", "Personalized Care", "Scalp Analysis"],
    featured: true,
  },
  {
    id: 3,
    title: "The Ultimate Hair Product Guide for Buzz Cuts",
    excerpt:
      "Navigate the world of hair products specifically for buzz cuts. From scalp moisturizers to styling products, learn what works best for ultra-short hair and when to use each product.",
    image: "/barber-cutting-hair.png",
    author: "Product Expert Mike",
    date: "2024-01-15",
    readTime: "10 min read",
    category: "Product Guide",
    tags: ["Hair Products", "Styling", "Product Reviews"],
  },
  {
    id: 4,
    title: "Buzz Cut Maintenance: Professional Techniques",
    excerpt:
      "Learn the secrets that professional barbers use to maintain perfect buzz cuts. From trimming techniques to scalp care, get insider knowledge for at-home maintenance.",
    image: "/artistic-buzz-cut-process.png",
    author: "Master Barber Rodriguez",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Professional Techniques",
    tags: ["Maintenance", "Professional Tips", "Barber Secrets"],
  },
  {
    id: 5,
    title: "Scalp Health: The Foundation of Great Buzz Cuts",
    excerpt:
      "Your scalp is the foundation of any great buzz cut. Discover how to maintain optimal scalp health, prevent common issues, and create the perfect environment for healthy hair growth.",
    image: "/buzz-cut-woman-portrait.png",
    author: "Dermatologist Dr. Sarah Kim",
    date: "2024-01-10",
    readTime: "9 min read",
    category: "Scalp Health",
    tags: ["Scalp Care", "Health", "Prevention"],
  },
  {
    id: 6,
    title: "Seasonal Buzz Cut Care: Year-Round Maintenance",
    excerpt:
      "Different seasons bring unique challenges for buzz cut maintenance. Learn how to adapt your care routine for summer sun protection, winter dryness, and everything in between.",
    image: "/buzz-cut-street-style.png",
    author: "Seasonal Care Expert Lisa",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Seasonal Care",
    tags: ["Seasonal Care", "Sun Protection", "Weather Adaptation"],
  },
  {
    id: 7,
    title: "Common Buzz Cut Problems and Solutions",
    excerpt:
      "From razor burn to uneven growth, tackle the most common buzz cut challenges with professional solutions. Prevent problems before they start and fix issues quickly.",
    image: "/buzz-cut-woman-fashion.png",
    author: "Problem-Solving Specialist Tom",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Problem Solutions",
    tags: ["Problem Solving", "Troubleshooting", "Quick Fixes"],
  },
  {
    id: 8,
    title: "The Psychology of Buzz Cuts: Confidence and Style",
    excerpt:
      "Explore the psychological impact of choosing a buzz cut. From boosting confidence to making style statements, understand the deeper meaning behind this bold choice.",
    image: "/buzz-cut-professional-glasses.png",
    author: "Style Psychologist Dr. James",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Style Psychology",
    tags: ["Psychology", "Confidence", "Personal Style"],
  },
]

const categories = [
  "All Articles",
  "Hair Care Basics",
  "Hair Analysis",
  "Product Guide",
  "Professional Techniques",
  "Scalp Health",
  "Seasonal Care",
  "Problem Solutions",
  "Style Psychology",
]

const popularTags = [
  "Hair Care",
  "Scalp Health",
  "Professional Tips",
  "Hair Products",
  "Maintenance",
  "Problem Solving",
  "Seasonal Care",
  "Confidence",
  "Styling",
  "Health",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="h-3 w-3 mr-1" />
            Expert Knowledge Base
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Buzz Cut Care Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional buzz cut care knowledge, maintenance tips and styling advice. Everything you need to keep your
            buzz cut looking perfect and your scalp healthy.
          </p>
        </div>
      </section>

      {/* Ad Banner after Header */}
      <ResponsiveAd adSlot="1234567893" className="max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主内容区 */}
          <div className="lg:col-span-3 space-y-8">
            {/* 搜索栏 */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search hair care tips, product guides, maintenance advice..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            {/* 精选文章 */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
              {featuredPosts.map((post, index) => (
                <div key={post.id}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={`${post.title} - Professional buzz cut care guide and styling tips`}
                          className="w-full h-64 md:h-full object-cover"
                          width="400"
                          height="300"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <Badge className="mb-3 bg-blue-500 text-white">Featured</Badge>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button>Read Full Article</Button>
                      </div>
                    </div>
                  </Card>
                  {/* Ad after first featured article */}
                  {index === 0 && <ResponsiveAd adSlot="1234567894" className="my-8" />}
                </div>
              ))}
            </div>

            {/* 其他文章 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post, index) => (
                  <div key={post.id}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gray-100">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={`${post.title} - Expert buzz cut maintenance and care advice`}
                          className="w-full h-full object-cover"
                          width="400"
                          height="300"
                          loading="lazy"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                    {/* Ad after every 3rd article */}
                    {(index + 1) % 3 === 0 && (
                      <ResponsiveAd adSlot={`123456789${5 + Math.floor(index / 3)}`} className="my-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* Ad in sidebar */}
            <ResponsiveAd adSlot="1234567899" />

            {/* 分类 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Article Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={index === 0 ? "default" : "ghost"}
                      className="w-full justify-start"
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 热门标签 */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 专家提示 */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Expert Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  "The key to a perfect buzz cut is consistent maintenance and proper scalp care. Visit your barber
                  every 2-3 weeks and use quality scalp moisturizer daily."
                </p>
                <p className="text-xs text-blue-600 mt-2 font-medium">- Master Barber Rodriguez</p>
              </CardContent>
            </Card>

            {/* 最新文章 */}
            <Card>
              <CardHeader>
                <CardTitle>Latest Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={`${post.title} - Buzz cut care tips and professional advice`}
                        className="w-16 h-16 object-cover rounded"
                        width="64"
                        height="64"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">{post.title}</h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
