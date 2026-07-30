import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Counter from "@/src/components/Counter";
import ScrollRevealText from "@/src/components/ScrollRevealText";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { ShieldCheck, Check, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services - Nocastra",
  description: "Comprehensive Web Development, Maintenance, Security, and Optimization services by Nocastra.",
};

const webDevServices = [
  {
    title: "Web & App Development",
    category: "Development",
    intro: "Construct highly responsive, secure, and SEO-optimized web systems. We specialize in custom Next.js, React, Node.js, and API structures tailored to scale your brand.",
    features: [
      "Next.js App Router & Server Components",
      "Full-Stack Node.js & Database Architectures",
      "Custom RESTful and GraphQL API Engineering",
      "Mobile-First Responsive Layout Coding",
      "State Management & Performance Optimization"
    ],
    metric: "100/100 Core Web Vitals",
    metricLabel: "Optimal Google rankings",
    ctaText: "Start Project",
    accentColor: "#2563eb",
    gifPath: "/gifs/Online world.gif",
    id: "web-development"
  },
  {
    title: "Web Platform Maintenance",
    category: "Support & Health",
    intro: "Ensure maximum platform health. We run routine audits, manage database queries, patch modules, clear error logs, and manage backup servers.",
    features: [
      "Weekly Node/NPM Module Updates",
      "Database Backups & Cloud Sync",
      "Broken Links & Asset Fixes",
      "Continuous Log Monitoring & Alerts",
      "Emergency Security Hotfixing"
    ],
    metric: "99.9% Platform Health Index",
    metricLabel: "Maintained consistently",
    ctaText: "Request Maintenance Plan",
    accentColor: "#0d9488",
    gifPath: "/gifs/hero3.gif",
    id: "web-maintenance"
  },
  {
    title: "PageSpeed Optimization",
    category: "Performance",
    intro: "Accelerate loading speeds. We optimize render blocking codes, parse heavy media assets, configure CDNs, minification bundles, and client cache variables.",
    features: [
      "Next.js Image & Font Optimization",
      "JavaScript Bundle Code Splitting",
      "Global Edge CDN Configuration",
      "Core Web Vitals Metric Auditing",
      "Critical CSS Render Inlining"
    ],
    metric: "< 1.2s Load Times",
    metricLabel: "Average First Contentful Paint score",
    ctaText: "Get Performance Report",
    accentColor: "#ca8a04",
    gifPath: "/gifs/Computer troubleshooting.gif",
    id: "speed-optimization"
  },
  {
    title: "Web App Security",
    category: "Cybersecurity",
    intro: "Protect your client data. We install SSL certificates, set up firewalls (WAF), mitigate SQL injections, block cross-site scripting (XSS), and write custom CORS rules.",
    features: [
      "SQL Injection & XSS Guarding",
      "WAF & DDoS Mitigation Filters",
      "Custom CORS & Header Hardening",
      "Penetration Diagnostics Reports",
      "Automated Dependency Scans"
    ],
    metric: "Zero Exploits",
    metricLabel: "Guaranteed through active scanning",
    ctaText: "Run Security Audit",
    accentColor: "#dc2626",
    gifPath: "/gifs/Security On.gif",
    id: "website-security"
  },
  {
    title: "Continuous Site Monitoring",
    category: "Operations",
    intro: "Keep your site operational. We configure downtime ping targets, log tracker hooks, memory leak checks, API payload audits, and server utilization alerts.",
    features: [
      "24/7 Endpoint Ping Monitoring",
      "Log Error Tracing & Slack Alerts",
      "Memory Leak & Heap Profiling",
      "API Performance Benchmark Tests",
      "Automatic Server Scaling Rules"
    ],
    metric: "1-Minute Alert Times",
    metricLabel: "Fastest incident response triggers",
    ctaText: "Setup Monitoring",
    accentColor: "#9333ea",
    gifPath: "/gifs/Server.gif",
    id: "site-monitoring"
  },
  {
    title: "UI/UX & Branding Design",
    category: "Branding",
    intro: "Elevate your visual standards. We mock up high-fidelity user journeys, user interfaces (UI), scalable SVG logos, presentation decks, and brand styling systems.",
    features: [
      "High-Fidelity Figma Web Mockups",
      "Vector SVG Layouts & Visual Assets",
      "Clickable Interactive User Prototypes",
      "Tailored Corporate Logo Designing",
      "Complete Typography & Style Handouts"
    ],
    metric: "100% Unique Concepts",
    metricLabel: "No generic templates or outlines",
    ctaText: "Get Design Consultation",
    accentColor: "#ec4899",
    gifPath: "/gifs/Online world (1).gif",
    id: "graphic-design"
  },
  {
    title: "Nocastra Send Platform",
    category: "SaaS Systems",
    intro: "Deploy customized cloud transit portals. We implement secure encrypted file-sharing hubs, messaging tunnels, and direct notification endpoints.",
    features: [
      "Custom File Sharing Encryption",
      "Transit Tunnel Access Tokens",
      "Automated Message Expiry Cycles",
      "Granular Sender Control Rules",
      "API Trigger Event Integration"
    ],
    metric: "End-to-End Encrypted",
    metricLabel: "Secure data transit system",
    ctaText: "Setup Portal Instance",
    accentColor: "#f97316",
    gifPath: "/gifs/Mobile Marketing.gif",
    id: "nocastra-send"
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

export default function WebDevelopmentPage() {
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
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>Web Development</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              Web Development & Services
            </h1>
            <p style={{ maxWidth: "600px", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              End-to-end web engineering, UI/UX design, performance optimization, and platform security.
            </p>
          </div>
        </section>

        {webDevServices.map((service, index) => (
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
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>Optimized Web Standard Architecture</span>
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
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.5px", fontFamily: "var(--font-headings)" }}>Ready to Optimize Your Systems?</h2>
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
