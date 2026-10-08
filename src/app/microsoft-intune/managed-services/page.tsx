import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import IntuneEnquiryCTA from "@/src/components/IntuneEnquiryCTA";
import {  
  ArrowRight, CheckCircle2, ShieldCheck, Award, 
  Settings, Users, Laptop, FileCheck, Search,
  Globe, ChevronDown, Check, Briefcase, Activity, 
  RefreshCw, CloudCog, Headphones, BarChart, HardDrive, Layers
 } from "lucide-react";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";


export const metadata: Metadata = {
  title: "Microsoft Intune Managed Services - Nocastra",
  description: "Ongoing Microsoft Intune management that keeps your business secure, compliant and productive. We provide proactive monitoring, policy optimisation and technical support.",
};

export default function MicrosoftIntuneManagedServicesPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Microsoft Intune Managed Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Intune Managed Services involve outsourcing the day-to-day administration, monitoring, and ongoing optimisation of your Intune environment to a team of specialists to ensure it remains secure and aligned with best practices."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need managed services if I already have Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intune is not a set-and-forget platform. New devices are constantly enrolled, applications require updates, and security threats evolve. Managed services ensure your environment doesn't become outdated, insecure, or cluttered with redundant policies."
        }
      },
      {
        "@type": "Question",
        "name": "Can you manage an existing Microsoft Intune environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We begin our managed services engagements with a comprehensive health check of your existing environment. We'll identify any misconfigurations or security gaps and work with you to optimise the tenant before moving into ongoing management."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your managed service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our managed services include device compliance monitoring, security policy updates, application packaging and deployment, Windows Update management, new device enrolment support, and regular reporting and health checks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide user support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer tiered support models. We can act as an escalation point for your internal Level 1 helpdesk, or we can provide direct end-user support for device enrolment and application access issues."
        }
      },
      {
        "@type": "Question",
        "name": "How often do you review policies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We conduct continuous monitoring, but we also perform formal monthly health reviews and quarterly strategic reviews to ensure your policies align with Microsoft's latest security baselines and your changing business requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work alongside our internal IT team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Through our Co-Managed Services model, we act as an extension of your IT department, providing specialist endpoint management expertise while your team retains overall control of day-to-day IT operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide regular reporting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide detailed monthly reports outlining device compliance scores, security patch status, application deployment success rates, and strategic recommendations for the upcoming month."
        }
      },
      {
        "@type": "Question",
        "name": "Can managed services include Microsoft 365 administration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Microsoft Intune integrates heavily with the rest of the Microsoft 365 ecosystem. Our managed services can be extended to include administration of Microsoft Entra ID (Azure AD), Microsoft Defender, and general Microsoft 365 tenant management."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is simple. Contact us to book an initial consultation where we will review your current environment and recommend a support model that fits your business needs."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What are Microsoft Intune Managed Services?",
      answer: "Microsoft Intune Managed Services involve outsourcing the day-to-day administration, monitoring, and ongoing optimisation of your Intune environment to a team of specialists to ensure it remains secure and aligned with best practices."
    },
    {
      question: "Do I need managed services if I already have Microsoft Intune?",
      answer: "Intune is not a set-and-forget platform. New devices are constantly enrolled, applications require updates, and security threats evolve. Managed services ensure your environment doesn't become outdated, insecure, or cluttered with redundant policies."
    },
    {
      question: "Can you manage an existing Microsoft Intune environment?",
      answer: "Yes. We begin our managed services engagements with a comprehensive health check of your existing environment. We'll identify any misconfigurations or security gaps and work with you to optimise the tenant before moving into ongoing management."
    },
    {
      question: "What's included in your managed service?",
      answer: "Our managed services include device compliance monitoring, security policy updates, application packaging and deployment, Windows Update management, new device enrolment support, and regular reporting and health checks."
    },
    {
      question: "Do you provide user support?",
      answer: "Yes. We offer tiered support models. We can act as an escalation point for your internal Level 1 helpdesk, or we can provide direct end-user support for device enrolment and application access issues."
    },
    {
      question: "How often do you review policies?",
      answer: "We conduct continuous monitoring, but we also perform formal monthly health reviews and quarterly strategic reviews to ensure your policies align with Microsoft's latest security baselines and your changing business requirements."
    },
    {
      question: "Can you work alongside our internal IT team?",
      answer: "Absolutely. Through our Co-Managed Services model, we act as an extension of your IT department, providing specialist endpoint management expertise while your team retains overall control of day-to-day IT operations."
    },
    {
      question: "Do you provide regular reporting?",
      answer: "Yes. We provide detailed monthly reports outlining device compliance scores, security patch status, application deployment success rates, and strategic recommendations for the upcoming month."
    },
    {
      question: "Can managed services include Microsoft 365 administration?",
      answer: "Yes, Microsoft Intune integrates heavily with the rest of the Microsoft 365 ecosystem. Our managed services can be extended to include administration of Microsoft Entra ID (Azure AD), Microsoft Defender, and general Microsoft 365 tenant management."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple. Contact us to book an initial consultation where we will review your current environment and recommend a support model that fits your business needs."
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
            background: "radial-gradient(circle, rgba(234,88,12,0.15) 0%, rgba(15,23,42,0) 70%)",
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
                Microsoft Intune Managed Services
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#ffedd5", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Ongoing Management That Keeps Your Business Secure, Compliant and Productive
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                Deploying Microsoft Intune is only the beginning. As your organisation grows, devices change, employees join and leave, applications evolve and security threats continue to develop. Keeping your Microsoft Intune environment secure and optimised requires continuous management.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                Nocastra's Microsoft Intune Managed Services provide ongoing administration, monitoring, policy optimisation and technical support to help your organisation get the most from Microsoft Intune. Whether you need a fully managed service or additional expertise to support your internal IT team, we help you maintain a secure, reliable and high-performing endpoint management environment.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="#enquiry" style={{ 
                  backgroundColor: "#f97316", 
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
                  Book a Managed Services Consultation <ArrowRight size={20} />
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
                  Talk to an Intune Specialist
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
                { label: "15+ Years of IT Experience" },
                { label: "Microsoft Intune Specialists" },
                { label: "Hundreds of Devices Managed" },
                { label: "150+ Happy Customers" }
              ].map((highlight, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Award size={20} color="#fdba74" />
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "white" }}>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 2. WHY BUSINESSES CHOOSE MANAGED SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              Why Businesses Choose Microsoft Intune Managed Services
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft Intune is not a platform that can be configured once and forgotten. New devices need to be enrolled, policies must evolve with changing business requirements and security settings require regular review to protect against emerging threats.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Many organisations simply don't have the time or specialist expertise to continuously manage Microsoft Intune alongside their day-to-day IT responsibilities.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", fontWeight: 500, color: "var(--text-primary)" }}>
                Nocastra acts as an extension of your IT team, providing proactive management, ongoing optimisation and expert guidance to ensure your Microsoft Intune environment remains secure, compliant and aligned with your business goals.
              </p>
              <div style={{ backgroundColor: "#fff7ed", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #f97316", marginTop: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "#9a3412", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                  With continuous monitoring and regular improvements, we help reduce operational overhead, improve endpoint security and give your internal teams more time to focus on strategic initiatives.
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
                What's Included in Our Managed Services
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: Activity, title: "Endpoint Monitoring", desc: "Continuously monitor managed devices to identify issues early, improve visibility and maintain a healthy endpoint environment." },
                { icon: Settings, title: "Policy Management", desc: "Review, update and optimise compliance policies, configuration profiles and security settings as your business evolves." },
                { icon: Laptop, title: "Device Lifecycle Management", desc: "Manage device enrolment, provisioning, reassignment and retirement to maintain consistency throughout every stage." },
                { icon: Layers, title: "Application Management", desc: "Deploy, update and manage Microsoft 365 applications and line-of-business software through Microsoft Intune." },
                { icon: ShieldCheck, title: "Security & Compliance", desc: "Monitor compliance, implement security baselines and help ensure devices continue to meet organisational requirements." },
                { icon: Headphones, title: "User & Device Support", desc: "Provide assistance with device enrolment, policy issues, application deployment and day-to-day Intune administration." },
                { icon: BarChart, title: "Reporting & Health Checks", desc: "Deliver regular reports on device compliance, policy status, endpoint health and recommendations for improvements." },
                { icon: RefreshCw, title: "Continuous Optimisation", desc: "Review your environment regularly and implement improvements as Microsoft releases new features and capabilities." }
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <div style={{ backgroundColor: "#fff7ed", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <service.icon size={24} color="#f97316" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: "20px" }}>{service.desc}</p>
                  <Link href="#enquiry" style={{ color: "#ea580c", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 4. PROACTIVE MONITORING & OPTIMISATION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#fff7ed", color: "#ea580c", padding: "8px 16px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem", marginBottom: "24px" }}>
                Beyond Reactive Support
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px", lineHeight: "1.2" }}>
                Proactive Monitoring & Optimisation
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                Technology never stands still—and neither should your endpoint management strategy.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                Our Microsoft Intune Managed Services go beyond reactive support by continuously monitoring your environment and identifying opportunities to improve security, compliance and operational efficiency.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                We regularly review policies, configuration profiles, application deployments and device health to ensure your Microsoft Intune environment remains aligned with Microsoft's best practices and your organisation's evolving requirements.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 600, lineHeight: "1.7", marginBottom: "0" }}>
                By identifying potential issues before they impact users, we help reduce downtime, strengthen endpoint security and maintain a consistently reliable endpoint management experience.
              </p>
            </div>
            
            <div style={{ backgroundColor: "#f8fafc", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-color)", textAlign: "center" }}>
               <CloudCog size={64} color="#f97316" style={{ marginBottom: "24px" }} />
               <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "16px", color: "var(--text-primary)" }}>Continuous Evolution</h3>
               <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
                 Microsoft updates Intune constantly with new capabilities and security baselines. Our managed service ensures your organisation takes full advantage of these updates without your internal IT team needing to research, test, and deploy them.
               </p>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 5. WHAT WE MANAGE EVERY MONTH (Strategic Addition) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "16px" }}>
                What We Manage Every Month
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1" }}>
                Managed services aren't just an insurance policy. It's a recurring suite of proactive actions to keep your environment completely optimised.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {[
                "Device compliance monitoring",
                "New device enrolment",
                "Policy reviews and optimisation",
                "Application deployment and updates",
                "Security baseline reviews",
                "Windows Update management",
                "Microsoft Intune health checks",
                "Reporting and recommendations",
                "User onboarding and offboarding support",
                "Ongoing best-practice improvements"
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <CheckCircle2 size={24} color="#f97316" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: "white", fontSize: "1.05rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 6. OUR ONGOING MANAGEMENT PROCESS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Ongoing Management Process
              </h2>
            </div>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "16px",
              textAlign: "center"
            }}>
              {[
                { title: "Monthly Health Review", icon: Activity },
                { title: "Monitor Devices & Compliance", icon: Search },
                { title: "Policy Optimisation", icon: Settings },
                { title: "Security Improvements", icon: ShieldCheck },
                { title: "Application Updates", icon: HardDrive },
                { title: "Reporting & Recommendations", icon: FileCheck },
                { title: "Continuous Improvement", icon: RefreshCw }
              ].map((step, idx) => (
                <div key={idx} style={{ padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "16px", backgroundColor: "white", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                    <step.icon size={28} color="#ea580c" />
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: "1.4" }}>
                    {step.title}
                  </h4>
                  {idx < 6 && (
                    <div style={{ display: "none", color: "#cbd5e1" }} className="step-arrow">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 7. FLEXIBLE ENGAGEMENT MODELS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Flexible Engagement Models
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                We understand that different organisations require different levels of support. Choose the model that best fits your internal capabilities.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              <div style={{ border: "2px solid #f97316", borderRadius: "20px", padding: "40px", backgroundColor: "#fff7ed", position: "relative" }}>
                <div style={{ position: "absolute", top: "-14px", left: "40px", backgroundColor: "#f97316", color: "white", padding: "4px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 800 }}>MOST POPULAR</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "10px" }}>Fully Managed Microsoft Intune</h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                  We take responsibility for the day-to-day administration, monitoring and optimisation of your Microsoft Intune environment, acting as an extension of your IT department.
                </p>
                <Link href="#enquiry" style={{ color: "#ea580c", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>Enquire about Fully Managed <ArrowRight size={18} /></Link>
              </div>

              <div style={{ border: "1px solid var(--border-color)", borderRadius: "20px", padding: "40px", backgroundColor: "white" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>Co-Managed Services</h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                  Work alongside your internal IT team. We provide specialist Microsoft Intune expertise while your team retains control of day-to-day IT operations.
                </p>
                <Link href="#enquiry" style={{ color: "#ea580c", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>Enquire about Co-Managed <ArrowRight size={18} /></Link>
              </div>

              <div style={{ border: "1px solid var(--border-color)", borderRadius: "20px", padding: "40px", backgroundColor: "white" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>Project-Based Optimisation</h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                  Need help improving an existing Microsoft Intune environment? We can review your configuration, recommend enhancements and implement best-practice improvements.
                </p>
                <Link href="/microsoft-intune/consulting" style={{ color: "#ea580c", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>Explore Consulting <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 8. WHY CHOOSE NOCASTRA */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Nocastra
              </h2>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {[
                "Microsoft Intune specialists",
                "Proactive, not reactive, management",
                "Security-first mindset",
                "Regular reviews and optimisation",
                "Seamless integration with Microsoft 365, Entra ID and Defender",
                "Remote and on-site support where required",
                "Scalable services as your organisation grows"
              ].map((text, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "16px 24px", borderRadius: "30px", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", border: "1px solid var(--border-color)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                  <Award size={18} color="#f97316" /> {text}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 9. FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Managed Services FAQs
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

        {/* 10. FINAL CTA (USING EXTRACTED COMPONENT) */}
        <IntuneEnquiryCTA 
          title="Keep Your Microsoft Intune Environment Performing at Its Best"
          paragraphs={[
            "Your Microsoft Intune deployment should continue to deliver value long after implementation. With Nocastra's Managed Services, you'll have experienced specialists proactively managing, monitoring and optimising your environment so your team can focus on running the business."
          ]}
          expectationsTitle="During Your Initial Consultation, We'll:"
          expectations={[
            "Review your current Microsoft Intune environment",
            "Identify opportunities to improve security and compliance",
            "Assess device management and operational processes",
            "Recommend an ongoing support model that fits your business",
            "Answer your technical and strategic questions"
          ]}
          formTitle="Book a Managed Services Consultation"
          formSubtitle="Provide your details below to discuss a managed support model for your organisation."
          buttonText="Request Consultation"
        />

      </main>
      <Footer />
    </>
  );
}
