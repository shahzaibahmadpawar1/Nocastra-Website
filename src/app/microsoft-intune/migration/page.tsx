import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import IntuneEnquiryCTA from "@/src/components/IntuneEnquiryCTA";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Award, 
  Settings, Users, ServerCog, Lock, Laptop, CheckSquare, 
  Smartphone, Shield, RefreshCw, Layers, FileCheck, Search,
  Network, ArrowRightLeft, Database, Globe, ChevronDown,
  AlertTriangle, DatabaseBackup, Gauge, ArrowDownToLine, Check, CloudLightning
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Intune Migration Services - Nocastra",
  description: "Migrate to Microsoft Intune with confidence. We help organisations transition from SCCM, Workspace ONE, MobileIron and Ivanti with minimal disruption.",
};

export default function MicrosoftIntuneMigrationPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Microsoft Intune migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune migration is the process of moving your organisation's endpoint management from a legacy or competing platform (like SCCM, Workspace ONE, or MobileIron) over to Microsoft Intune, including the transfer of policies, applications, and device enrolment."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate from SCCM to Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This is one of our most requested services. We can perform a complete cutover migration from Microsoft Configuration Manager (SCCM) to Intune, or establish a co-management (hybrid) state depending on your business requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can we migrate gradually?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. A \"big bang\" migration is rarely recommended. We utilise a phased approach, starting with IT and pilot groups before rolling out to departments or regional offices in manageable stages to minimise risk."
        }
      },
      {
        "@type": "Question",
        "name": "Will migration affect users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our goal is zero disruption. While users may notice new branding or prompt screens during the final transition phase, we design the migration process in the background so employees can continue working without downtime."
        }
      },
      {
        "@type": "Question",
        "name": "How long does migration take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Migration timelines vary heavily based on the complexity of your current environment, the number of devices, and the volume of applications to repackage. A typical mid-sized enterprise migration takes between 2 to 4 months from planning to completion."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to existing policies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not simply \"lift and shift\" outdated policies. We review your existing configurations, eliminate legacy or redundant rules, and rebuild them using modern Microsoft Intune best practices and security baselines."
        }
      },
      {
        "@type": "Question",
        "name": "Can applications be migrated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As part of the migration, we review your application inventory, repackage required software into Intune-compatible formats (such as Win32 or MSIX), and configure deployment rules."
        }
      },
      {
        "@type": "Question",
        "name": "Can existing devices be enrolled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Existing devices can be unenrolled from your legacy MDM platform and seamlessly enrolled into Microsoft Intune without requiring a device wipe or factory reset."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide support after migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer post-migration support to ensure a smooth transition. Alternatively, you can choose to transition into our ongoing Managed Services where we maintain the Intune environment for you."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What is Microsoft Intune migration?",
      answer: "Microsoft Intune migration is the process of moving your organisation's endpoint management from a legacy or competing platform (like SCCM, Workspace ONE, or MobileIron) over to Microsoft Intune, including the transfer of policies, applications, and device enrolment."
    },
    {
      question: "Can you migrate from SCCM to Microsoft Intune?",
      answer: "Yes. This is one of our most requested services. We can perform a complete cutover migration from Microsoft Configuration Manager (SCCM) to Intune, or establish a co-management (hybrid) state depending on your business requirements."
    },
    {
      question: "Can we migrate gradually?",
      answer: "Absolutely. A \"big bang\" migration is rarely recommended. We utilise a phased approach, starting with IT and pilot groups before rolling out to departments or regional offices in manageable stages to minimise risk."
    },
    {
      question: "Will migration affect users?",
      answer: "Our goal is zero disruption. While users may notice new branding or prompt screens during the final transition phase, we design the migration process in the background so employees can continue working without downtime."
    },
    {
      question: "How long does migration take?",
      answer: "Migration timelines vary heavily based on the complexity of your current environment, the number of devices, and the volume of applications to repackage. A typical mid-sized enterprise migration takes between 2 to 4 months from planning to completion."
    },
    {
      question: "What happens to existing policies?",
      answer: "We do not simply \"lift and shift\" outdated policies. We review your existing configurations, eliminate legacy or redundant rules, and rebuild them using modern Microsoft Intune best practices and security baselines."
    },
    {
      question: "Can applications be migrated?",
      answer: "Yes. As part of the migration, we review your application inventory, repackage required software into Intune-compatible formats (such as Win32 or MSIX), and configure deployment rules."
    },
    {
      question: "Can existing devices be enrolled?",
      answer: "Yes. Existing devices can be unenrolled from your legacy MDM platform and seamlessly enrolled into Microsoft Intune without requiring a device wipe or factory reset."
    },
    {
      question: "Do you provide support after migration?",
      answer: <>Yes. We offer post-migration support to ensure a smooth transition. Alternatively, you can choose to transition into our ongoing <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link> where we maintain the environment for you.</>
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        
        {/* 1. HERO SECTION */}
        <section style={{ 
          backgroundColor: "#0f172a", 
          color: "white", 
          padding: "120px 5% 80px", 
          position: "relative", 
          overflow: "hidden" 
        }}>
          <div style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "60%",
            height: "140%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(15,23,42,0) 70%)",
            zIndex: 0
          }} />

          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "800px" }}>
              <h1 style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
                fontWeight: 800, 
                lineHeight: "1.1",
                marginBottom: "24px",
                letterSpacing: "-1px",
                color: "white"
              }}>
                Microsoft Intune Migration Services
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#ddd6fe", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Migrate to Microsoft Intune with Confidence and Minimal Disruption
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                Moving to Microsoft Intune is more than replacing one endpoint management platform with another. It's an opportunity to modernise device management, strengthen security and simplify IT operations without disrupting your users or business.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                At Nocastra, we help organisations plan and execute smooth Microsoft Intune migrations using a structured, low-risk approach. Whether you're migrating from Microsoft Configuration Manager (SCCM), VMware Workspace ONE, MobileIron, Ivanti or another endpoint management solution, we ensure every stage of the transition is carefully planned and professionally managed.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "60px" }}>
                <Link href="#enquiry" style={{ 
                  backgroundColor: "#8b5cf6", 
                  color: "white", 
                  padding: "16px 32px", 
                  borderRadius: "12px", 
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "background-color 0.2s ease"
                }}>
                  Book a Migration Consultation <ArrowRight size={20} />
                </Link>
                <Link href="#assessment" style={{ 
                  backgroundColor: "rgba(255,255,255,0.1)", 
                  color: "white", 
                  padding: "16px 32px", 
                  borderRadius: "12px", 
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "background-color 0.2s ease"
                }}>
                  Request a Migration Assessment
                </Link>
              </div>

              {/* Hero Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
                {[
                  { icon: ArrowDownToLine, text: "Low-Risk Migration Strategy" },
                  { icon: Users, text: "Minimal User Disruption" },
                  { icon: ShieldCheck, text: "Security-First Transition" },
                  { icon: CheckCircle2, text: "End-to-End Migration Support" }
                ].map((highlight, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <highlight.icon size={24} color="#a78bfa" />
                    <span style={{ fontSize: "1rem", fontWeight: 600, color: "#e2e8f0" }}>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY BUSINESSES MIGRATE TO INTUNE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              Why Businesses Are Migrating to Microsoft Intune
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Traditional endpoint management platforms were designed for environments where most users worked from a central office. Today's organisations require a cloud-first approach that supports remote work, hybrid teams and modern security requirements.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft Intune enables businesses to manage devices from anywhere, automate device provisioning, enforce consistent security policies and integrate seamlessly with the wider Microsoft ecosystem. As organisations modernise their IT infrastructure, many are choosing Microsoft Intune to reduce operational complexity while improving visibility, security and user experience.
              </p>
              <div style={{ backgroundColor: "#faf5ff", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #8b5cf6", marginTop: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "#5b21b6", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                  Migrating to Microsoft Intune isn't just a technical upgrade—it's a strategic investment in a more flexible, secure and scalable way of managing your organisation's endpoints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MIGRATION CHALLENGES WE SOLVE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Migration Challenges We Solve
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                We understand that transitioning critical infrastructure can be daunting. Here is how we address common migration concerns directly.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { 
                  concern: "We can't afford downtime.", 
                  solution: "We plan migrations in carefully managed phases to minimise disruption and keep employees productive throughout the transition.",
                  icon: Gauge
                },
                { 
                  concern: "We're worried about losing existing policies.", 
                  solution: "Before migration begins, we review your current configurations and determine which policies should be recreated, modernised or retired.",
                  icon: AlertTriangle
                },
                { 
                  concern: "We manage hundreds of devices.", 
                  solution: "Our phased deployment approach supports organisations of different sizes, allowing migrations to be completed in manageable stages rather than all at once.",
                  icon: ServerCog
                },
                { 
                  concern: "Our users aren't technical.", 
                  solution: "We provide communication guidance and onboarding support to help employees transition with confidence and minimise support requests.",
                  icon: Users
                },
                { 
                  concern: "Our environment is complex.", 
                  solution: "Whether you operate across multiple locations, manage hybrid environments or have industry-specific compliance requirements, we design migration strategies around your organisation rather than using a one-size-fits-all approach.",
                  icon: Network
                }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <item.icon size={24} color="#8b5cf6" />
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", fontStyle: "italic" }}>
                      "{item.concern}"
                    </h3>
                  </div>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. VISUAL MIGRATION JOURNEY */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "20px" }}>
                Your Migration Journey
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto" }}>
                Migration is not a "big bang" switch. It is a controlled, validated, and low-risk transition.
              </p>
            </div>

            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: "0", 
              position: "relative" 
            }}>
              
              <div style={{ position: "absolute", top: "0", bottom: "0", left: "50%", width: "4px", backgroundColor: "rgba(139,92,246,0.3)", transform: "translateX(-50%)", zIndex: 0 }} className="journey-line"></div>

              {[
                { icon: DatabaseBackup, title: "Legacy Platform", desc: "SCCM, Workspace ONE, MobileIron, etc." },
                { icon: Search, title: "Environment Assessment", desc: "Inventory and gap analysis" },
                { icon: Layers, title: "Migration Strategy", desc: "Mapping the transition phases" },
                { icon: Smartphone, title: "Pilot Deployment", desc: "Testing with IT and key users" },
                { icon: Settings, title: "Policy & App Migration", desc: "Rebuilding modern policies" },
                { icon: CloudLightning, title: "Microsoft Intune", desc: "Organisation-wide cloud cutover" },
                { icon: CheckCircle2, title: "Optimised & Fully Managed", desc: "Secure modern endpoint management" }
              ].map((node, idx) => (
                <div key={idx} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                  textAlign: idx % 2 === 0 ? "right" : "left",
                  padding: "16px 0"
                }} className="journey-node">
                  
                  {/* Text Container */}
                  <div style={{ width: "45%", padding: "0 30px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "4px" }}>{node.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "#a78bfa" }}>{node.desc}</p>
                  </div>
                  
                  {/* Icon Node */}
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    borderRadius: "16px", 
                    backgroundColor: idx === 0 ? "#334155" : idx === 6 ? "#059669" : "#6d28d9", 
                    border: "3px solid #0f172a",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: "0 0 0 2px rgba(139,92,246,0.3)"
                  }}>
                    <node.icon size={28} color="white" />
                  </div>
                  
                  {/* Empty space for balance */}
                  <div style={{ width: "45%" }}></div>

                </div>
              ))}
            </div>
            
            {/* CSS adjustments for mobile journey */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                .journey-line {
                  left: 30px !important;
                }
                .journey-node {
                  flex-direction: row-reverse !important;
                  text-align: left !important;
                }
                .journey-node > div:first-child {
                  width: calc(100% - 70px) !important;
                  padding: 0 0 0 20px !important;
                }
                .journey-node > div:last-child {
                  display: none;
                }
              }
            `}} />
            
          </div>
        </section>

        {/* 5. SUPPORTED MIGRATION PLATFORMS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Supported Migration Platforms
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { title: "Microsoft Configuration Manager (SCCM)", desc: "Transition from traditional on-premises device management to modern cloud-based endpoint management with Microsoft Intune." },
                { title: "VMware Workspace ONE", desc: "Consolidate endpoint management into the Microsoft ecosystem while maintaining security and improving operational efficiency." },
                { title: "MobileIron", desc: "Replace legacy mobile device management with Microsoft Intune's unified endpoint management capabilities." },
                { title: "Ivanti", desc: "Move to a cloud-first endpoint management platform with centralised security and simplified administration." },
                { title: "Other Endpoint Management Platforms", desc: "Every organisation is different. Our consultants assess your existing environment and develop a migration strategy tailored to your infrastructure and business requirements." }
              ].map((platform, idx) => (
                <div key={idx} style={{ padding: "24px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#f8fafc" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{platform.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT'S INCLUDED IN MIGRATION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                What's Included in Our Migration Service
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: Search, title: "Environment Assessment", desc: "Review your current endpoint management environment, infrastructure and device inventory." },
                { icon: Layers, title: "Migration Planning", desc: "Create a phased migration roadmap that reduces risk and supports business continuity." },
                { icon: ShieldCheck, title: "Policy Migration", desc: "Rebuild and optimise security, compliance and configuration policies using Microsoft Intune best practices." },
                { icon: Smartphone, title: "Device Enrolment", desc: "Move Windows, macOS, Android and iOS devices into Microsoft Intune securely and efficiently." },
                { icon: ServerCog, title: "Application Migration", desc: "Repackage and deploy business applications through Microsoft Intune where required." },
                { icon: Users, title: "User Communication", desc: "Support your organisation with migration communications and onboarding guidance." },
                { icon: CheckSquare, title: "Testing & Validation", desc: "Validate policies, applications and device configurations before wider deployment." },
                { icon: RefreshCw, title: "Post-Migration Optimisation", desc: "Fine-tune policies, security settings and reporting once migration is complete." }
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <div style={{ backgroundColor: "#faf5ff", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <service.icon size={24} color="#8b5cf6" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. OUR MIGRATION PROCESS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Intune Migration Process
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
              {[
                { title: "Current Environment Assessment", desc: "We audit your legacy platform to identify policies and apps that need moving." },
                { title: "Migration Strategy", desc: "We define the phases, timelines, and communication plans for the cutover." },
                { title: "Pilot Migration", desc: "We migrate a small group of IT devices to test policies and identify friction." },
                { title: "Policy & Application Migration", desc: "We build and package the necessary configurations within the Intune cloud." },
                { title: "Phased Device Migration", desc: "We gradually unenroll devices from the legacy MDM and enrol them into Intune." },
                { title: "Validation & Testing", desc: "We ensure compliance rules and apps are hitting the devices successfully." },
                { title: "Organisation-Wide Rollout", desc: "The remaining fleet is migrated with support channels open for users." },
                { title: "Ongoing Optimisation", desc: "We refine settings based on real-world telemetry after the migration concludes." }
              ].map((step, idx) => (
                <div key={idx} style={{ backgroundColor: "#f8fafc", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)", position: "relative" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#ede9fe", color: "#6d28d9", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", marginBottom: "16px" }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. MIGRATION WITHOUT BUSINESS DISRUPTION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "24px" }}>
              Migration Without Business Disruption
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px" }}>
              One of the biggest concerns organisations have when moving to Microsoft Intune is the potential impact on employees and day-to-day operations.
            </p>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px" }}>
              At Nocastra, we minimise disruption through careful planning, pilot deployments and phased rollouts. Before migrating production devices, we validate configurations in a controlled environment to ensure policies, applications and security settings perform as expected.
            </p>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", marginTop: "32px" }}>
              <p style={{ fontSize: "1.15rem", color: "white", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                By migrating devices in manageable stages, maintaining clear communication and providing post-migration support, we help organisations modernise endpoint management while allowing employees to continue working with minimal interruption.
              </p>
            </div>
          </div>
        </section>

        {/* 9. WHY CHOOSE NOCASTRA */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Nocastra
              </h2>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {[
                "Experience migrating complex environments",
                "Structured migration methodology",
                "Security-first approach",
                "Microsoft ecosystem expertise",
                "Pilot-first deployments",
                "Long-term optimisation",
                "Managed services after migration"
              ].map((text, idx) => (
                <div key={idx} style={{ backgroundColor: "#faf5ff", padding: "16px 24px", borderRadius: "30px", fontWeight: 600, color: "#6d28d9", display: "flex", alignItems: "center", gap: "12px", border: "1px solid #ede9fe" }}>
                  <Check size={18} color="#8b5cf6" /> {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Migration FAQs
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "60px" }}>
              {faqs.map((faq, idx) => (
                <details key={idx} style={{ backgroundColor: "white", borderRadius: "12px", border: "1px solid var(--border-color)", overflow: "hidden" }} className="faq-details">
                  <summary style={{ padding: "24px", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.question}
                    <ChevronDown size={20} color="#64748b" className="faq-icon" />
                  </summary>
                  <div style={{ padding: "0 24px 24px", color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "1rem" }}>
                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
                      {faq.answer}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA (USING EXTRACTED COMPONENT) */}
        <IntuneEnquiryCTA 
          title="Ready to Migrate to Microsoft Intune?"
          paragraphs={[
            "Whether you're moving from SCCM, Workspace ONE, MobileIron or another endpoint management platform, Nocastra will help you plan and deliver a secure, well-managed migration with minimal disruption to your business."
          ]}
          expectationsTitle="What You'll Receive"
          expectations={[
            "Migration readiness assessment",
            "Review of your current environment",
            "Platform compatibility evaluation",
            "Phased migration roadmap",
            "Risk and dependency review",
            "Recommendations for Microsoft Intune best practices"
          ]}
          formTitle="Book a Migration Consultation"
          formSubtitle="Provide your details below to discuss your current environment with a migration specialist."
          buttonText="Request Consultation"
        />

      </main>
      <Footer />
    </>
  );
}
