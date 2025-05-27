import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, email, phone, service, preferredDate, preferredTime, notes } = body

    // 验证必填字段
    if (!customerName || !email || !service || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: "Missing required booking information" }, { status: 400 })
    }

    // 这里可以集成日历系统
    // 例如 Google Calendar API, Calendly, 或自定义预约系统

    const bookingId = `BK${Date.now()}`

    console.log("New booking:", {
      bookingId,
      customerName,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      notes,
      status: "pending",
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Booking request received! We will confirm your appointment within 2 hours.",
      estimatedPrice:
        service === "Professional Buzz Cut"
          ? "$25"
          : service === "Fade Buzz Cut"
            ? "$35"
            : service === "AI Hair Consultation"
              ? "Free"
              : "$20",
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Booking system error" }, { status: 500 })
  }
}
