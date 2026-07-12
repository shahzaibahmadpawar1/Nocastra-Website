import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Counter from "@/src/components/Counter";
import ScrollRevealText from "@/src/components/ScrollRevealText";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { ShieldCheck, Check, Server, Terminal, Cloud, ShieldAlert, Users, Award, Lock, ArrowRight } from "lucide-react";

// Service Dataset
const itManagementServices = {
  "azure-cloud": {
    title: "Azure Cloud Management",
    category: "Cloud Services",
    intro: "Scale operations securely on Microsoft Azure. Our engineers manage VPC environments, databases, active directories, and scale protocols.",
    features: [
      "VPC and Network Subnets Configuration",
      "Azure SQL and Cosmos DB Optimization",
      "Identity & Access Management (Entra ID)",
      "Automated Cost & Billing Auditing",
      "Auto-Scaling & High Availability Groups"
    ],
    metric: "99.99% Target Uptime",
    metricLabel: "Cloud Architecture reliability",
    ctaText: "Migrate to Azure",
    accentColor: "#0078d4"
  },
  "aws-cloud": {
    title: "AWS Cloud Infrastructure",
    category: "Cloud Services",
    intro: "Maximize efficiency and optimize workloads on Amazon Web Services. We construct VPC networks, EC2 configurations, RDS optimization, and serverless clusters.",
    features: [
      "Secure Multi-AZ Architecture Design",
      "AWS IAM Policies and Credentials Audit",
      "S3 Caching & CloudFront CDNs",
      "RDS PostgreSQL/MySQL Tuning",
      "Serverless Lambda Deployments"
    ],
    metric: "35% Average Cost Savings",
    metricLabel: "Achieved via billing audits",
    ctaText: "Optimize AWS Setup",
    accentColor: "#ff9900"
  },
  "google-cloud": {
    title: "Google Cloud Platform",
    category: "Cloud Services",
    intro: "Deploy applications with Google Cloud Platform's Kubernetes and database clusters. We design robust compute networks, BigQuery data analytics, and cloud storage systems.",
    features: [
      "Google Kubernetes Engine (GKE) Setup",
      "IAM Credentials & Access Policies",
      "Cloud SQL & Firebase Scalability",
      "BigQuery Data Warehousing Audit",
      "Load Balancers & Global CDNs"
    ],
    metric: "10x Scaling Efficiency",
    metricLabel: "Via automated orchestrations",
    ctaText: "Consult GCP Architect",
    accentColor: "#34a853"
  },
  "server-hardening": {
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
    accentColor: "#2563eb"
  },
  "vulnerability-assessment": {
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
    accentColor: "#dc2626"
  },
  "complete-it-assessment": {
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
    accentColor: "#4f46e5"
  },
  "email-security": {
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
    accentColor: "#0d9488"
  },
  "microsoft-365": {
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
    accentColor: "#0078d4"
  },
  "microsoft-intune": {
    title: "Microsoft Intune Deployment",
    category: "Infrastructure",
    intro: "Enroll, secure, and manage employee devices remotely. Enforce corporate compliance configurations on Windows, macOS, iOS, and Android.",
    features: [
      "Zero-Touch Remote Device Enrollment",
      "Compliance Policy Enforcement",
      "Silent App Package Deployment",
      "Remote Data Wipe for Lost Devices",
      "BitLocker & FileVault Encryption Policies"
    ],
    metric: "100% Device Auditing",
    metricLabel: "Real-time compliance coverage",
    ctaText: "Deploy Intune Setup",
    accentColor: "#0284c7"
  }
};

const itManagementFaqs = [
  {
    question: "What are your support response times under SLA agreements?",
    answer: "We offer guaranteed response times under our custom SLAs. Critical incidents are addressed within 15 minutes, standard network issues within 1 hour, and routine configuration requests within 4 hours."
  },
  {
    question: "How secure is your cloud and server hardening setup?",
    answer: "We perform audit-grade system hardening following global CIS compliance benchmarks. This includes firewall rule audits, closing open port registries, securing SSH key permissions, and configuring active intrusion alerts."
  },
  {
    question: "How frequently do you perform backup synchronizations?",
    answer: "We perform automated daily local snapshots and secure off-site cloud backups weekly, ensuring 99.99% data safety and rapid point-in-time recoveries in case of major disasters."
  },
  {
    question: "Do you assist with migration to AWS, Azure, or Google Cloud?",
    answer: "Yes, our certified cloud engineers plan and execute end-to-end migrations, database replication, server configurations, and cost optimizations for all major cloud providers."
  }
];

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for the slugs
export async function generateStaticParams() {
  return Object.keys(itManagementServices).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = itManagementServices[slug as keyof typeof itManagementServices];
  
  if (!service) {
    return {
      title: "Service Not Found - Nocastra",
    };
  }

  return {
    title: `${service.title} - Nocastra IT Management`,
    description: `${service.intro} Expert solutions by Nocastra specialists.`,
  };
}

const splitMetric = (metricStr: string) => {
  const match = metricStr.match(/^([<>\s]*\d+[\d\.\%\+\-\/xs]*|Zero|End-to-End)/);
  if (!match) return { numberPart: metricStr, textPart: "" };
  const numberPart = match[0].trim();
  const textPart = metricStr.substring(match[0].length).trim();
  return { numberPart, textPart };
};

export default async function ITManagementPage({ params }: Props) {
  const { slug } = await params;
  const service = itManagementServices[slug as keyof typeof itManagementServices];

  if (!service) {
    notFound();
  }

  let gifPath = "";
  if (slug === "azure-cloud" || slug === "aws-cloud") {
    gifPath = "/Online world.gif";
  } else if (slug === "google-cloud") {
    gifPath = "/Online world (1).gif";
  } else if (slug === "microsoft-365" || slug === "microsoft-intune") {
    gifPath = "/hero3.gif";
  } else if (slug === "server-hardening") {
    gifPath = "/hero1.gif";
  } else if (slug === "vulnerability-assessment" || slug === "complete-it-assessment") {
    gifPath = "/hero2.gif";
  } else if (slug === "email-security") {
    gifPath = "/Security On.gif";
  }

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

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "80px", backgroundColor: "#f8fafc" }}>
        
        {/* Breadcrumb Header */}
        <section style={{ 
          backgroundColor: "#f1f5f9",
          padding: "60px 5% 40px",
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
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; IT Management &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>{service.title}</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              {service.title}
            </h1>
            <span style={{ 
              display: "inline-block", 
              backgroundColor: "var(--primary-light)", 
              color: "var(--primary)", 
              padding: "6px 14px", 
              borderRadius: "4px", 
              fontWeight: 700, 
              fontSize: "0.8rem",
              textTransform: "uppercase" 
            }}>
              {service.category}
            </span>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: "80px 5%" }}>
          <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "grid", 
            gridTemplateColumns: "1.2fr 0.8fr", 
            gap: "64px",
            alignItems: "start"
          }}>
            
            {/* Left side details */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "20px", color: "var(--text-primary)" }}>Service Overview</h2>
              <p style={{ 
                fontSize: "1.1rem", 
                lineHeight: "1.7", 
                color: "var(--text-secondary)", 
                marginBottom: "40px" 
              }}>
                {service.intro}
              </p>

              <h3 style={{ fontSize: "1.35rem", marginBottom: "20px", color: "var(--text-primary)" }}>Key Infrastructure Deliverables</h3>
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
                <Link href="/company/contact" className="btn-primary">
                  {service.ctaText} <ArrowRight size={18} />
                </Link>
              </div>

              <ScrollRevealText text="At Nocastra, we commit to absolute operational safety. Our cloud architectures, automated compliance checks, and proactive system hardening configurations are built with a single focus: keeping your infrastructure resilient, high-performing, and completely secure against any threat." />
            </div>

            {/* Right side layout */}
            <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
              {gifPath && (
                <div style={{ 
                  width: "100%", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img 
                    src={gifPath} 
                    alt={service.title} 
                    style={{ 
                      width: "100%", 
                      height: "auto", 
                      maxHeight: "450px", 
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
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <Award size={20} style={{ color: "var(--secondary)" }} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>15+ Years Market Experience</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Nocastra Section */}
        <section style={{ 
          backgroundColor: "white", 
          borderTop: "1px solid var(--border-color)", 
          padding: "80px 5%" 
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", fontWeight: 700 }}>Service Standards</span>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", letterSpacing: "-0.5px", marginTop: "12px", color: "var(--text-primary)", fontFamily: "var(--font-headings)" }}>Why Choose Nocastra?</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              <div style={{ padding: "32px", border: "1px solid var(--border-color)", borderRadius: "20px", backgroundColor: "var(--bg-primary)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-primary)" }}>Guaranteed SLA Response</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>We operate under strict Service Level Agreements, ensuring critical network exploits are targeted and solved within 15 minutes of trigger alerts.</p>
              </div>
              <div style={{ padding: "32px", border: "1px solid var(--border-color)", borderRadius: "20px", backgroundColor: "var(--bg-primary)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-primary)" }}>Certified Experts Only</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>Your platforms are managed directly by senior web developers, systems architects, and security auditors carrying years of field experience.</p>
              </div>
              <div style={{ padding: "32px", border: "1px solid var(--border-color)", borderRadius: "20px", backgroundColor: "var(--bg-primary)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-primary)" }}>Proactive Infrastructure</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>We don't wait for your servers to crash. Our monitoring scripts scan network integrity recursively to fix bottlenecks before they affect users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic FAQ Accordion Section */}
        <section style={{ 
          backgroundColor: "#f8fafc", 
          borderTop: "1px solid var(--border-color)", 
          padding: "80px 5%" 
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", fontWeight: 700 }}>FAQ</span>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", letterSpacing: "-0.5px", marginTop: "12px", color: "var(--text-primary)", fontFamily: "var(--font-headings)" }}>Common Questions</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {itManagementFaqs.map((faq, idx) => (
                <details key={idx} style={{ 
                  border: "1px solid var(--border-color)", 
                  borderRadius: "16px", 
                  backgroundColor: "white",
                  overflow: "hidden",
                  padding: "24px"
                }}>
                  <summary style={{ 
                    fontSize: "1.05rem", 
                    fontWeight: 700, 
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    outline: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span>{faq.question}</span>
                    <span style={{ color: "var(--primary)", fontSize: "1.2rem", fontWeight: "bold" }}>↓</span>
                  </summary>
                  <div style={{ 
                    marginTop: "16px",
                    fontSize: "0.95rem", 
                    color: "var(--text-secondary)", 
                    lineHeight: "1.6",
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "16px"
                  }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

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
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.5px", fontFamily: "var(--font-headings)" }}>Ready to Secure Your Workspace?</h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto 36px", lineHeight: "1.6" }}>
              Get a free consultation analysis. Talk directly with Nocastra system engineers and find cost-effective solutions custom designed around your requirements.
            </p>
            <Link href="/company/contact" className="btn-primary" style={{ backgroundColor: "var(--primary)", border: "none", padding: "16px 36px", fontSize: "1rem" }}>
              Get Free Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
