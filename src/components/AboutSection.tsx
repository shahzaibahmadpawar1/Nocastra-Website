"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="grid-bg"></div>
      <div className={styles.container}>
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>About Nocastra</span>
          <h2 className={styles.title}>
            Your Complete IT Partner—<span className={styles.titleHighlight}>From Infrastructure to Innovation</span>
          </h2>
          <h3 className={styles.subheading}>
            Technology should empower your business, not slow it down.
          </h3>
          <p className={styles.description}>
            At Nocastra, we provide comprehensive IT consulting, cloud solutions, Microsoft Intune management, cybersecurity, and enterprise web development to help organizations operate with confidence.
          </p>
          <p className={styles.description}>
            Whether you're deploying devices for a growing workforce, migrating to Microsoft 365, strengthening your cybersecurity posture, or building a business-critical web application, our team delivers solutions designed around your goals—not generic templates.
          </p>
          <p className={styles.description}>
            What sets us apart is our commitment to real human support. Every client works directly with experienced consultants who understand their environment, respond quickly, and stay invested long after implementation.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <ShieldCheck className={styles.featureIcon} size={18} />
              <span>Microsoft Partner</span>
            </div>
            <div className={styles.featureItem}>
              <ShieldCheck className={styles.featureIcon} size={18} />
              <span>Security-First Approach</span>
            </div>
            <div className={styles.featureItem}>
              <ShieldCheck className={styles.featureIcon} size={18} />
              <span>Custom-Tailored Strategy</span>
            </div>
            <div className={styles.featureItem}>
              <ShieldCheck className={styles.featureIcon} size={18} />
              <span>Real Human Expertise</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div
          className={styles.illustrationWrapper}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageFrame}>
            <img 
              src="/gifs/Computer troubleshooting.gif" 
              alt="IT Support Illustration" 
              className={styles.image} 
            />
          </div>
          
          <motion.div 
            className={styles.floatingCard}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className={styles.floatingCardIcon}>
              <Users size={20} />
            </div>
            <div className={styles.floatingCardText}>
              <h4>Dedicated Consultants</h4>
              <p>Direct expert communication</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
