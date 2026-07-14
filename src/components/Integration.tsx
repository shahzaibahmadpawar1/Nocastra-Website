"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Cpu, Play, Search, LifeBuoy } from "lucide-react";
import styles from "./Integration.module.css";

const steps = [
  {
    id: 1,
    title: "1. Consultation",
    desc: "Understand your business, infrastructure, and goals.",
    icon: Search,
    x: 250,
    y: 60,
  },
  {
    id: 2,
    title: "2. Assessment",
    desc: "Identify risks, opportunities, and the right technology strategy.",
    icon: Cpu,
    x: 410,
    y: 200,
  },
  {
    id: 3,
    title: "3. Implementation",
    desc: "Deploy secure, scalable solutions with minimal disruption.",
    icon: Play,
    x: 250,
    y: 340,
  },
  {
    id: 4,
    title: "4. Support",
    desc: "Continue with proactive monitoring, optimization, and expert guidance.",
    icon: LifeBuoy,
    x: 90,
    y: 200,
  },
];

export default function Integration() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="process" className={styles.section}>
      <div className="grid-bg"></div>
      <div className={styles.container}>
        
        {/* Left Side Content */}
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>Our Process</span>
          <h2 className={styles.title}>
            A Simple Process. <span className={styles.titleHighlight} style={{ fontStyle: "italic" }}>Proven Results.</span>
          </h2>
          <p className={styles.description}>
            We simplify complex technical requirements into a straightforward, four-step lifecycle. Our structured approach guarantees reliable, secure, and minimal-disruption rollouts.
          </p>

          <div className={styles.bullets}>
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={styles.bulletItem}
                style={{
                  opacity: hoveredStep === null || hoveredStep === step.id ? 1 : 0.5,
                  transform: hoveredStep === step.id ? "translateX(6px)" : "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={styles.bulletIcon} style={{
                  backgroundColor: hoveredStep === step.id ? "var(--primary)" : "var(--primary-light)",
                  color: hoveredStep === step.id ? "white" : "var(--primary)",
                  transition: "all 0.3s ease",
                }}>
                  {hoveredStep === step.id ? <Check size={12} /> : step.id}
                </div>
                <div className={styles.bulletText}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side SVG Diagram */}
        <motion.div 
          className={styles.diagramWrapper}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg className={styles.svgDiagram} viewBox="0 0 500 400">
            {/* Connection Lines from Center */}
            <path d="M 250 200 L 250 60" stroke="var(--border-color)" strokeWidth="2" className={hoveredStep === 1 ? styles.pathPulse : ""} style={{ stroke: hoveredStep === 1 ? "var(--primary)" : "var(--border-color)" }} />
            <path d="M 250 200 L 410 200" stroke="var(--border-color)" strokeWidth="2" className={hoveredStep === 2 ? styles.pathPulse : ""} style={{ stroke: hoveredStep === 2 ? "var(--primary)" : "var(--border-color)" }} />
            <path d="M 250 200 L 250 340" stroke="var(--border-color)" strokeWidth="2" className={hoveredStep === 3 ? styles.pathPulse : ""} style={{ stroke: hoveredStep === 3 ? "var(--primary)" : "var(--border-color)" }} />
            <path d="M 250 200 L 90 200" stroke="var(--border-color)" strokeWidth="2" className={hoveredStep === 4 ? styles.pathPulse : ""} style={{ stroke: hoveredStep === 4 ? "var(--primary)" : "var(--border-color)" }} />
            
            {/* Outer Circular Pipeline */}
            <path d="M 250 60 Q 380 90 410 200 Q 380 310 250 340 Q 120 310 90 200 Q 120 90 250 60" 
              fill="none" 
              stroke="var(--border-color)" 
              strokeWidth="2" 
              strokeDasharray="5 5"
            />

            {/* Stage Nodes */}
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <g 
                  key={step.id} 
                  className={styles.stepNode}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Circle background */}
                  <circle 
                    className={styles.stepCircle}
                    cx={step.x} 
                    cy={step.y} 
                    r="28" 
                    fill={hoveredStep === step.id ? "var(--primary)" : "white"} 
                    stroke={hoveredStep === step.id ? "var(--accent)" : "var(--border-color)"}
                    strokeWidth="2"
                  />
                  {/* Text Label */}
                  <text 
                    className={styles.stepText}
                    x={step.x} 
                    y={step.y + 44} 
                    textAnchor="middle"
                    style={{ fill: hoveredStep === step.id ? "var(--primary)" : "var(--text-primary)" }}
                  >
                    {step.title.split(". ")[1]}
                  </text>
                  
                  {/* Icon Representation */}
                  <foreignObject 
                    x={step.x - 12} 
                    y={step.y - 12} 
                    width="24" 
                    height="24"
                    style={{ pointerEvents: "none" }}
                  >
                    <div style={{ 
                       color: hoveredStep === step.id ? "white" : "var(--primary)",
                       display: "flex", 
                       alignItems: "center", 
                       justifyContent: "center" 
                    }}>
                      <IconComp size={18} />
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Central Node */}
            <g className={styles.centerNode}>
              <circle 
                className={styles.centerCircle}
                cx="250" 
                cy="200" 
                r="45" 
              />
              <text 
                className={styles.centerText}
                x="250" 
                y="196" 
                textAnchor="middle"
              >
                Nocastra
              </text>
              <text 
                x="250" 
                y="214" 
                textAnchor="middle"
                style={{ 
                  fill: "var(--text-secondary)", 
                  fontSize: "9px", 
                  fontWeight: "700", 
                  letterSpacing: "0.5px", 
                  textTransform: "uppercase" 
                }}
              >
                Process
              </text>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
