import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import IntuneEnquiryCTA from "@/src/components/IntuneEnquiryCTA";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Award, 
  Settings, Users, Laptop, FileCheck, Search,
  Globe, ChevronDown, Check, Activity, 
  RefreshCw, Smartphone, Layers, AlertTriangle, Play,
  Lock, Key, ScanLine, AlertOctagon, Fingerprint, Network, Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Endpoint Security with Microsoft Intune - Nocastra",
  description: "Protect every device and secure every user. We design and manage endpoint security solutions combining Microsoft Intune, Defender and Entra ID for a modern Zero Trust strategy.",
};

export default function EndpointSecurityPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is endpoint security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Endpoint security refers to the practice of protecting the various devices (endpoints) connecting to a corporate network, such as laptops, smartphones, and tablets, from malicious threats and unauthorised access."
        }
      },
      {
        "@type": "Question",
        "name": "How does Microsoft Intune improve endpoint security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune acts as the central management plane for endpoint security. It enforces compliance policies, deploys security baselines, manages BitLocker encryption, and integrates with Microsoft Entra ID to ensure only secure, compliant devices can access company data."
        }
      },
      {
        "@type": "Question",
        "name": "Does Microsoft Intune include antivirus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Intune itself is an endpoint management tool, it integrates seamlessly with Microsoft Defender for Endpoint, which provides industry-leading next-generation antivirus, endpoint detection and response (EDR), and threat intelligence."
        }
      },
      {
        "@type": "Question",
        "name": "How does Microsoft Defender work with Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intune and Defender work together. Defender identifies threats and determines a device's risk level. Intune uses that risk level in its compliance policies to block compromised devices from accessing corporate resources via Conditional Access."
        }
      },
      {
        "@type": "Question",
        "name": "What are compliance policies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compliance policies are rules defined in Intune that a device must meet to be considered secure. This could include requiring a PIN, ensuring the OS is up to date, or requiring BitLocker encryption to be active."
        }
      },
      {
        "@type": "Question",
        "name": "Can Microsoft Intune protect mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Intune provides Mobile Device Management (MDM) and Mobile Application Management (MAM) capabilities to secure both corporate-owned and BYOD (Bring Your Own Device) smartphones and tablets on iOS and Android."
        }
      },
      {
        "@type": "Question",
        "name": "Can lost devices be remotely wiped?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Intune allows administrators to perform remote actions on enrolled devices, including full factory resets for lost corporate devices or selective wipes that only remove corporate data from personal BYOD devices."
        }
      },
      {
        "@type": "Question",
        "name": "What is Zero Trust security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zero Trust is a security model based on the principle of 'never trust, always verify'. It assumes breach and requires strict identity verification and device compliance checks for every person and device attempting to access resources."
        }
      },
      {
        "@type": "Question",
        "name": "Does Microsoft Intune support BitLocker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Intune allows you to silently deploy and manage BitLocker encryption on Windows devices, ensuring data at rest is secure and securely backing up recovery keys to Microsoft Entra ID."
        }
      },
      {
        "@type": "Question",
        "name": "Can Nocastra review our existing endpoint security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive Endpoint Security Assessments where we review your existing Intune and Microsoft 365 configurations, identifying security gaps and providing actionable recommendations."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What is endpoint security?",
      answer: "Endpoint security refers to the practice of protecting the various devices (endpoints) connecting to a corporate network, such as laptops, smartphones, and tablets, from malicious threats and unauthorised access."
    },
    {
      question: "How does Microsoft Intune improve endpoint security?",
      answer: "Microsoft Intune acts as the central management plane for endpoint security. It enforces compliance policies, deploys security baselines, manages BitLocker encryption, and integrates with Microsoft Entra ID to ensure only secure, compliant devices can access company data."
    },
    {
      question: "Does Microsoft Intune include antivirus?",
      answer: "While Intune itself is an endpoint management tool, it integrates seamlessly with Microsoft Defender for Endpoint, which provides industry-leading next-generation antivirus, endpoint detection and response (EDR), and threat intelligence."
    },
    {
      question: "How does Microsoft Defender work with Microsoft Intune?",
      answer: "Intune and Defender work together. Defender identifies threats and determines a device's risk level. Intune uses that risk level in its compliance policies to block compromised devices from accessing corporate resources via Conditional Access."
    },
    {
      question: "What are compliance policies?",
      answer: "Compliance policies are rules defined in Intune that a device must meet to be considered secure. This could include requiring a PIN, ensuring the OS is up to date, or requiring BitLocker encryption to be active."
    },
    {
      question: "Can Microsoft Intune protect mobile devices?",
      answer: "Yes. Intune provides Mobile Device Management (MDM) and Mobile Application Management (MAM) capabilities to secure both corporate-owned and BYOD (Bring Your Own Device) smartphones and tablets on iOS and Android."
    },
    {
      question: "Can lost devices be remotely wiped?",
      answer: "Yes. Intune allows administrators to perform remote actions on enrolled devices, including full factory resets for lost corporate devices or selective wipes that only remove corporate data from personal BYOD devices."
    },
    {
      question: "What is Zero Trust security?",
      answer: "Zero Trust is a security model based on the principle of 'never trust, always verify'. It assumes breach and requires strict identity verification and device compliance checks for every person and device attempting to access resources."
    },
    {
      question: "Does Microsoft Intune support BitLocker?",
      answer: "Yes. Intune allows you to silently deploy and manage BitLocker encryption on Windows devices, ensuring data at rest is secure and securely backing up recovery keys to Microsoft Entra ID."
    },
    {
      question: "Can Nocastra review our existing endpoint security?",
      answer: "Yes, we offer comprehensive Endpoint Security Assessments where we review your existing Intune and Microsoft 365 configurations, identifying security gaps and providing actionable recommendations."
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
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(15,23,42,0) 70%)",
            zIndex: 0
          }} />

          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "800px", marginBottom: "60px" }}>
              <h1 style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
                fontWeight: 800, 
                lineHeight: "1.1",
                marginBottom: "24px",
                letterSpacing: "-1px",
                color: "white"
              }}>
                Endpoint Security with Microsoft Intune
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#d1fae5", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Protect Every Device. Secure Every User. Strengthen Every Endpoint.
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                Today's workforce is no longer confined to the office. Employees access business data from laptops, desktops, tablets and mobile devices across multiple locations, making every endpoint a potential target for cyber threats.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                Microsoft Intune provides organisations with the tools to secure devices, enforce compliance policies and protect business data without compromising productivity. At Nocastra, we design and manage endpoint security solutions that combine Microsoft Intune with the wider Microsoft security ecosystem to help organisations reduce risk and build a modern Zero Trust security strategy.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                Whether you're strengthening an existing Microsoft Intune environment or implementing endpoint security for the first time, our specialists help you protect your users, devices and business information with confidence.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="#enquiry" style={{ 
                  backgroundColor: "#10b981", 
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
                  Book an Endpoint Security Consultation <ArrowRight size={20} />
                </Link>
                <Link href="#enquiry" style={{ 
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
                  Talk to a Security Specialist
                </Link>
              </div>
            </div>

            {/* Hero Trust Strip */}
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "32px", 
              justifyContent: "space-between",
              backgroundColor: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.1)", 
              padding: "32px 40px",
              borderRadius: "16px",
              backdropFilter: "blur(10px)"
            }}>
              {[
                { label: "Security-First Approach", icon: Shield },
                { label: "Microsoft Intune Specialists", icon: Award },
                { label: "Microsoft Security Ecosystem Expertise", icon: Network },
                { label: "Hundreds of Devices Secured", icon: Lock }
              ].map((highlight, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <highlight.icon size={22} color="#34d399" />
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "white" }}>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. WHY ENDPOINT SECURITY MATTERS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              Why Endpoint Security Matters
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Every laptop, desktop, smartphone and tablet connected to your organisation represents both a productivity tool and a potential security risk.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                As businesses embrace hybrid working and cloud services, traditional network boundaries have disappeared. Users now access corporate resources from multiple locations and devices, making endpoint security a critical part of every organisation's cybersecurity strategy.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Without centralised endpoint management, organisations can struggle with inconsistent security settings, outdated software, unauthorised applications and devices that fall outside compliance requirements.
              </p>
              <div style={{ backgroundColor: "#ecfdf5", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #10b981", marginTop: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "#065f46", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                  Microsoft Intune helps organisations address these challenges by providing centralised visibility, policy enforcement and device management across Windows, macOS, Android and iOS devices. Combined with Microsoft's broader security platform, it enables businesses to protect sensitive data while supporting a flexible, modern workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW MICROSOFT INTUNE PROTECTS YOUR BUSINESS (8 CARDS) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                How Microsoft Intune Protects Your Business
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: CheckCircle2, title: "Device Compliance Policies", desc: "Ensure only compliant devices can access company resources by automatically evaluating security requirements before access is granted." },
                { icon: Fingerprint, title: "Conditional Access", desc: "Work with Microsoft Entra ID to control access based on user identity, device compliance, location and risk level." },
                { icon: ShieldCheck, title: "Security Baselines", desc: "Apply Microsoft's recommended security configurations consistently across every managed device." },
                { icon: Key, title: "BitLocker Management", desc: "Help protect business data by managing full-disk encryption policies across Windows devices." },
                { icon: Shield, title: "Microsoft Defender Integration", desc: "Strengthen endpoint protection through integration with Microsoft Defender, enabling improved threat detection and response." },
                { icon: Lock, title: "Application Protection Policies", desc: "Protect business information within managed applications, even on personal devices, by controlling how data can be accessed, shared and stored." },
                { icon: Settings, title: "Configuration Profiles", desc: "Standardise security settings across your environment to reduce configuration drift and improve consistency." },
                { icon: AlertOctagon, title: "Remote Device Actions", desc: "Respond quickly to lost, stolen or compromised devices with actions such as remote lock, password reset or selective wipe." }
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <div style={{ backgroundColor: "#ecfdf5", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <service.icon size={24} color="#10b981" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR ENDPOINT SECURITY SERVICES (6 CARDS) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Endpoint Security Services
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { title: "Endpoint Security Assessment", desc: "Review your existing Microsoft Intune environment to identify security gaps, policy weaknesses and opportunities for improvement." },
                { title: "Security Policy Design", desc: "Develop security policies aligned with your organisation's operational needs and compliance requirements." },
                { title: "Compliance Policy Implementation", desc: "Configure compliance rules that help ensure devices meet your organisation's security standards before accessing business resources." },
                { title: "Microsoft Defender Integration", desc: "Integrate Microsoft Intune with Microsoft Defender to enhance endpoint visibility and strengthen your security posture." },
                { title: "Security Baseline Deployment", desc: "Implement Microsoft's recommended security baselines while tailoring them to your organisation's risk profile." },
                { title: "Ongoing Security Optimisation", desc: "Continuously review and improve your endpoint security configuration as your organisation evolves and Microsoft introduces new capabilities." }
              ].map((service, idx) => (
                <div key={idx} style={{ padding: "32px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#f8fafc" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>{service.desc}</p>
                  <Link href="#enquiry" style={{ color: "#10b981", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. THE MICROSOFT SECURITY ECOSYSTEM */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              Built on the Microsoft Security Ecosystem
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft Intune is a key component of Microsoft's modern security platform, but it delivers its greatest value when integrated with complementary Microsoft technologies.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                At Nocastra, we help organisations build a connected security ecosystem where identity, endpoint management, device compliance and threat protection work together to reduce risk and simplify administration.
              </p>
              
              <div style={{ backgroundColor: "white", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)", marginTop: "24px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "20px", color: "var(--text-primary)" }}>Our endpoint security solutions integrate with:</h3>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                  {[
                    "Microsoft Entra ID for identity and access management.",
                    "Microsoft Defender for advanced endpoint protection and threat detection.",
                    "Microsoft 365 for secure productivity and collaboration.",
                    "Windows Autopilot for secure device provisioning from day one.",
                    "Microsoft Azure to support cloud-based identity and infrastructure.",
                    "Microsoft Teams and Exchange Online to ensure secure access from compliant devices."
                  ].map((item, idx) => {
                    const boldPart = item.split(" for ")[0];
                    const restPart = item.substring(boldPart.length);
                    const boldPart2 = item.split(" to ")[0];
                    
                    let renderedHtml = <></>;
                    
                    if (item.includes(" for ")) {
                      renderedHtml = <><span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{boldPart}</span>{restPart}</>;
                    } else if (item.includes(" to ")) {
                      renderedHtml = <><span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{boldPart2}</span>{item.substring(boldPart2.length)}</>;
                    }
                    
                    return (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                        <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{renderedHtml}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              <p style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 600, lineHeight: "1.7", marginTop: "16px", textAlign: "center" }}>
                By connecting these technologies, organisations gain better visibility, stronger security controls and a more resilient IT environment.
              </p>
            </div>
          </div>
        </section>

        {/* 6. SECURITY BUILT ON ZERO TRUST PRINCIPLES (Strategic Addition) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(16,185,129,0.15)", color: "#34d399", padding: "8px 16px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem", marginBottom: "20px" }}>
                <Shield size={16} /> Our Philosophy
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "24px" }}>
                Security Built on Zero Trust Principles
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto" }}>
                Microsoft Intune, Entra ID, and Defender work together to put the three core principles of Zero Trust into practice, ensuring your environment remains resilient against modern threats.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {[
                { title: "Verify Explicitly", desc: "Every user and device is authenticated and evaluated before access is granted. Intune compliance checks and Entra ID Conditional Access ensure identity and device health are verified for every request.", icon: ScanLine },
                { title: "Use Least-Privilege Access", desc: "Users receive only the permissions they need to perform their role. We help implement Just-In-Time (JIT) and Just-Enough-Access (JEA) policies to minimize attack surfaces.", icon: Lock },
                { title: "Assume Breach", desc: "Security controls are designed to limit the impact of compromised devices or accounts. Microsoft Defender integration supports rapid detection, automated response, and device isolation.", icon: AlertTriangle }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  padding: "40px 32px", 
                  borderRadius: "20px", 
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  textAlign: "center",
                  alignItems: "center"
                }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "16px", backgroundColor: "#065f46", border: "2px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.icon size={32} color="white" />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", marginTop: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. OUR ENDPOINT SECURITY APPROACH */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Endpoint Security Approach
              </h2>
            </div>

            <div className="responsive-grid-auto" style={{ position: "relative"
            }}>
              {[
                { title: "Assess Current Security", desc: "Audit existing configurations and identify security gaps." },
                { title: "Identify Risks", desc: "Pinpoint vulnerabilities across identities and unmanaged devices." },
                { title: "Design Security Policies", desc: "Architect baselines, compliance rules, and Conditional Access." },
                { title: "Implement Controls", desc: "Deploy Microsoft Intune and Defender configurations securely." },
                { title: "Validate Compliance", desc: "Test policies across a pilot group before wide rollout." },
                { title: "Monitor & Optimise", desc: "Continuously review security posture against emerging threats." }
              ].map((step, idx) => (
                <div key={idx} style={{ backgroundColor: "#f8fafc", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)", position: "relative" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#d1fae5", color: "#047857", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", marginBottom: "16px" }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. COMMON SECURITY CHALLENGES WE SOLVE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Common Security Challenges We Solve
              </h2>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <thead>
                  <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                    <th style={{ padding: "24px", fontWeight: 700, fontSize: "1.1rem", width: "40%" }}>Challenge</th>
                    <th style={{ padding: "24px", fontWeight: 700, fontSize: "1.1rem" }}>How Nocastra Helps</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { challenge: "Unmanaged devices", solution: "Enrol and secure devices through Microsoft Intune." },
                    { challenge: "Inconsistent security settings", solution: "Standardise policies across all managed endpoints." },
                    { challenge: "Lost or stolen devices", solution: "Enable remote actions such as lock and selective wipe." },
                    { challenge: "Compliance concerns", solution: "Implement compliance policies and reporting." },
                    { challenge: "Remote workforce security", solution: "Secure access with Conditional Access and Microsoft Entra ID." },
                    { challenge: "Data protection", solution: "Apply encryption, application protection policies and Microsoft Defender integration." }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx === 5 ? "none" : "1px solid var(--border-color)" }}>
                      <td style={{ padding: "24px", fontWeight: 600, color: "var(--text-primary)", verticalAlign: "top" }}>{row.challenge}</td>
                      <td style={{ padding: "24px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                "Security-first implementation",
                "Microsoft Intune specialists",
                "Zero Trust mindset",
                "Practical, business-focused recommendations",
                "Deep integration with Microsoft 365, Defender and Entra ID",
                "Ongoing optimisation and managed security support"
              ].map((text, idx) => (
                <div key={idx} style={{ backgroundColor: "#f8fafc", padding: "16px 24px", borderRadius: "30px", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", border: "1px solid var(--border-color)" }}>
                  <Check size={18} color="#10b981" /> {text}
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
                Endpoint Security FAQs
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
          title="Strengthen Your Endpoint Security with Microsoft Intune"
          paragraphs={[
            "Cyber threats continue to evolve, and endpoint security should evolve with them. Whether you're building a new Microsoft Intune environment or improving an existing one, Nocastra can help you implement practical, security-first solutions that protect your users, devices and business data."
          ]}
          expectationsTitle="During Your Consultation, We'll:"
          expectations={[
            "Review your current endpoint security posture",
            "Identify security gaps and compliance risks",
            "Assess your Microsoft Intune configuration",
            "Recommend improvements based on Microsoft's best practices",
            "Outline a roadmap for strengthening your endpoint security"
          ]}
          formTitle="Book an Endpoint Security Consultation"
          formSubtitle="Provide your details below to discuss your security requirements with our engineering team."
          buttonText="Request Consultation"
        />

      </main>
      <Footer />
    </>
  );
}
