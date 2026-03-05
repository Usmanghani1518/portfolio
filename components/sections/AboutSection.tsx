"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

function StatCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, value } = useCountUp(target, suffix);

  return (
    <div>
      <span
        ref={ref}
        className="font-heading text-[48px] font-extrabold text-[#0EA5E9] block"
      >
        {value}
      </span>
      <span className="text-[11px] uppercase tracking-[2px] text-[#64748B] mt-1 block">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative grain bg-[#F1F5F9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto px-6 relative z-10">
        {/* Left — Photo Column */}
        <AnimatedSection
          direction="left"
          delay={0.1}
          className="order-2 lg:order-1"
        >
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Offset frame */}
            <div className="absolute w-full h-full border-2 border-primary-cyan rounded-xl -z-10 translate-x-[8px] translate-y-[8px]" />
            {/* Image container */}
            <div className="aspect-square bg-[#e2e8f0] rounded-xl overflow-hidden border border-primary-cyan/20 shadow-xl relative">
              <Image
                src="/images/profile.jpg"
                alt="Software Engineer Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Right — Bio Column */}
        <AnimatedSection
          direction="right"
          delay={0.2}
          className="order-1 lg:order-2"
        >
          <h2 className="font-heading text-[48px] font-extrabold mb-8 text-[#0F172A] tracking-tight text-balance">
            About Me
          </h2>

          <div className="border-l-[3px] border-primary-cyan pl-4">
            <p className="text-lg text-[#475569] leading-[1.75] mb-8">
              I&apos;m a Full-Stack Developer and AI Engineer with 3+ years of
              experience building complete web applications and production-grade
              AI systems &mdash; from React.js and TypeScript frontends to
              Node.js, FastAPI, and LangChain backends. I&apos;ve delivered
              end-to-end products for international clients across the US and
              Australia, and I enjoy owning features from architecture to
              deployment.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#e2e8f0]">
            <div className="pr-6">
              <StatCounter target={10} suffix="+" label="Projects Shipped" />
            </div>
            <div className="px-6 border-l border-[#CBD5E1]">
              <StatCounter target={3} suffix="+" label="Years Experience" />
            </div>
            <div className="pl-6 border-l border-[#CBD5E1]">
              <StatCounter target={15} suffix="+" label="Technologies" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
