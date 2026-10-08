import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, FolderDown, Server, CheckCircle2, 
  Search, ServerCog, ArrowRightLeft, Shield, LayoutDashboard, Database, FileText, Cog
} from "lucide-react";

export const metadata: Metadata = {
  title: "SharePoint Online Services - Nocastra",
  description: "Empower Secure Collaboration and Intelligent Document Management. Nocastra provides SharePoint Online migration, deployment and support.",
};

export default function SharePointOnlinePage() {
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
              <span style={{ color: "var(--primary)" }}>SharePoint Online</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ display: "inline-block", backgroundColor: "var(--primary-light)", color: "var(--primary)", padding: "8px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.9rem", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                Microsoft SharePoint Online Services
              </span>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: "1.1", fontWeight: 800, fontFamily: "var(--font-headings)" }}>
                Empower Secure Collaboration and <span style={{ color: "var(--primary)" }}>Intelligent Document Management</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Microsoft SharePoint Online is the content management and collaboration platform within Microsoft 365 that helps businesses securely store, organise and share information across teams. From document libraries and company intranets to automated workflows and team sites, SharePoint Online enables employees to collaborate efficiently while maintaining complete control over business data.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                At <strong style={{ color: "var(--text-primary)" }}>Nocastra</strong>, we design, deploy and optimise SharePoint Online environments that improve collaboration, simplify document management and strengthen data governance. Whether you're migrating from file servers, modernising an existing SharePoint environment or building a company intranet, our Microsoft specialists deliver secure, scalable solutions tailored to your business.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  Explore SharePoint Online Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
                  { icon: FolderDown, label: "SharePoint Experts" },
                  { icon: ShieldCheck, label: "Data Governance Specialists" }
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
                Key Benefits of SharePoint Online
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { icon: Database, title: "Centralised Storage", desc: "Centralise business documents securely in the cloud, moving away from legacy file servers." },
                { icon: Users, title: "Enhanced Collaboration", desc: "Improve teamwork with highly integrated, shared team sites and robust document libraries." },
                { icon: LayoutDashboard, title: "Modern Intranets", desc: "Build modern company intranets that keep all employees connected, informed, and engaged." },
                { icon: ArrowRightLeft, title: "Secure File Sharing", desc: "Enable seamless and secure file sharing with both internal employees and external partners." },
                { icon: FileText, title: "Version Control", desc: "Effortlessly manage document versions, strict permissions, and automated approval workflows." },
                { icon: Smartphone, title: "Anywhere Access", desc: "Access essential files and collaborate from anywhere in the world, using any device." }
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

        {/* 4. OUR SHAREPOINT ONLINE SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our SharePoint Online Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Our SharePoint specialists help organisations maximise productivity by building secure and well-governed collaboration environments.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Search, title: "Consulting & Planning", desc: "Strategic SharePoint consulting to architect your ideal document management and collaboration platform." },
                { icon: ServerCog, title: "Deployment & Configuration", desc: "Expert setup and configuration of SharePoint environments aligned with modern best practices." },
                { icon: Cloud, title: "SharePoint Migration", desc: "Seamlessly migrate from legacy file servers or older on-premises SharePoint versions to the cloud." },
                { icon: LayoutDashboard, title: "Intranet Design", desc: "Design and develop engaging, modern company intranets that drive employee communication." },
                { icon: Database, title: "Document Management", desc: "Implement structured document management systems (DMS) with custom metadata and search." },
                { icon: Users, title: "Site Creation", desc: "Creation and structuring of highly functional Team sites and broad Communication sites." },
                { icon: Shield, title: "Permissions & Governance", desc: "Configure strict security permissions and establish robust data governance frameworks." },
                { icon: Cog, title: "Workflow Automation", desc: "Automate repetitive business processes and approvals using Microsoft Power Automate integration." },
                { icon: ShieldCheck, title: "Security & Compliance", desc: "Implement retention policies, eDiscovery, and data loss prevention (DLP) across all sites." },
                { icon: Server, title: "Support & Administration", desc: "Ongoing SharePoint administration, system optimisation, and dedicated technical support." }
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

        {/* 5. WHY CHOOSE NOCASTRA FOR SHAREPOINT */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "#0284c7", borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(2, 132, 199, 0.15)" }}>
            <div style={{ padding: "60px", color: "white" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "20px" }}>
                  Why Choose Nocastra for SharePoint Online?
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", maxWidth: "800px", margin: "0 auto" }}>
                  We do more than deploy SharePoint Online—we create intelligent collaboration platforms that integrate seamlessly across your Microsoft ecosystem.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Native integration with Microsoft 365, Teams, OneDrive, and Exchange Online.",
                  "Secured by Microsoft Entra ID identities and Conditional Access.",
                  "Protected by Microsoft Intune device compliance controls.",
                  "Security-first approach protects sensitive data while enabling sharing.",
                  "Improves productivity and supports long-term digital transformation."
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "12px" }}>
                    <CheckCircle2 size={24} color="#7dd3fc" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", marginBottom: "30px" }}>
                  Our approach ensures your employees can collaborate confidently while maintaining complete control over your business data.
                </p>
                <Link href="/contact" style={{ backgroundColor: "white", color: "#0284c7", padding: "16px 36px", fontSize: "1.05rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                  Explore SharePoint Online Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
