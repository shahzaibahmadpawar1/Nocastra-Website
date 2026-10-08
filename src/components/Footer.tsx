import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img
              src="/images/logos/nocastraLogo.png"
              alt="Nocastra"
              style={{ height: "26px", width: "auto", display: "block" }}
            />
          </Link>
          <p className={styles.aboutText}>Humanized IT Support by a Team of Experts.</p>
        </div>
        <div className={styles.contactInfo}>
          <a href="mailto:info@nocastra.com" className={styles.contactLine}>
            <Mail size={14} className={styles.contactIcon} />
            info@nocastra.com
          </a>
          <a href="tel:+923214682968" className={styles.contactLine}>
            <Phone size={14} className={styles.contactIcon} />
            +92 321 4682968
          </a>
        </div>
      </div>

      <div className={styles.linkGroups}>
        <div className={styles.group}>
          <h3>Microsoft Intune</h3>
          <div className={styles.links}>
            <Link href="/microsoft-intune" className={styles.link}>Overview</Link>
            <Link href="/microsoft-intune/consulting" className={styles.link}>Consulting</Link>
            <Link href="/microsoft-intune/deployment" className={styles.link}>Deployment</Link>
            <Link href="/windows-autopilot" className={styles.link}>Windows Autopilot</Link>
            <Link href="/microsoft-intune/managed-services" className={styles.link}>Managed Services</Link>
            <Link href="/microsoft-intune/endpoint-security" className={styles.link}>Endpoint Security</Link>
          </div>
        </div>

        <div className={styles.group}>
          <h3>Microsoft 365</h3>
          <div className={styles.links}>
            <Link href="/microsoft-365" className={styles.link}>Overview</Link>
            <Link href="/microsoft-teams" className={styles.link}>Microsoft Teams</Link>
            <Link href="/microsoft-exchange-online" className={styles.link}>Exchange Online</Link>
            <Link href="/sharepoint-online" className={styles.link}>SharePoint Online</Link>
            <Link href="/microsoft-entra-id" className={styles.link}>Microsoft Entra ID</Link>
            <Link href="/microsoft-defender" className={styles.link}>Microsoft Defender</Link>
          </div>
        </div>

        <div className={styles.group}>
          <h3>Company</h3>
          <div className={styles.links}>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/cloud" className={styles.link}>Cloud</Link>
            <Link href="/web-development" className={styles.link}>Web Development</Link>
            <Link href="/case-studies" className={styles.link}>Case Studies</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Nocastra. All rights reserved.
        </div>
        <div className={styles.bottomLinks}>
          <span className={styles.bottomLink}>Terms &amp; Conditions</span>
          <span className={styles.bottomLink}>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
