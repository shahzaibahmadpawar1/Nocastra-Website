"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, ArrowRight } from "lucide-react";
import styles from "./FeaturedService.module.css";

const intuneServices = [
  "Tenant Configuration",
  "Microsoft Autopilot",
  "Device Enrollment",
  "Application Deployment",
  "Endpoint Security",
  "Compliance Policies",
  "Configuration Profiles",
  "Conditional Access",
  "BitLocker Management",
  "BYOD Management",
  "Windows, macOS, Android & iOS Management",
  "Patch Management",
  "Remote Troubleshooting",
  "Microsoft Defender Integration",
  "Entra ID Integration",
  "Device Lifecycle Management",
  "Co-management with SCCM",
  "Ongoing Managed Support",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function FeaturedService() {
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
    <section id="intune-service" className={styles.featuredSection}>
      <div className="grid-bg"></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Flagship Service</span>
          <h2 className={styles.title}>
            Microsoft Intune <span className={styles.titleHighlight}>Experts</span>
          </h2>
          <p className={styles.subheading}>
            Simplify Endpoint Management. Strengthen Security.
          </p>
        </div>

        <motion.div 
          className={styles.contentGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Details */}
          <motion.div className={styles.leftCol} variants={itemVariants}>
            <div className={styles.intuneVisual}>
              <Smartphone size={32} />
            </div>
            <h3 className={styles.colTitle}>Enterprise Mobility & Management</h3>
            <p className={styles.colDesc}>
              Managing devices across your organization shouldn't be complicated.
            </p>
            <p className={styles.colDesc}>
              As a Microsoft Partner, Nocastra helps businesses deploy, secure, monitor, and manage Windows, macOS, Android, and iOS devices using Microsoft Intune.
            </p>
            <p className={styles.colDesc}>
              Whether you're onboarding new employees, implementing Microsoft Autopilot, enforcing compliance policies, deploying applications, or managing a hybrid workforce, our certified consultants ensure every device remains secure, compliant, and ready for work.
            </p>
            <a href="#contact" onClick={handleScrollToContact} className="btn-primary styles.colBtn">
              Talk to an Intune Expert <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right Column: List of Offerings */}
          <motion.div className={styles.rightCol} variants={itemVariants}>
            <div className={styles.listHeader}>Our Intune Services Include:</div>
            <ul className={styles.intuneList}>
              {intuneServices.map((service, index) => (
                <li key={index} className={styles.intuneItem}>
                  <ShieldCheck size={18} className={styles.iconCheck} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
