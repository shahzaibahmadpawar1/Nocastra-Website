"use client";

import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    }
  }
} as const;

const wordVariants = {
  hidden: { opacity: 0.15, y: 5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, ease: "easeOut" } 
  }
} as const;

export default function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const words = text.split(" ");

  return (
    <motion.p 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-40px" }}
      style={{ 
        fontSize: "1.35rem", 
        lineHeight: "1.65", 
        fontWeight: 600, 
        color: "var(--text-primary)",
        display: "flex",
        flexWrap: "wrap",
        gap: "6px 5px",
        marginTop: "72px",
        maxWidth: "520px",
        fontStyle: "italic"
      }}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={wordVariants}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
