"use client";

import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* About column */}
        <div className={styles.col}>
          <Link href="/" className={styles.logo} style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <img 
              src="/images/logos/nocastraLogo.png" 
              alt="Nocastra" 
              style={{ height: "30px", width: "auto", display: "block" }} 
            />
          </Link>
          <p className={styles.aboutText}>
            Humanized IT Support by a Team of Experts offering specialized custom development, cloud integrations, server hardening, and vulnerability audits.
          </p>
        </div>

        {/* Services column */}
        <div className={styles.col}>
          <h3>IT Services</h3>
          <div className={styles.links}>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className={styles.link}>
              Vulnerability Assessment
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className={styles.link}>
              Server Hardening
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className={styles.link}>
              Web Development
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className={styles.link}>
              IT Assessment & Auditing
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className={styles.col}>
          <h3>Quick Links</h3>
          <div className={styles.links}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} className={styles.link}>
              Home
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className={styles.link}>
              Services
            </a>
            <a href="#process" onClick={(e) => { e.preventDefault(); handleNavClick("process"); }} className={styles.link}>
              Our Process
            </a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavClick("portfolio"); }} className={styles.link}>
              Portfolio
            </a>
          </div>
        </div>

        {/* Contact column */}
        <div className={styles.col}>
          <h3>Contact Details</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactLine}>
              <Mail size={16} className={styles.contactIcon} />
              <a href="mailto:info@nocastra.com">info@nocastra.com</a>
            </div>
            <div className={styles.contactLine}>
              <Phone size={16} className={styles.contactIcon} />
              <a href="tel:+923214682968">+92 321 4682968</a>
            </div>
            <div className={styles.contactLine}>
              <Clock size={16} className={styles.contactIcon} />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Nocastra. All rights reserved.
        </div>
        <div className={styles.bottomLinks}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} className={styles.bottomLink}>
            Terms & Conditions
          </a>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} className={styles.bottomLink}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
