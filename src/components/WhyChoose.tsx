"use client";

import { motion } from "framer-motion";
import { Check, HeartHandshake } from "lucide-react";
import styles from "./WhyChoose.module.css";

const points = [
  "Microsoft Partner",
  "Certified Azure, AWS & VMware Professionals",
  "Same-Day Technical Support",
  "Dedicated IT Consultants",
  "No Chatbots—Only Real Experts",
  "Personalized IT Strategy",
  "Security-First Approach",
  "Long-Term Technology Partnership",
  "Cost-Effective Solutions",
  "Global Experience",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function WhyChoose() {
  return (
    <section id="why-choose-us" className={styles.whyChooseSection}>
      <div className={styles.container}>
        {/* Left Side: Text and Highlight */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Why Choose Us</span>
          <h2 className={styles.title}>
            Technology Expertise Backed by Real People
          </h2>
          <h3 className={styles.subheading}>
            Technology is only valuable when backed by dependable support.
          </h3>
          <p className={styles.description}>
            That's why businesses choose Nocastra. We combine global industry certifications with same-day human response to deliver peace of mind.
          </p>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <HeartHandshake size={24} />
            </div>
            <div className={styles.highlightText}>
              <h4>No Chatbots—Only Real Experts</h4>
              <p>Work directly with engineers who know your account.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Points List */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              className={styles.itemCard}
              variants={itemVariants}
            >
              <div className={styles.checkWrapper}>
                <Check size={16} />
              </div>
              <span className={styles.itemText}>{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
