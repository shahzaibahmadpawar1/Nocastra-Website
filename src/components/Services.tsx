"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Lock, Terminal, Zap, Palette, Layers, Search, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    description: "We cover each human and machine security aspect while performing our tests, giving detailed compliance information in our end report.",
    icon: ShieldAlert,
    color: "#e11d48", // Rose
    bg: "#ffe4e6",
  },
  {
    id: "server-hardening",
    title: "Server Hardening",
    description: "The sole purpose of system hardening is to reduce the risk of potential cyber attacks on your local or cloud IT infrastructure.",
    icon: Lock,
    color: "#2563eb", // Blue
    bg: "#eff6ff",
  },
  {
    id: "web-development",
    title: "Web & Custom Development",
    description: "We provide end-to-end modern web and application solutions, including planning, layout design, API integrations, and scaling strategy.",
    icon: Terminal,
    color: "#0d9488", // Teal
    bg: "#f0fdfa",
  },
  {
    id: "speed-optimization",
    title: "Web Speed Optimization",
    description: "We optimize your web app core vitals and performance scores without compromising on its content, asset quality, or cloud security.",
    icon: Zap,
    color: "#ca8a04", // Yellow
    bg: "#fef9c3",
  },
  {
    id: "graphic-design",
    title: "UI/UX & Graphic Design",
    description: "Our graphics department designs high-converting company profiles, corporate logos, user interfaces, and tailored branding assets.",
    icon: Palette,
    color: "#9333ea", // Purple
    bg: "#f3e8ff",
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 Management",
    description: "We manage your cloud-based office suite on a granular level with multiple subscriptions for reduced licensing costs.",
    icon: Layers,
    color: "#0284c7", // Sky Blue
    bg: "#e0f2fe",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function Services() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Services</span>
        <h2 className={styles.title}>
          We Offer <strong className={styles.titleHighlight}>Professional IT Services</strong>
        </h2>
        <p className={styles.description}>
          Amongst user experience and other delivering aspects, Nocastra also focuses on making your intellectual data and property secure by performing recursive audit tests.
        </p>
      </div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id} 
              className={styles.card}
              variants={cardVariants}
            >
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: service.bg, color: service.color }}
              >
                <Icon size={26} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href="#contact" onClick={handleScrollToContact} className={styles.learnMore}>
                Get Started <ArrowRight size={14} />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
