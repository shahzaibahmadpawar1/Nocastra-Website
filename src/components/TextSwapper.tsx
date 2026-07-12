"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextSwapperProps {
  words: string[];
  interval?: number;
}

export default function TextSwapper({ words, interval = 3200 }: TextSwapperProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span 
      style={{ 
        display: "inline-flex", 
        position: "relative",
        height: "1.15em", 
        overflow: "hidden",
        verticalAlign: "bottom",
        paddingBottom: "2px"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "80%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-80%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            display: "inline-block",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-headings)",
            fontStyle: "italic",
            fontWeight: 800,
            color: "var(--primary)",
            paddingRight: "12px"
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
