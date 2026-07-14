"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Users, Laptop, Terminal, Globe } from "lucide-react";
import Counter from "./Counter";
import styles from "./Stats.module.css";

const statsData = [
  {
    id: 1,
    number: "150+",
    label: "Businesses Served",
    icon: Briefcase,
    color: "var(--primary)",
  },
  {
    id: 2,
    number: "15+ Years",
    label: "Industry Experience",
    icon: Award,
    color: "var(--secondary)",
  },
  {
    id: 3,
    number: "Microsoft Partner",
    label: "Certified Professionals",
    icon: Users,
    color: "var(--accent)",
  },
  {
    id: 4,
    number: "Hundreds",
    label: "Devices Managed",
    icon: Laptop,
    color: "var(--primary)",
  },
  {
    id: 5,
    number: "50+",
    label: "Web Solutions Delivered",
    icon: Terminal,
    color: "var(--secondary)",
  },
  {
    id: 6,
    number: "Worldwide",
    label: "Business Support",
    icon: Globe,
    color: "var(--accent)",
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
      <div className={styles.header}>
        <span className={styles.subtitle}>Trust Section</span>
        <h2 className={styles.title}>Trusted by Businesses Across the Globe</h2>
        <p className={styles.description}>
          Supporting organizations across Pakistan, Saudi Arabia, UAE, Algeria, the United Kingdom, and beyond with enterprise IT solutions and secure digital experiences.
        </p>
      </div>

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
