"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.CONTACT_TO_EMAIL || "usmanghani.developer@gmail.com";
  const fromName = process.env.CONTACT_FROM_NAME || "Portfolio Contact";

  try {
    await resend.emails.send({
      from: `${fromName} <onboarding@resend.dev>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0f172a; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #06b6d4; margin: 0 0 24px 0; font-size: 22px;">New Contact Form Submission</h2>
          <div style="background: #0a0f1e; border-radius: 8px; padding: 24px; border: 1px solid #1e293b;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
            <p style="color: #f1f5f9; margin: 0 0 20px 0; font-size: 16px;">${name}</p>
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="color: #f1f5f9; margin: 0 0 20px 0; font-size: 16px;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></p>
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #f1f5f9; margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #475569; margin: 24px 0 0 0; font-size: 12px; text-align: center;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    return { success: true, message: "Message sent! I'll get back to you soon." };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
