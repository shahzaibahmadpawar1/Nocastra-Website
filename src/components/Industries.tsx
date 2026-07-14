"use client";

import { motion } from "framer-motion";
import { 
  Flame, ShoppingCart, Truck, DollarSign, 
  Briefcase, Landmark, Heart, GraduationCap 
} from "lucide-react";
import styles from "./Industries.module.css";

const industries = [
  { name: "Oil & Gas", icon: Flame },
  { name: "Retail", icon: ShoppingCart },
  { name: "Logistics", icon: Truck },
  { name: "Financial Services", icon: DollarSign },
  { name: "Professional Services", icon: Briefcase },
  { name: "Government", icon: Landmark },
  { name: "NGOs", icon: Heart },
  { name: "Education", icon: GraduationCap },
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function Industries() {
  return (
    <section id="industries" className={styles.industriesSection}>
      <div className="grid-bg"></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Sectors We Support</span>
          <h2 className={styles.title}>Trusted Across Multiple Industries</h2>
          <p className={styles.description}>
            Every industry has unique technology challenges. We've helped organizations modernize, secure, and optimize their IT operations across key sectors:
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div 
                key={index} 
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={26} />
                </div>
                <h3 className={styles.cardTitle}>{industry.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
