"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CloudCog,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MonitorCog,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import styles from "./NocastraHomepage.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Microsoft Intune", href: "/microsoft-intune", featured: true },
  { label: "Microsoft 365", href: "/microsoft-365" },
  { label: "Cloud", href: "/cloud" },
  { label: "Web Development", href: "/web-development" },
  { label: "Case Studies", href: "/case-studies" },
];

const services = [
  {
    number: "01",
    title: "Microsoft Intune",
    description:
      "Deploy, secure, and manage Windows, macOS, iOS, and Android endpoints with a clear, controlled device strategy.",
    href: "/microsoft-intune",
    icon: MonitorCog,
  },
  {
    number: "02",
    title: "Microsoft 365",
    description:
      "Bring identity, collaboration, email, files, and endpoint security together into a better-managed Microsoft environment.",
    href: "/microsoft-365",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Cloud Services",
    description:
      "Design and manage dependable cloud infrastructure across Azure, AWS, and Google Cloud.",
    href: "/cloud",
    icon: CloudCog,
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "Build fast, secure websites and business applications that support real workflows instead of generic templates.",
    href: "/web-development",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Security & IT Management",
    description:
      "Reduce risk with server hardening, vulnerability assessment, IT assessment, monitoring, and ongoing expert support.",
    href: "/services",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Digital Operations",
    description:
      "Connect infrastructure, security, websites, and support through one practical technology partner.",
    href: "/contact",
    icon: Globe2,
  },
];

const intuneServices = [
  "Tenant configuration",
  "Windows Autopilot",
  "Device enrollment",
  "Application deployment",
  "Endpoint security",
  "Compliance policies",
  "Configuration profiles",
  "Conditional Access",
  "BitLocker management",
  "BYOD management",
  "Remote troubleshooting",
  "Ongoing managed support",
];

const process = [
  {
    number: "01",
    title: "Consultation",
    body: "Understand your business, current environment, and what success needs to look like.",
  },
  {
    number: "02",
    title: "Assessment",
    body: "Identify risks, bottlenecks, dependencies, and the right technology strategy.",
  },
  {
    number: "03",
    title: "Implementation",
    body: "Deploy the solution with disciplined execution and minimal disruption to users.",
  },
  {
    number: "04",
    title: "Support",
    body: "Stay with you after launch through monitoring, optimisation, troubleshooting, and advice.",
  },
];

const work = [
  {
    client: "Hope of Overseas",
    category: "Web Development",
    description: "Custom web platform development supported by a complete IT assessment.",
    accent: "HO",
  },
  {
    client: "Darb Stations",
    category: "Digital Infrastructure",
    description: "Corporate interface work combined with practical IT assessment and integration.",
    accent: "DS",
  },
  {
    client: "PakNGOs",
    category: "Cyber Security",
    description: "Server hardening and continuous vulnerability audit work for a stronger security posture.",
    accent: "PN",
  },
];

const clients = [
  "codegic",
  "i techtics",
  "Lanop",
  "adilsher.com",
  "Grandeur Metals",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" },
};

export default function NocastraHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.headerWrap}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
            <img src="/images/logos/nocastraLogo.png" alt="Nocastra" className={styles.brandLogo} />
          </Link>

          <div className={styles.desktopNav}>
            <div className={styles.navGroup}>
              <Link href="#services" className={styles.navLink}>
                Services <ChevronDown size={14} />
              </Link>
              <Link href="/microsoft-intune" className={`${styles.navLink} ${styles.navLinkStrong}`}>
                Intune
              </Link>
              <Link href="/microsoft-365" className={styles.navLink}>Microsoft 365</Link>
              <Link href="/cloud" className={styles.navLink}>Cloud</Link>
              <Link href="/web-development" className={styles.navLink}>Web</Link>
              <Link href="/case-studies" className={styles.navLink}>Work</Link>
            </div>
            <Link href="/contact" className={styles.navCta}>
              Book a consultation <ArrowUpRight size={15} />
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.mobileNavLink} ${item.featured ? styles.mobileNavLinkFeatured : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />
          <div className={styles.container}>
            <div className={styles.heroLayout}>
              <motion.div {...fadeUp} className={styles.heroCopy}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  Microsoft Intune Specialist
                </div>
                <h1 className={styles.heroTitle}>
                  Secure the workplace.
                  <span className={styles.heroTitleAccent}> Simplify IT.</span>
                  <br />
                  Build what&apos;s next.
                </h1>
                <p className={styles.heroText}>
                  Nocastra helps businesses manage secure endpoints, modernise cloud environments, and build digital platforms — with real people behind the technology.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>
                    Talk to an IT expert <ArrowUpRight size={17} />
                  </Link>
                  <Link href="#services" className={styles.secondaryButton}>
                    Explore services <ArrowRight size={17} />
                  </Link>
                </div>
                <div className={styles.heroProof}>
                  <div className={styles.proofItem}>
                    <Check size={16} />
                    <span>Microsoft Partner</span>
                  </div>
                  <div className={styles.proofItem}>
                    <Check size={16} />
                    <span>Same-day human support</span>
                  </div>
                  <div className={styles.proofItem}>
                    <Check size={16} />
                    <span>Global delivery</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.heroVisual}
              >
                <div className={styles.consoleShell}>
                  <div className={styles.consoleTopbar}>
                    <div className={styles.windowDots}>
                      <span /> <span /> <span />
                    </div>
                    <div className={styles.consoleLabel}>Nocastra / IT operations</div>
                    <div className={styles.livePill}>
                      <span /> Live
                    </div>
                  </div>

                  <div className={styles.consoleBody}>
                    <div className={styles.consoleSidebar}>
                      <div className={styles.sideLogo}>N</div>
                      <span className={styles.sideLineActive} />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className={styles.consoleMain}>
                      <div className={styles.consoleHeadingRow}>
                        <div>
                          <div className={styles.miniKicker}>WORKSPACE OVERVIEW</div>
                          <div className={styles.consoleHeading}>Everything under control.</div>
                        </div>
                        <div className={styles.workspaceTag}>Managed environment</div>
                      </div>

                      <div className={styles.metricRow}>
                        <div className={styles.metricCard}>
                          <div className={styles.metricTop}><span>Endpoint management</span><MonitorCog size={15} /></div>
                          <strong>Intune</strong>
                          <div className={styles.metricBar}><span style={{ width: "86%" }} /></div>
                          <small>Windows · macOS · iOS · Android</small>
                        </div>
                        <div className={styles.metricCard}>
                          <div className={styles.metricTop}><span>Identity & security</span><LockKeyhole size={15} /></div>
                          <strong>Protected</strong>
                          <div className={styles.metricBar}><span style={{ width: "94%" }} /></div>
                          <small>Policies · Access · Defender</small>
                        </div>
                      </div>

                      <div className={styles.flowCard}>
                        <div className={styles.flowHeader}>
                          <span>Technology stack</span>
                          <span className={styles.flowStatus}>Operational</span>
                        </div>
                        <div className={styles.flowNodes}>
                          <div className={styles.flowNode}><MonitorCog size={16} /><span>Devices</span></div>
                          <div className={styles.flowConnector} />
                          <div className={styles.flowNode}><ShieldCheck size={16} /><span>Security</span></div>
                          <div className={styles.flowConnector} />
                          <div className={styles.flowNode}><CloudCog size={16} /><span>Cloud</span></div>
                          <div className={styles.flowConnector} />
                          <div className={styles.flowNode}><PanelsTopLeft size={16} /><span>Apps</span></div>
                        </div>
                      </div>

                      <div className={styles.consoleFooterRow}>
                        <div className={styles.signalCard}>
                          <span className={styles.signalIcon}><Sparkles size={15} /></span>
                          <div>
                            <strong>Human support</strong>
                            <small>Direct access to experienced consultants.</small>
                          </div>
                        </div>
                        <div className={styles.activityCard}>
                          <span className={styles.activityPulse} />
                          <div>
                            <strong>Ready</strong>
                            <small>Systems aligned for work.</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingNoteOne}>
                  <ShieldCheck size={16} /> Endpoint security
                </div>
                <div className={styles.floatingNoteTwo}>
                  <UsersRound size={16} /> Real people. Real support.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.clientStrip} aria-label="Nocastra clients">
          <div className={styles.container}>
            <div className={styles.clientIntro}>
              <span>Trusted by businesses that value reliability</span>
              <span className={styles.clientCount}>150+ organisations</span>
            </div>
            <div className={styles.clientMarquee}>
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client}-${index}`} className={styles.clientName}>{client}</div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.statementSection}`}>
          <div className={styles.container}>
            <motion.div {...fadeUp} className={styles.statementGrid}>
              <div className={styles.sectionEyebrow}>The Nocastra approach</div>
              <div>
                <h2 className={styles.statementTitle}>
                  Your IT shouldn&apos;t feel like five different vendors.
                </h2>
                <p className={styles.statementText}>
                  We bring endpoint management, Microsoft 365, cloud infrastructure, security, web development, and human support into one practical technology relationship.
                </p>
                <Link href="/about" className={styles.textLink}>
                  Why businesses work with Nocastra <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeadRow}>
              <motion.div {...fadeUp}>
                <div className={styles.sectionEyebrow}>What we do</div>
                <h2 className={styles.sectionTitle}>One team across the stack.</h2>
              </motion.div>
              <motion.p {...fadeUp} className={styles.sectionIntro}>
                From a single device rollout to a full business platform, we focus on the technology that actually keeps your organisation moving.
              </motion.p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.number}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                  >
                    <Link href={service.href} className={styles.serviceCard}>
                      <div className={styles.serviceTop}>
                        <span className={styles.serviceNumber}>{service.number}</span>
                        <span className={styles.serviceIcon}><Icon size={19} /></span>
                      </div>
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                      <div className={styles.serviceArrow}><ArrowUpRight size={18} /></div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.intuneSection}`}>
          <div className={styles.intuneBackdrop} />
          <div className={styles.container}>
            <div className={styles.intuneLayout}>
              <motion.div {...fadeUp} className={styles.intuneCopy}>
                <div className={styles.sectionEyebrow}>Flagship service</div>
                <h2 className={styles.sectionTitle}>Microsoft Intune, done properly.</h2>
                <p className={styles.sectionText}>
                  Managing devices should not be complicated. Nocastra helps businesses configure, deploy, secure, monitor, and support Microsoft Intune across the modern workplace.
                </p>
                <div className={styles.intuneButtons}>
                  <Link href="/microsoft-intune" className={styles.darkButton}>
                    Explore Intune services <ArrowUpRight size={17} />
                  </Link>
                  <span className={styles.microCopy}>Real human support · No chatbots</span>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className={styles.intunePanel}>
                <div className={styles.intunePanelHead}>
                  <div>
                    <span className={styles.panelKicker}>MICROSOFT INTUNE</span>
                    <strong>Endpoint management</strong>
                  </div>
                  <div className={styles.panelBadge}><span /> Configured</div>
                </div>
                <div className={styles.intuneList}>
                  {intuneServices.map((item, index) => (
                    <div key={item} className={styles.intuneItem}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                      <Check size={15} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <motion.div {...fadeUp} className={styles.centerHeading}>
              <div className={styles.sectionEyebrow}>How we work</div>
              <h2 className={styles.sectionTitle}>Simple process. Serious execution.</h2>
              <p className={styles.sectionIntroCenter}>
                We turn complicated requirements into a straightforward technology lifecycle.
              </p>
            </motion.div>

            <div className={styles.processGrid}>
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className={styles.processCard}
                >
                  <div className={styles.processNumber}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  {index < process.length - 1 && <ArrowRight className={styles.processArrow} size={18} />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.workSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeadRow}>
              <motion.div {...fadeUp}>
                <div className={styles.sectionEyebrow}>Selected work</div>
                <h2 className={styles.sectionTitle}>Proof matters more than promises.</h2>
              </motion.div>
              <motion.div {...fadeUp} className={styles.headAction}>
                <p>Work across web development, infrastructure, security, and business technology.</p>
                <Link href="/case-studies" className={styles.textLink}>View case studies <ArrowUpRight size={16} /></Link>
              </motion.div>
            </div>

            <div className={styles.workGrid}>
              {work.map((item, index) => (
                <motion.article
                  key={item.client}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  className={styles.workCard}
                >
                  <div className={styles.workVisual}>
                    <div className={styles.workVisualGrid} />
                    <div className={styles.workMonogram}>{item.accent}</div>
                    <div className={styles.workCorner}>CASE / 0{index + 1}</div>
                  </div>
                  <div className={styles.workBody}>
                    <div className={styles.workMeta}>{item.category}</div>
                    <h3>{item.client}</h3>
                    <p>{item.description}</p>
                    <Link href="/case-studies" className={styles.cardLink}>Read case study <ArrowUpRight size={16} /></Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.proofSection}`}>
          <div className={styles.container}>
            <motion.div {...fadeUp} className={styles.proofShell}>
              <div>
                <div className={styles.sectionEyebrow}>Why Nocastra</div>
                <h2 className={styles.proofTitle}>Technology is only valuable when someone dependable is behind it.</h2>
              </div>
              <div className={styles.proofList}>
                <div><Check size={17} /><span>Microsoft Partner</span></div>
                <div><Check size={17} /><span>Certified Azure, AWS & VMware professionals</span></div>
                <div><Check size={17} /><span>Same-day technical support</span></div>
                <div><Check size={17} /><span>Dedicated consultants</span></div>
                <div><Check size={17} /><span>Security-first approach</span></div>
                <div><Check size={17} /><span>Long-term technology partnership</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.finalCtaSection}`}>
          <div className={styles.container}>
            <motion.div {...fadeUp} className={styles.finalCta}>
              <div className={styles.finalOrb} />
              <div className={styles.finalContent}>
                <div className={styles.eyebrowLight}>Bring us the problem.</div>
                <h2>We&apos;ll bring the plan.</h2>
                <p>
                  Tell us what is slowing your business down — from device management and cloud security to a new digital platform — and we&apos;ll help you map the next step.
                </p>
                <div className={styles.finalActions}>
                  <Link href="/contact" className={styles.lightButton}>Start a conversation <ArrowUpRight size={17} /></Link>
                  <Link href="/microsoft-intune" className={styles.lightOutlineButton}>Explore Microsoft Intune <ArrowRight size={17} /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div>
              <Link href="/" className={styles.footerBrand}>
                <img src="/images/logos/nocastraLogo.png" alt="Nocastra" className={styles.footerLogo} />
              </Link>
              <p className={styles.footerBlurb}>
                Humanised IT support for secure workplaces, modern infrastructure, and business-focused digital solutions.
              </p>
            </div>
            <div className={styles.footerContact}>
              <span>Let&apos;s talk</span>
              <a href="mailto:info@nocastra.com">info@nocastra.com</a>
              <a href="tel:+923214682968">+92 321 4682968</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} Nocastra. All rights reserved.</span>
            <div>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms-and-conditions">Terms</Link>
              <a href="https://speedhost.pk" target="_blank" rel="noreferrer">SpeedHost ↗</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
