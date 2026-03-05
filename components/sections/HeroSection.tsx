"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import TerminalWindow from "@/components/ui/TerminalWindow";

const floatingLabels = [
  { text: "LangChain", className: "top-1/4 left-10 -rotate-[8deg] text-4xl" , duration: 5 },
  { text: "FastAPI", className: "top-1/2 right-10 rotate-[5deg] text-5xl", duration: 6 },
  { text: "React.js", className: "bottom-1/4 left-1/3 -rotate-[4deg] text-3xl", duration: 4.5 },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 bg-background-dark dot-grid overflow-hidden relative"
    >
      {/* Floating tech labels */}
      {floatingLabels.map((label) => (
        <motion.span
          key={label.text}
          className={`floating-label ${label.className}`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: label.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {label.text}
        </motion.span>
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6 relative z-10">
        {/* Left column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[12px] tracking-[4px] uppercase text-primary-cyan mb-6 block"
          >
            FULL-STACK DEVELOPER & AI ENGINEER
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-extrabold leading-[1.1] tracking-[-0.02em] mb-10 text-5xl md:text-7xl lg:text-[80px]"
          >
            <span className="text-text-primary">{"Hi, I'm Usman."}</span>
            <br />
            <span className="text-[#94a3b8]">
              {"\u2014 I Build AI-Powered Products."}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-cyan text-background-dark font-bold rounded-lg hover:bg-primary-cyan/90 transition-all text-sm"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-primary-cyan text-primary-cyan font-bold rounded-lg hover:bg-primary-cyan/10 transition-all text-sm"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Right column — terminal */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-4 bg-primary-cyan/10 blur-3xl rounded-full" />
          <div className="relative">
            <TerminalWindow />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-primary-cyan animate-bounce-slow" />
      </div>
    </section>
  );
}
