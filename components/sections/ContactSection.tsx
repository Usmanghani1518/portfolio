"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import toast from "react-hot-toast";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { sendContactEmail } from "@/lib/contact-action";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Usmanghani1518", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/usman-ghani-b56431271/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:usmanghani.developer@gmail.com", label: "Email" },
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast.success(result.message || "Message sent! I'll get back to you soon.");
        reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f172a] relative grain">
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-[60px] font-extrabold tracking-tight mb-6 text-text-primary">
            {"Let's Work Together"}
            <span className="text-primary-cyan">.</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-success-green pulse-dot shadow-[0_0_10px_#22C55E]" />
            <span className="text-[#94a3b8]">
              Available for freelance & full-time opportunities
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-left space-y-12"
          >
            {/* Name */}
            <div className="relative group">
              <input
                {...register("name")}
                type="text"
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-[#334155] focus:border-primary-cyan focus:ring-0 transition-colors py-4 text-text-primary outline-none"
              />
              <label className="absolute left-0 top-4 text-[#64748B] transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-cyan peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                Full Name
              </label>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                {...register("email")}
                type="email"
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-[#334155] focus:border-primary-cyan focus:ring-0 transition-colors py-4 text-text-primary outline-none"
              />
              <label className="absolute left-0 top-4 text-[#64748B] transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-cyan peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                {...register("message")}
                rows={4}
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-[#334155] focus:border-primary-cyan focus:ring-0 transition-colors py-4 text-text-primary outline-none resize-none"
              />
              <label className="absolute left-0 top-4 text-[#64748B] transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-cyan peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
                Project Details
              </label>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[52px] bg-gradient-to-r from-primary-cyan to-primary-blue text-text-primary font-bold rounded-[8px] text-[16px] hover:shadow-[0_0_28px_rgba(6,182,212,0.35)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#64748B] hover:text-primary-cyan transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
