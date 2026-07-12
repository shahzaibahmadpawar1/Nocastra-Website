"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, ArrowRight,
  Cloud, Server, ShieldAlert, Lock, Mail, Search, Smartphone, Layers,
  Terminal, Shield, Zap, Activity, Palette, Send, Settings, Users, BookOpen
} from "lucide-react";
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

  const itManagementItems = [
    { name: "Azure Cloud", path: "/it-management/azure-cloud", icon: Cloud },
    { name: "AWS Cloud", path: "/it-management/aws-cloud", icon: Server },
    { name: "Google Cloud", path: "/it-management/google-cloud", icon: Layers },
    { name: "Server Hardening", path: "/it-management/server-hardening", icon: Lock },
    { name: "Vulnerability Assessment", path: "/it-management/vulnerability-assessment", icon: ShieldAlert },
    { name: "Complete IT Assessment", path: "/it-management/complete-it-assessment", icon: Search },
    { name: "Email Security", path: "/it-management/email-security", icon: Mail },
    { name: "Microsoft 365", path: "/it-management/microsoft-365", icon: Settings },
    { name: "Microsoft Intune", path: "/it-management/microsoft-intune", icon: Smartphone },
  ];

  const webServicesItems = [
    { name: "Web Development", path: "/web-services/web-development", icon: Terminal },
    { name: "Web Maintenance", path: "/web-services/web-maintenance", icon: Settings },
    { name: "Speed Optimization", path: "/web-services/speed-optimization", icon: Zap },
    { name: "Website Security", path: "/web-services/website-security", icon: Shield },
    { name: "Site Monitoring", path: "/web-services/site-monitoring", icon: Activity },
    { name: "Graphic Design", path: "/web-services/graphic-design", icon: Palette },
    { name: "Nocastra Send", path: "/web-services/nocastra-send", icon: Send },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo}>
          Nocastra<span className={styles.logoDot}></span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>

          {/* IT Management Hover Mega Menu */}
          <div className={styles.navItemWithDropdown}>
            <span className={styles.navLink}>
              IT Management <ChevronDown className={styles.chevron} size={14} />
            </span>
            <div className={styles.megaMenu}>
              <div className={styles.sidebar} style={{ backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <img src="/Server.gif" alt="IT Management" style={{ width: "100%", height: "auto", maxHeight: "160px", objectFit: "contain" }} />
              </div>
              <div className={styles.menuGrid}>
                {itManagementItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.path} href={item.path} className={styles.menuItem}>
                      <div className={styles.itemIcon}>
                        <Icon size={16} />
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Web Services Hover Mega Menu */}
          <div className={styles.navItemWithDropdown}>
            <span className={styles.navLink}>
              Web Services <ChevronDown className={styles.chevron} size={14} />
            </span>
            <div className={styles.megaMenu}>
              <div className={styles.sidebar} style={{ backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <img src="/Online world.gif" alt="Web Services" style={{ width: "100%", height: "auto", maxHeight: "160px", objectFit: "contain" }} />
              </div>
              <div className={styles.menuGrid}>
                {webServicesItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.path} href={item.path} className={styles.menuItem}>
                      <div className={styles.itemIcon}>
                        <Icon size={16} />
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company Hover Mega Menu */}
          <div className={styles.navItemWithDropdown}>
            <span className={styles.navLink}>
              Company <ChevronDown className={styles.chevron} size={14} />
            </span>
            <div className={styles.megaMenu} style={{ width: "650px" }}>
              <div className={styles.sidebar} style={{ backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <img src="/Computer troubleshooting.gif" alt="Company" style={{ width: "100%", height: "auto", maxHeight: "160px", objectFit: "contain" }} />
              </div>
              <div className={styles.menuGrid} style={{ gridTemplateColumns: "1fr" }}>
                <Link href="/company/meet-the-team" className={styles.menuItem}>
                  <div className={styles.itemIcon}>
                    <Users size={16} />
                  </div>
                  <span>Meet the team</span>
                </Link>
                <Link href="/company/about" className={styles.menuItem}>
                  <div className={styles.itemIcon}>
                    <BookOpen size={16} />
                  </div>
                  <span>About Us</span>
                </Link>
                <Link href="/company/contact" className={styles.menuItem}>
                  <div className={styles.itemIcon}>
                    <Mail size={16} />
                  </div>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/company/contact" className={styles.ctaBtn}>
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
          <Link href="/" className={styles.mobileLink}>
            Home
          </Link>

          <div className={styles.mobileGroupHeader}>IT Management</div>
          {itManagementItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path} className={styles.mobileLink} style={{ paddingLeft: "12px", fontWeight: "600", fontSize: "0.88rem" }}>
                <Icon size={14} style={{ color: "var(--primary)" }} /> {item.name}
              </Link>
            );
          })}

          <div className={styles.mobileGroupHeader}>Web Services</div>
          {webServicesItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path} className={styles.mobileLink} style={{ paddingLeft: "12px", fontWeight: "600", fontSize: "0.88rem" }}>
                <Icon size={14} style={{ color: "var(--secondary)" }} /> {item.name}
              </Link>
            );
          })}

          <div className={styles.mobileGroupHeader}>Company</div>
          <Link href="/company/meet-the-team" className={styles.mobileLink} style={{ paddingLeft: "12px", fontWeight: "600", fontSize: "0.88rem" }}>
            <Users size={14} style={{ color: "var(--text-muted)" }} /> Meet the team
          </Link>
          <Link href="/company/about" className={styles.mobileLink} style={{ paddingLeft: "12px", fontWeight: "600", fontSize: "0.88rem" }}>
            <BookOpen size={14} style={{ color: "var(--text-muted)" }} /> About
          </Link>
          <Link href="/company/contact" className={styles.mobileLink} style={{ paddingLeft: "12px", fontWeight: "600", fontSize: "0.88rem" }}>
            <Mail size={14} style={{ color: "var(--text-muted)" }} /> Contact
          </Link>

          <Link
            href="/company/contact"
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
