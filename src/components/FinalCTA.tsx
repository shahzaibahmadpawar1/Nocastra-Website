"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
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
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle radial glowing blobs inside dark card */}
          <div className={styles.glow}></div>
          
          <span className={styles.badge}>Get Started</span>
          <h2 className={styles.title}>
            Let's Build a Smarter, More Secure IT Environment
          </h2>
          <p className={styles.description}>
            Whether you need Microsoft Intune implementation, cloud consulting, managed IT services, or a custom web solution, our experts are ready to help. Talk to our team for a free consultation and discover how Nocastra can support your business today.
          </p>

          <div className={styles.btnGroup}>
            <a href="#contact" onClick={handleScrollToContact} className={styles.primaryBtn}>
              Talk to an IT Expert <ArrowRight size={18} />
            </a>
            <a href="#contact" onClick={handleScrollToContact} className={styles.secondaryBtn}>
              Get a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
