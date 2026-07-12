"use client";

import { motion } from "framer-motion";
import { Briefcase, Smile, Award, Cloud } from "lucide-react";
import Counter from "./Counter";
import styles from "./Stats.module.css";

const statsData = [
  {
    id: 1,
    number: "258+",
    label: "Completed Projects",
    icon: Briefcase,
    color: "var(--primary)",
  },
  {
    id: 2,
    number: "150+",
    label: "Happy Clients",
    icon: Smile,
    color: "var(--secondary)",
  },
  {
    id: 3,
    number: "172+",
    label: "Service Providers",
    icon: Award,
    color: "var(--accent)",
  },
  {
    id: 4,
    number: "214+",
    label: "Cloud Designs",
    icon: Cloud,
    color: "var(--primary)",
  },
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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
} as const;

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={stat.id} 
              className={styles.card}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper} style={{ color: stat.color }}>
                <Icon size={24} />
              </div>
              <div>
                <div className={styles.number}><Counter value={stat.number} /></div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
