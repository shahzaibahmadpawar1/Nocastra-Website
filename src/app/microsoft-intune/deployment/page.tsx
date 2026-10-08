import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import IntuneEnquiryCTA from "@/src/components/IntuneEnquiryCTA";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, CheckCircle2, ShieldCheck, Award, Briefcase, 
  Settings, Users, ServerCog, Lock, Laptop, CheckSquare, 
  Smartphone, Shield, RefreshCw, Layers, FileCheck, Search,
  Network, ArrowRightLeft, Database, Globe, ChevronDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Intune Deployment Services - Nocastra",
  description: "Deploy Microsoft Intune with confidence and minimal business disruption. We plan, configure and deploy Intune using proven methodologies.",
};

export default function MicrosoftIntuneDeploymentPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a Microsoft Intune deployment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for a Microsoft Intune deployment depends on the complexity of your environment, the number of devices, and whether we are migrating from a legacy platform. A standard deployment usually takes between 4 to 8 weeks from initial discovery to complete rollout."
        }
      },
      {
        "@type": "Question",
        "name": "Can you deploy Intune without downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our phased deployment methodology is specifically designed to minimise business disruption. We use pilot groups and staged rollouts to ensure configurations are fully tested before applying them organisation-wide."
        }
      },
      {
        "@type": "Question",
        "name": "Can existing devices be enrolled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We configure enrolment profiles that allow existing devices to be seamlessly onboarded into Microsoft Intune without requiring a factory reset, ensuring employees can continue working without interruption."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support macOS and mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Microsoft Intune provides comprehensive cross-platform support. We deploy and configure Intune to manage Windows, macOS, Android, and iOS/iPadOS devices securely from a single central console."
        }
      },
      {
        "@type": "Question",
        "name": "Can you deploy Microsoft Intune remotely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The vast majority of our Microsoft Intune deployments are conducted entirely remotely. Because Intune is a cloud-based service, we can configure the tenant, establish policies, and deploy to devices regardless of where your team is located."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your deployment service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service includes tenant configuration, device enrolment setup, security policy creation, application deployment configuration, Windows Autopilot setup, reporting, administrator documentation, and knowledge transfer."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide user training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive knowledge transfer and documentation for your internal IT administrators. For end-users, we can assist in drafting communication templates to explain the new enrolment processes and any changes to their workflow."
        }
      },
      {
        "@type": "Question",
        "name": "Can you implement Windows Autopilot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Windows Autopilot is a core component of our modern deployment strategies. We configure Autopilot to provide zero-touch provisioning, allowing new devices to be shipped directly to employees and configured automatically upon sign-in."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After deployment, we conduct a handover session with your IT team. If you prefer not to manage the environment internally, we offer ongoing Microsoft Intune Managed Services to handle policy updates, application packaging, and support."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How long does a Microsoft Intune deployment take?",
      answer: "The timeline for a Microsoft Intune deployment depends on the complexity of your environment, the number of devices, and whether we are migrating from a legacy platform. A standard deployment usually takes between 4 to 8 weeks from initial discovery to complete rollout."
    },
    {
      question: "Can you deploy Intune without downtime?",
      answer: "Yes. Our phased deployment methodology is specifically designed to minimise business disruption. We use pilot groups and staged rollouts to ensure configurations are fully tested before applying them organisation-wide."
    },
    {
      question: "Can existing devices be enrolled?",
      answer: "Absolutely. We configure enrolment profiles that allow existing devices to be seamlessly onboarded into Microsoft Intune without requiring a factory reset, ensuring employees can continue working without interruption."
    },
    {
      question: "Do you support macOS and mobile devices?",
      answer: "Yes, Microsoft Intune provides comprehensive cross-platform support. We deploy and configure Intune to manage Windows, macOS, Android, and iOS/iPadOS devices securely from a single central console."
    },
    {
      question: "Can you deploy Microsoft Intune remotely?",
      answer: "Yes. The vast majority of our Microsoft Intune deployments are conducted entirely remotely. Because Intune is a cloud-based service, we can configure the tenant, establish policies, and deploy to devices regardless of where your team is located."
    },
    {
      question: "What is included in your deployment service?",
      answer: "Our service includes tenant configuration, device enrolment setup, security policy creation, application deployment configuration, Windows Autopilot setup, reporting, administrator documentation, and knowledge transfer."
    },
    {
      question: "Do you provide user training?",
      answer: "We provide comprehensive knowledge transfer and documentation for your internal IT administrators. For end-users, we can assist in drafting communication templates to explain the new enrolment processes and any changes to their workflow."
    },
    {
      question: "Can you implement Windows Autopilot?",
      answer: <>Yes. <Link href="/windows-autopilot" style={{ color: "#0284c7", fontWeight: 600 }}>Windows Autopilot</Link> is a core component of our modern deployment strategies. We configure Autopilot to provide zero-touch provisioning, allowing new devices to be shipped directly to employees and configured automatically upon sign-in.</>
    },
    {
      question: "What happens after deployment?",
      answer: <>After deployment, we conduct a handover session with your IT team. If you prefer not to manage the environment internally, we offer ongoing <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link> to handle policy updates, application packaging, and support.</>
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
<AnimatedSection>
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
            <div style={{ maxWidth: "800px" }}>
              <h1 style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
                fontWeight: 800, 
                lineHeight: "1.1",
                marginBottom: "24px",
                letterSpacing: "-1px",
                color: "white"
              }}>
                Microsoft Intune Deployment Services
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#a7f3d0", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Deploy Microsoft Intune with Confidence and Minimal Business Disruption
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                A successful Microsoft Intune deployment is more than enabling a cloud service—it's about building a secure, scalable endpoint management environment that supports your business today and grows with it tomorrow.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                At Nocastra, we plan, configure and deploy Microsoft Intune using proven implementation methodologies that reduce risk, minimise disruption and establish a strong foundation for modern endpoint management. Whether you're deploying Microsoft Intune for the first time or replacing an existing endpoint management solution, our specialists ensure every device, user and policy is configured correctly from day one.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "60px" }}>
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
                  Book a Deployment Consultation <ArrowRight size={20} />
                </Link>
                <Link href="/microsoft-intune/consulting" style={{ 
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
                  Request a Deployment Assessment
                </Link>
              </div>

              {/* Hero Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
                {[
                  { icon: Layers, text: "Structured Deployment Methodology" },
                  { icon: ShieldCheck, text: "Security-First Configuration" },
                  { icon: Laptop, text: "Windows, macOS, Android & iOS" },
                  { icon: RefreshCw, text: "Minimal Business Disruption" }
                ].map((highlight, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <highlight.icon size={24} color="#34d399" />
                    <span style={{ fontSize: "1rem", fontWeight: 600, color: "#e2e8f0" }}>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 2. WHY DEPLOYMENT MATTERS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              Why a Successful Microsoft Intune Deployment Matters
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft Intune becomes the foundation of your endpoint management strategy. Decisions made during deployment influence security, compliance, user experience and long-term operational efficiency.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Poorly planned deployments often lead to inconsistent device configurations, application deployment issues, policy conflicts and unnecessary support requests. Correcting these problems later is typically more costly than designing the environment properly from the beginning.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                At Nocastra, every Microsoft Intune deployment starts with careful planning and follows a structured implementation process. We configure your environment according to Microsoft's best practices while tailoring policies, security controls and device management to your organisation's specific operational requirements.
              </p>
              <div style={{ backgroundColor: "#ecfdf5", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #10b981", marginTop: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "#065f46", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                  The result is a Microsoft Intune environment that is secure, scalable and ready to support your business as it grows.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 3. WHAT'S INCLUDED (8 CARDS) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                What's Included in Our Microsoft Intune Deployment Service
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: Network, title: "Microsoft Intune Tenant Setup", desc: "We build your Microsoft Intune environment from the ground up, configuring tenant settings, device enrolment, security policies, compliance rules, application deployment and integrations with Microsoft Entra ID and Microsoft 365.", link: "/contact", cta: "Learn More" },
                { icon: ServerCog, title: "Tenant Configuration", desc: "Configure Microsoft Intune to align with your organisational structure, licensing and endpoint management requirements." },
                { icon: Smartphone, title: "Device Enrolment", desc: "Enable secure enrolment for Windows, macOS, Android and iOS devices while simplifying the onboarding experience for end users." },
                { icon: Shield, title: "Security Policies", desc: "Implement compliance policies, device restrictions, encryption requirements and Conditional Access integrations to protect your organisation." },
                { icon: Layers, title: "Application Deployment", desc: "Deploy Microsoft 365 applications and approved business software automatically to managed devices." },
                { icon: Settings, title: "Configuration Profiles", desc: "Create standardised settings that ensure every managed device follows your organisation's security and operational requirements." },
                { icon: CheckSquare, title: "Compliance Policies", desc: "Define compliance rules that continuously evaluate device health before granting access to corporate resources." },
                { icon: RefreshCw, title: "Update Management", desc: "Configure Windows Update policies and deployment rings to keep devices secure while reducing business disruption." },
                { icon: FileCheck, title: "Reporting & Documentation", desc: "Deliver deployment documentation, policy summaries and operational guidance for your internal IT team." }
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <div style={{ backgroundColor: "#ecfdf5", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <service.icon size={24} color="#10b981" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: service.cta ? "24px" : "0" }}>{service.desc}</p>
                  {service.cta && service.link && (
                    <Link href={service.link} style={{ color: "#10b981", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                      {service.cta} <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 4. WINDOWS AUTOPILOT DEPLOYMENT */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.1)", color: "#38bdf8", padding: "8px 16px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem", marginBottom: "24px" }}>
                Zero-Touch Provisioning
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "24px", color: "white" }}>
                Windows Autopilot Deployment
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px" }}>
                Modern organisations shouldn't need to manually configure every new laptop before it reaches an employee.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px" }}>
                As part of our Microsoft Intune deployment services, Nocastra implements Windows Autopilot to automate device provisioning and simplify employee onboarding. New devices arrive pre-registered and are automatically configured with the correct applications, security policies and organisational settings during first sign-in.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "32px", fontWeight: 600 }}>
                The result is a faster onboarding experience for employees, reduced workload for IT teams and a consistent, secure configuration across every Windows device.
              </p>
              <Link href="/windows-autopilot" style={{ backgroundColor: "#0ea5e9", color: "white", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Explore Windows Autopilot <ArrowRight size={18} />
              </Link>
            </div>
            
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "40px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
               <Laptop size={64} color="#38bdf8" style={{ marginBottom: "24px" }} />
               <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "16px" }}>The Autopilot Experience</h3>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
                 {["Device shipped directly to user", "User connects to Wi-Fi", "User signs in with Entra ID", "Intune deploys profiles & apps", "Device is ready for business"].map((step, idx) => (
                   <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#e2e8f0" }}>
                     <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#0ea5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "bold" }}>{idx + 1}</div>
                     {step}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 5. APPLICATION & POLICY CONFIGURATION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Application & Policy Configuration
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                We translate your business requirements into technical configurations, ensuring every endpoint is secure, compliant, and equipped for productivity.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { title: "Device Compliance Policies", desc: "Ensure devices meet security requirements (like OS versions and encryption) before accessing corporate data." },
                { title: "Application Protection Policies", desc: "Protect corporate data inside applications on personal (BYOD) and corporate-owned devices." },
                { title: "Configuration Profiles", desc: "Standardise device settings, Wi-Fi profiles, and restrictions across your entire fleet." },
                { title: "Security Baselines", desc: "Apply Microsoft's recommended security settings immediately to harden your environment against threats." },
                { title: "Endpoint Protection", desc: "Configure advanced security settings to protect against malware and unauthorized access." },
                { title: "Conditional Access Integration", desc: "Block access to Microsoft 365 services if a device is marked as non-compliant in Intune." },
                { title: "Microsoft Defender Integration", desc: "Seamlessly deploy and configure Microsoft Defender for Endpoint for advanced threat protection." },
                { title: "BitLocker Configuration", desc: "Enforce disk encryption on Windows devices and securely store recovery keys in Entra ID." },
                { title: "Windows Update Rings", desc: "Automate OS updates in staged rings to test compatibility and prevent widespread disruption." }
              ].map((policy, idx) => (
                <div key={idx} style={{ padding: "24px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#f8fafc" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>{policy.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{policy.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 6. OUR DEPLOYMENT METHODOLOGY */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Intune Deployment Methodology
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
              {[
                { title: "Discovery", desc: "We map your current environment, user groups, and business requirements to ensure no blind spots." },
                { title: "Environment Preparation", desc: "We verify Azure AD (Entra ID) configurations and licensing before making any Intune changes." },
                { title: "Tenant Configuration", desc: "We establish the core framework, ensuring the foundation is built to Microsoft's best practices." },
                { title: "Policy Implementation", desc: "We build your compliance rules, config profiles, and app deployment packages in a staging state." },
                { title: "Pilot Deployment", desc: "We roll out to a controlled test group, verifying policies apply correctly without breaking workflows." },
                { title: "Organisation-Wide Rollout", desc: "We execute a phased deployment across your entire fleet, monitoring for any configuration conflicts." },
                { title: "Knowledge Transfer", desc: "We walk your IT team through the environment, explaining how policies were built and how to manage them." },
                { title: "Post-Deployment Support", desc: "We provide dedicated support immediately following the rollout to address any unforeseen edge cases." }
              ].map((step, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)", position: "relative" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#d1fae5", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", marginBottom: "16px" }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 7. DEPLOYMENT SCENARIOS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Deployment Scenarios
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {[
                { icon: Laptop, title: "New Microsoft Intune Implementation", desc: "Deploy Microsoft Intune from the ground up for organisations adopting modern endpoint management." },
                { icon: ArrowRightLeft, title: "Migration from SCCM", desc: "Transition from Microsoft Configuration Manager to Microsoft Intune with minimal disruption." },
                { icon: Network, title: "Hybrid Deployment", desc: "Support organisations operating a hybrid management model while transitioning to cloud-first endpoint management." },
                { icon: Globe, title: "Multi-Site Deployment", desc: "Deliver consistent endpoint management across multiple offices, branches or remote teams." },
                { icon: Users, title: "Remote Workforce Deployment", desc: "Provision and manage devices securely for employees working from home or distributed locations." }
              ].map((scenario, idx) => (
                <div key={idx} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, backgroundColor: "#f0f9ff", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <scenario.icon size={24} color="#0284c7" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>{scenario.title}</h3>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{scenario.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 8. DEPLOYMENT DELIVERABLES (Strategic Addition) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "white", borderRadius: "24px", border: "1px solid var(--border-color)", padding: "60px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>
                Your Deployment Deliverables
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                We don't just configure settings; we deliver a complete, documented, and fully operational environment.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {[
                "Microsoft Intune tenant configured",
                "Device enrolment configured",
                "Compliance policies implemented",
                "Configuration profiles created",
                "Security baselines applied",
                "Windows Autopilot configured (if required)",
                "Application deployment configured",
                "Administrator documentation",
                "Knowledge transfer session",
                "Post-deployment support"
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", backgroundColor: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <CheckCircle2 size={20} color="#10b981" />
                  <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "1.05rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 9. WHY CHOOSE NOCASTRA */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Nocastra for Your Deployment
              </h2>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {[
                "Proven deployment methodology",
                "Security-first implementation",
                "Minimal business disruption",
                "Thorough testing and validation",
                "Microsoft ecosystem expertise",
                "Post-deployment optimisation",
                "Ongoing managed services available"
              ].map((text, idx) => (
                <div key={idx} style={{ backgroundColor: "#f1f5f9", padding: "16px 24px", borderRadius: "30px", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px" }}>
                  <Award size={18} color="#0284c7" /> {text}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 10. FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Deployment FAQs
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
        </AnimatedSection>
</section>

        <style dangerouslySetInnerHTML={{__html: `
          details.faq-details > summary::-webkit-details-marker {
            display: none;
          }
          details.faq-details[open] .faq-icon {
            transform: rotate(180deg);
          }
          .faq-icon {
            transition: transform 0.2s ease;
          }
        `}} />

        {/* 11. FINAL CTA (USING EXTRACTED COMPONENT) */}
        <IntuneEnquiryCTA 
          title="Ready to Deploy Microsoft Intune?"
          paragraphs={[
            "Whether you're deploying Microsoft Intune for the first time or replacing an existing endpoint management platform, our specialists will help you deliver a secure, scalable implementation with minimal disruption to your business."
          ]}
          expectationsTitle="Your Next Steps"
          expectations={[
            "Initial scoping and discovery conversation",
            "Review of your device fleet and user profiles",
            "Tailored deployment proposal and timeline",
            "Secure, phased rollout of Microsoft Intune"
          ]}
          formTitle="Book a Deployment Consultation"
          formSubtitle="Provide your details below to schedule a meeting with a deployment specialist."
          buttonText="Request Consultation"
        />

      </main>
      <Footer />
    </>
  );
}
