"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Microsoft Intune", path: "/microsoft-intune" },
    { name: "Microsoft 365", path: "/microsoft-365" },
    { name: "Cloud", path: "/cloud" },
    { name: "Web Development", path: "/web-development" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo} style={{ display: "flex", alignItems: "center" }}>
          <img 
            src="/images/logos/nocastraLogo.png" 
            alt="Nocastra" 
            style={{ height: "32px", width: "auto", display: "block" }} 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaBtn}>
            Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.mobileToggle} ${isMenuOpen ? styles.toggleActive : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={styles.mobileLink}>
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={styles.ctaBtn}
            style={{ width: "100%", marginTop: "16px", display: "inline-flex", justifyContent: "center" }}
          >
            Free Consultation <ArrowRight size={16} style={{ marginLeft: "8px" }} />
          </Link>
        </div>

        {/* Background Overlay */}
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ""}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </nav>
    </>
  );
}
