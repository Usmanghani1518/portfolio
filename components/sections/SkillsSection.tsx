"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Monitor, Database, Cloud, Server, Bot } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Database,
  Cloud,
  Server,
  Bot,
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-background-dark text-text-primary relative">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#0d94e7 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-heading text-5xl md:text-[72px] font-extrabold tracking-tight mb-12 text-text-primary">
          {"My Stack"}
          <span className="text-primary-cyan">.</span>
        </h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                className="bg-card-dark rounded-xl border border-border-subtle border-l-[3px] border-l-primary-cyan p-6 hover:border-primary-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  {Icon && <Icon className="text-primary-cyan w-5 h-5" />}
                  <span className="font-heading text-xl font-bold text-text-primary">
                    {category.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge px-[14px] py-[8px] bg-[#0F172A] border border-border-subtle text-[12px] font-mono rounded-[8px] text-[#cbd5e1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
