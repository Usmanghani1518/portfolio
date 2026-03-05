import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Portfolio Contact <noreply@yourdomain.com>",
        to: "usmanghani.developer@gmail.com",
        subject: `New message from ${parsed.data.name}`,
        text: `
Name: ${parsed.data.name}
Email: ${parsed.data.email}
Message: ${parsed.data.message}
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent! I'll get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
