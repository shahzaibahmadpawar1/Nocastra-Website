"use client";

import { motion } from "framer-motion";
import { Server, Cloud, HardDrive, Globe, Lock, Mail, ArrowRight } from "lucide-react";
import styles from "./Hosting.module.css";

const hostingServices = [
  { name: "Business Hosting", icon: Server },
  { name: "VPS Hosting", icon: Cloud },
  { name: "Dedicated Servers", icon: HardDrive },
  { name: "Domain Registration", icon: Globe },
  { name: "SSL Certificates", icon: Lock },
  { name: "Email Hosting", icon: Mail },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function Hosting() {
  return (
    <section id="hosting" className={styles.hostingSection}>
      <div className="grid-bg"></div>
      <div className={styles.container}>
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/logos/SpeedHostLogo.png" alt="SpeedHost Logo" className={styles.speedHostLogo} />
          <h2 className={styles.title}>
            Need <span className={styles.titleHighlight}>Hosting</span> Too?
          </h2>
          <h3 className={styles.subheading}>
            Reliable infrastructure starts with reliable hosting.
          </h3>
          <p className={styles.description}>
            Through our sister company, <strong style={{ fontStyle: "italic", color: "var(--primary)" }}>SpeedHost</strong>, we provide premium server architecture and management to ensure your enterprise applications and websites run 24/7 with peak performance.
          </p>
          <p className={styles.description} style={{ fontWeight: 600 }}>
            One partner for your entire digital infrastructure.
          </p>
          <a href="https://speedhost.pk" target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
            Explore SpeedHost <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Right Side: Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {hostingServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={20} />
                </div>
                <span className={styles.cardTitle}>{service.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
