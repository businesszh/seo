import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    // 验证必填字段
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // 这里可以添加邮件发送逻辑
    // 例如使用 Resend, SendGrid, 或 Nodemailer
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // 模拟处理时间
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
