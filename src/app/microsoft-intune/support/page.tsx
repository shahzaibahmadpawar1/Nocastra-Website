import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import IntuneEnquiryCTA from "@/src/components/IntuneEnquiryCTA";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Award, 
  Settings, Users, Laptop, FileCheck, Search,
  Globe, ChevronDown, Check, Briefcase, Activity, 
  RefreshCw, CloudCog, Headphones, BarChart, HardDrive, 
  Layers, MessageSquare, AlertTriangle, Play, Shield, LifeBuoy,
  Smartphone, Handshake as HandshakeIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Intune Support Services - Nocastra",
  description: "Expert Microsoft Intune support from real IT professionals. Fast, practical troubleshooting for device enrolment, policies, and Intune administration.",
};

export default function MicrosoftIntuneSupportPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Microsoft Intune Support include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our support services cover troubleshooting and issue resolution for device enrolment, Windows Autopilot, compliance policies, Conditional Access, application deployment, configuration profiles, and general Intune administration."
        }
      },
      {
        "@type": "Question",
        "name": "Do I speak to a real engineer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We don't use AI chatbots or automated scripts to troubleshoot your problems. Every support request is handled directly by an experienced IT professional who understands the Microsoft ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "Can you support an existing Microsoft Intune deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. You do not need to have deployed Intune through Nocastra to receive our support. We can assist with environments set up internally or by other partners."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer one-off support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, through our Pay-As-You-Need support model, you can engage our specialists for one-off troubleshooting or critical issues without committing to a long-term contract."
        }
      },
      {
        "@type": "Question",
        "name": "Can you troubleshoot Windows Autopilot issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We frequently help organisations resolve Autopilot deployment profile errors, hardware hash import issues, and Out-of-Box Experience (OOBE) failures."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with Conditional Access and Microsoft Entra ID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Because Intune relies heavily on Microsoft Entra ID (formerly Azure AD), our engineers are highly experienced in troubleshooting Conditional Access policies and sign-in issues."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support macOS, Android and iOS devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While Intune is a Microsoft product, it is a fully unified endpoint management (UEM) solution. We support device management across Windows, macOS, iOS/iPadOS, and Android."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with our internal IT team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we regularly act as a Tier 2/Tier 3 escalation point for internal IT helpdesks, providing the specialist Intune knowledge that internal teams may not have in-house."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide remote support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the vast majority of Intune troubleshooting can be performed remotely via screen sharing and administrative tenant access. On-site support is also available if required."
        }
      },
      {
        "@type": "Question",
        "name": "How do I request Microsoft Intune support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply fill out our contact form or call us directly. One of our specialists will assess your issue and recommend the best way to get it resolved quickly."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What does Microsoft Intune Support include?",
      answer: "Our support services cover troubleshooting and issue resolution for device enrolment, Windows Autopilot, compliance policies, Conditional Access, application deployment, configuration profiles, and general Intune administration."
    },
    {
      question: "Do I speak to a real engineer?",
      answer: "Yes. We don't use AI chatbots or automated scripts to troubleshoot your problems. Every support request is handled directly by an experienced IT professional who understands the Microsoft ecosystem."
    },
    {
      question: "Can you support an existing Microsoft Intune deployment?",
      answer: "Absolutely. You do not need to have deployed Intune through Nocastra to receive our support. We can assist with environments set up internally or by other partners."
    },
    {
      question: "Do you offer one-off support?",
      answer: "Yes, through our Pay-As-You-Need support model, you can engage our specialists for one-off troubleshooting or critical issues without committing to a long-term contract."
    },
    {
      question: "Can you troubleshoot Windows Autopilot issues?",
      answer: "Yes. We frequently help organisations resolve Autopilot deployment profile errors, hardware hash import issues, and Out-of-Box Experience (OOBE) failures."
    },
    {
      question: "Can you help with Conditional Access and Microsoft Entra ID?",
      answer: "Yes. Because Intune relies heavily on Microsoft Entra ID (formerly Azure AD), our engineers are highly experienced in troubleshooting Conditional Access policies and sign-in issues."
    },
    {
      question: "Do you support macOS, Android and iOS devices?",
      answer: "Yes. While Intune is a Microsoft product, it is a fully unified endpoint management (UEM) solution. We support device management across Windows, macOS, iOS/iPadOS, and Android."
    },
    {
      question: "Can you work with our internal IT team?",
      answer: "Yes, we regularly act as a Tier 2/Tier 3 escalation point for internal IT helpdesks, providing the specialist Intune knowledge that internal teams may not have in-house."
    },
    {
      question: "Do you provide remote support?",
      answer: "Yes, the vast majority of Intune troubleshooting can be performed remotely via screen sharing and administrative tenant access. On-site support is also available if required."
    },
    {
      question: "How do I request Microsoft Intune support?",
      answer: "Simply fill out our contact form or call us directly. One of our specialists will assess your issue and recommend the best way to get it resolved quickly."
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
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(15,23,42,0) 70%)",
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
                Microsoft Intune Support Services
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#e0f2fe", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Expert Microsoft Intune Support from Real People—Not Chatbots
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                When Microsoft Intune issues disrupt your business, you need fast answers from experienced professionals—not automated responses or endless support queues.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                At Nocastra, every support request is handled by real IT specialists with hands-on experience in Microsoft Intune and the wider Microsoft ecosystem. Whether you're dealing with device enrolment problems, compliance issues, application deployment failures, Conditional Access policies or day-to-day administration, our team works with you to identify the root cause and resolve issues quickly.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                Whether you need occasional technical assistance or ongoing Microsoft Intune support, we're here to keep your endpoint management environment running securely, efficiently and without unnecessary delays.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="#enquiry" style={{ 
                  backgroundColor: "#0284c7", 
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
                  Speak to an Intune Specialist <ArrowRight size={20} />
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
                  Request Intune Support
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
                { label: "Real Human Support", icon: Users },
                { label: "Microsoft Intune Specialists", icon: Award },
                { label: "15+ Years of IT Experience", icon: ShieldCheck },
                { label: "Remote & On-Site Assistance", icon: Globe }
              ].map((highlight, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <highlight.icon size={22} color="#38bdf8" />
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "white" }}>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. WHEN YOU NEED SUPPORT */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              When You Need Microsoft Intune Support
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Even a well-configured Microsoft Intune environment can encounter challenges as your business grows, new devices are introduced and Microsoft regularly releases new features and updates.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Whether you're experiencing a technical issue, planning a policy change or simply need expert guidance, having access to experienced Microsoft Intune specialists can save valuable time and reduce business disruption.
              </p>
              <div style={{ backgroundColor: "#f0f9ff", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #0284c7", marginTop: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "#0369a1", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                  Instead of spending hours searching documentation or waiting for automated responses, you can speak directly with a knowledgeable engineer who understands your environment and works with you to resolve issues efficiently.
                </p>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginTop: "16px" }}>
                From one-off technical problems to ongoing operational support, Nocastra provides practical, human-led assistance tailored to your organisation's needs.
              </p>
            </div>
          </div>
        </section>

        {/* 3. WHAT WE CAN HELP WITH (8 CARDS) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                What We Can Help With
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: Smartphone, title: "Device Enrolment Issues", desc: "Resolve problems enrolling Windows, macOS, Android and iOS devices into Microsoft Intune." },
                { icon: Play, title: "Windows Autopilot Troubleshooting", desc: "Diagnose and resolve deployment profile, provisioning and Out-of-Box Experience (OOBE) issues." },
                { icon: AlertTriangle, title: "Compliance Policy Issues", desc: "Investigate devices that are incorrectly reported as non-compliant or unable to access organisational resources." },
                { icon: Shield, title: "Conditional Access Problems", desc: "Troubleshoot access policies, sign-in issues and Microsoft Entra ID integrations." },
                { icon: HardDrive, title: "Application Deployment Failures", desc: "Resolve issues with Microsoft 365 Apps, Win32 applications, line-of-business apps and update deployments." },
                { icon: Settings, title: "Configuration Profiles", desc: "Review, troubleshoot and optimise configuration profiles and device restrictions." },
                { icon: ShieldCheck, title: "Endpoint Security", desc: "Assist with Microsoft Defender integration, BitLocker, security baselines and endpoint protection policies." },
                { icon: Activity, title: "Performance & Health Checks", desc: "Review your Microsoft Intune environment, identify configuration issues and recommend improvements." }
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <div style={{ backgroundColor: "#f0f9ff", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <service.icon size={24} color="#0284c7" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: "20px" }}>{service.desc}</p>
                  <Link href="#enquiry" style={{ color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                    Get Help <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HUMAN SUPPORT FROM REAL SPECIALISTS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ backgroundColor: "#f8fafc", padding: "50px 40px", borderRadius: "20px", border: "1px solid var(--border-color)", textAlign: "center" }}>
               <Headphones size={80} color="#0284c7" style={{ marginBottom: "24px" }} />
               <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "16px", color: "var(--text-primary)" }}>Real People. Real Expertise.</h3>
               <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "1.05rem" }}>
                 Our goal isn't just to close support tickets—it's to help your organisation stay productive, secure and confident in its Microsoft Intune environment.
               </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px", lineHeight: "1.2" }}>
                Human Support from Real Microsoft Specialists
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                Technology is complex enough without having to navigate automated phone systems, AI chatbots or scripted responses.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                At Nocastra, your support request is handled by experienced IT professionals who take the time to understand your environment, ask the right questions and work with you to resolve the issue. We believe effective technical support starts with genuine conversations, practical expertise and a commitment to solving problems—not directing you through endless automated workflows.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: "1.7" }}>
                Whether your issue is straightforward or highly technical, you'll work with real engineers who understand Microsoft Intune, Microsoft 365 and modern endpoint management. When needed, we can also collaborate directly with your internal IT team to diagnose issues, recommend improvements and implement lasting solutions.
              </p>
            </div>
            
          </div>
        </section>

        {/* 5. SUPPORT THAT'S HUMAN BY DESIGN (Strategic Addition) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(14,165,233,0.15)", color: "#38bdf8", padding: "8px 16px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem", marginBottom: "20px" }}>
                <Users size={16} /> Our Promise
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "16px" }}>
                Support That's Human by Design
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
              {[
                { title: "Real Engineers", desc: "Every support request is handled by experienced IT professionals—not AI chatbots or scripted responses.", icon: Users },
                { title: "Clear Communication", desc: "We explain the issue, the cause and the solution in language your team can understand.", icon: MessageSquare },
                { title: "Practical Problem Solving", desc: "We focus on resolving the root cause so the same issue is less likely to happen again.", icon: RefreshCw },
                { title: "A Long-Term Partner", desc: "Beyond fixing today's issue, we help you continuously improve your Microsoft Intune environment.", icon: HandshakeIcon }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  padding: "32px", 
                  borderRadius: "16px", 
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px"
                }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.icon size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white" }}>{item.title}</h3>
                  <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR SUPPORT PROCESS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Support Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                A streamlined flow ensuring every case is handled by a real person from start to finish.
              </p>
            </div>

            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "flex-start", 
              position: "relative",
              gap: "24px",
              paddingLeft: "24px"
            }}>
              
              {/* Vertical line connecting nodes */}
              <div style={{ position: "absolute", top: "24px", bottom: "24px", left: "44px", width: "4px", backgroundColor: "#e2e8f0", zIndex: 0 }} />

              {[
                { title: "Contact Nocastra", icon: MessageSquare },
                { title: "Speak with a Real Engineer", icon: Headphones },
                { title: "Issue Assessment", icon: Search },
                { title: "Diagnosis & Troubleshooting", icon: Settings },
                { title: "Resolution", icon: CheckCircle2 },
                { title: "Validation & Testing", icon: ShieldCheck },
                { title: "Recommendations to Prevent Recurrence", icon: FileCheck }
              ].map((step, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "24px", position: "relative", zIndex: 1, backgroundColor: "white", padding: "16px 24px", borderRadius: "16px", border: "1px solid var(--border-color)", width: "100%", maxWidth: "600px", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#f0f9ff", border: "1px solid #bae6fd", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <step.icon size={20} color="#0284c7" />
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SUPPORT PLANS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Support Plans
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                Flexible engagement options depending on how often you need assistance.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              
              <div style={{ border: "1px solid var(--border-color)", borderRadius: "20px", padding: "40px", backgroundColor: "#f8fafc" }}>
                <div style={{ backgroundColor: "#e2e8f0", display: "inline-flex", padding: "8px", borderRadius: "12px", marginBottom: "24px" }}><LifeBuoy size={24} color="#475569" /></div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>Pay-As-You-Need Support</h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                  Ideal for organisations that only require occasional assistance with Microsoft Intune issues.
                </p>
                <Link href="#enquiry" style={{ color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>Request Ad-Hoc Support <ArrowRight size={18} /></Link>
              </div>

              <div style={{ border: "2px solid #0284c7", borderRadius: "20px", padding: "40px", backgroundColor: "#f0f9ff", position: "relative" }}>
                <div style={{ position: "absolute", top: "-14px", left: "40px", backgroundColor: "#0284c7", color: "white", padding: "4px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 800 }}>RECOMMENDED</div>
                <div style={{ backgroundColor: "#0284c7", display: "inline-flex", padding: "8px", borderRadius: "12px", marginBottom: "24px", marginTop: "10px" }}><Briefcase size={24} color="white" /></div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>Business Support</h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                  Regular support for organisations that need dependable access to Microsoft Intune expertise without building an in-house specialist team.
                </p>
                <Link href="#enquiry" style={{ color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>Enquire about Business Support <ArrowRight size={18} /></Link>
              </div>

              <div style={{ border: "1px solid var(--border-color)", borderRadius: "20px", padding: "40px", backgroundColor: "#f8fafc" }}>
                <div style={{ backgroundColor: "#e2e8f0", display: "inline-flex", padding: "8px", borderRadius: "12px", marginBottom: "24px" }}><Activity size={24} color="#475569" /></div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>Managed Support</h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                  Combine proactive monitoring, optimisation and technical support through our Managed Services for organisations seeking a long-term support partner.
                </p>
                <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>View Managed Services <ArrowRight size={18} /></Link>
              </div>

            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE NOCASTRA */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Nocastra
              </h2>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {[
                "Real human engineers—not AI bots",
                "Microsoft Intune specialists",
                "Clear, jargon-free communication",
                "Root-cause analysis rather than temporary fixes",
                "Remote and on-site support options",
                "Integration expertise across Microsoft 365, Entra ID, Defender and Azure",
                "Flexible support that complements your internal IT team"
              ].map((text, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "16px 24px", borderRadius: "30px", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", border: "1px solid var(--border-color)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                  <Check size={18} color="#0284c7" /> {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Support FAQs
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

        {/* 10. FINAL CTA (USING EXTRACTED COMPONENT) */}
        <IntuneEnquiryCTA 
          title="Need Help with Microsoft Intune?"
          paragraphs={[
            "Whether you're troubleshooting a critical issue, planning changes to your environment or looking for ongoing expert support, our Microsoft Intune specialists are ready to help.",
            "When you contact Nocastra, you'll speak with a real engineer who will take the time to understand your environment, investigate the issue and guide you towards the right solution—without automated responses or unnecessary delays."
          ]}
          expectationsTitle="During Your Initial Conversation, We'll:"
          expectations={[
            "Understand the issue you're experiencing",
            "Review your Microsoft Intune environment",
            "Identify likely causes and recommend next steps",
            "Discuss immediate fixes and long-term improvements",
            "Answer your technical questions in plain English"
          ]}
          formTitle="Talk to a Real Microsoft Intune Specialist"
          formSubtitle="Provide your details below to request support from our engineering team."
          buttonText="Request Support"
        />

      </main>
      <Footer />
    </>
  );
}
