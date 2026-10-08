import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import StatsSection from "@/src/components/StatsSection";
import AnimatedSection from "@/src/components/AnimatedSection";

import { 
  ArrowRight, ShieldCheck, Users, Smartphone, MessageSquare, 
  Cloud, FolderDown, ArrowRightLeft, Globe, Lock, Shield, 
  Server, Mail, ChevronDown, CheckCircle2, Key, 
  Network, Factory, Building, Landmark, HeartPulse, GraduationCap, 
  Store, Truck, Briefcase, FileCheck, LifeBuoy, Cog, Layers, Rocket, 
  RefreshCw, ClipboardList, Search, MonitorSmartphone, XCircle, Fingerprint, ScanFace, UserCheck, ShieldAlert
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Entra ID Services - Nocastra",
  description: "Secure Identity & Access Management for the Modern Workplace. Nocastra designs, deploys and manages Microsoft Entra ID environments that strengthen security and support Zero Trust strategies.",
};

export default function MicrosoftEntraIDPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Microsoft Entra ID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microsoft Entra ID is Microsoft's cloud-based Identity and Access Management (IAM) platform that helps organisations securely manage user identities, authentication and access to business applications and resources."
        }
      },
      {
        "@type": "Question",
        "name": "Is Microsoft Entra ID the same as Azure Active Directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Microsoft Azure Active Directory (Azure AD) was renamed to Microsoft Entra ID. While the name has changed, it continues to provide the same identity and access management capabilities with ongoing feature enhancements."
        }
      },
      {
        "@type": "Question",
        "name": "What is Conditional Access?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conditional Access allows organisations to grant or restrict access to applications based on conditions such as user identity, device compliance, location, risk level and authentication methods."
        }
      },
      {
        "@type": "Question",
        "name": "Can Microsoft Entra ID integrate with Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Microsoft Entra ID integrates closely with Microsoft Intune, allowing organisations to enforce Conditional Access policies based on device compliance and strengthen endpoint security."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate from Active Directory to Microsoft Entra ID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Nocastra helps organisations migrate from on-premises Active Directory or hybrid environments to Microsoft Entra ID while minimising downtime and maintaining business continuity."
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
        
        {/* 1. HERO SECTION */}
        <section className="responsive-hero-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)", position: "relative", overflow: "hidden" }}>
<AnimatedSection>
          <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", height: "80%", background: "radial-gradient(circle, rgba(2, 132, 199, 0.04) 0%, rgba(255,255,255,0) 70%)", zIndex: 0 }} />
          
          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, paddingTop: "80px" }}>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "var(--primary)" }}>Services</span>
              <span>/</span>
              <span style={{ color: "var(--primary)" }}>Microsoft Entra ID</span>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px" }}>
              <span style={{ display: "inline-block", backgroundColor: "var(--primary-light)", color: "var(--primary)", padding: "8px 16px", borderRadius: "99px", fontWeight: 700, fontSize: "0.9rem", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                Microsoft Entra ID Services
              </span>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: "1.1", fontWeight: 800, fontFamily: "var(--font-headings)" }}>
                Secure Identity & Access Management for the <span style={{ color: "var(--primary)" }}>Modern Workplace</span>
              </h1>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                Identity is the first line of defence in today's cloud-first world. Microsoft Entra ID helps organisations secure user identities, protect business applications, and control access to company resources with intelligent identity and access management. Whether your workforce is in the office, remote or hybrid, Microsoft Entra ID enables secure access without compromising productivity.
              </p>
              
              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7", maxWidth: "700px" }}>
                At <strong style={{ color: "var(--text-primary)" }}>Nocastra</strong>, we design, deploy and manage Microsoft Entra ID environments that strengthen security, simplify identity management and support Zero Trust strategies. From Single Sign-On (SSO) and Multi-Factor Authentication (MFA) to Conditional Access, identity governance and hybrid identity solutions, our experts help businesses build a secure and scalable Microsoft Modern Workplace.
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                  Get a Free Entra ID Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
                <Link href="/microsoft-intune" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
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
                  { value: "15+", label: "Years Experience" },
                  { value: "150+", label: "Happy Customers" },
                  { icon: ShieldCheck, label: "Identity & Access Experts" },
                  { icon: Users, label: "Modern Workplace Specialists" }
                ]}
              />
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 3. WHY MODERN BUSINESSES NEED ENTRA ID */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px", fontFamily: "var(--font-headings)", letterSpacing: "-0.5px", textAlign: "center" }}>
                Why Modern Businesses Need Microsoft Entra ID
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  As businesses adopt cloud applications, hybrid work and remote collaboration, traditional username and password security is no longer enough. Cybercriminals increasingly target user identities to gain access to sensitive data, applications and business systems.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", fontWeight: 600 }}>
                  Without a modern identity platform, organisations often experience:
                </p>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", margin: "16px 0" }}>
                  {[
                    "Weak password security",
                    "Identity-based cyber attacks",
                    "Unauthorised access to company resources",
                    "Difficulty managing remote employees",
                    "Poor visibility over user permissions",
                    "Compliance and regulatory challenges",
                    "Complex identity management across multiple apps",
                    "Increased risk of data breaches"
                  ].map((challenge, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                      <XCircle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-primary)" }}>{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Microsoft Entra ID provides a centralised identity platform that allows organisations to verify users, secure applications and enforce intelligent access policies across the Microsoft ecosystem.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 4. WHY CHOOSE ENTRA ID? (Capabilities Grid) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Microsoft Entra ID?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft Entra ID is Microsoft's cloud-based Identity and Access Management (IAM) platform designed to protect users, applications and business data. It enables organisations to securely manage identities while improving productivity and simplifying IT administration.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { icon: Users, title: "Identity & Access Management", desc: "Centralise the management of users, groups, roles and permissions from a single cloud platform. Simplify user lifecycle management while improving security and reducing administrative overhead." },
                { icon: Key, title: "Single Sign-On (SSO)", desc: "Provide employees with seamless access to Microsoft 365 and thousands of third-party applications using one secure identity. Reduce password fatigue while improving the user experience." },
                { icon: Fingerprint, title: "Multi-Factor Authentication (MFA)", desc: "Strengthen account security by requiring additional verification beyond passwords. Protect users against phishing, credential theft and unauthorised access." },
                { icon: ShieldCheck, title: "Conditional Access", desc: "Apply intelligent access policies based on user identity, device compliance, location, application sensitivity and real-time risk signals. Ensure the right people access the right resources." },
                { icon: FileCheck, title: "Identity Governance", desc: "Control user permissions, automate access reviews and manage privileged identities to ensure users only have access to the resources they need." },
                { icon: Shield, title: "Zero Trust Security", desc: "Implement Microsoft's Zero Trust approach by continuously verifying every user, device and authentication request before granting access." }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} style={{ padding: "30px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                      <div style={{ backgroundColor: "#e0f2fe", color: "#0284c7", width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "16px", flexShrink: 0 }}>
                        <Icon size={24} />
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{feature.title}</h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0, flexGrow: 1 }}>{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 5. OUR MICROSOFT ENTRA ID SERVICES */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Entra ID Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Nocastra provides end-to-end Microsoft Entra ID services to help businesses implement secure identity management solutions that integrate seamlessly with Microsoft 365, Microsoft Intune, Microsoft Defender and Azure.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
              {[
                { 
                  title: "Microsoft Entra ID Consulting", 
                  desc: "We assess your existing identity infrastructure, understand your business requirements and develop a tailored identity strategy aligned with security best practices.",
                  listTitle: "What's Included",
                  list: ["Identity security assessments", "Entra ID readiness reviews", "Identity architecture design", "Security recommendations", "Licensing guidance", "Zero Trust planning"]
                },
                { 
                  title: "Microsoft Entra ID Deployment", 
                  desc: "Deploy Microsoft Entra ID using Microsoft's recommended best practices while ensuring minimal disruption to your business operations.",
                  listTitle: "Our Deployment Services Include",
                  list: ["Tenant configuration", "User and group setup", "Identity synchronisation", "Hybrid identity deployment", "Security policy configuration", "Administrative role configuration"]
                },
                { 
                  title: "Conditional Access Implementation", 
                  desc: "Protect your organisation with intelligent Conditional Access policies that balance strong security with a frictionless user experience.",
                  listTitle: "We configure policies based on",
                  list: ["Device compliance", "User roles", "Trusted locations", "Application sensitivity", "Sign-in risk", "User risk"]
                },
                { 
                  title: "Multi-Factor Authentication (MFA)", 
                  desc: "Implement secure authentication methods that significantly reduce the risk of compromised accounts.",
                  listTitle: "Supported authentication methods",
                  list: ["Microsoft Authenticator", "SMS verification", "Voice verification", "Hardware security keys", "Passwordless authentication"]
                },
                { 
                  title: "Single Sign-On (SSO)", 
                  desc: "Simplify user authentication across Microsoft services and third-party business applications while improving security and reducing password-related support requests.",
                  listTitle: "Benefits include",
                  list: ["Improved user experience", "Faster application access", "Reduced password resets", "Centralised authentication", "Enhanced security controls"]
                },
                { 
                  title: "Identity Migration Services", 
                  desc: "Whether migrating from Active Directory, Azure AD, another IdP or restructuring your tenant, our specialists ensure a secure and carefully planned migration.",
                  listTitle: "Migration services include",
                  list: ["Active Directory to Entra ID", "Hybrid identity deployment", "Azure AD to Entra ID transition", "Identity consolidation", "Tenant-to-tenant identity migration"]
                },
                { 
                  title: "Identity Governance & Lifecycle", 
                  desc: "Ensure users always have the right level of access while reducing security risks associated with excessive permissions.",
                  listTitle: "Our governance services include",
                  list: ["User lifecycle management", "Access reviews", "Role-based access control (RBAC)", "Privileged Identity Management (PIM)", "Administrative role management", "Compliance reporting"]
                },
                { 
                  title: "Ongoing Managed Services", 
                  desc: "Identity security requires continuous monitoring and optimisation. Our managed services help keep your environment secure, compliant and up to date.",
                  listTitle: "Our ongoing services include",
                  list: ["Identity monitoring", "Security reviews", "Policy optimisation", "User administration", "Incident response assistance", "Continuous improvements"]
                }
              ].map((service, idx) => (
                <div key={idx} style={{ padding: "32px", backgroundColor: "#f8fafc", borderRadius: "16px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>{service.desc}</p>
                  
                  <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: "1px solid var(--border-color)", flexGrow: 1 }}>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{service.listTitle}</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                      {service.list.map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: "1.4" }}>
                          <CheckCircle2 size={16} color="#0284c7" style={{ marginTop: "3px", flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 6. ECOSYSTEM INTEGRATION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Microsoft Entra ID Across the Microsoft Ecosystem
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Microsoft Entra ID is the identity foundation for Microsoft's Modern Workplace. It integrates seamlessly with Microsoft's cloud services to provide secure access across users, devices and applications.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: MonitorSmartphone, title: "Microsoft Intune", desc: "Enforce Conditional Access policies based on device compliance, ensuring only trusted and managed devices can access corporate resources." },
                { icon: ShieldAlert, title: "Microsoft Defender", desc: "Strengthen threat detection by combining identity intelligence with endpoint protection to detect suspicious activities." },
                { icon: Cloud, title: "Microsoft 365", desc: "Secure Microsoft 365 applications using intelligent identity policies and Multi-Factor Authentication." },
                { icon: Mail, title: "Exchange Online", desc: "Protect business email by enforcing secure authentication and Conditional Access policies for Exchange Online users." },
                { icon: MessageSquare, title: "Microsoft Teams", desc: "Enable secure collaboration by controlling access to Teams based on identity, user roles and device compliance." },
                { icon: FolderDown, title: "SharePoint Online", desc: "Protect sensitive business documents through identity-aware access controls and secure collaboration policies." },
                { icon: Cloud, title: "OneDrive for Business", desc: "Safeguard cloud storage by ensuring only authorised users on trusted devices can access company files." },
                { icon: Server, title: "Azure", desc: "Manage secure access to Azure resources, virtual machines, applications and cloud workloads." }
              ].map((ecosystem, idx) => {
                const Icon = ecosystem.icon;
                return (
                  <div key={idx} style={{ padding: "24px", border: "1px solid var(--border-color)", borderRadius: "16px", backgroundColor: "#ffffff", display: "flex", gap: "16px" }}>
                    <div style={{ backgroundColor: "#e0f2fe", color: "#0284c7", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{ecosystem.title}</h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5", margin: 0 }}>{ecosystem.desc}</p>
                    </div>
                  </div>
                );
              })}
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
                Our Microsoft Entra ID Implementation Process
              </h2>
            </div>

            <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "16px" }}>
              <div style={{ position: "absolute", top: "40px", bottom: "40px", left: "40px", width: "3px", backgroundColor: "#e2e8f0", zIndex: 0 }} />

              {[
                { num: "1", title: "Discovery", icon: Search, desc: "Understand your existing identity infrastructure, security requirements and business objectives." },
                { num: "2", title: "Identity Assessment", icon: ClipboardList, desc: "Identify security gaps, access risks and opportunities for improvement." },
                { num: "3", title: "Solution Design", icon: Layers, desc: "Develop a secure identity architecture aligned with Microsoft's best practices and your compliance requirements." },
                { num: "4", title: "Deployment", icon: Rocket, desc: "Configure Microsoft Entra ID, Conditional Access, Multi-Factor Authentication, Single Sign-On and identity governance." },
                { num: "5", title: "Security Hardening", icon: ShieldCheck, desc: "Implement Zero Trust principles, privileged access controls and ongoing identity protection." },
                { num: "6", title: "Ongoing Optimisation", icon: RefreshCw, desc: "Continuously monitor, improve and support your Microsoft Entra ID environment as your business evolves." }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} style={{ position: "relative", display: "flex", gap: "30px", marginBottom: idx === 5 ? "0" : "50px", zIndex: 1 }}>
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
                Why Choose Nocastra for Microsoft Entra ID Services?
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                { title: "Microsoft Identity Specialists", desc: "We specialise in designing secure identity environments that integrate seamlessly across the Microsoft ecosystem." },
                { title: "Security-First Approach", desc: "Every deployment is built around Zero Trust principles, identity protection and least-privilege access." },
                { title: "Microsoft Ecosystem Expertise", desc: "Our specialists understand how Microsoft Entra ID works alongside Intune, Defender, Microsoft 365, Azure and Teams." },
                { title: "Tailored Identity Solutions", desc: "We design identity strategies that match your business goals rather than relying on one-size-fits-all configurations." },
                { title: "End-to-End Identity Services", desc: "From consulting and deployment to migration, optimisation and ongoing management, we provide complete identity lifecycle support." },
                { title: "Long-Term Partnership", desc: "Technology evolves rapidly. We work as an extension of your IT team, helping you adapt to new Microsoft capabilities." }
              ].map((feature, idx) => (
                <div key={idx} style={{ padding: "30px", backgroundColor: "white", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <CheckCircle2 size={22} color="#0284c7" />
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>{feature.title}</h3>
                  </div>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", paddingLeft: "34px" }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 9. INDUSTRIES WE SUPPORT */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Industries We Support
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We help organisations across multiple industries implement secure identity and access management solutions tailored to their operational and compliance requirements.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { icon: Briefcase, title: "Professional Services" },
                { icon: HeartPulse, title: "Healthcare" },
                { icon: Store, title: "Retail" },
                { icon: Landmark, title: "Financial Services" },
                { icon: Factory, title: "Manufacturing" },
                { icon: Truck, title: "Logistics" },
                { icon: UserCheck, title: "Oil & Gas" },
                { icon: GraduationCap, title: "Education" }
              ].map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <div key={idx} style={{ padding: "24px", border: "1px solid var(--border-color)", borderRadius: "16px", display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#f8fafc" }}>
                    <div style={{ backgroundColor: "#e0f2fe", color: "#0284c7", padding: "12px", borderRadius: "12px" }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{industry.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 10. FAQ SECTION */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f0f9ff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Frequently Asked Questions
              </h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { q: "What is Microsoft Entra ID?", a: "Microsoft Entra ID is Microsoft's cloud-based Identity and Access Management (IAM) platform that helps organisations securely manage user identities, authentication and access to business applications and resources." },
                { q: "Is Microsoft Entra ID the same as Azure Active Directory?", a: "Yes. Microsoft Azure Active Directory (Azure AD) was renamed to Microsoft Entra ID. While the name has changed, it continues to provide the same identity and access management capabilities with ongoing feature enhancements." },
                { q: "What is Conditional Access?", a: "Conditional Access allows organisations to grant or restrict access to applications based on conditions such as user identity, device compliance, location, risk level and authentication methods." },
                { q: "Why is Multi-Factor Authentication important?", a: "Multi-Factor Authentication significantly reduces the risk of compromised accounts by requiring users to verify their identity using more than just a password." },
                { q: "Can Microsoft Entra ID integrate with Microsoft Intune?", a: "Yes. Microsoft Entra ID integrates closely with Microsoft Intune, allowing organisations to enforce Conditional Access policies based on device compliance and strengthen endpoint security." },
                { q: "Can you migrate from Active Directory to Microsoft Entra ID?", a: "Yes. Nocastra helps organisations migrate from on-premises Active Directory or hybrid environments to Microsoft Entra ID while minimising downtime and maintaining business continuity." },
                { q: "Do you provide ongoing Microsoft Entra ID support?", a: "Yes. We offer managed services, ongoing optimisation, security reviews and expert support to ensure your Microsoft Entra ID environment remains secure, compliant and aligned with your business needs." }
              ].map((faq, idx) => (
                <details key={idx} style={{ backgroundColor: "#ffffff", border: "1px solid var(--border-color)", borderRadius: "12px", overflow: "hidden" }}>
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

        {/* 11. FINAL CTA */}
        <section style={{ padding: "60px 5% 100px", backgroundColor: "#f8fafc" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", backgroundColor: "#0f172a", borderRadius: "30px", padding: "60px 40px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", fontWeight: 800, marginBottom: "20px", letterSpacing: "-0.5px" }}>
              Ready to Strengthen Your Identity Security?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto 36px", lineHeight: "1.7" }}>
              Identity is the foundation of every secure Microsoft Modern Workplace. Whether you're implementing Microsoft Entra ID for the first time, migrating from legacy identity systems or enhancing your security with Conditional Access and Multi-Factor Authentication, Nocastra provides the expertise to help you build a secure, scalable and future-ready identity platform.
            </p>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "800px", margin: "0 auto 36px", lineHeight: "1.7" }}>
              Partner with Nocastra to simplify identity management, strengthen security and enable secure access across your Microsoft ecosystem.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ backgroundColor: "#0284c7", border: "none", padding: "16px 36px", fontSize: "1.05rem", display: "inline-flex", alignItems: "center" }}>
                Book Your Microsoft Entra ID Consultation <ArrowRight size={18} style={{ marginLeft: "8px" }} />
              </Link>
              <Link href="/contact" style={{ padding: "16px 36px", fontSize: "1.05rem", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                Speak to Our Microsoft Identity Experts
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
