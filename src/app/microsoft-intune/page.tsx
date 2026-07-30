import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ArrowRight, ShieldCheck, Award, Users, Smartphone, Headphones, RefreshCw, Settings, Handshake, Clock, Globe, ShieldAlert, UserPlus, Search, Briefcase, MonitorSmartphone, Rocket, FileCheck, TrendingUp, XCircle, CheckCircle2, Compass, ServerCog, MonitorCheck, ArrowRightLeft, Cog, LifeBuoy, Lock, ClipboardList, Layers, Puzzle, Flame, Store, Truck, Landmark, HeartPulse, Building, Factory, GraduationCap, Cloud, Key, Shield, Server, Mail, MessageSquare, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Intune Services - Nocastra",
  description: "Secure, Deploy and Manage Every Device with Microsoft Intune Experts. Nocastra helps organisations deploy, manage and optimise Microsoft Intune.",
};

export default function MicrosoftIntunePage() {
  // Define FAQ Schema JSON-LD Data
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune is Microsoft's cloud-based endpoint management solution that enables organisations to securely manage Windows, macOS, Android and iOS devices from a single platform. It helps businesses deploy devices, enforce security policies, manage applications and protect corporate data while supporting remote and hybrid work environments."
        }
      },
      {
        "@type": "Question",
        "name": "Is Microsoft Intune suitable for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Microsoft Intune is designed for organisations of all sizes. Whether you manage a small team or thousands of devices across multiple locations, Microsoft Intune provides scalable endpoint management that grows alongside your business while reducing manual IT administration."
        }
      },
      {
        "@type": "Question",
        "name": "Can Microsoft Intune manage Windows, macOS, Android and iOS devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Microsoft Intune supports Windows, macOS, Android and iOS devices, allowing organisations to apply consistent security policies, deploy applications, monitor compliance and manage endpoints from a central cloud-based platform."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a Microsoft Intune deployment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The implementation timeline depends on factors such as the number of users, devices, existing infrastructure and business requirements. Smaller deployments may be completed within days, while larger enterprise environments often require a phased rollout. At Nocastra, every deployment begins with a detailed assessment to ensure a smooth and well-planned implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate from SCCM or another endpoint management platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Nocastra helps organisations migrate from Microsoft Configuration Manager (formerly SCCM), VMware Workspace ONE and other endpoint management platforms to Microsoft Intune. We develop a structured migration plan that minimises disruption, protects existing configurations where appropriate and ensures business continuity throughout the transition."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing Microsoft Intune support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Microsoft Intune Managed Services include ongoing monitoring, policy optimisation, troubleshooting, user support and continuous improvements to help keep your environment secure, compliant and operating efficiently after deployment."
        }
      },
      {
        "@type": "Question",
        "name": "How does Microsoft Intune improve endpoint security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune helps strengthen endpoint security by enforcing compliance policies, encrypting devices, deploying security configurations, managing application access and integrating with Microsoft Defender and Microsoft Entra ID. Together, these capabilities support a Zero Trust security strategy while helping protect users, devices and business data."
        }
      },
      {
        "@type": "Question",
        "name": "Does Microsoft Intune integrate with Microsoft 365?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Microsoft Intune integrates seamlessly with Microsoft 365, including Microsoft Entra ID, Microsoft Defender, Exchange Online, Microsoft Teams and other Microsoft cloud services. These integrations provide unified identity management, enhanced security and simplified administration across your organisation."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit most from Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune is valuable across a wide range of industries, including professional services, healthcare, retail, logistics, financial services, manufacturing, education and oil & gas. Any organisation that manages employee devices, supports remote or hybrid work or needs stronger endpoint security can benefit from Microsoft Intune."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Nocastra for Microsoft Intune services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nocastra combines over 15 years of IT experience with a specialist focus on Microsoft Intune and the wider Microsoft ecosystem. We provide consulting, deployment, migration, managed services and ongoing support tailored to your organisation's goals. Our security-first approach ensures every Microsoft Intune environment is designed for long-term performance, compliance and business growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need Microsoft 365 to use Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune is part of the Microsoft ecosystem and is commonly deployed alongside Microsoft 365. While licensing options vary, integrating Microsoft Intune with Microsoft 365 allows organisations to benefit from centralised identity management, productivity tools and enhanced security capabilities."
        }
      },
      {
        "@type": "Question",
        "name": "Can Microsoft Intune support remote and hybrid work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Microsoft Intune enables IT teams to deploy, secure and manage devices regardless of location. Employees can securely access business resources from the office, home or while travelling, while administrators maintain centralised visibility and control over every managed endpoint."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The first step is understanding your current IT environment, business objectives and endpoint management requirements. Nocastra begins every engagement with a consultation and assessment to develop a deployment strategy that aligns with your organisation's operational, security and compliance needs."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What is Microsoft Intune?",
      answer: "Microsoft Intune is Microsoft's cloud-based endpoint management solution that enables organisations to securely manage Windows, macOS, Android and iOS devices from a single platform. It helps businesses deploy devices, enforce security policies, manage applications and protect corporate data while supporting remote and hybrid work environments."
    },
    {
      question: "Is Microsoft Intune suitable for small businesses?",
      answer: "Yes. Microsoft Intune is designed for organisations of all sizes. Whether you manage a small team or thousands of devices across multiple locations, Microsoft Intune provides scalable endpoint management that grows alongside your business while reducing manual IT administration."
    },
    {
      question: "Can Microsoft Intune manage Windows, macOS, Android and iOS devices?",
      answer: "Absolutely. Microsoft Intune supports Windows, macOS, Android and iOS devices, allowing organisations to apply consistent security policies, deploy applications, monitor compliance and manage endpoints from a central cloud-based platform."
    },
    {
      question: "How long does a Microsoft Intune deployment take?",
      answer: "The implementation timeline depends on factors such as the number of users, devices, existing infrastructure and business requirements. Smaller deployments may be completed within days, while larger enterprise environments often require a phased rollout. At Nocastra, every deployment begins with a detailed assessment to ensure a smooth and well-planned implementation."
    },
    {
      question: "Can you migrate from SCCM or another endpoint management platform?",
      answer: <>Yes. Nocastra helps organisations migrate from Microsoft Configuration Manager (formerly SCCM), VMware Workspace ONE and other endpoint management platforms to Microsoft Intune. We develop a structured <Link href="/microsoft-intune/migration" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Migration</Link> plan that minimises disruption, protects existing configurations where appropriate and ensures business continuity throughout the transition.</>
    },
    {
      question: "Do you provide ongoing Microsoft Intune support?",
      answer: <>Yes. Our <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link> include ongoing monitoring, policy optimisation, troubleshooting, user support and continuous improvements to help keep your environment secure, compliant and operating efficiently after deployment.</>
    },
    {
      question: "How does Microsoft Intune improve endpoint security?",
      answer: <>Microsoft Intune helps strengthen endpoint security by enforcing compliance policies, encrypting devices, deploying security configurations, managing application access and integrating with Microsoft Defender and Microsoft Entra ID. Together, these capabilities support a Zero Trust security strategy through <Link href="/microsoft-intune/endpoint-security" style={{ color: "#0284c7", fontWeight: 600 }}>Endpoint Security with Microsoft Intune</Link>.</>
    },
    {
      question: "Does Microsoft Intune integrate with Microsoft 365?",
      answer: <>Yes. Microsoft Intune integrates seamlessly with <Link href="/microsoft-365" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft 365 Services</Link>, including <Link href="/microsoft-entra-id" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Entra ID</Link>, <Link href="/microsoft-defender" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Defender</Link>, Exchange Online, Microsoft Teams and other Microsoft cloud services. These integrations provide unified identity management, enhanced security and simplified administration across your organisation.</>
    },
    {
      question: "What industries benefit most from Microsoft Intune?",
      answer: "Microsoft Intune is valuable across a wide range of industries, including professional services, healthcare, retail, logistics, financial services, manufacturing, education and oil & gas. Any organisation that manages employee devices, supports remote or hybrid work or needs stronger endpoint security can benefit from Microsoft Intune."
    },
    {
      question: "Why choose Nocastra for Microsoft Intune services?",
      answer: "Nocastra combines over 15 years of IT experience with a specialist focus on Microsoft Intune and the wider Microsoft ecosystem. We provide consulting, deployment, migration, managed services and ongoing support tailored to your organisation's goals. Our security-first approach ensures every Microsoft Intune environment is designed for long-term performance, compliance and business growth."
    },
    {
      question: "Do I need Microsoft 365 to use Microsoft Intune?",
      answer: "Microsoft Intune is part of the Microsoft ecosystem and is commonly deployed alongside Microsoft 365. While licensing options vary, integrating Microsoft Intune with Microsoft 365 allows organisations to benefit from centralised identity management, productivity tools and enhanced security capabilities."
    },
    {
      question: "Can Microsoft Intune support remote and hybrid work?",
      answer: "Yes. Microsoft Intune enables IT teams to deploy, secure and manage devices regardless of location. Employees can securely access business resources from the office, home or while travelling, while administrators maintain centralised visibility and control over every managed endpoint."
    },
    {
      question: "How do I get started with Microsoft Intune?",
      answer: <>The first step is understanding your current IT environment, business objectives and endpoint management requirements. Nocastra begins every engagement with a consultation and assessment to develop a <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Deployment</Link> strategy that aligns with your organisation's operational, security and compliance needs.</>
    }
  ];

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
        
        {/* Modern Hero Section */}
        <section style={{ 
          padding: "160px 5% 80px", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Subtle Background Accent */}
          <div style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "50%",
            height: "80%",
            background: "radial-gradient(circle, rgba(2,132,199,0.08) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0
          }} />

          <div style={{ 
            maxWidth: "1250px", 
            margin: "0 auto", 
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            position: "relative",
            zIndex: 1
          }}>
            
            {/* Top Content Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              alignItems: "center"
            }}>
              
              {/* Left: Copy & CTAs */}
              <div style={{ display: "flex", flexDirection: "column", maxWidth: "650px" }}>
                <span style={{ 
                  display: "inline-block", 
                  color: "#0284c7", 
                  fontWeight: 800, 
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "16px"
                }}>
                  Endpoint Management
                </span>
                
                <h1 style={{ 
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)", 
                  fontWeight: 800,
                  letterSpacing: "-1.5px", 
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                  lineHeight: "1.1",
                  fontFamily: "var(--font-headings)"
                }}>
                  Microsoft Intune Services
                </h1>
                
                <h2 style={{ 
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                  lineHeight: "1.4"
                }}>
                  Secure, Deploy and Manage Every Device with Microsoft Intune Experts
                </h2>
                
                <p style={{ 
                  fontSize: "1.1rem", 
                  color: "var(--text-secondary)", 
                  lineHeight: "1.7",
                  marginBottom: "20px"
                }}>
                  Modern businesses need secure, reliable endpoint management that keeps employees productive wherever they work. Nocastra helps organisations deploy, manage and optimise Microsoft Intune to simplify device management, strengthen security and reduce the burden on internal IT teams.
                </p>
                
                <p style={{ 
                  fontSize: "1.1rem", 
                  color: "var(--text-secondary)", 
                  lineHeight: "1.7",
                  marginBottom: "40px"
                }}>
                  Whether you're implementing Microsoft Intune for the first time, migrating from another endpoint management platform or looking for ongoing managed services, our specialists deliver tailored solutions that align with your business goals.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <Link href="#enquiry" className="btn-primary" style={{ backgroundColor: "#0284c7", border: "none", padding: "16px 28px" }}>
                    Book a Microsoft Intune Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                  </Link>
                  <Link href="#assessment" className="btn-secondary" style={{ padding: "16px 28px", backgroundColor: "white", color: "#0284c7", border: "2px solid #0284c7" }}>
                    Request an Intune Assessment
                  </Link>
                </div>
              </div>

              {/* Right: Premium Isometric Visual */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <img 
                  src="/images/intune-hero.png" 
                  alt="Microsoft Intune Centralized Management" 
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(0,0,0,0.05)"
                  }}
                />
              </div>
            </div>

            {/* Bottom Highlights Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              marginTop: "20px"
            }}>
              
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "24px",
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                border: "1px solid var(--border-color)"
              }}>
                <div style={{ color: "#0284c7", backgroundColor: "#e0f2fe", padding: "12px", borderRadius: "12px" }}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>15+ Years</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>of IT Experience</p>
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "24px",
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                border: "1px solid var(--border-color)"
              }}>
                <div style={{ color: "#0284c7", backgroundColor: "#e0f2fe", padding: "12px", borderRadius: "12px" }}>
                  <Users size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>150+</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>Happy Customers</p>
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "24px",
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                border: "1px solid var(--border-color)"
              }}>
                <div style={{ color: "#0284c7", backgroundColor: "#e0f2fe", padding: "12px", borderRadius: "12px" }}>
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>Hundreds</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>of Devices Successfully Managed</p>
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "24px",
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                border: "1px solid var(--border-color)"
              }}>
                <div style={{ color: "#0284c7", backgroundColor: "#e0f2fe", padding: "12px", borderRadius: "12px" }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>Remote & On-Site</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>Microsoft Intune Support</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Trust Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Trusted by Businesses to Deliver Secure Microsoft Intune Solutions
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                From small businesses to growing enterprises, organisations rely on Nocastra to simplify endpoint management, strengthen security and support modern workplaces. With over 15 years of IT experience, we've helped businesses deploy, manage and optimise Microsoft Intune environments that are secure, scalable and built for long-term success.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginTop: "16px" }}>
                From planning through <Link href="/microsoft-intune/consulting" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Consulting</Link> and <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Deployment</Link> to ongoing <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link> and <Link href="/microsoft-intune/support" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Support</Link>, we support every stage of your endpoint management journey.
              </p>
            </div>

            {/* First Row (Statistics) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginBottom: "60px"
            }}>
              <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#f8fafc", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "#0284c7", marginBottom: "8px", fontFamily: "var(--font-headings)" }}>15+</div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>Years of Experience</div>
              </div>
              
              <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#f8fafc", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "#0284c7", marginBottom: "8px", fontFamily: "var(--font-headings)" }}>150+</div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>Happy Customers</div>
              </div>

              <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#f8fafc", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "#0284c7", marginBottom: "8px", fontFamily: "var(--font-headings)" }}>100s</div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>Devices Managed</div>
              </div>

              <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#f8fafc", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px", color: "#0284c7" }}>
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>Security-First Approach</div>
              </div>
            </div>

            {/* Second Row (Trust Features) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px"
            }}>
              {[
                { icon: ShieldCheck, title: "Security-First Implementation", desc: "Built with endpoint security, compliance and modern management best practices at its core." },
                { icon: Award, title: "Microsoft Intune Specialists", desc: "Expert certified engineers with years of hands-on experience in complex IT environments." },
                { icon: Headphones, title: "Remote & On-Site Support", desc: "Responsive technical assistance for your global teams, whether in-office or remote." },
                { icon: RefreshCw, title: "End-to-End Lifecycle Services", desc: "Complete support from architecture and migration to ongoing managed optimization." },
                { icon: Settings, title: "Tailored Deployment Strategies", desc: "Customized rollout plans configured exclusively for your specific business goals." },
                { icon: Handshake, title: "Long-Term IT Partnership", desc: "We act as an extension of your IT team to ensure consistent long-term success." }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    padding: "30px",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02)"
                  }}>
                    <div style={{ 
                      backgroundColor: "#f0f9ff", 
                      color: "#0284c7", 
                      padding: "16px", 
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{feature.title}</h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Pain Points Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
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
                Is Your Business Struggling to Manage and Secure Modern Devices?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  As businesses embrace remote work, hybrid teams and cloud-first environments, managing laptops, desktops, smartphones and tablets has become increasingly complex. Without a centralised endpoint management strategy, IT teams often spend valuable time configuring devices manually, troubleshooting recurring issues and responding to security risks instead of focusing on strategic initiatives.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Many organisations face challenges such as inconsistent security policies, lengthy employee onboarding, limited visibility into device health and difficulty supporting users across multiple locations. As the number of devices grows, so does the complexity of maintaining compliance, protecting company data and ensuring every endpoint remains secure.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Microsoft Intune addresses these challenges by providing a modern, cloud-based platform to deploy, secure and manage devices from a single location. Whether your workforce operates from the office, remotely or across multiple sites, Microsoft Intune enables your IT team to deliver consistent security, streamlined device management and a better user experience.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  At Nocastra, we help organisations implement Microsoft Intune strategically—not just as another IT tool, but as the foundation of a secure, scalable and efficient modern workplace.
                </p>
              </div>
            </div>

            {/* Business Challenges Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "60px"
            }}>
              {[
                { icon: Clock, title: "Managing Devices Has Become Time-Consuming", desc: "Manual device setup, software installation and ongoing maintenance consume valuable IT resources and slow business operations." },
                { icon: Globe, title: "Remote and Hybrid Work Creates New Risks", desc: "Supporting users across multiple locations requires secure access, consistent policies and reliable remote device management." },
                { icon: ShieldAlert, title: "Security Policies Are Difficult to Enforce", desc: "Without centralised management, ensuring every device meets your organisation's security and compliance requirements becomes increasingly challenging." },
                { icon: UserPlus, title: "Employee Onboarding Takes Too Long", desc: "Preparing new devices manually delays productivity and creates an inconsistent onboarding experience for employees." },
                { icon: Search, title: "Limited Visibility Across Your IT Environment", desc: "Without real-time insights into device compliance, software versions and security status, identifying and resolving issues becomes reactive rather than proactive." },
                { icon: Briefcase, title: "IT Teams Are Overloaded", desc: "Routine endpoint management tasks reduce the time available for strategic projects that drive business growth and innovation." }
              ].map((challenge, idx) => {
                const Icon = challenge.icon;
                return (
                  <div key={idx} style={{
                    padding: "30px",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                    borderLeft: "4px solid #ef4444"
                  }}>
                    <div style={{ 
                      color: "#ef4444", 
                      marginBottom: "16px"
                    }}>
                      <Icon size={32} />
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>{challenge.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{challenge.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Transition to Next Section */}
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", padding: "40px", backgroundColor: "white", borderRadius: "20px", border: "1px solid var(--border-color)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text-primary)", lineHeight: "1.6", fontWeight: 500 }}>
                Microsoft Intune simplifies modern endpoint management by giving organisations complete visibility, centralised control and enterprise-grade security across every managed device. Discover how Microsoft Intune helps businesses build a secure and productive workplace.
              </p>
            </div>

          </div>
        </section>

        {/* Why Microsoft Intune Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ maxWidth: "900px", margin: "0 auto 60px", textAlign: "center" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Why Microsoft Intune?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Modern businesses need more than traditional device management. They need a solution that enables employees to work securely from anywhere while giving IT teams complete visibility and control over every managed device.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Microsoft Intune is Microsoft's cloud-based endpoint management platform, designed to simplify how organisations deploy, secure and manage Windows, macOS, Android and iOS devices. Whether your workforce operates from the office, remotely or in a hybrid environment, Microsoft Intune helps create a secure, productive and scalable workplace.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  By centralising endpoint management into a single platform, businesses can strengthen security, automate routine IT tasks and ensure every device remains compliant with organisational policies—without increasing operational complexity.
                </p>
              </div>
            </div>

            {/* Infographic Section */}
            <div style={{
              margin: "0 auto 80px",
              maxWidth: "900px",
              padding: "40px",
              backgroundColor: "#f8fafc",
              borderRadius: "24px",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", textAlign: "center" }}>The Modern Management Ecosystem</h3>
              <img 
                src="/images/intune-ecosystem.png" 
                alt="Microsoft Intune Central Hub Infographic"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px"
                }}
              />
            </div>

            {/* Feature Cards Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "80px"
            }}>
              <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#0284c7", marginBottom: "16px" }}><MonitorSmartphone size={32} /></div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Centralised Device Management</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                  Manage all your corporate devices from a single cloud-based platform. Configure policies, monitor device health, deploy applications and enforce security settings across Windows, macOS, Android and iOS without needing physical access to each device.
                </p>
                <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                  Device Deployment <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#0284c7", marginBottom: "16px" }}><ShieldCheck size={32} /></div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Stronger Security by Design</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                  Protect business data with built-in security policies, device compliance rules, encryption enforcement and seamless integration with the Microsoft security ecosystem. Microsoft Intune helps reduce security risks while supporting modern Zero Trust strategies.
                </p>
                <Link href="/microsoft-intune/endpoint-security" style={{ color: "#0284c7", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                  Endpoint Security <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#0284c7", marginBottom: "16px" }}><Rocket size={32} /></div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Simplified Employee Onboarding</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                  Provision new devices quickly using <Link href="/microsoft-intune/windows-autopilot" style={{ color: "#0284c7", textDecoration: "underline" }}>Windows Autopilot</Link> and automated deployment workflows. Employees receive devices that are pre-configured with company applications, security policies and settings, allowing them to start working with minimal IT intervention.
                </p>
                <Link href="/microsoft-intune/windows-autopilot" style={{ color: "#0284c7", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                  Windows Autopilot <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#0284c7", marginBottom: "16px" }}><FileCheck size={32} /></div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Improved Compliance & Governance</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                  Maintain consistent security standards across your organisation by enforcing compliance policies, monitoring endpoint health and ensuring devices meet your business and regulatory requirements before accessing corporate resources.
                </p>
                <Link href="/microsoft-intune/endpoint-security" style={{ color: "#0284c7", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                  Compliance Policies <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#0284c7", marginBottom: "16px" }}><TrendingUp size={32} /></div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Increased Productivity for IT Teams</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                  Automate repetitive endpoint management tasks, reduce manual configuration and resolve issues remotely. This allows IT teams to spend less time maintaining devices and more time supporting business growth and innovation.
                </p>
                <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                  Microsoft Intune Managed Services <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#0284c7", marginBottom: "16px" }}><Briefcase size={32} /></div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Built for Modern Work</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                  Whether your employees work from headquarters, branch offices or home, Microsoft Intune provides secure access to business resources while maintaining consistent security and management across every endpoint.
                </p>
                <Link href="/microsoft-intune/support" style={{ color: "#0284c7", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                  Microsoft Intune Support <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Comparison Table */}
            <div style={{
              maxWidth: "900px",
              margin: "0 auto 60px",
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid var(--border-color)",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
                <div style={{ padding: "24px", fontWeight: 700, color: "var(--text-primary)", fontSize: "1.1rem" }}>Traditional IT Management</div>
                <div style={{ padding: "24px", fontWeight: 700, color: "#0284c7", fontSize: "1.1rem", backgroundColor: "#f0f9ff", borderLeft: "1px solid var(--border-color)" }}>Microsoft Intune</div>
              </div>
              
              {[
                ["Manual device setup", "Automated provisioning"],
                ["On-site configuration", "Cloud-based management"],
                ["Inconsistent security", "Centralised security policies"],
                ["Limited remote support", "Secure management from anywhere"],
                ["Time-consuming updates", "Automated policy deployment"]
              ].map((row, idx) => (
                <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: idx !== 4 ? "1px solid var(--border-color)" : "none" }}>
                  <div style={{ padding: "20px 24px", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "12px" }}>
                    <XCircle size={20} color="#ef4444" /> {row[0]}
                  </div>
                  <div style={{ padding: "20px 24px", color: "var(--text-primary)", fontWeight: 500, backgroundColor: "#f0f9ff", borderLeft: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "12px" }}>
                    <CheckCircle2 size={20} color="#0284c7" /> {row[1]}
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text-primary)", lineHeight: "1.6", fontWeight: 500 }}>
                Microsoft Intune isn't simply a device management solution—it's the foundation of a secure, cloud-first workplace that enables organisations to scale confidently while protecting users, devices and business data.
              </p>
            </div>

          </div>
        </section>

        {/* Nocastra's Microsoft Intune Services Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Nocastra's Microsoft Intune Services
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Every organisation has different endpoint management requirements. Some need expert guidance before implementing Microsoft Intune, while others require a seamless migration, ongoing management or enhanced endpoint security.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  At Nocastra, we provide end-to-end Microsoft Intune services designed to help businesses plan, deploy, secure and optimise their modern workplace. Whether you're starting your Microsoft Intune journey or looking to improve an existing environment, our specialists deliver practical solutions tailored to your business objectives.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Explore our Microsoft Intune services below to learn how we can support your organisation at every stage of its endpoint management journey.
                </p>
              </div>
            </div>

            {/* Service Cards Grid (2 columns) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "30px",
              marginBottom: "60px"
            }}>
              {[
                { 
                  icon: Compass, 
                  title: "Microsoft Intune Consulting", 
                  subtitle: "Plan your Microsoft Intune strategy with confidence.",
                  desc: "Our Microsoft Intune consultants assess your existing environment, understand your business requirements and develop a deployment strategy that aligns with your security, compliance and operational goals.",
                  link: "/microsoft-intune/consulting",
                  cta: "Explore Consulting"
                },
                { 
                  icon: ServerCog, 
                  title: "Microsoft Intune Deployment", 
                  subtitle: "Implement Microsoft Intune efficiently and securely.",
                  desc: "From tenant configuration and policy creation to application deployment and device enrolment, we deliver structured Microsoft Intune deployments that minimise disruption and prepare your organisation for modern endpoint management.",
                  link: "/microsoft-intune/deployment",
                  cta: "View Deployment Services"
                },
                { 
                  icon: MonitorCheck, 
                  title: "Windows Autopilot", 
                  subtitle: "Automate device provisioning and employee onboarding.",
                  desc: "Simplify how new Windows devices are deployed with Windows Autopilot. Employees receive fully configured devices that are ready to use straight out of the box, reducing IT workload and accelerating productivity.",
                  link: "/microsoft-intune/windows-autopilot",
                  cta: "Discover Windows Autopilot"
                },
                { 
                  icon: ArrowRightLeft, 
                  title: "Microsoft Intune Migration", 
                  subtitle: "Move to Microsoft Intune without disrupting your business.",
                  desc: "Whether you're migrating from SCCM, VMware Workspace ONE, Microsoft Endpoint Configuration Manager or another endpoint management platform, we ensure a carefully planned transition with minimal downtime and maximum continuity.",
                  link: "/microsoft-intune/migration",
                  cta: "Explore Migration"
                },
                { 
                  icon: Cog, 
                  title: "Microsoft Intune Managed Services", 
                  subtitle: "Let us manage Microsoft Intune while you focus on your business.",
                  desc: "Our managed services provide continuous monitoring, policy optimisation, application management, compliance reporting and proactive support to keep your Microsoft Intune environment secure and performing at its best.",
                  link: "/microsoft-intune/managed-services",
                  cta: "See Managed Services"
                },
                { 
                  icon: LifeBuoy, 
                  title: "Microsoft Intune Support", 
                  subtitle: "Expert assistance whenever you need it.",
                  desc: "Whether you're troubleshooting device enrolment issues, resolving policy conflicts or improving your existing Microsoft Intune configuration, our specialists provide responsive support to keep your users productive.",
                  link: "/microsoft-intune/support",
                  cta: "Get Support"
                },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} style={{
                    padding: "40px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}>
                    <div style={{ 
                      backgroundColor: "#f0f9ff", 
                      color: "#0284c7", 
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px"
                    }}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>{service.title}</h3>
                    <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#0284c7", marginBottom: "16px" }}>{service.subtitle}</p>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", flexGrow: 1, marginBottom: "24px" }}>
                      {service.desc}
                    </p>
                    <Link href={service.link} style={{ 
                      color: "white", 
                      backgroundColor: "#0284c7", 
                      padding: "14px 24px", 
                      borderRadius: "12px", 
                      fontWeight: 600, 
                      display: "inline-flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      gap: "8px", 
                      fontSize: "0.95rem",
                      alignSelf: "flex-start",
                      transition: "background-color 0.2s ease"
                    }}>
                      {service.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
              
              {/* 7th Card - Endpoint Security (Centered/spanning) */}
              <div style={{
                gridColumn: "1 / -1",
                padding: "40px",
                backgroundColor: "#0f172a",
                color: "white",
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                <div style={{ 
                  backgroundColor: "rgba(255,255,255,0.1)", 
                  color: "#38bdf8", 
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px"
                }}>
                  <Lock size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "white", marginBottom: "8px" }}>Endpoint Security with Microsoft Intune</h3>
                <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#38bdf8", marginBottom: "16px" }}>Protect every device with a security-first approach.</p>
                <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", maxWidth: "800px", marginBottom: "32px" }}>
                  Strengthen endpoint protection through compliance policies, application protection, encryption, Microsoft Defender integration and Zero Trust principles to safeguard users, devices and business data.
                </p>
                <Link href="/microsoft-intune/endpoint-security" style={{ 
                  color: "#0f172a", 
                  backgroundColor: "#38bdf8", 
                  padding: "16px 32px", 
                  borderRadius: "12px", 
                  fontWeight: 700, 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "8px", 
                  fontSize: "1rem",
                  transition: "background-color 0.2s ease"
                }}>
                  Strengthen Endpoint Security <ArrowRight size={18} />
                </Link>
              </div>

            </div>

            {/* Closing Statement */}
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", padding: "40px", backgroundColor: "white", borderTop: "4px solid #0284c7", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: "1.2rem", color: "var(--text-primary)", lineHeight: "1.6", fontWeight: 600 }}>
                Whether you need strategic consulting, a complete Microsoft Intune deployment or long-term endpoint management, Nocastra delivers practical, scalable solutions that help organisations simplify IT operations, strengthen security and support a modern workforce.
              </p>
            </div>

          </div>
        </section>

        {/* Implementation Process Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Our Microsoft Intune Implementation Process
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", textAlign: "center" }}>
                  A successful Microsoft Intune deployment requires more than simply enabling a cloud service. It demands careful planning, security-first implementation and continuous optimisation to ensure your organisation gets the maximum value from its investment.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", textAlign: "center" }}>
                  At Nocastra, we follow a proven six-stage implementation process that minimises disruption, strengthens endpoint security and delivers a smooth transition to modern device management.
                </p>
              </div>
            </div>

            {/* Vertical Timeline */}
            <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "16px" }}>
              {/* The continuous vertical line */}
              <div style={{
                position: "absolute",
                top: "40px",
                bottom: "40px",
                left: "40px",
                width: "3px",
                backgroundColor: "#e2e8f0",
                zIndex: 0
              }} />

              {[
                { 
                  num: "1",
                  title: "Discovery",
                  icon: Search,
                  desc: <>Every successful project begins with understanding your business. We work closely with your stakeholders to learn about your existing IT environment, business objectives, security requirements and operational challenges. This allows us to provide expert <Link href="/microsoft-intune/consulting" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Consulting</Link> tailored to your organisation—not a one-size-fits-all deployment.</>
                },
                { 
                  num: "2",
                  title: "Assessment",
                  icon: ClipboardList,
                  desc: <>Our specialists evaluate your current infrastructure, devices, Microsoft 365 environment and endpoint management practices. We identify potential risks, compatibility issues and opportunities for improvement before implementation begins, ensuring a smoother deployment with fewer surprises.</>
                },
                { 
                  num: "3",
                  title: "Solution Design",
                  icon: Layers,
                  desc: <>Based on our findings, we design a Microsoft Intune architecture that aligns with your business goals. This includes device enrolment strategies, security baselines, compliance policies, application deployment, user access controls and integration with your Microsoft ecosystem.</>
                },
                { 
                  num: "4",
                  title: "Deployment",
                  icon: Rocket,
                  desc: <>Once the solution is approved, we configure and execute our <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Deployment</Link> using industry best practices. From policy configuration and device enrolment to <Link href="/microsoft-intune/windows-autopilot" style={{ color: "#0284c7", fontWeight: 600 }}>Windows Autopilot</Link> implementation and application deployment, we ensure your transition is secure, efficient and minimally disruptive.</>
                },
                { 
                  num: "5",
                  title: "Security & Compliance",
                  icon: ShieldCheck,
                  desc: <>Security is embedded into every deployment. We implement compliance policies, endpoint protection, encryption standards, conditional access policies and Microsoft Defender integration to help safeguard users, devices and corporate data while supporting your regulatory requirements through <Link href="/microsoft-intune/endpoint-security" style={{ color: "#0284c7", fontWeight: 600 }}>Endpoint Security with Microsoft Intune</Link>.</>
                },
                { 
                  num: "6",
                  title: "Ongoing Management & Support",
                  icon: RefreshCw,
                  desc: <>Technology evolves, and so should your endpoint management strategy. We provide continuous monitoring, policy optimisation, user support and proactive maintenance via our <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link> and <Link href="/microsoft-intune/support" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Support</Link> to ensure your environment remains secure, compliant and aligned with your business as it grows.</>
                }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} style={{ 
                    position: "relative", 
                    display: "flex", 
                    gap: "30px", 
                    marginBottom: idx === 5 ? "0" : "50px",
                    zIndex: 1
                  }}>
                    {/* Icon Bubble */}
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      backgroundColor: "#0284c7",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 0 0 8px #ffffff",
                      position: "relative"
                    }}>
                      <Icon size={24} />
                      <div style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        backgroundColor: "#ef4444",
                        color: "white",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        border: "2px solid white"
                      }}>
                        {step.num}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div style={{
                      backgroundColor: "white",
                      padding: "32px",
                      borderRadius: "16px",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                      flexGrow: 1
                    }}>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
                        {step.num}. {step.title}
                      </h3>
                      <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
        {/* Success Stories Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Microsoft Intune Success Stories
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", textAlign: "center" }}>
                  Every organisation has unique endpoint management challenges. From simplifying device deployments to strengthening endpoint security, our Microsoft Intune solutions help businesses modernise IT operations while reducing complexity and improving user experience.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", textAlign: "center" }}>
                  Explore how Nocastra helps organisations successfully implement, secure and manage Microsoft Intune environments.
                </p>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px"
            }}>
              {[
                {
                  title: "Multi-Site Professional Services Firm",
                  challenge: "The client needed to manage employee laptops across multiple office locations while supporting a growing hybrid workforce. Manual device configuration, inconsistent security settings and lengthy onboarding processes were placing unnecessary pressure on the internal IT team.",
                  solution: <>Nocastra designed and deployed a <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Deployment</Link> with centralised device management, automated provisioning, standardised security policies and secure remote administration. The deployment was integrated with the client's existing Microsoft 365 environment.</>,
                  outcome: "The organisation gained a modern, cloud-managed endpoint environment that simplified IT administration, improved security consistency and enabled employees to receive business-ready devices with minimal manual configuration.",
                  link: "/case-studies/professional-services-intune"
                },
                {
                  title: "National Retail Business",
                  challenge: "Managing devices across multiple retail locations had become increasingly difficult. Store devices required consistent configuration, application deployment and security policies, while IT teams needed greater visibility into endpoint health and compliance.",
                  solution: <>Nocastra implemented Microsoft Intune to centralise device management, automate policy deployment and provide secure remote administration across all retail locations. Standardised <Link href="/microsoft-intune/endpoint-security" style={{ color: "#0284c7", fontWeight: 600 }}>Endpoint Security with Microsoft Intune</Link> ensured every device met requirements.</>,
                  outcome: "The retailer achieved consistent device management across all locations, improved endpoint visibility and reduced the operational effort required to maintain business-critical devices.",
                  link: "/case-studies/national-retail-intune"
                },
                {
                  title: "Logistics & Field Operations Company",
                  challenge: "Field employees relied on laptops and mobile devices across multiple locations, making it difficult to maintain security standards, deploy updates and provide timely IT support.",
                  solution: <>Nocastra implemented Microsoft Intune with secure device enrolment, compliance policies, remote management capabilities and centralised application deployment, supported by our <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link>.</>,
                  outcome: "The organisation established a secure, centrally managed endpoint environment that improved operational efficiency, strengthened endpoint security and simplified remote support for a distributed workforce.",
                  link: "/case-studies/logistics-intune"
                }
              ].map((study, idx) => (
                <div key={idx} style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  border: "1px solid var(--border-color)",
                  padding: "40px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", borderBottom: "2px solid #f1f5f9", paddingBottom: "16px" }}>
                    {study.title}
                  </h3>
                  
                  <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Challenge</h4>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{study.challenge}</p>
                  </div>
                  
                  <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0284c7", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Solution</h4>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{study.solution}</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px", flexGrow: 1 }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Outcome</h4>
                    <p style={{ fontSize: "1rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: "1.6", backgroundColor: "#f0fdf4", padding: "16px", borderRadius: "12px", borderLeft: "4px solid #10b981" }}>{study.outcome}</p>
                  </div>

                  <Link href={study.link} style={{ 
                    color: "white", 
                    backgroundColor: "#0f172a", 
                    padding: "16px 24px", 
                    borderRadius: "12px", 
                    fontWeight: 700, 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    gap: "8px", 
                    fontSize: "1rem",
                    transition: "background-color 0.2s ease",
                    marginTop: "auto"
                  }}>
                    Read the Full Case Study <ArrowRight size={18} />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Nocastra Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "900px", margin: "0 auto 60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Why Choose Nocastra for Microsoft Intune Services?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Choosing the right Microsoft Intune partner is about more than technical expertise. It's about finding a team that understands your business, designs solutions around your operational needs and provides ongoing support long after deployment is complete.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  At Nocastra, we combine years of IT experience with a security-first approach to help organisations confidently deploy, manage and optimise Microsoft Intune. From initial strategy to long-term endpoint management, we work as an extension of your IT team to deliver secure, reliable and scalable solutions.
                </p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "60px",
              marginBottom: "80px",
              alignItems: "start"
            }}>
              
              {/* Left Column - Image */}
              <div style={{ position: "sticky", top: "120px" }}>
                <img 
                  src="/images/intune-team.png" 
                  alt="Nocastra IT Team Collaboration"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(0,0,0,0.05)"
                  }}
                />
              </div>

              {/* Right Column - Value Blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {[
                  {
                    icon: Award,
                    title: "Microsoft Intune Specialists",
                    desc: <>Microsoft Intune isn't just one of the services we offer—it's a core area of expertise. Our team focuses on helping organisations modernise endpoint management through strategic <Link href="/microsoft-intune/consulting" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Consulting</Link>, secure deployments and long-term operational support.</>
                  },
                  {
                    icon: Settings,
                    title: "Tailored for Your Business",
                    desc: <>No two organisations have the same infrastructure, workforce or security requirements. We design solutions around your existing environment, business objectives and compliance needs, ensuring every <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Deployment</Link> is practical, scalable and aligned with your goals.</>
                  },
                  {
                    icon: ShieldCheck,
                    title: "Security Built into Every Deployment",
                    desc: <>Security isn't an afterthought—it's built into every stage of our implementation process. From compliance policies and device security to Microsoft Defender integration and Zero Trust principles, we help protect users, devices and business data via <Link href="/microsoft-intune/endpoint-security" style={{ color: "#0284c7", fontWeight: 600 }}>Endpoint Security with Microsoft Intune</Link>.</>
                  },
                  {
                    icon: RefreshCw,
                    title: "End-to-End Microsoft Intune Services",
                    desc: <>Whether you need expert consulting, a new deployment, migration from an existing platform, <Link href="/microsoft-intune/windows-autopilot" style={{ color: "#0284c7", fontWeight: 600 }}>Windows Autopilot</Link> implementation or ongoing managed services, Nocastra provides complete lifecycle support through a single trusted partner.</>
                  },
                  {
                    icon: Puzzle,
                    title: "Seamless Microsoft 365 Integration",
                    desc: <>Microsoft Intune delivers the greatest value when it works alongside the wider Microsoft ecosystem. We help organisations integrate Intune with <Link href="/microsoft-365" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft 365 Services</Link>, Microsoft Entra ID, Microsoft Defender, Exchange Online and Microsoft Teams to create a secure workplace.</>
                  },
                  {
                    icon: Briefcase,
                    title: "Supporting Businesses Across Every Industry",
                    desc: "Every industry faces unique endpoint management challenges. From professional services and retail to logistics, healthcare, manufacturing and financial services, we adapt Microsoft Intune to meet industry-specific operational, security and compliance requirements."
                  },
                  {
                    icon: Handshake,
                    title: "A Long-Term Technology Partner",
                    desc: <>Our relationship doesn't end after deployment. We provide ongoing monitoring, policy optimisation, user support and continuous improvements via <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Managed Services</Link> and <Link href="/microsoft-intune/support" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Support</Link> to help your environment evolve alongside your business.</>
                  }
                ].map((block, idx) => {
                  const Icon = block.icon;
                  return (
                    <div key={idx} style={{ display: "flex", gap: "20px" }}>
                      <div style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        backgroundColor: "#f0f9ff",
                        color: "#0284c7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
                          {block.title}
                        </h3>
                        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                          {block.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* The Nocastra Difference Comparison Block */}
            <div style={{
              maxWidth: "1000px",
              margin: "0 auto",
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid var(--border-color)",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
            }}>
              <div style={{ padding: "30px", backgroundColor: "#0f172a", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", margin: 0 }}>The Nocastra Difference</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
                <div style={{ padding: "24px", fontWeight: 700, color: "var(--text-primary)", fontSize: "1.1rem" }}>Typical IT Provider</div>
                <div style={{ padding: "24px", fontWeight: 700, color: "#0284c7", fontSize: "1.1rem", backgroundColor: "#f0f9ff", borderLeft: "1px solid var(--border-color)" }}>Nocastra</div>
              </div>
              
              {[
                ["General IT support across many platforms", "Microsoft Intune specialists with deep endpoint management expertise"],
                ["Standard, one-size-fits-all deployments", "Solutions designed around your business and security requirements"],
                ["Deployment-focused engagement", "Consulting, implementation, optimisation and ongoing managed services"],
                ["Reactive issue resolution", "Proactive monitoring, optimisation and continuous improvement"],
                ["Limited Microsoft ecosystem integration", "End-to-end integration across Microsoft Intune, Microsoft 365, Entra ID and Defender"]
              ].map((row, idx) => (
                <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: idx !== 4 ? "1px solid var(--border-color)" : "none" }}>
                  <div style={{ padding: "20px 24px", color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: "1.5" }}>
                    <div style={{ marginTop: "2px" }}><XCircle size={20} color="#ef4444" /></div> 
                    <span>{row[0]}</span>
                  </div>
                  <div style={{ padding: "20px 24px", color: "var(--text-primary)", fontWeight: 500, backgroundColor: "#f0f9ff", borderLeft: "1px solid var(--border-color)", display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: "1.5" }}>
                    <div style={{ marginTop: "2px" }}><CheckCircle2 size={20} color="#0284c7" /></div> 
                    <span>{row[1]}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Industries Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "900px", margin: "0 auto 60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Microsoft Intune Solutions for Every Industry
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Every industry has unique operational, security and compliance requirements. Whether you're managing office workstations, frontline devices or a distributed workforce, Microsoft Intune provides the flexibility to secure and manage endpoints across your entire organisation.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  At Nocastra, we tailor Microsoft Intune solutions to the way your business operates—helping organisations improve security, simplify device management and support a productive workforce regardless of industry.
                </p>
              </div>
            </div>

            {/* Industry Cards Grid (2 columns on desktop) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "30px",
              marginBottom: "40px"
            }}>
              {[
                { 
                  icon: Flame, 
                  title: "Oil & Gas", 
                  desc: "Manage devices across corporate offices, field operations and remote sites with secure access, centralised management and consistent security policies that keep critical operations running smoothly.",
                  link: "/industries/oil-gas",
                  cta: "Explore Oil & Gas Solutions"
                },
                { 
                  icon: Store, 
                  title: "Retail", 
                  desc: "Support point-of-sale systems, store devices and mobile workforces with secure endpoint management, rapid device provisioning and simplified application deployment across multiple locations.",
                  link: "/industries/retail",
                  cta: "Explore Retail Solutions"
                },
                { 
                  icon: Truck, 
                  title: "Logistics & Transportation", 
                  desc: "Keep drivers, warehouse staff and operational teams securely connected by managing mobile devices, tablets and laptops from a single cloud-based platform while maintaining visibility across your fleet.",
                  link: "/industries/logistics",
                  cta: "Explore Logistics Solutions"
                },
                { 
                  icon: Landmark, 
                  title: "Financial Services", 
                  desc: "Protect sensitive financial data through advanced compliance policies, device encryption, secure access controls and endpoint management designed to support regulatory requirements.",
                  link: "/industries/financial-services",
                  cta: "Explore Financial Services Solutions"
                },
                { 
                  icon: HeartPulse, 
                  title: "Healthcare", 
                  desc: "Secure clinical workstations, shared devices and mobile healthcare equipment while supporting compliance requirements and ensuring healthcare professionals have reliable access to critical applications.",
                  link: "/industries/healthcare",
                  cta: "Explore Healthcare Solutions"
                },
                { 
                  icon: Building, 
                  title: "Professional Services", 
                  desc: "Enable consultants, legal firms, engineering companies and corporate teams to work securely from anywhere with streamlined device management, secure remote access and simplified employee onboarding.",
                  link: "/industries/professional-services",
                  cta: "Explore Professional Services Solutions"
                },
                { 
                  icon: Factory, 
                  title: "Manufacturing", 
                  desc: "Manage devices across production facilities, warehouses and administrative offices while improving operational visibility, maintaining security standards and reducing the complexity of endpoint management.",
                  link: "/industries/manufacturing",
                  cta: "Explore Manufacturing Solutions"
                },
                { 
                  icon: GraduationCap, 
                  title: "Education", 
                  desc: "Support students, educators and administrative staff with secure device management, automated provisioning and simplified IT administration across classrooms, campuses and remote learning environments.",
                  link: "/industries/education",
                  cta: "Explore Education Solutions"
                },
              ].map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <div key={idx} style={{
                    padding: "32px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <div style={{ 
                        backgroundColor: "white", 
                        color: "#0284c7", 
                        width: "56px",
                        height: "56px",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
                        flexShrink: 0
                      }}>
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)" }}>{industry.title}</h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: "24px" }}>
                      {industry.desc}
                    </p>
                    <Link href={industry.link} style={{ 
                      color: "#0284c7", 
                      fontWeight: 700, 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "6px", 
                      fontSize: "1rem",
                      alignSelf: "flex-start",
                      borderBottom: "2px solid transparent",
                      paddingBottom: "2px"
                    }}>
                      {industry.cta} <ArrowRight size={18} />
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Technologies We Integrate With Section */}
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Header and Intro */}
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "900px", margin: "0 auto 60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Microsoft Technologies We Integrate With
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Microsoft Intune delivers its greatest value when it's integrated with the broader Microsoft ecosystem. At Nocastra, we don't simply deploy Microsoft Intune—we design connected workplace solutions that bring together identity, security, collaboration and cloud services into a single, unified management experience.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  By integrating Microsoft Intune with your existing Microsoft technologies, we help organisations simplify IT operations, strengthen security and create a seamless digital workplace for employees across every device.
                </p>
              </div>
            </div>

            {/* Integration Cards Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              marginBottom: "60px"
            }}>
              {[
                { 
                  icon: Cloud, 
                  title: "Microsoft 365", 
                  desc: "Centralise endpoint management alongside your Microsoft 365 environment to simplify user administration, application management and productivity across your organisation.",
                  link: "/microsoft-365",
                  cta: "Explore Microsoft 365 Services"
                },
                { 
                  icon: Key, 
                  title: "Microsoft Entra ID", 
                  desc: "Strengthen identity and access management through secure authentication, Conditional Access policies and seamless user provisioning integrated with Microsoft Intune.",
                  link: "/microsoft-entra-id",
                  cta: "Learn About Microsoft Entra ID"
                },
                { 
                  icon: Shield, 
                  title: "Microsoft Defender", 
                  desc: "Protect users, devices and business data with advanced threat protection, endpoint detection and security policies that work together with Microsoft Intune.",
                  link: "/microsoft-defender",
                  cta: "Discover Microsoft Defender Integration"
                },
                { 
                  icon: MonitorCheck, 
                  title: "Windows Autopilot", 
                  desc: "Automate device provisioning and deliver secure, business-ready Windows devices directly to employees with zero-touch deployment.",
                  link: "/windows-autopilot",
                  cta: "Explore Windows Autopilot"
                },
                { 
                  icon: Server, 
                  title: "Microsoft Azure", 
                  desc: "Connect Microsoft Intune with Azure services to support cloud infrastructure, identity management and modern workplace solutions built for scale.",
                  link: "/azure-services",
                  cta: "Explore Azure Services"
                },
                { 
                  icon: Mail, 
                  title: "Exchange Online", 
                  desc: "Protect corporate email access by applying compliance policies and conditional access controls to managed devices across your organisation.",
                  link: "/exchange-online",
                  cta: "Learn About Exchange Online Integration"
                }
              ].map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div key={idx} style={{
                    padding: "32px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <div style={{ 
                        backgroundColor: "#0284c7", 
                        color: "white", 
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)" }}>{tech.title}</h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: "24px" }}>
                      {tech.desc}
                    </p>
                    <Link href={tech.link} style={{ 
                      color: "#0284c7", 
                      fontWeight: 700, 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "6px", 
                      fontSize: "0.95rem",
                      alignSelf: "flex-start",
                      borderBottom: "2px solid transparent",
                      paddingBottom: "2px"
                    }}>
                      {tech.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
              
              {/* Microsoft Teams (Centered Full Width Card via Flex or Grid Column Span) */}
              <div style={{
                gridColumn: "1 / -1",
                padding: "32px",
                backgroundColor: "#f0f9ff",
                borderRadius: "20px",
                border: "1px solid #bae6fd",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                <div style={{ 
                  backgroundColor: "#0284c7", 
                  color: "white", 
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: "0 4px 10px rgba(2, 132, 199, 0.2)"
                }}>
                  <MessageSquare size={28} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0369a1", marginBottom: "12px" }}>Microsoft Teams</h3>
                <p style={{ fontSize: "1.05rem", color: "#0c4a6e", lineHeight: "1.6", maxWidth: "800px", marginBottom: "24px" }}>
                  Enable secure collaboration by ensuring only compliant and managed devices can access Microsoft Teams and organisational resources.
                </p>
                <Link href="/microsoft-teams" style={{ 
                  color: "white", 
                  backgroundColor: "#0284c7", 
                  padding: "14px 24px", 
                  borderRadius: "10px", 
                  fontWeight: 600, 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "8px", 
                  fontSize: "0.95rem",
                  transition: "background-color 0.2s ease"
                }}>
                  Explore Microsoft Teams Solutions <ArrowRight size={16} />
                </Link>
              </div>

            </div>

            {/* Summary Banner */}
            <div style={{
              backgroundColor: "#0f172a",
              borderRadius: "20px",
              padding: "48px 5%",
              textAlign: "center",
              color: "white",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Subtle background graphic */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.1,
                backgroundImage: "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.8) 50%, transparent 75%)",
                backgroundSize: "200% 200%",
                animation: "shimmer 10s infinite linear"
              }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "20px", letterSpacing: "-0.5px" }}>
                  One Platform. One Identity. One Secure Workplace.
                </h3>
                <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.7" }}>
                  By integrating Microsoft Intune with Microsoft 365, Entra ID, Defender, Azure and other Microsoft technologies, Nocastra helps organisations build a connected, secure and scalable modern workplace from a single management platform.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section with Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        
        <section style={{ 
          padding: "80px 5%", 
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "24px",
                fontFamily: "var(--font-headings)",
                letterSpacing: "-0.5px"
              }}>
                Frequently Asked Questions About Microsoft Intune Services
              </h2>
            </div>

            {/* Accordion List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "60px" }}>
              {faqs.map((faq, idx) => (
                <details key={idx} style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  border: "1px solid var(--border-color)",
                  overflow: "hidden"
                }} className="faq-details">
                  <summary style={{
                    padding: "24px",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
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

            {/* Prompt for Unanswered Questions */}
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              border: "1px solid var(--border-color)"
            }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>
                Still have questions about Microsoft Intune?
              </h3>
              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
                Every organisation's environment is different. If you can't find the answer you're looking for, speak with one of our Microsoft Intune specialists for personalised guidance on deployment, migration, security or ongoing management.
              </p>
              <Link href="#enquiry" style={{ 
                color: "white", 
                backgroundColor: "#0284c7", 
                padding: "16px 32px", 
                borderRadius: "12px", 
                fontWeight: 700, 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: "8px", 
                fontSize: "1rem",
                transition: "background-color 0.2s ease"
              }}>
                Talk to an Intune Expert <ArrowRight size={18} />
              </Link>
            </div>

          </div>
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

        {/* Enquiry Form and Final CTA Section */}
        <section id="enquiry" style={{ 
          padding: "80px 5%", 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-color)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
              gap: "60px",
              marginBottom: "80px"
            }}>
              
              {/* Left Column: CTA Copy and Expectations */}
              <div>
                <h2 style={{ 
                  fontSize: "clamp(2rem, 3vw, 2.5rem)", 
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                  fontFamily: "var(--font-headings)",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.2"
                }}>
                  Ready to Modernise Your Endpoint Management?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    Whether you're planning your first Microsoft Intune deployment, migrating from an existing endpoint management platform or looking to optimise your current environment, Nocastra is here to help.
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    Our Microsoft Intune specialists will take the time to understand your organisation, assess your existing infrastructure and recommend a solution tailored to your operational, security and compliance requirements. No generic recommendations—just practical guidance designed around your business.
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", fontWeight: 500 }}>
                    Book a consultation with our team and discover how Microsoft Intune can simplify endpoint management, strengthen security and support a more productive modern workplace.
                  </p>
                </div>
                
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                  What You Can Expect
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    "A discussion about your current IT environment and business objectives",
                    "An assessment of your endpoint management challenges",
                    "Recommendations tailored to your organisation's requirements",
                    "Guidance on Microsoft Intune deployment, migration or optimisation",
                    "Answers to your technical and business questions",
                    "A clear roadmap for implementing Microsoft Intune successfully"
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      <CheckCircle2 size={24} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Contact Form */}
              <div style={{
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>
                  Book Your Microsoft Intune Consultation
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "32px" }}>
                  Complete the form below and one of our specialists will be in touch to discuss your requirements and recommend the most suitable approach.
                </p>

                <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Name *</label>
                      <input type="text" required style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Company *</label>
                      <input type="text" required style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white" }} />
                    </div>
                  </div>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Work Email *</label>
                      <input type="email" required style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Phone Number</label>
                      <input type="tel" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white" }} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Number of Managed Devices</label>
                      <select style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white", color: "var(--text-primary)" }}>
                        <option value="">Select...</option>
                        <option value="1-25">1–25</option>
                        <option value="26-100">26–100</option>
                        <option value="101-250">101–250</option>
                        <option value="251-500">251–500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Current Management Platform</label>
                      <input type="text" placeholder="e.g. SCCM, Jamf" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white" }} />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>Message *</label>
                    <textarea rows={4} required style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem", backgroundColor: "white", resize: "vertical" }}></textarea>
                  </div>
                  
                  <button type="button" style={{ 
                    backgroundColor: "#0f172a", 
                    color: "white", 
                    padding: "16px", 
                    borderRadius: "8px", 
                    fontWeight: 700, 
                    fontSize: "1.05rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    transition: "background-color 0.2s ease",
                    marginTop: "8px"
                  }}>
                    Request Consultation <ArrowRight size={18} />
                  </button>
                </form>

                <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid #cbd5e1" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>Prefer to Speak with an Expert?</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>
                    If you'd rather discuss your project directly, our team is available to answer your questions and help you determine the best Microsoft Intune strategy for your business.
                  </p>
                  <Link href="/contact" style={{ 
                    color: "#0284c7", 
                    fontWeight: 700, 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "6px", 
                    fontSize: "0.95rem",
                    borderBottom: "2px solid transparent",
                    paddingBottom: "2px"
                  }}>
                    Talk to an Intune Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>

            {/* Final Trust Bar */}
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: "center", 
              gap: "32px", 
              padding: "32px 0",
              borderTop: "1px solid var(--border-color)",
              borderBottom: "1px solid var(--border-color)",
              marginBottom: "60px"
            }}>
              {[
                "No obligation consultation",
                "Tailored recommendations",
                "Security-first approach",
                "Remote & On-Site Support"
              ].map((text, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 600, color: "var(--text-primary)", fontSize: "1.05rem" }}>
                  <CheckCircle2 size={20} color="#0284c7" />
                  {text}
                </div>
              ))}
            </div>

            {/* Quick Links / Content Cluster */}
            <div style={{ textAlign: "center" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "20px" }}>
                Looking for a specific Microsoft Intune service?
              </h4>
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                justifyContent: "center", 
                gap: "16px" 
              }}>
                {[
                  { name: "Microsoft Intune Consulting", url: "/microsoft-intune/consulting" },
                  { name: "Microsoft Intune Deployment", url: "/microsoft-intune/deployment" },
                  { name: "Windows Autopilot", url: "/windows-autopilot" },
                  { name: "Microsoft Intune Migration", url: "/microsoft-intune/migration" },
                  { name: "Microsoft Intune Managed Services", url: "/microsoft-intune/managed-services" },
                  { name: "Microsoft Intune Support", url: "/microsoft-intune/support" }
                ].map((link, idx) => (
                  <Link key={idx} href={link.url} style={{ 
                    backgroundColor: "#f1f5f9", 
                    color: "var(--text-secondary)", 
                    padding: "8px 16px", 
                    borderRadius: "30px", 
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    border: "1px solid transparent"
                  }}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
