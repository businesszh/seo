"use client"

import type React from "react"
import { useState } from "react"
import { Upload, Scissors, Sparkles, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { trackAIDesignerEvent } from "@/lib/analytics"

const hairstyles = [
  {
    id: 1,
    name: "Classic Professional",
    image: "/buzz-cut-man-portrait.png",
    category: "Short Hair",
    alt: "Classic professional buzz cut for men - business appropriate short haircut",
  },
  {
    id: 2,
    name: "Urban Style",
    image: "/buzz-cut-street-style.png",
    category: "Short Hair",
    alt: "Urban street style buzz cut - modern casual short haircut",
  },
  {
    id: 3,
    name: "Bold Statement",
    image: "/buzz-cut-woman-portrait.png",
    category: "Short Hair",
    alt: "Bold buzz cut for women - confident feminine short hairstyle",
  },
  {
    id: 4,
    name: "Fashion Forward",
    image: "/buzz-cut-woman-fashion.png",
    category: "Medium Hair",
    alt: "Fashion forward buzz cut for women - trendy modern short hairstyle",
  },
  {
    id: 5,
    name: "Artistic Process",
    image: "/artistic-buzz-cut-process.png",
    category: "Artistic",
    alt: "Artistic buzz cut creation process - professional hair design technique",
  },
  {
    id: 6,
    name: "Barber Cut",
    image: "/barber-cutting-hair.png",
    category: "Professional",
    alt: "Professional barber cutting buzz cut - expert hair cutting demonstration",
  },
  {
    id: 7,
    name: "Geometric Design",
    image: "/geometric-buzz-cut.jpg",
    category: "Artistic",
    alt: "Geometric buzz cut design - intricate mandala pattern haircut art",
  },
  {
    id: 8,
    name: "Modern Professional",
    image: "/buzz-cut-professional-glasses.png",
    category: "Professional",
    alt: "Modern professional buzz cut with glasses - contemporary business hairstyle",
  },
]

export default function AIDesignerPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [selectedHairstyle, setSelectedHairstyle] = useState<number | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setProcessedImage(null)
        // Track image upload
        trackAIDesignerEvent("image_upload", { file_size: file.size })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setProcessedImage(null)
        // Track drag and drop upload
        trackAIDesignerEvent("image_drag_drop", { file_size: file.size })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleStyleSelection = (styleId: number) => {
    setSelectedHairstyle(styleId)
    const selectedStyle = hairstyles.find((style) => style.id === styleId)
    // Track style selection
    trackAIDesignerEvent("style_selected", {
      style_name: selectedStyle?.name,
      style_category: selectedStyle?.category,
    })
  }

  const processHairstyle = async () => {
    if (!uploadedImage || selectedHairstyle === null) return

    const selectedStyle = hairstyles.find((style) => style.id === selectedHairstyle)
    const startTime = Date.now()

    setIsProcessing(true)
    setProgress(0)

    // Track AI processing start
    trackAIDesignerEvent("ai_processing_start", {
      style_name: selectedStyle?.name,
    })

    // 模拟AI处理过程
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsProcessing(false)
          setProcessedImage("/placeholder.svg?height=400&width=400")

          // Track AI processing completion
          const processingTime = Date.now() - startTime
          trackAIDesignerEvent("ai_processing_complete", {
            style_name: selectedStyle?.name,
            processing_time: processingTime,
          })

          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const downloadResult = () => {
    if (processedImage) {
      const link = document.createElement("a")
      link.href = processedImage
      link.download = "new-hairstyle.jpg"
      link.click()

      // Track download
      trackAIDesignerEvent("result_download", {
        style_name: hairstyles.find((style) => style.id === selectedHairstyle)?.name,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Buzz Cut Designer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your photo and let our AI find the perfect buzz cut style for you. Personalized recommendations for
            everyone, regardless of face shape or hair type
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：上传和选择 */}
          <div className="space-y-6">
            {/* 照片上传 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Your Photo
                </CardTitle>
                <CardDescription>Supports JPG, PNG formats. Clear front-facing photos work best</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  {uploadedImage ? (
                    <div className="space-y-4">
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Uploaded photo for AI buzz cut analysis"
                        className="max-h-64 mx-auto rounded-lg shadow-md"
                        width="300"
                        height="300"
                      />
                      <p className="text-sm text-gray-600">Click to re-upload</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-gray-900">Drag photo here or click to upload</p>
                        <p className="text-sm text-gray-600">Maximum 10MB supported</p>
                      </div>
                    </div>
                  )}
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 发型选择 */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Hairstyle</CardTitle>
                <CardDescription>
                  Select the hairstyle you want to try, AI will generate the effect for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {hairstyles.map((style) => (
                    <div
                      key={style.id}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        selectedHairstyle === style.id
                          ? "border-purple-500 ring-2 ring-purple-200"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() => handleStyleSelection(style.id)}
                    >
                      <img
                        src={style.image || "/placeholder.svg"}
                        alt={style.alt}
                        className="w-full h-24 object-cover"
                        width="120"
                        height="96"
                        loading="lazy"
                      />
                      <div className="p-2">
                        <p className="text-xs font-medium text-center">{style.name}</p>
                        <Badge variant="outline" className="text-xs mt-1 w-full justify-center">
                          {style.category}
                        </Badge>
                      </div>
                      {selectedHairstyle === style.id && (
                        <div className="absolute inset-0 bg-purple-500 bg-opacity-20 flex items-center justify-center">
                          <div className="bg-purple-500 text-white rounded-full p-1">
                            <Sparkles className="h-4 w-4" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 生成按钮 */}
            <Button
              onClick={processHairstyle}
              disabled={!uploadedImage || selectedHairstyle === null || isProcessing}
              className="w-full h-12 text-lg"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                  AI Processing...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate New Hairstyle
                </>
              )}
            </Button>
          </div>

          {/* 右侧：结果展示 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Effect Preview</CardTitle>
                <CardDescription>AI-generated hairstyle effects will be displayed here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  {isProcessing ? (
                    <div className="text-center space-y-4">
                      <div className="animate-pulse">
                        <Sparkles className="h-16 w-16 text-purple-400 mx-auto" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium">AI is designing your hairstyle...</p>
                        <Progress value={progress} className="w-64" />
                        <p className="text-sm text-gray-600">{progress}%</p>
                      </div>
                    </div>
                  ) : processedImage ? (
                    <div className="space-y-4">
                      <img
                        src={processedImage || "/placeholder.svg"}
                        alt="AI generated buzz cut hairstyle result"
                        className="max-h-96 mx-auto rounded-lg shadow-lg"
                        width="400"
                        height="400"
                      />
                      <div className="flex gap-2 justify-center">
                        <Button onClick={downloadResult} variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download Image
                        </Button>
                        <Button onClick={() => setProcessedImage(null)} variant="outline">
                          Regenerate
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <Scissors className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg">Upload photo and select hairstyle to start designing</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* 对比展示 */}
            {uploadedImage && processedImage && (
              <Card>
                <CardHeader>
                  <CardTitle>Before & After</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-sm font-medium mb-2">Original</p>
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Original photo before AI buzz cut transformation"
                        className="w-full h-48 object-cover rounded-lg"
                        width="200"
                        height="192"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium mb-2">New Hairstyle</p>
                      <img
                        src={processedImage || "/placeholder.svg"}
                        alt="AI generated buzz cut hairstyle transformation result"
                        className="w-full h-48 object-cover rounded-lg"
                        width="200"
                        height="192"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
