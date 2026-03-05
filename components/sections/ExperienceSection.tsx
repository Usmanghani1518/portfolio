"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-background-dark text-text-primary relative grain">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-16 text-text-primary">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto relative" ref={ref}>
          {/* Timeline spine */}
          <div className="absolute left-0 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-primary-cyan opacity-80" />

          {experience.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{
                opacity: 0,
                x: entry.side === "left" ? -50 : 50,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: entry.side === "left" ? -50 : 50 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
              className="relative mb-16"
            >
              {/* Timeline node */}
              <div className="absolute left-[-6px] md:left-1/2 md:-ml-[7px] top-8 w-[14px] h-[14px] bg-background-dark border-2 border-primary-cyan rounded-full z-10 pulse-dot" />

              {/* Content alignment */}
              <div
                className={`ml-10 md:ml-0 ${
                  entry.side === "left"
                    ? "md:w-1/2 md:pr-12 md:text-right"
                    : "md:w-1/2 md:ml-auto md:pl-12"
                }`}
              >
                <div className="bg-card-dark border border-border-subtle p-6 rounded-[12px] hover:border-primary-cyan transition-colors duration-300">
                  <span className="inline-block px-[10px] py-[3px] bg-[#06B6D415] text-primary-cyan rounded font-mono text-[11px] mb-4">
                    {entry.period}
                  </span>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary mb-1">
                    {entry.role}
                  </h3>
                  <p className="text-primary-cyan text-[15px] mb-1">
                    {entry.company}
                  </p>
                  <p className="text-[#475569] text-xs font-mono mb-4">
                    {entry.location}
                  </p>
                  <p className="text-[#64748B] text-sm leading-[1.75]">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
