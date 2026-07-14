"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Terminal, Mail, ArrowRight } from "lucide-react";
import ParticlesBanner from "./ParticlesBanner";
import Counter from "./Counter";
import TextSwapper from "./TextSwapper";
import styles from "./Hero.module.css";

const cardVariants = {
  front: {
    x: 0,
    y: 0,
    scale: 1,
    zIndex: 3,
    opacity: 1,
    rotate: 0,
  },
  backRight: {
    x: 40,
    y: -40,
    scale: 0.92,
    zIndex: 2,
    opacity: 0.95,
    rotate: 3,
  },
  backLeft: {
    x: -40,
    y: 40,
    scale: 0.84,
    zIndex: 1,
    opacity: 0.7,
    rotate: -3,
  },
} as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const rotateDeck = () => {
    setActiveIndex((prev) => (prev + 1) % 3);
  };

  const cardsData = [
    {
      id: 0,
      title: "Microsoft Intune",
      icon: Smartphone,
      label: "DEVICES ENROLLED",
      value: "99%",
      progressClass: styles.progressBlue,
      iconClass: styles.blueIcon,
      bgClass: styles.mainCard,
      isPulse: true,
      desc: "Deploy, manage, and secure your company devices (Windows, macOS, iOS, Android) through enterprise mobility management policies."
    },
    {
      id: 1,
      title: "Web Development",
      icon: Terminal,
      label: "WEB PERFORMANCE",
      value: "98%",
      progressClass: styles.progressTeal,
      iconClass: styles.tealIcon,
      bgClass: styles.statCard,
      isPulse: false,
      desc: "Scale your business with secure, high-performance web applications, custom databases, and automated corporate platforms built for growth."
    },
    {
      id: 2,
      title: "Email Security",
      icon: Mail,
      label: "SPAM BLOCKED",
      value: "99.9%",
      progressClass: styles.progressCyan,
      iconClass: styles.cyanIcon,
      bgClass: styles.secondaryCard,
      isPulse: false,
      desc: "Protect your enterprise communications. Shield employee inboxes from advanced phishing attempts, spam, and credential harvesting threats."
    },
  ];

  const getCardPosition = (cardId: number) => {
    const relativeIndex = (cardId - activeIndex + 3) % 3;
    if (relativeIndex === 0) return "front";
    if (relativeIndex === 1) return "backRight";
    return "backLeft";
  };

  return (
    <section id="home" className={styles.hero}>
      <ParticlesBanner />
      {/* Background Grids and Blobs */}
      <div className="grid-bg"></div>
      <div className={styles.bgBlobs}>
        <div className={`${styles.blob1} animate-blob-1`}></div>
        <div className={`${styles.blob2} animate-blob-2`}></div>
      </div>

      <div className={styles.container}>
        {/* Left Side Content */}
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Humanized IT Support
          </div>
          
          <h1 className={styles.title}>
            We Keep Your{" "}
            <span className="text-gradient" style={{ display: "inline-block" }}>
              <TextSwapper words={[
                "Intune Managed",
                "Data Secure",
                "Infra Optimized",
                "Endpoints Protected",
                "Devices Secured",
                "Azure Powered",
                "Network Protected",
                "Business Connected",
                "Code Optimized"
              ]} />
            </span>
            <br />
            So You Can Focus on Your Business
          </h1>
          
          <p className={styles.description}>
            Nocastra helps organizations build, secure, and manage modern IT environments through Microsoft Intune, Microsoft 365, Azure, cloud infrastructure, and managed IT services. Combined with custom web development and dedicated human support, we become your long-term technology partner for growth.
          </p>
          
          <div className={styles.btnGroup}>
            <a href="#contact" onClick={handleScrollToContact} className="btn-primary">
              Talk to an IT Expert <ArrowRight size={18} />
            </a>
            <a href="#contact" onClick={handleScrollToContact} className="btn-secondary">
              Book a Free Consultation
            </a>
          </div>
        </motion.div>

        {/* Right Side Illustration */}
        <div 
          className={styles.illustration} 
          onClick={rotateDeck}
          style={{ cursor: "pointer" }}
        >
          {cardsData.map((card) => {
            const Icon = card.icon;
            const position = getCardPosition(card.id);
            const isFront = position === "front";
            
            return (
              <motion.div
                key={card.id}
                className={`${styles.cardMockup} ${card.bgClass}`}
                animate={isFront ? {
                  x: 0,
                  y: 0,
                  scale: [1, 1.05, 0.98, 1.02, 1],
                  zIndex: 3,
                  opacity: 1,
                  rotate: 0,
                } : cardVariants[position]}
                transition={isFront ? {
                  scale: {
                    repeat: Infinity,
                    repeatDelay: 5,
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                  x: { type: "spring", stiffness: 220, damping: 22 },
                  y: { type: "spring", stiffness: 220, damping: 22 },
                  rotate: { type: "spring", stiffness: 220, damping: 22 },
                  opacity: { duration: 0.5 },
                } : { 
                  type: "spring", 
                  stiffness: 220, 
                  damping: 22 
                }}
                whileHover={{ scale: isFront ? 1.05 : 0.95 }}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className={styles.cardHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {card.isPulse && <span className={styles.pulseCircle}></span>}
                    <h3>{card.title}</h3>
                  </div>
                  <div className={`${styles.cardIcon} ${card.iconClass}`}>
                    <Icon size={18} />
                  </div>
                </div>

                {/* Text Description inside card */}
                <p className={styles.cardDesc}>{card.desc}</p>

                <div className={styles.mockProgress}>
                  <div className={`${styles.mockProgressFill} ${card.progressClass}`}></div>
                </div>
                <div className={styles.cardLabel}>
                  <span>{card.label}</span>
                  <span><Counter value={card.value} /></span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
