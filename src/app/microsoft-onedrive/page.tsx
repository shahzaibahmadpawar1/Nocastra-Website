import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, FolderDown, Server, CheckCircle2, History, RefreshCcw,
  Search, ServerCog, ArrowRightLeft, Shield, Lock, FileArchive, Cog
} from "lucide-react";

export const metadata: Metadata = {
  title: "OneDrive for Business Services - Nocastra",
  description: "Secure Cloud Storage and File Sharing for the Modern Workplace. Nocastra provides OneDrive migration, deployment and support.",
};

export default function MicrosoftOneDrivePage() {
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
              <span style={{ color: "var(--primary)" }}>OneDrive</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ display: "inline-block", backgroundColor: "var(--primary-light)", color: "var(--primary)", padding: "8px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.9rem", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                OneDrive for Business Services
              </span>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: "1.1", fontWeight: 800, fontFamily: "var(--font-headings)" }}>
                Secure Cloud Storage and File Sharing for the <span style={{ color: "var(--primary)" }}>Modern Workplace</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Microsoft OneDrive for Business provides secure cloud storage that enables employees to access, share and collaborate on files from anywhere, on any device. As an integral part of Microsoft 365, OneDrive empowers organisations to improve productivity while protecting business data with enterprise-grade security, compliance and seamless integration across the Microsoft ecosystem.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                At <strong style={{ color: "var(--text-primary)" }}>Nocastra</strong>, we help businesses deploy, migrate and optimise OneDrive for Business to create a secure, scalable and efficient file management environment. Whether you're replacing traditional file servers, migrating from another cloud storage platform or strengthening your data protection strategy, our Microsoft specialists ensure your files remain accessible, organised and secure.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  Explore OneDrive Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
                  { icon: Cloud, label: "Cloud Storage Experts" },
                  { icon: ShieldCheck, label: "Data Protection Specialists" }
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
                Key Benefits of OneDrive for Business
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { icon: Cloud, title: "Secure Cloud Storage", desc: "Store business files securely in Microsoft's trusted cloud infrastructure." },
                { icon: Smartphone, title: "Anywhere Access", desc: "Access documents anytime from desktops, laptops and mobile devices." },
                { icon: Users, title: "Secure File Sharing", desc: "Share files securely with colleagues, partners and clients with granular permissions." },
                { icon: MessageSquare, title: "Real-Time Collaboration", desc: "Collaborate on documents in real time using integrated Microsoft 365 applications." },
                { icon: RefreshCcw, title: "Automatic Sync", desc: "Automatically sync files across multiple devices for offline access and productivity." },
                { icon: History, title: "Version History", desc: "Restore previous file versions and recover deleted files with built-in version history." },
                { icon: ShieldCheck, title: "Enterprise-Grade Security", desc: "Protect sensitive business data with enterprise-grade security and compliance features." }
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

        {/* 4. OUR ONEDRIVE SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our OneDrive for Business Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We help organisations implement OneDrive for Business as part of a secure and well-managed Microsoft Modern Workplace.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Search, title: "Consulting & Planning", desc: "Strategic planning to align cloud storage with your business workflows and data policies." },
                { icon: ServerCog, title: "Deployment & Configuration", desc: "Expert setup of OneDrive for Business tailored to your organisational needs." },
                { icon: Server, title: "File Server Migration", desc: "Seamless migration of files from local file servers and legacy storage systems to the cloud." },
                { icon: ArrowRightLeft, title: "Cloud Storage Migration", desc: "Migrate efficiently from Google Drive, Dropbox, or Box to OneDrive for Business." },
                { icon: Cloud, title: "Microsoft 365 Migration", desc: "Tenant-to-tenant migration of OneDrive files during mergers and acquisitions." },
                { icon: FolderDown, title: "Data Organisation", desc: "Restructure folder hierarchies and data organisation for optimal cloud access." },
                { icon: Lock, title: "Secure File Sharing", desc: "Configure external sharing policies to prevent data leakage and ensure security." },
                { icon: FileArchive, title: "Data Protection & Retention", desc: "Implement comprehensive data retention policies and backup strategies." },
                { icon: Shield, title: "Security & Compliance", desc: "Deploy DLP (Data Loss Prevention) and compliance configurations across your storage." },
                { icon: Cog, title: "Ongoing Support", desc: "Continuous administration, monitoring, troubleshooting, and user support." }
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

        {/* 5. WHY CHOOSE NOCASTRA FOR ONEDRIVE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "#0284c7", borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(2, 132, 199, 0.15)" }}>
            <div style={{ padding: "60px", color: "white" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "20px" }}>
                  Why Choose Nocastra for OneDrive?
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e0f2fe", maxWidth: "800px", margin: "0 auto" }}>
                  We do more than move files to the cloud—we design secure file management solutions that integrate seamlessly with your entire Modern Workplace.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Integrates seamlessly with Microsoft 365, SharePoint Online, and Teams.",
                  "Secured by Microsoft Entra ID identities and Conditional Access policies.",
                  "Protected by Microsoft Intune device compliance controls.",
                  "Security-first approach protects sensitive information while improving collaboration.",
                  "Ensures employees can securely access the files they need from anywhere."
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "12px" }}>
                    <CheckCircle2 size={24} color="#7dd3fc" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Link href="/contact" style={{ backgroundColor: "white", color: "#0284c7", padding: "16px 36px", fontSize: "1.05rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                  Explore OneDrive for Business Services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
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
