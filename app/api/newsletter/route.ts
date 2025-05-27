import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // 这里可以集成邮件营销服务
    // 例如 Mailchimp, ConvertKit, 或 Resend

    console.log("Newsletter subscription:", {
      email,
      subscribedAt: new Date().toISOString(),
      source: "website",
    })

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to our newsletter! Check your email for a welcome message.",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
  }
}
