"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: customDelay,
    },
  }),
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  id, 
  style,
  delay = 0 
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}
