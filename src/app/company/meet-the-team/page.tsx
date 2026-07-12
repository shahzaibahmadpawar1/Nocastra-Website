import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import { Users, Server, Shield, Terminal, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Team - Nocastra",
  description: "Get to know Nocastra's certified engineers, security specialists, and cloud architects dedicated to humanized IT management.",
};

const teamMembers = [
  {
    name: "Alex Thorne",
    role: "Principal Cloud Architect",
    specialty: "AWS & Azure VPC Infrastructure, DB Orchestration",
    icon: Server,
    color: "#2563eb",
    bg: "#eff6ff"
  },
  {
    name: "Dr. Sarah Lin",
    role: "Director of Cybersecurity",
    specialty: "Vulnerability Audits, Server Hardening, WAF Configs",
    icon: Shield,
    color: "#dc2626",
    bg: "#ffe4e6"
  },
  {
    name: "Marcus Vance",
    role: "Lead Full-Stack Developer",
    specialty: "Next.js Web Platforms, API Integrations, CDNs",
    icon: Terminal,
    color: "#0d9488",
    bg: "#f0fdfa"
  },
  {
    name: "Elena Rostova",
    role: "Operations Support Manager",
    specialty: "Microsoft 365, Endpoint Protection, SLA Compliance",
    icon: Settings,
    color: "#9333ea",
    bg: "#f3e8ff"
  }
];

export default function MeetTheTeamPage() {
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
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp; Company &nbsp;&gt;&nbsp; <span style={{ color: "var(--primary)" }}>Meet the Team</span>
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3rem)", 
              letterSpacing: "-1px", 
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}>
              Meet Our Team
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "800px" }}>
              Our certified cloud consultants, cybersecurity practitioners, and full-stack developers deliver secure solutions.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
              gap: "32px" 
            }}>
              {teamMembers.map((member, idx) => {
                const Icon = member.icon;
                return (
                  <div 
                    key={idx} 
                    className="glass-card"
                    style={{ 
                      borderRadius: "20px", 
                      padding: "40px 32px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center"
                    }}
                  >
                    <div style={{ 
                      width: "64px", 
                      height: "64px", 
                      borderRadius: "16px", 
                      backgroundColor: member.bg,
                      color: member.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px"
                    }}>
                      <Icon size={28} />
                    </div>
                    
                    <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "6px" }}>{member.name}</h3>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px", display: "block" }}>
                      {member.role}
                    </span>
                    
                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      {member.specialty}
                    </p>
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
