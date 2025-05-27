import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Star, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Contact Us - Buzz Cut For Everyone | Book Your Appointment",
  description:
    "Get in touch with our expert buzz cut team. Book appointments, ask questions, or get personalized consultations. Professional buzz cut services for everyone.",
  keywords: "contact buzz cut salon, book buzz cut appointment, buzz cut consultation, professional barber contact",
  alternates: {
    canonical: "https://buzzcutforeveryone.com/contact",
  },
  openGraph: {
    title: "Contact Us - Buzz Cut For Everyone",
    description: "Get in touch with our expert buzz cut team. Book appointments and get personalized consultations.",
    url: "https://buzzcutforeveryone.com/contact",
    siteName: "Buzz Cut For Everyone",
    images: [
      {
        url: "https://buzzcutforeveryone.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Buzz Cut For Everyone - Professional Hair Design Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Call us for immediate assistance",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email",
    details: "businesshow123@gmail.com",
    description: "Send us your questions anytime",
    color: "bg-green-500",
    link: "mailto:businesshow123@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    details: "@paumala",
    description: "Chat with us on Telegram",
    color: "bg-cyan-500",
    link: "https://t.me/paumala",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "123 Style Street, Hair City, HC 12345",
    description: "Visit our flagship studio",
    color: "bg-purple-500",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    description: "We're here when you need us",
    color: "bg-orange-500",
  },
]

const services = [
  { name: "AI Hair Consultation", price: "Free", duration: "15 min" },
  { name: "Professional Buzz Cut", price: "$25", duration: "30 min" },
  { name: "Fade Buzz Cut", price: "$35", duration: "45 min" },
  { name: "Hair Care Consultation", price: "$20", duration: "20 min" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/80 backdrop-blur-sm">
            <MessageCircle className="h-3 w-3 mr-1" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready for your perfect buzz cut? Get in touch with our expert team for personalized consultations, bookings,
            or any questions about our services.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input
                        placeholder="John"
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone (Optional)</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Interest</label>
                    <select className="w-full p-3 border-2 border-gray-200 rounded-md focus:border-purple-500 transition-colors">
                      <option>Select a service</option>
                      <option>AI Hair Consultation</option>
                      <option>Professional Buzz Cut</option>
                      <option>Fade Buzz Cut</option>
                      <option>Hair Care Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your hair goals, preferred appointment time, or any questions you have..."
                      rows={5}
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Services Pricing */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Scissors className="h-6 w-6 text-purple-600" />
                  Our Services & Pricing
                </CardTitle>
                <CardDescription>Professional buzz cut services for everyone</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="p-4 border-2 border-gray-100 rounded-lg hover:border-purple-300 transition-colors group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {service.name}
                        </h3>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          {service.price}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{service.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const ContactContent = (
                <div className="flex items-start gap-4">
                  <div
                    className={`${info.color} p-3 rounded-full text-white group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="font-medium text-gray-800 mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              )

              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-200 group"
                >
                  <CardContent className="p-6">
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                        {ContactContent}
                      </a>
                    ) : (
                      ContactContent
                    )}
                  </CardContent>
                </Card>
              )
            })}

            {/* Quick Booking */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Quick Booking
                </CardTitle>
                <CardDescription className="text-purple-100">Book your appointment instantly</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Amazing service! The AI consultation helped me find the perfect buzz cut style. The team is
                  professional and really knows their craft."
                </blockquote>
                <cite className="text-sm font-medium text-gray-900">- Mike Johnson</cite>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-purple-600" />
                Find Us
              </CardTitle>
              <CardDescription>Visit our studio for the full experience</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive map would be integrated here</p>
                  <p className="text-sm text-gray-500">123 Style Street, Hair City, HC 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
