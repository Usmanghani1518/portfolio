"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export function useCountUp(target: number, suffix: string = "", duration: number = 1500): {
  ref: React.RefObject<HTMLSpanElement | null>;
  value: string;
} {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState("0" + suffix);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setValue(current + suffix);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, target, suffix, duration]);

  return { ref, value };
}
