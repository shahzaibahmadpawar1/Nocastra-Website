"use client";

import { motion, Variants } from "framer-motion";

const marqueeVariants: Variants = {
  animate: {
    x: [0, "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 22,
        ease: "linear",
      },
    },
  },
};

const renderLogos = () => (
  <>
    {/* 1. Codegic */}
    <div style={{ display: "flex", alignItems: "center", gap: "8px", userSelect: "none" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <span style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.5px", color: "#1e293b", fontFamily: "var(--font-headings)" }}>codegic</span>
    </div>

    {/* 2. iTechtics */}
    <div style={{ 
      border: "2px solid #1e293b", 
      padding: "3px 12px", 
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      userSelect: "none"
    }}>
      <span style={{ fontSize: "1.15rem", fontWeight: 800, letterSpacing: "-0.5px", color: "#1e293b", fontFamily: "var(--font-headings)" }}>
        i<span style={{ textTransform: "uppercase" }}>techtics</span>
      </span>
    </div>

    {/* 3. Lanop */}
    <div style={{ display: "flex", alignItems: "center", gap: "8px", userSelect: "none" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="4" fill="#4f46e5" />
        <circle cx="16" cy="8" r="4" fill="#0d9488" />
        <circle cx="8" cy="16" r="4" fill="#9333ea" />
        <circle cx="16" cy="16" r="4" fill="#ec4899" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
        <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1e1b4b", fontFamily: "var(--font-headings)" }}>Lanop</span>
        <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>Business & Tax Advisors</span>
      </div>
    </div>

    {/* 4. adilsher.com */}
    <div style={{ userSelect: "none" }}>
      <span style={{ 
        fontSize: "1.35rem", 
        fontWeight: "bold", 
        color: "#10b981", 
        fontFamily: "Georgia, serif", 
        fontStyle: "italic",
        letterSpacing: "-0.5px"
      }}>
        adilsher.com
      </span>
    </div>

    {/* 5. Grandeur Metals */}
    <div style={{ display: "flex", alignItems: "center", gap: "8px", userSelect: "none" }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
        <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "var(--font-headings)" }}>Grandeur</span>
        <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "#64748b", letterSpacing: "0.5px", textTransform: "uppercase" }}>Metals (Pvt) Ltd.</span>
      </div>
    </div>
  </>
);

export default function LogoSlider() {
  return (
    <div 
      style={{ 
        overflow: "hidden", 
        width: "100%", 
        backgroundColor: "#ffffff", 
        borderTop: "1px solid var(--border-color)", 
        borderBottom: "1px solid var(--border-color)",
        padding: "36px 0",
        display: "flex",
        alignItems: "center",
        position: "relative"
      }}
    >
      <motion.div 
        variants={marqueeVariants}
        animate="animate"
        style={{ 
          display: "flex", 
          gap: "96px", 
          alignItems: "center",
          whiteSpace: "nowrap",
          width: "max-content",
          paddingLeft: "48px"
        }}
      >
        {renderLogos()}
        {renderLogos()}
        {renderLogos()}
      </motion.div>
    </div>
  );
}
