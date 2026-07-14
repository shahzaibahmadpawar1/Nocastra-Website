"use client";

import { motion } from "framer-motion";
import { Server, Terminal, Check, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const itServices = [
  "Microsoft Intune",
  "Microsoft 365",
  "Azure Cloud",
  "AWS Cloud",
  "Google Cloud",
  "Server Hardening",
  "Vulnerability Assessments",
  "Complete IT Assessments",
];

const webServices = [
  "Custom Web Development",
  "Corporate Websites",
  "Web Applications",
  "Admin Dashboards",
  "CRM Systems",
  "ERP Systems",
  "E-commerce Solutions",
  "Website Security",
  "Website Maintenance",
  "Performance Optimization",
  "Graphic Design",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        <span className={styles.subtitle}>Our Expertise</span>
        <h2 className={styles.title}>
          Solutions Designed <span className={styles.titleHighlight}>Around Your Business</span>
        </h2>
        <p className={styles.description}>
          We deliver complete, production-ready technology services to help your organization grow, run smoothly, and remain secure.
        </p>
      </div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Card 1: IT Management */}
        <motion.div className={styles.card} variants={cardVariants}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Server size={28} />
            </div>
            <h3 className={styles.cardTitle}>Enterprise IT Management</h3>
          </div>
          <p className={styles.cardDescription}>
            Secure, manage, and optimize your organization's IT infrastructure through enterprise-grade Microsoft technologies and cloud solutions.
          </p>
          <div className={styles.listTitle}>Services Include:</div>
          <ul className={styles.servicesList}>
            {itServices.map((service, index) => (
              <li key={index} className={styles.serviceItem}>
                <Check size={16} className={styles.checkIcon} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={handleScrollToContact} className={styles.cardBtn}>
            Speak to an IT Expert <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Card 2: Web Development */}
        <motion.div className={styles.card} variants={cardVariants}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper} style={{ color: "var(--secondary)", backgroundColor: "var(--secondary-light)" }}>
              <Terminal size={28} />
            </div>
            <h3 className={styles.cardTitle}>Web Development & Digital Solutions</h3>
          </div>
          <p className={styles.cardDescription}>
            From professional websites to business applications, we develop secure, scalable, and high-performing digital platforms tailored to your organization's objectives.
          </p>
          <div className={styles.listTitle}>Services Include:</div>
          <ul className={styles.servicesList}>
            {webServices.map((service, index) => (
              <li key={index} className={styles.serviceItem}>
                <Check size={16} className={styles.checkIcon} style={{ color: "var(--primary)" }} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={handleScrollToContact} className={styles.cardBtn} style={{ color: "var(--secondary)" }}>
            Discuss Your Web Project <ArrowRight size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
