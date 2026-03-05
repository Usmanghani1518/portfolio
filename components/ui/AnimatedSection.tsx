"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initialValues = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialValues[direction]}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : initialValues[direction]
      }
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
