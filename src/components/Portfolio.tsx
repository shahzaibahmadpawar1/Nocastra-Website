"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: 1,
    title: "Hope of Overseas",
    tag: "Web Development",
    desc: "Complete IT Assessment and professional Custom Web Platform Development.",
    abbr: "HO",
  },
  {
    id: 2,
    title: "Darb Stations",
    tag: "Web Development",
    desc: "Optimized corporate interface setup and IT assessment integration.",
    abbr: "DS",
  },
  {
    id: 3,
    title: "Falcon Tech Trade",
    tag: "Web Development",
    desc: "Infrastructure blueprint design and corporate site creation.",
    abbr: "FT",
  },
  {
    id: 4,
    title: "Itechtics",
    tag: "SEO & Optimization",
    desc: "High-performance search engine optimization audit and platform maintenance.",
    abbr: "IT",
  },
  {
    id: 5,
    title: "Adilsher.com",
    tag: "E-Commerce",
    desc: "Full-scale custom shopping system development and server integration.",
    abbr: "AS",
  },
  {
    id: 6,
    title: "PakNGOs",
    tag: "Cyber Security",
    desc: "Granular server hardening and continuous vulnerability audit tests.",
    abbr: "PN",
  },
];

const categories = ["All", "Web Development", "Cyber Security", "E-Commerce", "SEO & Optimization"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.tag === activeCategory);

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
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Our Work</span>
        <h2 className={styles.title}>
          Check Out Our <strong className={styles.titleHighlight}>Portfolio</strong>
        </h2>
        <p className={styles.description}>
          We are defined by our portfolio and our clientele. We believe in recurring customers, thriving for excellence in deliverables.
        </p>
      </div>

      {/* Category filters */}
      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${activeCategory === category ? styles.filterActive : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid container with AnimatePresence */}
      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.visualWrapper}>
                <div className={styles.visualBg}></div>
                <span className={styles.mockLogo}>{project.abbr}</span>
                
                {/* Hover overlay panel */}
                <div className={styles.overlay}>
                  <h4 className={styles.overlayTitle}>{project.title}</h4>
                  <p className={styles.overlayDesc}>{project.desc}</p>
                  <a href="#contact" onClick={handleScrollToContact} className={styles.overlayBtn}>
                    Hire us
                  </a>
                </div>
              </div>
              
              <div className={styles.info}>
                <span className={styles.categoryTag}>{project.tag}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
