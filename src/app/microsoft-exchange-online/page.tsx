import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, FolderDown, Lock, Server, CheckCircle2, Mail,
  Search, ServerCog, ArrowRightLeft, Shield, Calendar, ServerOff, Scaling
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Exchange Online Services - Nocastra",
  description: "Reliable, Secure and Business-Ready Email with Microsoft Exchange Online. Nocastra provides Exchange Online migration, deployment and support.",
};

export default function MicrosoftExchangeOnlinePage() {
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
              <span style={{ color: "var(--primary)" }}>Exchange Online</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ display: "inline-block", backgroundColor: "var(--primary-light)", color: "var(--primary)", padding: "8px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.9rem", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                Microsoft Exchange Online Services
              </span>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: "1.1", fontWeight: 800, fontFamily: "var(--font-headings)" }}>
                Reliable, Secure and Business-Ready Email with <span style={{ color: "var(--primary)" }}>Microsoft Exchange</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Email remains the backbone of business communication, and Microsoft Exchange Online delivers a secure, cloud-based email platform that keeps your organisation connected from anywhere. As part of Microsoft 365, Exchange Online provides enterprise-grade email, shared calendars, contacts and collaboration tools while eliminating the complexity of managing on-premises email servers.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                At <strong style={{ color: "var(--text-primary)" }}>Nocastra</strong>, we help businesses plan, migrate, deploy and manage Microsoft Exchange Online environments that improve reliability, strengthen security and support modern hybrid work. Whether you're migrating from on-premises Microsoft Exchange, Google Workspace or another email platform, our Microsoft specialists ensure a smooth transition with minimal downtime and maximum business continuity.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  Explore Exchange Online Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
                  { icon: Mail, label: "Migration Experts" },
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
                Key Benefits of Microsoft Exchange Online
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { icon: Smartphone, title: "Anywhere Access", desc: "Access business email securely from any device, anywhere." },
                { icon: Calendar, title: "Shared Calendars", desc: "Improve communication with shared calendars, contacts and seamless scheduling." },
                { icon: ShieldCheck, title: "Advanced Protection", desc: "Protect email with advanced security, spam filtering and comprehensive malware protection." },
                { icon: ServerOff, title: "Eliminate Servers", desc: "Eliminate the costs and maintenance associated with legacy on-premises email servers." },
                { icon: Cloud, title: "Highly Available", desc: "Maintain business continuity with Microsoft's highly available cloud infrastructure." },
                { icon: MessageSquare, title: "Seamless Integration", desc: "Integrate seamlessly with Microsoft Teams, SharePoint, OneDrive and Microsoft 365." }
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

        {/* 4. OUR MICROSOFT EXCHANGE ONLINE SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Exchange Online Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We deliver end-to-end Exchange Online solutions that help organisations modernise their email infrastructure while improving security and productivity.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Search, title: "Exchange Online Consulting", desc: "Expert guidance to map out your migration strategy and optimal email architecture." },
                { icon: ServerCog, title: "Deployment & Configuration", desc: "Secure deployment of Exchange Online aligned with Microsoft best practices." },
                { icon: ArrowRightLeft, title: "On-Premises Migration", desc: "Seamless email migration from legacy on-premises Exchange servers." },
                { icon: Cloud, title: "Google Workspace Migration", desc: "Transition cleanly from Google Workspace to a fully integrated Microsoft 365 environment." },
                { icon: ArrowRight, title: "Tenant-to-Tenant Migration", desc: "Consolidate Microsoft 365 tenants during mergers and acquisitions." },
                { icon: FolderDown, title: "Mailbox Consolidation", desc: "Clean up and consolidate mailboxes, shared accounts, and distribution lists." },
                { icon: Shield, title: "Security & Compliance", desc: "Implement retention policies, eDiscovery, and data loss prevention (DLP) controls." },
                { icon: Lock, title: "DNS & Anti-Spoofing", desc: "Proper configuration of DNS, SPF, DKIM and DMARC to protect your email reputation." }
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

        {/* 5. WHY CHOOSE NOCASTRA FOR EXCHANGE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "#0284c7", borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(2, 132, 199, 0.15)" }}>
            <div style={{ padding: "60px", color: "white" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "20px" }}>
                  Why Choose Nocastra for Exchange Online?
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", maxWidth: "800px", margin: "0 auto" }}>
                  We don't just migrate your email—we build a secure, scalable communication platform that integrates seamlessly across your Microsoft ecosystem.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Integrates seamlessly with Microsoft 365, Teams, SharePoint, and OneDrive.",
                  "Secured by Microsoft Entra ID identities and robust Conditional Access.",
                  "Protected by advanced email threat protection and anti-phishing controls.",
                  "Migration-first approach ensures minimal disruption and zero data loss.",
                  "Provides a highly reliable foundation for your Microsoft Modern Workplace."
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "12px" }}>
                    <CheckCircle2 size={24} color="#7dd3fc" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Link href="/contact" style={{ backgroundColor: "white", color: "#0284c7", padding: "16px 36px", fontSize: "1.05rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                  Explore Microsoft Exchange Online Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
