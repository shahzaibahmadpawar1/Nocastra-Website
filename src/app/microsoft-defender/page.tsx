import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, Lock, Server, CheckCircle2, AlertTriangle, Activity,
  Search, ServerCog, Shield, Cog, ShieldAlert, MonitorSmartphone, Target, Database
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Defender Services - Nocastra",
  description: "Strengthen Your Cybersecurity with Microsoft Defender. Nocastra provides Microsoft Defender deployment, management and security solutions.",
};

export default function MicrosoftDefenderPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
        
        {/* 1. HERO SECTION */}
        <section className="responsive-hero-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)", position: "relative", overflow: "hidden" }}>
<AnimatedSection>
          <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", height: "80%", background: "radial-gradient(circle, rgba(2, 132, 199, 0.04) 0%, rgba(255,255,255,0) 70%)", zIndex: 0 }} />
          
          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, paddingTop: "80px" }}>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/microsoft-365" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Microsoft 365</Link>
              <span>/</span>
              <span style={{ color: "var(--primary)" }}>Microsoft Defender</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ display: "inline-block", backgroundColor: "var(--primary-light)", color: "var(--primary)", padding: "8px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.9rem", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                Microsoft Defender Services
              </span>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: "1.1", fontWeight: 800, fontFamily: "var(--font-headings)" }}>
                Strengthen Your Cybersecurity with <span style={{ color: "var(--primary)" }}>Microsoft Defender</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Cyber threats continue to evolve, making proactive security essential for every organisation. Microsoft Defender provides an intelligent, enterprise-grade security platform that protects endpoints, identities, email, cloud applications and business data against modern cyber threats. As part of the Microsoft security ecosystem, Microsoft Defender helps businesses detect, investigate and respond to attacks before they can disrupt operations.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                At <strong style={{ color: "var(--text-primary)" }}>Nocastra</strong>, we help organisations deploy, configure and manage Microsoft Defender to build a proactive security posture that reduces cyber risk and supports Zero Trust security. Whether you're protecting endpoints, securing Microsoft 365, strengthening threat detection or improving security operations, our Microsoft specialists deliver tailored solutions that keep your business secure.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  Explore Defender Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
                <Link href="/microsoft-365" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  View Microsoft 365 Services
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 2. TRUST SECTION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "60px" }}>
              <StatsSection
                variant="B"
                theme="light"
                stats={[
                  { value: "15+", label: "Years Experience" },
                  { value: "150+", label: "Happy Customers" },
                  { icon: ShieldCheck, label: "Cybersecurity Experts" },
                  { icon: Target, label: "Zero Trust Specialists" }
                ]}
              />
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 3. KEY BENEFITS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Key Benefits of Microsoft Defender
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { icon: ShieldAlert, title: "Real-Time Detection", desc: "Detect and respond to cyber threats in real time before they impact your operations." },
                { icon: MonitorSmartphone, title: "Endpoint Protection", desc: "Protect endpoints against ransomware, malware and advanced persistent attacks." },
                { icon: Lock, title: "Secure M365", desc: "Secure Microsoft 365 applications, email and collaboration tools against targeted attacks." },
                { icon: Users, title: "Identity Security", desc: "Identify suspicious user behaviour and rapidly isolate compromised identities." },
                { icon: Activity, title: "Automated Response", desc: "Automate threat detection and incident response to reduce manual investigation time." },
                { icon: Cloud, title: "Cross-Cloud Visibility", desc: "Improve visibility across users, devices, networks and multi-cloud applications." },
                { icon: ShieldCheck, title: "Zero Trust Alignment", desc: "Strengthen your Zero Trust security strategy with Microsoft's natively integrated platform." }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} style={{ padding: "30px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                      <div style={{ backgroundColor: "#e0f2fe", color: "#0284c7", width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "16px", flexShrink: 0 }}>
                        <Icon size={24} />
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{benefit.title}</h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0, flexGrow: 1 }}>{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 4. OUR MICROSOFT DEFENDER SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Defender Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We provide end-to-end Microsoft Defender services that help organisations build a modern cybersecurity framework while integrating seamlessly with the wider Microsoft ecosystem.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Search, title: "Consulting & Assessments", desc: "Comprehensive Microsoft Defender consulting and security posture assessments." },
                { icon: ServerCog, title: "Deployment & Configuration", desc: "Expert deployment and configuration of the full Microsoft Defender security stack." },
                { icon: MonitorSmartphone, title: "Defender for Endpoint", desc: "Implementation of Defender for Endpoint to secure devices against advanced threats." },
                { icon: Lock, title: "Defender for Office 365", desc: "Configuration of Defender for Office 365 to protect email and collaboration platforms." },
                { icon: Shield, title: "Defender XDR Deployment", desc: "Deployment of Extended Detection and Response (XDR) for cross-domain security." },
                { icon: Target, title: "Security Policy Design", desc: "Strategic design and optimisation of security policies tailored to your business." },
                { icon: AlertTriangle, title: "Incident Response Planning", desc: "Structured threat detection and incident response planning protocols." },
                { icon: Activity, title: "Security Monitoring", desc: "Continuous security monitoring, threat hunting and security improvement." },
                { icon: Database, title: "Compliance Assessments", desc: "Rigorous compliance, data protection, and security posture assessments." },
                { icon: Cog, title: "Ongoing Support", desc: "Continuous Microsoft Defender management, tuning, and expert technical support." }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                    <div style={{ backgroundColor: "#f0f9ff", color: "#0284c7", width: "50px", height: "50px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0, flexGrow: 1 }}>{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 5. WHY CHOOSE NOCASTRA FOR DEFENDER */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "#0284c7", borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(2, 132, 199, 0.15)" }}>
            <div style={{ padding: "60px", color: "white" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "20px" }}>
                  Why Choose Nocastra for Microsoft Defender?
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", maxWidth: "800px", margin: "0 auto" }}>
                  We do more than deploy security software—we build integrated cybersecurity solutions that combine Microsoft Defender with your entire Microsoft ecosystem.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Natively integrates with Microsoft Entra ID, Microsoft Intune, and Azure.",
                  "Secures Microsoft 365, Exchange Online, SharePoint Online, and OneDrive.",
                  "Security-first approach detects threats faster and protects critical assets.",
                  "Strengthens resilience against today's rapidly evolving cyber landscape.",
                  "Implements Microsoft's Zero Trust security model to reduce attack surfaces."
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "12px" }}>
                    <CheckCircle2 size={24} color="#7dd3fc" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", marginBottom: "30px" }}>
                  By implementing Microsoft's Zero Trust security model, we help ensure every user, device and application is continuously verified and protected.
                </p>
                <Link href="/contact" style={{ backgroundColor: "white", color: "#0284c7", padding: "16px 36px", fontSize: "1.05rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                  Explore Microsoft Defender Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

      </main>
      <Footer />
    </>
  );
}
