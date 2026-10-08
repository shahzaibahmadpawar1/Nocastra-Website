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
  Network, ArrowRightLeft, Database, Globe, ChevronDown,
  Box, Wifi, KeyRound, CloudLightning, BriefcaseBusiness
} from "lucide-react";

export const metadata: Metadata = {
  title: "Windows Autopilot Deployment Services - Nocastra",
  description: "Deliver business-ready Windows devices straight out of the box with zero-touch provisioning. Simplify device onboarding with Windows Autopilot and Microsoft Intune.",
};

export default function WindowsAutopilotPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Windows Autopilot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Windows Autopilot is a collection of technologies used to set up and pre-configure new devices, getting them ready for productive use. It is a cloud-based zero-touch provisioning service that integrates tightly with Microsoft Intune."
        }
      },
      {
        "@type": "Question",
        "name": "Does Windows Autopilot require Microsoft Intune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, to get the full benefits of Windows Autopilot, a Mobile Device Management (MDM) solution like Microsoft Intune is required to apply policies, deploy applications, and manage the device after the initial Autopilot enrolment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Out-of-Box Experience (OOBE)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The OOBE is the first screens a user sees when they turn on a new Windows device. Windows Autopilot customises this experience, allowing the user to bypass complex setup questions and simply sign in with their corporate credentials to initiate automatic configuration."
        }
      },
      {
        "@type": "Question",
        "name": "Can laptops be shipped directly to employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This is one of the primary benefits of Windows Autopilot. Devices can be shipped directly from the hardware vendor (like Dell, Lenovo, or HP) straight to the employee's home without the IT department ever needing to physically touch or image the device."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Windows Autopilot and traditional imaging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional imaging requires IT to create, maintain, and manually apply custom OS images to every device. Windows Autopilot uses the OEM-optimized version of Windows already installed on the device and simply applies cloud-based configuration profiles to transform it into a business-ready state."
        }
      },
      {
        "@type": "Question",
        "name": "Can existing devices use Windows Autopilot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Existing devices can be registered for Windows Autopilot. If a device is wiped or reset in the future, it will automatically go through the Autopilot provisioning process upon its next boot."
        }
      },
      {
        "@type": "Question",
        "name": "Does Windows Autopilot support remote workers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Windows Autopilot is specifically designed to support remote workforces. All a remote worker needs is an internet connection and their corporate login credentials to provision their device securely from anywhere in the world."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an Autopilot deployment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time it takes for a user to reach their desktop during OOBE depends on the number and size of applications being deployed. Setting up the Autopilot infrastructure and Intune policies globally for an organisation typically takes a few weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can Nocastra configure Windows Autopilot for our organisation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in designing deployment profiles, setting up Intune policies, and integrating with hardware vendors to establish a fully functioning Windows Autopilot environment for your business."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once a device is provisioned via Autopilot, it is continuously managed by Microsoft Intune. We provide ongoing support or knowledge transfer so your team can maintain policies, deploy new applications, and issue remote wipes if a device is lost."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What is Windows Autopilot?",
      answer: "Windows Autopilot is a collection of technologies used to set up and pre-configure new devices, getting them ready for productive use. It is a cloud-based zero-touch provisioning service that integrates tightly with Microsoft Intune."
    },
    {
      question: "Does Windows Autopilot require Microsoft Intune?",
      answer: "Yes, to get the full benefits of Windows Autopilot, a Mobile Device Management (MDM) solution like Microsoft Intune is required to apply policies, deploy applications, and manage the device after the initial Autopilot enrolment."
    },
    {
      question: "What is the Out-of-Box Experience (OOBE)?",
      answer: "The OOBE is the first screens a user sees when they turn on a new Windows device. Windows Autopilot customises this experience, allowing the user to bypass complex setup questions and simply sign in with their corporate credentials to initiate automatic configuration."
    },
    {
      question: "Can laptops be shipped directly to employees?",
      answer: "Yes. This is one of the primary benefits of Windows Autopilot. Devices can be shipped directly from the hardware vendor (like Dell, Lenovo, or HP) straight to the employee's home without the IT department ever needing to physically touch or image the device."
    },
    {
      question: "What is the difference between Windows Autopilot and traditional imaging?",
      answer: "Traditional imaging requires IT to create, maintain, and manually apply custom OS images to every device. Windows Autopilot uses the OEM-optimized version of Windows already installed on the device and simply applies cloud-based configuration profiles to transform it into a business-ready state."
    },
    {
      question: "Can existing devices use Windows Autopilot?",
      answer: "Yes. Existing devices can be registered for Windows Autopilot. If a device is wiped or reset in the future, it will automatically go through the Autopilot provisioning process upon its next boot."
    },
    {
      question: "Does Windows Autopilot support remote workers?",
      answer: "Absolutely. Windows Autopilot is specifically designed to support remote workforces. All a remote worker needs is an internet connection and their corporate login credentials to provision their device securely from anywhere in the world."
    },
    {
      question: "How long does an Autopilot deployment take?",
      answer: "The time it takes for a user to reach their desktop during OOBE depends on the number and size of applications being deployed. Setting up the Autopilot infrastructure and Intune policies globally for an organisation typically takes a few weeks."
    },
    {
      question: "Can Nocastra configure Windows Autopilot for our organisation?",
      answer: "Yes. We specialise in designing deployment profiles, setting up Intune policies, and integrating with hardware vendors to establish a fully functioning Windows Autopilot environment for your business."
    },
    {
      question: "What happens after deployment?",
      answer: <>Once a device is provisioned via Autopilot, it is continuously managed by Microsoft Intune. We provide ongoing support or knowledge transfer so your team can maintain policies, deploy new applications, and issue remote wipes if a device is lost. You can also leverage our <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>Intune Managed Services</Link> for total peace of mind.</>
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
            left: "-10%",
            width: "60%",
            height: "140%",
            background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(15,23,42,0) 70%)",
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
                Windows Autopilot Deployment Services
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#e0f2fe", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Deliver Business-Ready Windows Devices Straight Out of the Box
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                Imagine shipping a brand-new laptop directly to an employee without your IT team ever opening the box. With Windows Autopilot and Microsoft Intune, devices arrive pre-registered, automatically configured and ready for work the moment users sign in.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                Nocastra helps organisations plan, deploy and optimise Windows Autopilot to simplify device provisioning, reduce manual setup and create a consistent onboarding experience for every employee. Whether you're onboarding new hires, replacing ageing hardware or supporting a remote workforce, we make device deployment faster, more secure and easier to manage.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "60px" }}>
                <Link href="#enquiry" style={{ 
                  backgroundColor: "#0ea5e9", 
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
                  Book a Windows Autopilot Consultation <ArrowRight size={20} />
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
                  Request an Autopilot Assessment
                </Link>
              </div>

              {/* Hero Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
                {[
                  { icon: Box, text: "Zero-Touch Device Deployment" },
                  { icon: Users, text: "Faster Employee Onboarding" },
                  { icon: CloudLightning, text: "Microsoft Intune Integration" },
                  { icon: ShieldCheck, text: "Security from First Sign-In" }
                ].map((highlight, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <highlight.icon size={24} color="#38bdf8" />
                    <span style={{ fontSize: "1rem", fontWeight: 600, color: "#e2e8f0" }}>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 2. WHAT IS WINDOWS AUTOPILOT? */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
              What is Windows Autopilot?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Windows Autopilot is Microsoft's cloud-based device provisioning technology that works with Microsoft Intune to simplify how Windows devices are deployed and configured.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Instead of manually imaging laptops, installing applications and configuring security settings, Windows Autopilot automatically prepares new devices during their first sign-in. Employees simply connect to the internet, authenticate with their organisational account and the device configures itself according to your company's policies.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Applications, security settings, compliance policies, configuration profiles and organisational preferences are applied automatically, allowing users to begin working with a secure, business-ready device in significantly less time.
              </p>
              <div style={{ backgroundColor: "#f0f9ff", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #0284c7", marginTop: "16px" }}>
                <p style={{ fontSize: "1.1rem", color: "#0369a1", lineHeight: "1.7", fontWeight: 600, margin: 0 }}>
                  Windows Autopilot reduces deployment complexity, improves consistency and supports modern workplaces where employees may never visit a corporate office.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 3. WHY BUSINESSES CHOOSE AUTOPILOT (BUSINESS OUTCOMES) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Businesses Choose Windows Autopilot
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: Layers, title: "Eliminate Manual Device Imaging", desc: "Deploy new Windows devices without creating or maintaining traditional operating system images." },
                { icon: Users, title: "Faster Employee Onboarding", desc: "New employees receive configured devices that are ready for work within minutes of signing in." },
                { icon: Globe, title: "Support Remote & Hybrid Teams", desc: "Ship devices directly from your hardware supplier to employees anywhere in the world." },
                { icon: Settings, title: "Consistent Device Configuration", desc: "Every laptop receives the same approved applications, security policies and organisational settings." },
                { icon: Shield, title: "Improved Security", desc: "Security policies, BitLocker encryption, compliance rules and Microsoft Defender configurations are applied automatically." },
                { icon: CheckSquare, title: "Reduced IT Workload", desc: "IT teams spend less time preparing devices and more time delivering strategic initiatives." }
              ].map((outcome, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column" }}>
                  <div style={{ backgroundColor: "#f0f9ff", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <outcome.icon size={24} color="#0284c7" />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{outcome.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{outcome.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 4. THE WINDOWS AUTOPILOT OOBE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px", lineHeight: "1.2" }}>
                The Windows Autopilot Out-of-Box Experience (OOBE)
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                One of the biggest advantages of Windows Autopilot is the streamlined Out-of-Box Experience (OOBE). Instead of a lengthy manual setup process, employees receive a guided onboarding experience that automatically prepares their device for work.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "32px" }}>
                When a user powers on a new Windows device for the first time, Windows Autopilot recognises that the device is registered to your organisation and presents a customised setup experience.
              </p>
              
              <div style={{ backgroundColor: "#f8fafc", padding: "32px", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>Benefits of the OOBE</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
                  {[
                    "Consistent onboarding experience for every employee",
                    "No manual laptop imaging",
                    "Zero-touch device provisioning",
                    "Reduced IT deployment time",
                    "Secure device configuration from first sign-in",
                    "Seamless Microsoft Intune enrolment",
                    "Faster productivity for new employees",
                    "Simplified remote device deployment"
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)", fontSize: "1rem" }}>
                      <CheckCircle2 size={18} color="#0ea5e9" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>What Happens During the OOBE?</h3>
              {[
                { title: "Internet Connection", desc: "The employee connects the device to a wired or wireless network, allowing it to communicate with Microsoft's cloud services." },
                { title: "Organisation Sign-In", desc: "The user signs in using their Microsoft Entra ID (formerly Azure Active Directory) work account." },
                { title: "Automatic Device Registration", desc: "Windows Autopilot verifies the device, applies the assigned deployment profile and enrols it into Microsoft Intune without requiring manual IT intervention." },
                { title: "Security Configuration", desc: "Compliance policies, device restrictions, BitLocker encryption, Microsoft Defender settings and organisational security baselines are automatically applied." },
                { title: "Application Deployment", desc: "Business applications such as Microsoft 365 Apps, Microsoft Teams, Microsoft Edge and other approved software are installed automatically based on the user's role and assigned policies." },
                { title: "Policy & Configuration Deployment", desc: "Wi-Fi settings, VPN profiles, printers, certificates, configuration profiles and company policies are applied in the background, ensuring every device meets organisational standards." },
                { title: "Ready for Work", desc: "Within a short period, the employee has a fully configured, secure and compliant Windows device ready to access business resources without requiring a traditional IT setup process." },
              ].map((step, idx) => (
                <div key={idx} style={{ borderLeft: "3px solid #0284c7", paddingLeft: "20px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 5. VISUAL JOURNEY: FROM BOX TO BUSINESS-READY */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "20px" }}>
                From Box to Business-Ready in Minutes
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto" }}>
                A completely streamlined process that eliminates friction for both the IT department and the end user.
              </p>
            </div>

            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: "24px", 
              position: "relative" 
            }}>
              
              <div style={{ position: "absolute", top: "0", bottom: "0", left: "50%", width: "2px", backgroundColor: "rgba(56,189,248,0.2)", transform: "translateX(-50%)", zIndex: 0 }} className="timeline-line"></div>

              {[
                { icon: Box, title: "New Device", desc: "Arrives straight from vendor" },
                { icon: Wifi, title: "Connect to Internet", desc: "User connects to home or office Wi-Fi" },
                { icon: KeyRound, title: "Sign in with Entra ID", desc: "Custom branded login screen appears" },
                { icon: CloudLightning, title: "Automatic Intune Enrolment", desc: "Device registers seamlessly in the cloud" },
                { icon: Settings, title: "Apps, Policies & Security Applied", desc: "Enrolment Status Page (ESP) tracks progress" },
                { icon: BriefcaseBusiness, title: "Ready for Work", desc: "User reaches a secure desktop" }
              ].map((node, idx) => (
                <div key={idx} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "24px",
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                  textAlign: idx % 2 === 0 ? "right" : "left"
                }} className="timeline-node">
                  
                  {/* Text Container */}
                  <div style={{ width: "40%", padding: "0 20px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "4px" }}>{node.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "#94a3b8" }}>{node.desc}</p>
                  </div>
                  
                  {/* Icon Node */}
                  <div style={{ 
                    width: "70px", 
                    height: "70px", 
                    borderRadius: "50%", 
                    backgroundColor: "#0369a1", 
                    border: "4px solid #0f172a",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: "0 0 0 2px rgba(56,189,248,0.3)"
                  }}>
                    <node.icon size={30} color="#e0f2fe" />
                  </div>
                  
                  {/* Empty space for balance */}
                  <div style={{ width: "40%" }}></div>

                </div>
              ))}
            </div>
            
            {/* CSS adjustments for mobile timeline */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                .timeline-line {
                  left: 35px !important;
                }
                .timeline-node {
                  flex-direction: row-reverse !important;
                  text-align: left !important;
                }
                .timeline-node > div:first-child {
                  width: calc(100% - 90px) !important;
                  padding: 0 0 0 20px !important;
                }
                .timeline-node > div:last-child {
                  display: none;
                }
              }
            `}} />
            
          </div>
        </AnimatedSection>
</section>

        {/* 6. WHAT WE CONFIGURE */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                What We Configure
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                A flawless Autopilot experience requires precise technical configuration behind the scenes.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { title: "Deployment Profiles", desc: "Customising the OOBE to skip privacy settings and enforce enterprise standards." },
                { title: "User-Driven Deployment", desc: "Empowering users to set up their own devices securely from anywhere." },
                { title: "Self-Deploying Mode", desc: "Automating deployment for kiosks, digital signage, or shared devices." },
                { title: "Pre-Provisioning (White Glove)", desc: "Pre-loading applications before the device reaches the end user for instant productivity." },
                { title: "Microsoft Entra ID Join", desc: "Configuring seamless, cloud-native identity integration." },
                { title: "Hybrid Entra ID Join", desc: "Bridging the gap between on-premises Active Directory and cloud management (where appropriate)." },
                { title: "Microsoft Intune Enrolment", desc: "Ensuring automatic MDM enrolment immediately upon sign-in." },
                { title: "Device Naming", desc: "Implementing standardized naming conventions automatically during provisioning." },
                { title: "Security Baselines", desc: "Applying industry-standard threat protection immediately." },
                { title: "BitLocker", desc: "Enforcing silent disk encryption and escrowing recovery keys to the cloud." },
                { title: "Windows Update Rings", desc: "Configuring automated patch management policies." },
                { title: "Application Deployment", desc: "Packaging and assigning Win32, MSI, and store apps as required installs." },
                { title: "Compliance Policies", desc: "Setting health requirements to gate access to corporate resources." }
              ].map((policy, idx) => (
                <div key={idx} style={{ padding: "20px", border: "1px solid var(--border-color)", borderRadius: "12px", backgroundColor: "white", display: "flex", gap: "16px" }}>
                  <Settings size={20} color="#0ea5e9" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>{policy.title}</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{policy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 7. SUPPORTED DEPLOYMENT SCENARIOS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Supported Autopilot Deployment Scenarios
              </h2>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {[
                "New Employee Onboarding",
                "Remote Workforce",
                "Device Refresh Projects",
                "Enterprise Rollouts",
                "Multi-Office Deployments",
                "BYOD Readiness (where appropriate)",
                "Education Devices",
                "Shared Devices"
              ].map((scenario, idx) => (
                <div key={idx} style={{ padding: "16px 24px", border: "1px solid #e2e8f0", borderRadius: "30px", backgroundColor: "#f8fafc", fontWeight: 600, color: "var(--text-primary)" }}>
                  {scenario}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
</section>

        {/* 8. OUR AUTOPILOT DEPLOYMENT PROCESS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc" }}>
<AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Windows Autopilot Deployment Process
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", position: "relative" }}>
              {[
                "Discovery",
                "Device Registration",
                "Deployment Profile Design",
                "Microsoft Intune Configuration",
                "Pilot Deployment",
                "Organisation Rollout",
                "Post-Deployment Optimisation"
              ].map((step, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "24px", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#e0f2fe", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, margin: "0 auto 16px" }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)" }}>{step}</h4>
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
                Why Choose Nocastra
              </h2>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              {[
                "Zero-touch deployment specialists",
                "Security-first provisioning",
                "Deep Microsoft Intune expertise",
                "Tailored deployment profiles",
                "Smooth OOBE design",
                "Microsoft 365 ecosystem integration",
                "Ongoing optimisation and support"
              ].map((text, idx) => (
                <div key={idx} style={{ backgroundColor: "#f0fdf4", padding: "16px 24px", borderRadius: "30px", fontWeight: 600, color: "#166534", display: "flex", alignItems: "center", gap: "12px", border: "1px solid #d1fae5" }}>
                  <ShieldCheck size={18} color="#10b981" /> {text}
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
                Windows Autopilot FAQs
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

        {/* 11. FINAL CTA (USING EXTRACTED COMPONENT) */}
        <IntuneEnquiryCTA 
          title="Ready to Modernise Windows Device Deployment?"
          paragraphs={[
            "Whether you're onboarding new employees, refreshing your device fleet or enabling a remote workforce, Nocastra helps you deploy Windows devices faster, more securely and with minimal effort using Windows Autopilot and Microsoft Intune."
          ]}
          expectationsTitle="What You'll Get"
          expectations={[
            "Assessment of your current device deployment process",
            "Windows Autopilot readiness review",
            "Microsoft Intune integration recommendations",
            "Deployment roadmap",
            "Best-practice guidance for OOBE and device provisioning",
            "Answers to your technical and operational questions"
          ]}
          formTitle="Book a Windows Autopilot Consultation"
          formSubtitle="Provide your details below to schedule a meeting with a Zero-Touch provisioning expert."
          buttonText="Request Consultation"
        />

      </main>
      <Footer />
    </>
  );
}
