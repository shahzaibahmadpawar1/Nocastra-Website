import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { Check, ShieldCheck, Users, Award, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Nocastra",
  description: "Learn more about Nocastra's history, mission, and how we deliver simplified, humanized IT support and secure custom web development.",
};

export default function AboutPage() {
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
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; Company &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>About Us</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              About Nocastra
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "800px" }}>
              Simplifying corporate IT management and delivering audit-grade cybersecurity solutions since 2011.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section style={{ padding: "80px 5%" }}>
          <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "grid", 
            gridTemplateColumns: "1.1fr 0.9fr", 
            gap: "80px",
            alignItems: "center"
          }}>
            
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "20px", color: "var(--text-primary)" }}>Our Story & Mission</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "24px" }}>
                Nocastra stands for simplified, humanized IT support. For over 15 years, our team has integrated advanced cloud setups and cybersecurity hardiness with day-to-day business operations, allowing client teams to scale without hitting technical limitations.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "40px" }}>
                We believe that technology should be an asset, not a bottleneck. Whether managing hybrid databases on Azure or hardening Linux servers against automated threat bots, Nocastra delivers clear, proactive maintenance that keeps your infrastructure 100% resilient.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <ShieldCheck size={24} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "4px" }}>Resilient Security</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>WAF shielding and custom hardiness profiles.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <Users size={24} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "4px" }}>Humanized Support</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Direct engineer consultations, no automated loops.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side layout */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
              <div style={{ 
                width: "100%", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img 
                  src="/gifs/Computer troubleshooting.gif" 
                  alt="About Nocastra" 
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    maxHeight: "400px", 
                    objectFit: "contain" 
                  }} 
                />
              </div>

              {/* Core Values Card */}
              <div style={{ 
                backgroundColor: "white", 
                border: "1px solid var(--border-color)", 
                borderRadius: "24px", 
                padding: "48px", 
                boxShadow: "var(--shadow-lg)"
              }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "24px" }}>Our Core Values</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px" }}>Uncompromising Standards</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>We operate to audit-grade security baselines across all setups.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "var(--secondary-light)", color: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px" }}>Continuous Auditing</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Weekly updates and active log analysis protect against leaks.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "var(--accent-light)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "4px" }}>Proactive Incident Tuning</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>We resolve issues before they trigger database or platform outages.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
