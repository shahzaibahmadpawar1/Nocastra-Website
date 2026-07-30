import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Counter from "@/src/components/Counter";
import ScrollRevealText from "@/src/components/ScrollRevealText";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { ShieldCheck, Check, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Services - Nocastra IT Management",
  description: "Scale operations securely with Nocastra's Cloud services. Azure, AWS, and Google Cloud management.",
};

const cloudServices = [
  {
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
    accentColor: "#0078d4",
    gifPath: "/gifs/Online world.gif",
    id: "azure-cloud"
  },
  {
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
    accentColor: "#ff9900",
    gifPath: "/gifs/Online world.gif",
    id: "aws-cloud"
  },
  {
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
    accentColor: "#34a853",
    gifPath: "/gifs/Online world (1).gif",
    id: "google-cloud"
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

export default function CloudPage() {
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
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>Cloud Solutions</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              Cloud Solutions
            </h1>
            <p style={{ maxWidth: "600px", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              Secure, scalable, and highly available cloud infrastructure solutions tailored to your enterprise requirements.
            </p>
          </div>
        </section>

        {cloudServices.map((service, index) => (
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
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.5px", fontFamily: "var(--font-headings)" }}>Ready to Secure Your Workspace?</h2>
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
