"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) {
      const match = value.match(/(\d+\.?\d*)/);
      if (match) {
        const numStr = match[0];
        const index = value.indexOf(numStr);
        const prefix = value.substring(0, index);
        const suffix = value.substring(index + numStr.length);
        setDisplayValue(`${prefix}0${suffix}`);
      } else {
        setDisplayValue(value);
      }
      return;
    }

    // Regex to match any decimal or integer number
    const match = value.match(/(\d+\.?\d*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numStr = match[0];
    const targetNum = parseFloat(numStr);
    const hasDecimal = numStr.includes(".");
    const index = value.indexOf(numStr);
    const prefix = value.substring(0, index);
    const suffix = value.substring(index + numStr.length);

    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutQuad curve
      const easeProgress = progress * (2 - progress);
      const current = easeProgress * targetNum;

      const formattedNum = hasDecimal ? current.toFixed(1) : Math.floor(current).toString();
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value); // Set exact target format at end
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
