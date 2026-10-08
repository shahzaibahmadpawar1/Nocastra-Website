import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import ParticlesBanner from "@/src/components/ParticlesBanner";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, FolderDown, ArrowRightLeft, Globe, Lock, Shield, 
  Server, Mail, ChevronDown, CheckCircle2, TrendingUp, Key, 
  Network, Factory, Building, Landmark, HeartPulse, GraduationCap, 
  Store, Truck, Briefcase, FileCheck, LifeBuoy, Cog, Layers, Rocket, 
  RefreshCw, ClipboardList, Search, MonitorSmartphone, ServerCog, XCircle, Flame
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft 365 Services - Nocastra",
  description: "Transform the way your organisation works with secure, cloud-first Microsoft 365 solutions. From planning and migration to deployment, security and ongoing management.",
};

export default function Microsoft365Page() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Microsoft 365?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft 365 is a comprehensive cloud-based subscription service that brings together premium Office apps, advanced security, and device management capabilities."
        }
      },
      {
        "@type": "Question",
        "name": "Can Microsoft 365 be migrated without downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with proper planning and execution by a specialised partner like Nocastra, Microsoft 365 migrations can be performed with minimal to zero downtime."
        }
      },
      {
        "@type": "Question",
        "name": "How does Microsoft Intune work with Microsoft 365?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune is integrated seamlessly within the Microsoft ecosystem, providing centralised endpoint management, security policies, and access controls that protect your Microsoft 365 data."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <Navbar />
      <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
        
        {/* Modern Hero Section */}
        <section className="responsive-hero-padding" style={{ backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)",
          position: "relative",
          overflow: "hidden"
        }}>
<AnimatedSection>
          {/* Subtle Background Accent */}
          <div style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "50%",
            height: "80%",
            background: "radial-gradient(circle, rgba(2, 132, 199, 0.04) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0
          }} />
          
          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, paddingTop: "80px" }}>
            <div style={{ 
              fontSize: "0.85rem", 
              color: "var(--text-muted)", 
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "var(--primary)" }}>Services</span>
              <span>/</span>
              <span style={{ color: "var(--primary)" }}>Microsoft 365</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ 
                display: "inline-block", 
                backgroundColor: "var(--primary-light)", 
                color: "var(--primary)", 
                padding: "8px 16px", 
                borderRadius: "99px", 
                fontWeight: 700, 
                fontSize: "0.9rem",
                alignSelf: "flex-start",
                letterSpacing: "0.5px"
              }}>
                Microsoft Modern Workplace
              </span>
              
              <h1 style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                letterSpacing: "-1.5px", 
                color: "var(--text-primary)",
                lineHeight: "1.1",
                fontWeight: 800,
                fontFamily: "var(--font-headings)"
              }}>
                Microsoft 365 Services for <span style={{ color: "var(--primary)" }}>Modern Businesses</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Transform the way your organisation works with secure, cloud-first Microsoft 365 solutions. From planning and migration to deployment, security and ongoing management, Nocastra helps businesses build a productive, collaborative and secure Modern Workplace using Microsoft's industry-leading technologies.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Whether you're moving from legacy systems, deploying Microsoft 365 for the first time or optimising an existing environment, our specialists deliver tailored solutions that align with your business goals while integrating seamlessly with Microsoft Intune, Microsoft Entra ID, Microsoft Defender and Azure.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem" }}>
                  Book a Microsoft 365 Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
                <Link href="/microsoft-intune" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1.05rem" }}>
                  Explore Microsoft Intune Services
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
                  { value: "15+", label: "Years of Experience" },
                  { value: "150+", label: "Happy Customers" },
                  { value: "100s", label: "Users & Devices Managed" },
                  { icon: ShieldCheck, label: "Microsoft Ecosystem Specialists" }
                ]}
              />
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 3. BUSINESS CHALLENGES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px",
                textAlign: "center"
              }}>
                Is Your Microsoft 365 Environment Delivering Everything It Should?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Modern businesses rely on Microsoft 365 for communication, collaboration and productivity. However, many organisations struggle with fragmented deployments, inconsistent security policies, poor user adoption and underutilised licensing.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", fontWeight: 600 }}>
                  Common challenges include:
                </p>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", margin: "16px 0" }}>
                  {[
                    "Email migration complexity",
                    "Inconsistent user management",
                    "Weak identity security",
                    "Device management gaps",
                    "Collaboration sprawl",
                    "Compliance concerns",
                    "Licensing confusion",
                    "Remote workforce support",
                    "Microsoft Teams governance",
                    "File sharing risks"
                  ].map((challenge, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                      <CheckCircle2 size={18} color="#ef4444" />
                      <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-primary)" }}>{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Without a properly designed Microsoft 365 environment, businesses often experience reduced productivity, increased security risks and unnecessary operational costs.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 4. WHY MICROSOFT 365? (Educational Ecosystem Breakdown) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
              <span style={{ 
                display: "inline-block", 
                backgroundColor: "white", 
                color: "#0284c7", 
                padding: "8px 20px", 
                borderRadius: "99px", 
                fontWeight: 700, 
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "16px",
                border: "1px solid #bae6fd"
              }}>
                The Microsoft Ecosystem
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Microsoft 365?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft 365 isn't just a collection of apps—it's a comprehensive ecosystem designed to empower modern workplaces.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: MessageSquare, title: "Microsoft Teams", desc: "Modern communication and collaboration.", link: "/microsoft-teams", linkText: "Explore Teams" },
                { icon: Mail, title: "Exchange Online", desc: "Reliable, enterprise-grade business email.", link: "/microsoft-exchange-online", linkText: "Explore Exchange" },
                { icon: FolderDown, title: "SharePoint Online", desc: "Document management and corporate intranet.", link: "/sharepoint-online", linkText: "Explore SharePoint" },
                { icon: Cloud, title: "OneDrive", desc: "Secure cloud storage and file sharing.", link: "/microsoft-onedrive", linkText: "Explore OneDrive" },
                { icon: MonitorSmartphone, title: "Microsoft Intune", desc: "Device and endpoint management.", link: "/microsoft-intune", linkText: "Explore Intune" },
                { icon: Key, title: "Microsoft Entra ID", desc: "Identity and access management.", link: "/microsoft-entra-id", linkText: "Explore Entra ID" },
                { icon: Shield, title: "Microsoft Defender", desc: "Integrated security and threat protection.", link: "/microsoft-defender", linkText: "Explore Defender" }
              ].map((ecosystem, idx) => {
                const Icon = ecosystem.icon;
                return (
                  <div key={idx} style={{ padding: "24px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div style={{ backgroundColor: "#e0f2fe", color: "#0284c7", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "16px" }}>
                        <Icon size={20} />
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{ecosystem.title}</h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0, flexGrow: 1 }}>{ecosystem.desc}</p>
                    {ecosystem.link && (
                      <Link href={ecosystem.link} style={{ marginTop: "16px", color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                        {ecosystem.linkText} <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 5. OUR MICROSOFT 365 SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft 365 Services
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", marginBottom: "60px" }}>
              {[
                { icon: Search, title: "Microsoft 365 Consulting", desc: "Assess your environment, licensing, security and roadmap before implementation." },
                { icon: ServerCog, title: "Microsoft 365 Deployment", desc: "Deploy Microsoft 365 correctly from day one with best-practice configuration." },
                { icon: ArrowRightLeft, title: "Microsoft 365 Migration", desc: "Move from Google Workspace, on-premises Exchange or another Microsoft tenant with minimal disruption." },
                { icon: Cog, title: "Microsoft 365 Managed Services", desc: "Ongoing monitoring, administration and optimisation." },
                { icon: ShieldCheck, title: "Microsoft 365 Security", desc: "Protect identities, devices, email and business data using Microsoft's integrated security stack." },
                { icon: Users, title: "User Adoption & Training", desc: "Help employees get the most from Microsoft Teams, SharePoint, OneDrive and the wider Microsoft ecosystem." }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} style={{ padding: "40px", backgroundColor: "white", borderRadius: "20px", border: "1px solid var(--border-color)", boxShadow: "0 10px 25px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ backgroundColor: "#f0f9ff", color: "#0284c7", width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>{service.title}</h3>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", flexGrow: 1 }}>{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 6. TECHNOLOGIES WE SPECIALISE IN */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Microsoft Technologies We Specialise In
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
                Rather than just listing products, we focus on how these technologies work together to create a secure, productive Modern Workplace.
              </p>
            </div>
            
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <thead style={{ backgroundColor: "#0284c7", color: "white" }}>
                  <tr>
                    <th style={{ padding: "20px", textAlign: "left", fontWeight: 700, fontSize: "1.1rem", borderBottom: "2px solid #0369a1" }}>Technology</th>
                    <th style={{ padding: "20px", textAlign: "left", fontWeight: 700, fontSize: "1.1rem", borderBottom: "2px solid #0369a1" }}>Business Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tech: "Microsoft Intune", benefit: "Endpoint Management", link: "/microsoft-intune" },
                    { tech: "Microsoft Entra ID", benefit: "Identity Protection", link: "/microsoft-entra-id" },
                    { tech: "Microsoft Defender", benefit: "Threat Protection", link: "/microsoft-defender" },
                    { tech: "Microsoft Teams", benefit: "Collaboration", link: "#" },
                    { tech: "Exchange Online", benefit: "Email", link: "#" },
                    { tech: "SharePoint Online", benefit: "Document Management", link: "#" },
                    { tech: "OneDrive", benefit: "Secure File Storage", link: "#" },
                    { tech: "Azure", benefit: "Cloud Infrastructure", link: "#" }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: idx % 2 === 0 ? "white" : "#f8fafc" }}>
                      <td style={{ padding: "20px", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        <Link href={row.link} style={{ color: "#0284c7", textDecoration: "none" }}>{row.tech}</Link>
                      </td>
                      <td style={{ padding: "20px", fontSize: "1.1rem", color: "var(--text-secondary)" }}>{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 7. DEPLOYMENT METHODOLOGY */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Microsoft 365 Deployment Methodology
              </h2>
            </div>

            <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "16px" }}>
              <div style={{ position: "absolute", top: "40px", bottom: "40px", left: "40px", width: "3px", backgroundColor: "#e2e8f0", zIndex: 0 }} />

              {[
                { num: "1", title: "Discovery", icon: Search, desc: "Understanding your current IT environment and business goals." },
                { num: "2", title: "Environment Assessment", icon: ClipboardList, desc: "Evaluating infrastructure, licensing, and security readiness." },
                { num: "3", title: "Solution Design", icon: Layers, desc: "Architecting the Microsoft 365 environment, identities, and policies." },
                { num: "4", title: "Migration & Deployment", icon: Rocket, desc: "Executing a seamless transition with minimal disruption." },
                { num: "5", title: "Security Configuration", icon: ShieldCheck, desc: "Applying Zero Trust principles across devices and identities." },
                { num: "6", title: "User Enablement", icon: Users, desc: "Ensuring adoption through training and communication." },
                { num: "7", title: "Ongoing Management", icon: RefreshCw, desc: "Continuous monitoring, support, and optimisation." }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} style={{ position: "relative", display: "flex", gap: "30px", marginBottom: idx === 6 ? "0" : "50px", zIndex: 1 }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#0284c7", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 0 8px #ffffff", position: "relative" }}>
                      <Icon size={24} />
                      <div style={{ position: "absolute", top: "-8px", right: "-8px", backgroundColor: "#ef4444", color: "white", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 800, border: "2px solid white" }}>
                        {step.num}
                      </div>
                    </div>
                    
                    <div style={{ backgroundColor: "white", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)", flexGrow: 1 }}>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
                        {step.num}. {step.title}
                      </h3>
                      <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 8. WHY CHOOSE NOCASTRA */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Nocastra
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We are a Modern Workplace Partner, committed to building integrated environments rather than delivering standalone software.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              {[
                { title: "Microsoft Ecosystem Specialists", desc: "We don't treat Microsoft 365 as standalone software—we design integrated Modern Workplace environments where Microsoft 365, Intune, Entra ID, Defender and Azure work together." },
                { title: "Security-First Design", desc: "Every deployment incorporates identity protection, conditional access, compliance policies and endpoint security from the outset." },
                { title: "Tailored Solutions", desc: "No one-size-fits-all deployments. Every Microsoft 365 environment is designed around your users, infrastructure and compliance requirements." },
                { title: "End-to-End Services", desc: "From planning and migration to long-term management and optimisation." },
                { title: "Local & Remote Expertise", desc: "Supporting organisations across multiple industries with both remote and on-site services." }
              ].map((feature, idx) => (
                <div key={idx} style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>{feature.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <thead style={{ backgroundColor: "#0284c7", color: "white" }}>
                  <tr>
                    <th style={{ padding: "20px", textAlign: "left", fontWeight: 700, fontSize: "1.1rem", borderBottom: "2px solid #0369a1", width: "50%" }}>Typical IT Provider</th>
                    <th style={{ padding: "20px", textAlign: "left", fontWeight: 700, fontSize: "1.1rem", borderBottom: "2px solid #0369a1", width: "50%", backgroundColor: "#0369a1" }}>Nocastra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { left: "Basic Microsoft 365 setup", right: "Strategic Modern Workplace design" },
                    { left: "Reactive support", right: "Proactive optimisation" },
                    { left: "Limited Microsoft expertise", right: "Microsoft ecosystem specialists" },
                    { left: "Individual product focus", right: "Fully integrated cloud platform" },
                    { left: "Generic configurations", right: "Tailored deployments" },
                    { left: "One-time projects", right: "Long-term partnership" }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", backgroundColor: idx % 2 === 0 ? "white" : "#f8fafc" }}>
                      <td style={{ padding: "20px", fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <XCircle size={20} color="#ef4444" /> {row.left}
                        </div>
                      </td>
                      <td style={{ padding: "20px", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", backgroundColor: idx % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <CheckCircle2 size={20} color="#0284c7" /> {row.right}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 9. INDUSTRIES WE SUPPORT */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Industries We Support
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Briefcase, title: "Professional Services", desc: "Enhancing collaboration and secure document sharing." },
                { icon: Store, title: "Retail", desc: "Connecting frontline workers with scalable identity solutions." },
                { icon: HeartPulse, title: "Healthcare", desc: "Securing patient data with rigorous compliance policies." },
                { icon: Factory, title: "Manufacturing", desc: "Streamlining communication across global supply chains." },
                { icon: Flame, title: "Oil & Gas", desc: "Supporting remote workers in demanding environments." },
                { icon: Truck, title: "Logistics", desc: "Ensuring 24/7 connectivity and reliable email services." },
                { icon: Landmark, title: "Financial Services", desc: "Implementing strict access controls and data protection." },
                { icon: GraduationCap, title: "Education", desc: "Enabling remote learning and unified communications." }
              ].map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <div key={idx} style={{ padding: "24px", border: "1px solid var(--border-color)", borderRadius: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ backgroundColor: "#f0f9ff", color: "#0284c7", padding: "12px", borderRadius: "12px" }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>{industry.title}</h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0 }}>{industry.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 10. RELATED MICROSOFT SERVICES (Internal Linking) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Related Microsoft Services
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              {[
                { title: "Windows Autopilot", desc: "Automate zero-touch device provisioning for new and existing employees.", link: "/windows-autopilot", linkText: "Learn About Autopilot" },
                { title: "Endpoint Security", desc: "Implement Zero Trust security with Microsoft Intune and Microsoft Defender.", link: "/microsoft-intune/endpoint-security", linkText: "Strengthen Security" },
                { title: "Tenant-to-Tenant Migration", desc: "Consolidate or separate Microsoft 365 environments while preserving identities, policies, devices and collaboration workloads.", link: "/microsoft-intune/migration", linkText: "View Migration Services" }
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: "24px" }}>{service.desc}</p>
                  <Link href={service.link} style={{ color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    {service.linkText} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 11. FAQ SECTION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Frequently Asked Questions
              </h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { q: "What is Microsoft 365?", a: "Microsoft 365 is a comprehensive cloud-based subscription service that brings together premium Office apps, advanced security, and device management capabilities." },
                { q: "What's included in Microsoft 365 Business Premium?", a: "Business Premium includes everything in Business Standard (Office apps, Teams, Exchange), plus advanced cyber threat protection and device management with Microsoft Intune." },
                { q: "Can Microsoft 365 be migrated without downtime?", a: "Yes, with proper planning and execution by a specialised partner like Nocastra, migrations can be performed seamlessly with minimal to zero downtime." },
                { q: "What's the difference between Microsoft 365 and Office 365?", a: "Office 365 is primarily focused on productivity apps and cloud services, while Microsoft 365 builds on that by adding advanced security and device management tools like Intune." },
                { q: "How does Microsoft Intune work with Microsoft 365?", a: "Microsoft Intune is integrated seamlessly within the Microsoft ecosystem, providing centralised endpoint management and conditional access to protect your Microsoft 365 data." },
                { q: "Can Microsoft 365 integrate with existing infrastructure?", a: "Absolutely. We can integrate Microsoft 365 with your existing Active Directory, file servers, and third-party applications." },
                { q: "Do you support hybrid Microsoft environments?", a: "Yes, we specialise in hybrid environments, bridging on-premises infrastructure with Microsoft 365 cloud services." },
                { q: "Can you migrate between Microsoft 365 tenants?", a: "Yes, Tenant-to-Tenant migrations are a core specialty of ours, ensuring data integrity during mergers and acquisitions." },
                { q: "Do you provide ongoing Microsoft 365 management?", a: "Yes, our managed services include continuous monitoring, security updates, user administration, and license optimisation." },
                { q: "Why choose Nocastra for Microsoft 365 services?", a: "Nocastra provides strategic Modern Workplace design, proactive optimisation, and deep Microsoft ecosystem expertise." }
              ].map((faq, idx) => (
                <details key={idx} style={{ backgroundColor: "#f8fafc", border: "1px solid var(--border-color)", borderRadius: "12px", overflow: "hidden" }}>
                  <summary style={{ padding: "20px", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.q}
                    <ChevronDown size={20} style={{ color: "#0284c7", flexShrink: 0 }} />
                  </summary>
                  <div style={{ padding: "0 20px 20px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 12. FINAL CTA */}
        <section style={{ padding: "60px 5% 100px", backgroundColor: "#f8fafc" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", backgroundColor: "#0f172a", borderRadius: "30px", padding: "60px 40px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", fontWeight: 800, marginBottom: "20px", letterSpacing: "-0.5px" }}>
              Build a Smarter Microsoft Modern Workplace
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto 36px", lineHeight: "1.7" }}>
              Whether you're planning your first Microsoft 365 deployment, migrating from legacy systems, strengthening security or optimising an existing environment, Nocastra provides the expertise to help you maximise the value of your Microsoft investment.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ backgroundColor: "#0284c7", border: "none", padding: "16px 36px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                Book Your Microsoft 365 Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
              </Link>
              <Link href="/microsoft-intune" style={{ padding: "16px 36px", fontSize: "1.05rem", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                Explore Microsoft Intune Services
              </Link>
            </div>
          </div>
        </AnimatedSection>
</section>

      </main>
      <Footer />
    </>
  );
}
