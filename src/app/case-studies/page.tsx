import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { ArrowRight, Smartphone, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies - Nocastra",
  description: "Read our demo case studies showcasing Microsoft Intune deployments and Web Development projects.",
};

const caseStudies = [
  {
    id: "intune-deployment-demo",
    title: "Global Enterprise Intune Migration",
    category: "Microsoft Intune",
    icon: Smartphone,
    color: "#0284c7",
    intro: "A seamless transition of 5,000+ devices to Microsoft Intune for enhanced security and automated compliance.",
    results: [
      "99% compliance rate across all OS types",
      "Zero-touch enrollment implemented",
      "Saved 40 hours/week in IT administration"
    ]
  },
  {
    id: "web-dev-scale-demo",
    title: "Next.js E-Commerce Replatforming",
    category: "Web Development",
    icon: Terminal,
    color: "#2563eb",
    intro: "Rebuilt a monolithic e-commerce platform using Next.js App Router for blazing fast performance and SEO.",
    results: [
      "Core Web Vitals improved to 100/100",
      "Conversion rate increased by 24%",
      "Server costs reduced by 30% with edge caching"
    ]
  }
];

export default function CaseStudiesPage() {
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
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>Case Studies</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              Our Case Studies
            </h1>
            <p style={{ maxWidth: "600px", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              Explore how Nocastra empowers organizations through intelligent infrastructure and high-performance web development.
            </p>
          </div>
        </section>

        {/* Demo Case Studies Section */}
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
              gap: "40px" 
            }}>
              {caseStudies.map((study) => {
                const Icon = study.icon;
                return (
                  <div key={study.id} style={{ 
                    backgroundColor: "white", 
                    borderRadius: "24px", 
                    border: "1px solid var(--border-color)",
                    padding: "40px",
                    boxShadow: "var(--shadow-md)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    {/* Decorative Background */}
                    <div style={{ 
                      position: "absolute", 
                      top: "-20px", 
                      right: "-20px", 
                      width: "150px", 
                      height: "150px", 
                      backgroundColor: `${study.color}15`, 
                      borderRadius: "50%",
                      zIndex: 0
                    }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ 
                        backgroundColor: `${study.color}20`, 
                        color: study.color, 
                        width: "50px", 
                        height: "50px", 
                        borderRadius: "16px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        marginBottom: "24px"
                      }}>
                        <Icon size={24} />
                      </div>
                      
                      <span style={{ 
                        display: "inline-block", 
                        color: study.color, 
                        fontWeight: 700, 
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                        letterSpacing: "0.5px"
                      }}>
                        {study.category}
                      </span>
                      
                      <h3 style={{ fontSize: "1.75rem", marginBottom: "16px", color: "var(--text-primary)", lineHeight: "1.3" }}>
                        {study.title}
                      </h3>
                      
                      <p style={{ 
                        fontSize: "1.05rem", 
                        lineHeight: "1.6", 
                        color: "var(--text-secondary)", 
                        marginBottom: "32px" 
                      }}>
                        {study.intro}
                      </p>

                      <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "16px", marginBottom: "32px" }}>
                        <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px", fontWeight: 700 }}>Key Results</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                          {study.results.map((result, idx) => (
                            <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500 }}>
                              <div style={{ color: study.color, marginTop: "2px" }}>
                                <ArrowRight size={16} />
                              </div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="btn-primary" style={{ width: "100%", backgroundColor: study.color, border: "none" }}>
                        Read Full Story
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
