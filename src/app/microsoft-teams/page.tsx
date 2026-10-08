import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, FolderDown, Video, Lock, PhoneCall, CheckCircle2, 
  Search, ServerCog, ArrowRightLeft, Settings, GraduationCap, Shield, Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Teams Services - Nocastra",
  description: "Connect, Collaborate and Communicate from Anywhere. Nocastra provides Microsoft Teams deployment, consulting, and support for the modern workplace.",
};

export default function MicrosoftTeamsPage() {
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
              <span style={{ color: "var(--primary)" }}>Microsoft Teams</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ display: "inline-block", backgroundColor: "var(--primary-light)", color: "var(--primary)", padding: "8px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.9rem", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                Microsoft Teams Services
              </span>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: "1.1", fontWeight: 800, fontFamily: "var(--font-headings)" }}>
                Connect, Collaborate and <span style={{ color: "var(--primary)" }}>Communicate from Anywhere</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Microsoft Teams is the central collaboration platform within Microsoft 365, bringing together chat, meetings, voice, file sharing and business applications in one secure workspace. It enables teams to communicate efficiently, collaborate on projects in real time and stay productive whether employees work in the office, remotely or in a hybrid environment.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                At <strong style={{ color: "var(--text-primary)" }}>Nocastra</strong>, we help businesses deploy, configure and optimise Microsoft Teams to create a secure, scalable and well-governed collaboration environment. From initial setup and migration to governance, security and user adoption, we ensure Microsoft Teams becomes a productive hub for your workforce rather than another communication tool.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  Explore Microsoft Teams Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
                  { icon: MessageSquare, label: "Collaboration Experts" },
                  { icon: Users, label: "Modern Workplace Specialists" }
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
                Key Benefits of Microsoft Teams
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { icon: Video, title: "Centralise Communication", desc: "Bring together chat, voice and video meetings into a single, seamless platform." },
                { icon: Users, title: "Real-Time Collaboration", desc: "Collaborate on documents in real time using seamlessly integrated Microsoft 365 applications." },
                { icon: FolderDown, title: "Secure File Sharing", desc: "Share files securely through SharePoint Online and OneDrive for Business." },
                { icon: Layers, title: "Application Integration", desc: "Integrate business applications and third-party tools into a single, unified workspace." },
                { icon: Cloud, title: "Enable Hybrid Working", desc: "Provide employees with a secure and fully featured environment for remote and hybrid working." },
                { icon: ShieldCheck, title: "Enterprise-Grade Security", desc: "Protect business communications with enterprise-grade Microsoft security and compliance controls." }
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

        {/* 4. OUR MICROSOFT TEAMS SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Teams Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Our Microsoft Teams specialists help organisations maximise the value of their Microsoft 365 investment through tailored deployment and management services.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Search, title: "Consulting & Planning", desc: "Strategic planning to align Microsoft Teams with your business workflows and collaboration needs." },
                { icon: ServerCog, title: "Deployment & Configuration", desc: "Expert setup and configuration of Microsoft Teams channels, settings, and integrations." },
                { icon: Shield, title: "Governance & Security", desc: "Establish strict governance, compliance policies, and data protection rules to secure communications." },
                { icon: ArrowRightLeft, title: "Migration Services", desc: "Seamless migration from legacy collaboration platforms like Slack or Skype for Business." },
                { icon: PhoneCall, title: "Voice & Meeting Configuration", desc: "Configure advanced voice calling features, Teams Rooms, and high-quality meeting environments." },
                { icon: Settings, title: "Policy Management", desc: "Implement and manage user policies to control access, external sharing, and feature availability." },
                { icon: GraduationCap, title: "User Training & Adoption", desc: "Comprehensive training programs to ensure your team fully embraces and utilizes the platform." },
                { icon: MessageSquare, title: "Support & Optimisation", desc: "Ongoing management, troubleshooting, and continuous optimisation of your Teams environment." }
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

        {/* 5. WHY CHOOSE NOCASTRA FOR TEAMS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "#0284c7", borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(2, 132, 199, 0.15)" }}>
            <div style={{ padding: "60px", color: "white" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "20px" }}>
                  Why Choose Nocastra for Microsoft Teams?
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", maxWidth: "800px", margin: "0 auto" }}>
                  We don't simply enable Microsoft Teams—we build secure collaboration environments that integrate seamlessly across your entire Microsoft ecosystem.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Integrates natively with Microsoft 365, SharePoint Online, and OneDrive.",
                  "Secured by Microsoft Entra ID and Conditional Access policies.",
                  "Protected by Microsoft Intune device compliance controls.",
                  "Governed by enterprise-grade data protection and compliance rules.",
                  "Supported by our team of Microsoft Modern Workplace Specialists."
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "12px" }}>
                    <CheckCircle2 size={24} color="#7dd3fc" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", marginBottom: "30px" }}>
                  Our approach ensures employees can collaborate efficiently while maintaining strong security, compliance and governance across your organisation.
                </p>
                <Link href="/contact" style={{ backgroundColor: "white", color: "#0284c7", padding: "16px 36px", fontSize: "1.05rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                  Explore Microsoft Teams Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
