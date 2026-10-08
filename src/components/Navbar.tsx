"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const intuneLinks = [
  { name: "Microsoft Intune Consulting", path: "/microsoft-intune/consulting" },
  { name: "Microsoft Intune Deployment", path: "/microsoft-intune/deployment" },
  { name: "Windows Autopilot", path: "/windows-autopilot" },
  { name: "Microsoft Intune Migration", path: "/microsoft-intune/migration" },
  { name: "Microsoft Intune Managed Services", path: "/microsoft-intune/managed-services" },
  { name: "Microsoft Intune Support", path: "/microsoft-intune/support" },
  { name: "Endpoint Security with Microsoft Intune", path: "/microsoft-intune/endpoint-security" },
];

const microsoft365Links = [
  { name: "Microsoft Teams", path: "/microsoft-teams" },
  { name: "Exchange Online", path: "/microsoft-exchange-online" },
  { name: "SharePoint Online", path: "/sharepoint-online" },
  { name: "OneDrive", path: "/microsoft-onedrive" },
  { name: "Microsoft Entra ID", path: "/microsoft-entra-id" },
  { name: "Microsoft Defender", path: "/microsoft-defender" },
  { name: "Windows Autopilot", path: "/windows-autopilot" },
  { name: "Endpoint Security", path: "/microsoft-intune/endpoint-security" },
  { name: "Tenant-to-Tenant Migration", path: "/microsoft-intune/migration" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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
    setOpenMobileDropdown(null);
  }, [pathname]);

  const navItems = [
    {
      name: "Microsoft Intune",
      path: "/microsoft-intune",
      children: intuneLinks,
    },
    {
      name: "Microsoft 365",
      path: "/microsoft-365",
      children: microsoft365Links,
    },
    { name: "Cloud", path: "/cloud" },
    { name: "Web Development", path: "/web-development" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.path} className={styles.navItemWithDropdown}>
                <Link href={item.path} className={styles.navLink}>
                  {item.name}
                  <ChevronDown size={14} className={styles.chevron} aria-hidden />
                </Link>
                <div className={styles.dropdownList}>
                  {item.children.map((child) => (
                    <Link
                      key={`${item.path}-${child.path}-${child.name}`}
                      href={child.path}
                      className={styles.dropdownListItem}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.path} href={item.path} className={styles.navLink}>
                {item.name}
              </Link>
            )
          )}
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.path}>
                <button
                  type="button"
                  className={styles.mobileLink}
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === item.path ? null : item.path
                    )
                  }
                  aria-expanded={openMobileDropdown === item.path}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    justifyContent: "space-between",
                  }}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: openMobileDropdown === item.path ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {openMobileDropdown === item.path && (
                  <div style={{ paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    {item.children.map((child) => (
                      <Link
                        key={`${item.path}-${child.path}-${child.name}`}
                        href={child.path}
                        className={styles.mobileLink}
                        style={{ fontWeight: 600, fontSize: "0.88rem" }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.path} href={item.path} className={styles.mobileLink}>
                {item.name}
              </Link>
            )
          )}
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
