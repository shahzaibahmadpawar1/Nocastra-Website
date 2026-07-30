import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Counter from "@/src/components/Counter";
import ScrollRevealText from "@/src/components/ScrollRevealText";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { ShieldCheck, Check, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft 365 & Security - Nocastra",
  description: "Microsoft 365 Management, Security Assessments, and Infrastructure Hardening services.",
};

const m365Services = [
  {
    title: "Microsoft 365 Management",
    category: "Infrastructure",
    intro: "We manage your cloud-based office suite on a granular level with multiple subscriptions for reduced licensing costs and high integration.",
    features: [
      "Granular User & Group Access Configs",
      "SharePoint & OneDrive Security Setup",
      "Exchange Email Inbox Migration",
      "Licensing Audits for Cost Reduction",
      "Teams Communication Access Controls"
    ],
    metric: "25% License Saving",
    metricLabel: "Achieved via cost optimizations",
    ctaText: "Manage M365 Licenses",
    accentColor: "#0078d4",
    gifPath: "/gifs/hero3.gif",
    id: "microsoft-365"
  },
  {
    title: "Server Hardening Solutions",
    category: "Cybersecurity",
    intro: "The sole purpose of system hardening is to reduce the risk of potential attacks on your IT infrastructure. We secure OS settings, lock database ports, configure firewalls, and audit logs.",
    features: [
      "Firewall & Network Filtering Setup",
      "Brute-Force Attack Blockers (Fail2ban)",
      "Unused Port Closure & Services Lock",
      "SSH Key Access & Password Deprecation",
      "Automatic OS Patching & Updates"
    ],
    metric: "98% Risk Mitigation",
    metricLabel: "Against external exploit scans",
    ctaText: "Hardening Audit",
    accentColor: "#2563eb",
    gifPath: "/gifs/hero1.gif",
    id: "server-hardening"
  },
  {
    title: "Vulnerability Assessment",
    category: "Cybersecurity",
    intro: "We cover each human and machine security aspect while performing our tests, scanning files, auditing configurations, and presenting detailed remediation advice.",
    features: [
      "Automated Port & IP Vulnerability Scans",
      "OWASP Top 10 Web Exploit Scans",
      "Credentialed & Non-Credentialed Audits",
      "Detailed Compliance PDF Reports",
      "Remediation Consultations"
    ],
    metric: "100% Comprehensive Scan",
    metricLabel: "Audit-grade reporting",
    ctaText: "Request Security Scan",
    accentColor: "#dc2626",
    gifPath: "/gifs/hero2.gif",
    id: "vulnerability-assessment"
  },
  {
    title: "Complete IT Assessment",
    category: "Consulting",
    intro: "Get a deeper, audit-grade understanding of your IT infrastructure. We evaluate hardware lifecycles, network latency, software stacks, and security compliance matrices.",
    features: [
      "Network Infrastructure Topography Analysis",
      "Employee Device Access Audits",
      "Software Version & License Audits",
      "Server Uptime & Capacity Reports",
      "IT Budget Optimization Strategy"
    ],
    metric: "15+ Years Tech Insights",
    metricLabel: "Supplied by senior specialists",
    ctaText: "Schedule Audit",
    accentColor: "#4f46e5",
    gifPath: "/gifs/hero2.gif",
    id: "complete-it-assessment"
  },
  {
    title: "Email Security Services",
    category: "Cybersecurity",
    intro: "Protect corporate communications against email spoofing, phishing scams, and ransomware. We configure records, filters, and filters.",
    features: [
      "SPF, DKIM, and DMARC Verification",
      "Phishing Simulation & User Training",
      "Exchange/Google Workspace Security Audits",
      "Advanced Spam & Malware Filters",
      "Encrypted Mail Pipelines Setup"
    ],
    metric: "99.2% Phishing Reduction",
    metricLabel: "Through custom policy filters",
    ctaText: "Secure Email Logs",
    accentColor: "#0d9488",
    gifPath: "/gifs/Security On.gif",
    id: "email-security"
  }
];

const splitMetric = (metricStr: string) => {
  const match = metricStr.match(/^([<>\s]*\d+[\d\.\%\+\-\/xs]*|Zero|End-to-End)/);
  if (!match) return { numberPart: metricStr, textPart: "" };
  const numberPart = match[0].trim();
  const textPart = metricStr.substring(match[0].length).trim();
  return { numberPart, textPart };
};

const splitFeature = (feat: string) => {
  const words = feat.split(" ");
  const highlightCount = Math.min(2, words.length);
  const boldPart = words.slice(0, highlightCount).join(" ");
  const restPart = words.slice(highlightCount).join(" ");
  return (
    <>
      <strong>{boldPart}</strong> {restPart}
    </>
  );
};

export default function Microsoft365Page() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
        
        {/* Breadcrumb Header */}
        <section style={{ 
          backgroundColor: "#f1f5f9",
          padding: "140px 5% 40px",
          borderBottom: "1px solid #cbd5e1",
          position: "relative",
          overflow: "hidden"
        }}>
          <ParticlesBanner />
          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ 
              fontSize: "0.85rem", 
              color: "var(--text-muted)", 
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px"
            }}>
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>Microsoft 365 & Security</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              Microsoft 365 & Security Services
            </h1>
            <p style={{ maxWidth: "600px", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              Comprehensive infrastructure management, vulnerability assessments, and holistic system hardening.
            </p>
          </div>
        </section>

        {m365Services.map((service, index) => (
          <section key={service.id} id={service.id} style={{ 
            padding: "80px 5%", 
            backgroundColor: index % 2 === 0 ? "white" : "#f8fafc",
            borderBottom: "1px solid var(--border-color)"
          }}>
            <div className="responsive-grid-service" style={{ 
              maxWidth: "1200px", 
              margin: "0 auto"
            }}>
              
              {/* Left side details */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ 
                  display: "inline-block", 
                  backgroundColor: "var(--primary-light)", 
                  color: "var(--primary)", 
                  padding: "6px 14px", 
                  borderRadius: "4px", 
                  fontWeight: 700, 
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  alignSelf: "flex-start",
                  marginBottom: "16px"
                }}>
                  {service.category}
                </span>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--text-primary)" }}>{service.title}</h2>
                <p style={{ 
                  fontSize: "1.1rem", 
                  lineHeight: "1.7", 
                  color: "var(--text-secondary)", 
                  marginBottom: "40px" 
                }}>
                  {service.intro}
                </p>

                <h3 style={{ fontSize: "1.35rem", marginBottom: "20px", color: "var(--text-primary)" }}>Key Deliverables</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                      <div style={{ 
                        backgroundColor: "var(--primary-light)", 
                        color: "var(--primary)", 
                        width: "24px", 
                        height: "24px", 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        marginTop: "2px",
                        flexShrink: 0
                      }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: "1rem", color: "var(--text-secondary)", fontWeight: 500 }}>{splitFeature(feature)}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link href="/contact" className="btn-primary">
                    {service.ctaText} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right side layout */}
              <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
                {service.gifPath && (
                  <div style={{ 
                    width: "100%", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img 
                      src={service.gifPath} 
                      alt={service.title} 
                      style={{ 
                        width: "100%", 
                        height: "auto", 
                        maxHeight: "350px", 
                        objectFit: "contain" 
                      }} 
                    />
                  </div>
                )}

                {/* Stats widget card */}
                <div style={{ 
                  backgroundColor: "white", 
                  border: "1px solid var(--border-color)", 
                  borderRadius: "24px", 
                  padding: "40px", 
                  boxShadow: "var(--shadow-lg)"
                }}>
                  <h3 style={{ fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", marginBottom: "16px" }}>Performance Metric</h3>
                  
                  {(() => {
                    const { numberPart, textPart } = splitMetric(service.metric);
                    return (
                      <>
                        <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", letterSpacing: "-1px", marginBottom: "4px", fontFamily: "var(--font-headings)" }}>
                          <Counter value={numberPart} />
                        </div>
                        {textPart && (
                          <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", letterSpacing: "-1px", marginBottom: "16px", fontFamily: "var(--font-headings)", lineHeight: "1.15" }}>
                            {textPart}
                          </div>
                        )}
                      </>
                    );
                  })()}

                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "32px", fontWeight: 500 }}>
                    {service.metricLabel}
                  </p>

                  <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <ShieldCheck size={20} style={{ color: "var(--secondary)" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>Audit-Grade Security Protocols</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <Users size={20} style={{ color: "var(--secondary)" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>Dedicated Team of Support Experts</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ))}

        {/* CTA Banner Section */}
        <section style={{ 
          padding: "60px 5% 100px", 
          backgroundColor: "#f8fafc" 
        }}>
          <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            backgroundColor: "#0c205f",
            borderRadius: "30px",
            padding: "60px 40px",
            textAlign: "center",
            boxShadow: "var(--shadow-xl)"
          }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.5px", fontFamily: "var(--font-headings)" }}>Ready to Secure Your Systems?</h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto 36px", lineHeight: "1.6" }}>
              Get a free consultation analysis. Talk directly with Nocastra system engineers and find cost-effective solutions custom designed around your requirements.
            </p>
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: "var(--primary)", border: "none", padding: "16px 36px", fontSize: "1rem" }}>
              Get Free Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
