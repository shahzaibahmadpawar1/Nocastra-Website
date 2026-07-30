import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import IntuneEnquiryCTA from "@/src/components/IntuneEnquiryCTA";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Award, Briefcase, 
  Search, FileCheck, ServerCog, Lock, Users, Compass, 
  ChevronDown, Layers, Puzzle, Check, Laptop, Shield, Network, ArrowRightLeft,
  Clock, CheckSquare, Handshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Intune Consulting Services - Nocastra",
  description: "Build the right Microsoft Intune strategy before you deploy. Our consulting services help organisations plan, design and prepare for a successful endpoint management implementation.",
};

export default function MicrosoftIntuneConsultingPage() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why hire a Microsoft Intune consultant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hiring a Microsoft Intune consultant ensures your endpoint management strategy is properly planned before deployment. It helps you reduce risks, avoid costly configuration errors, and ensures that security and compliance policies are fully aligned with your business objectives from day one."
        }
      },
      {
        "@type": "Question",
        "name": "What happens during an assessment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During a Microsoft Intune assessment, we evaluate your existing IT infrastructure, endpoint management tools, Microsoft 365 licensing, identity management, and security posture. We then provide a customised roadmap and recommendations for a successful deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with existing IT teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our consultants work closely with your internal IT team, acting as an extension of your department. We provide the specialist knowledge and strategic guidance needed to empower your team to manage the environment successfully post-deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help before deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Pre-deployment planning is the core of our consulting service. We help you design your tenant architecture, compliance policies, and security baselines before any devices are actually enrolled."
        }
      },
      {
        "@type": "Question",
        "name": "Can you review an existing Intune environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer Microsoft Intune health checks and optimisation services to review existing deployments. We identify security gaps, misconfigurations, and opportunities to improve performance and user experience."
        }
      },
      {
        "@type": "Question",
        "name": "How long does consulting take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consulting engagements vary depending on the size and complexity of your organisation. A readiness assessment can often be completed in a few weeks, while a comprehensive enterprise strategy and architecture design may take longer."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide implementation afterwards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While our consulting services provide you with a standalone strategic roadmap, Nocastra also offers full end-to-end deployment, migration, and managed services to execute the plan we design together."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate us from SCCM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in helping organisations transition from Microsoft Configuration Manager (SCCM), VMware Workspace ONE, and other legacy platforms to modern, cloud-based endpoint management with Microsoft Intune."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "Why hire a Microsoft Intune consultant?",
      answer: "Hiring a Microsoft Intune consultant ensures your endpoint management strategy is properly planned before deployment. It helps you reduce risks, avoid costly configuration errors, and ensures that security and compliance policies are fully aligned with your business objectives from day one."
    },
    {
      question: "What happens during an assessment?",
      answer: "During a Microsoft Intune assessment, we evaluate your existing IT infrastructure, endpoint management tools, Microsoft 365 licensing, identity management, and security posture. We then provide a customised roadmap and recommendations for a successful deployment."
    },
    {
      question: "Do you work with existing IT teams?",
      answer: "Yes. Our consultants work closely with your internal IT team, acting as an extension of your department. We provide the specialist knowledge and strategic guidance needed to empower your team to manage the environment successfully post-deployment."
    },
    {
      question: "Can you help before deployment?",
      answer: "Absolutely. Pre-deployment planning is the core of our consulting service. We help you design your tenant architecture, compliance policies, and security baselines before any devices are actually enrolled."
    },
    {
      question: "Can you review an existing Intune environment?",
      answer: "Yes, we offer Microsoft Intune health checks and optimisation services to review existing deployments. We identify security gaps, misconfigurations, and opportunities to improve performance and user experience."
    },
    {
      question: "How long does consulting take?",
      answer: "Consulting engagements vary depending on the size and complexity of your organisation. A readiness assessment can often be completed in a few weeks, while a comprehensive enterprise strategy and architecture design may take longer."
    },
    {
      question: "Do you provide implementation afterwards?",
      answer: <>Yes. While our consulting services provide you with a standalone strategic roadmap, Nocastra also offers full end-to-end <Link href="/microsoft-intune/deployment" style={{ color: "#0284c7", fontWeight: 600 }}>deployment</Link>, <Link href="/microsoft-intune/migration" style={{ color: "#0284c7", fontWeight: 600 }}>migration</Link>, and <Link href="/microsoft-intune/managed-services" style={{ color: "#0284c7", fontWeight: 600 }}>managed services</Link> to execute the plan we design together.</>
    },
    {
      question: "Can you migrate us from SCCM?",
      answer: <>Yes. We specialise in helping organisations transition from Microsoft Configuration Manager (SCCM), VMware Workspace ONE, and other legacy platforms to modern, cloud-based endpoint management through our <Link href="/microsoft-intune/migration" style={{ color: "#0284c7", fontWeight: 600 }}>Microsoft Intune Migration</Link> services.</>
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
          {/* Background Graphic */}
          <div style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "60%",
            height: "140%",
            background: "radial-gradient(circle, rgba(2,132,199,0.15) 0%, rgba(15,23,42,0) 70%)",
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
                Microsoft Intune Consulting Services
              </h1>
              <h2 style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)", 
                fontWeight: 500, 
                color: "#bae6fd", 
                marginBottom: "32px",
                lineHeight: "1.4"
              }}>
                Build the Right Microsoft Intune Strategy Before You Deploy
              </h2>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "24px" 
              }}>
                A successful Microsoft Intune deployment begins long before devices are enrolled. It starts with understanding your business, assessing your existing IT environment and designing a strategy that aligns with your operational, security and compliance requirements.
              </p>
              <p style={{ 
                fontSize: "1.1rem", 
                color: "#94a3b8", 
                lineHeight: "1.7", 
                marginBottom: "40px" 
              }}>
                Nocastra provides Microsoft Intune consulting services that help organisations plan, design and prepare for a successful implementation. Whether you're adopting Microsoft Intune for the first time, replacing an existing endpoint management platform or expanding your Microsoft ecosystem, our consultants help you make informed decisions that reduce risk and maximise long-term value.
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
                  Book a Microsoft Intune Consultation <ArrowRight size={20} />
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
                  Request an Intune Readiness Assessment
                </Link>
              </div>

              {/* Hero Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
                {[
                  { icon: Clock, text: "15+ Years of IT Experience" },
                  { icon: Award, text: "Microsoft Intune Specialists" },
                  { icon: ShieldCheck, text: "Security-First Consulting" },
                  { icon: Layers, text: "Tailored Deployment Strategies" }
                ].map((highlight, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <highlight.icon size={24} color="#38bdf8" />
                    <span style={{ fontSize: "1rem", fontWeight: 600, color: "#e2e8f0" }}>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY BUSINESSES NEED CONSULTING */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "32px", letterSpacing: "-0.5px" }}>
                Why Businesses Need Microsoft Intune Consulting
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Many organisations underestimate the planning required for a successful Microsoft Intune implementation. Without a clear strategy, businesses often encounter inconsistent security policies, deployment delays, configuration issues and unnecessary operational complexity.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Microsoft Intune affects how users access company resources, how devices are managed, how applications are deployed and how security policies are enforced. Every organisation has different infrastructure, compliance requirements and operational priorities, making a tailored consulting approach essential.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Working with an experienced Microsoft Intune consultant allows you to identify potential challenges before deployment begins, establish a clear implementation roadmap and ensure your endpoint management strategy supports both your business objectives and your long-term IT vision.
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", fontWeight: 500 }}>
                  Whether you're planning a new deployment, migrating from Microsoft Configuration Manager (formerly SCCM) or another endpoint management platform, or optimising an existing Microsoft Intune environment, strategic consulting helps reduce risk while improving project outcomes.
                </p>
              </div>
            </div>
            
            {/* Visual Grid highlighting Risks vs Rewards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
              <div style={{ backgroundColor: "#f8fafc", padding: "32px", borderRadius: "16px", borderLeft: "4px solid #ef4444" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Without Planning</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Inconsistent security policies", "Deployment delays & user friction", "Misconfigured applications", "Hidden licensing costs"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
                      <span style={{ color: "#ef4444", fontWeight: "bold" }}>×</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: "#f0fdf4", padding: "32px", borderRadius: "16px", borderLeft: "4px solid #10b981", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>With Expert Consulting</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["Secure, Zero-Trust foundation", "Seamless user onboarding", "Optimised compliance baselines", "Cost-efficient architecture"].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", fontWeight: 500 }}>
                      <Check size={18} color="#10b981" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR CONSULTING SERVICES (GRID) */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Microsoft Intune Consulting Services
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                From technical readiness to complete strategy roadmaps, our consulting engagements are designed to de-risk your deployment and align technology with business goals.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {[
                { icon: Search, title: "Microsoft Intune Readiness Assessment", desc: "Evaluate your existing infrastructure, devices, users and Microsoft environment to determine your organisation's readiness for Microsoft Intune.", link: "#assessment", cta: "Explore Readiness Assessment" },
                { icon: Compass, title: "Endpoint Management Strategy", desc: "Develop a roadmap for modern endpoint management that aligns with your business objectives and future growth.", link: "/microsoft-intune/deployment", cta: "Learn More" },
                { icon: Shield, title: "Security & Compliance Planning", desc: "Design compliance policies, Conditional Access strategies and endpoint security baselines before implementation begins.", link: "/microsoft-intune/endpoint-security", cta: "Explore Security Planning" },
                { icon: Network, title: "Microsoft 365 Integration Planning", desc: "Plan seamless integration between Microsoft Intune, Microsoft 365, Microsoft Entra ID, Microsoft Defender and Azure.", link: "/microsoft-365", cta: "Learn More" },
                { icon: ArrowRightLeft, title: "Migration Planning", desc: "Create a structured migration strategy from SCCM, Workspace ONE or other legacy endpoint management solutions.", link: "/microsoft-intune/migration", cta: "Explore Migration" },
                { icon: FileCheck, title: "Licensing & Architecture Guidance", desc: "Receive expert advice on Microsoft licensing, tenant design, device enrolment methods and deployment best practices.", link: "/microsoft-intune/consulting", cta: "Learn More" },
              ].map((service, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", height: "100%", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}>
                  <div style={{ backgroundColor: "#f0f9ff", width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                    <service.icon size={28} color="#0284c7" />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>{service.title}</h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", flexGrow: 1, marginBottom: "24px" }}>{service.desc}</p>
                  <Link href={service.link} style={{ color: "#0284c7", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.95rem" }}>
                    {service.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHAT'S INCLUDED */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#0f172a", color: "white" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "24px", color: "white" }}>
                What's Included in Every Consulting Engagement
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "32px" }}>
                We believe in delivering actionable value. You won't receive generic templates—you'll get a comprehensive analysis and a clear, custom roadmap for success.
              </p>
              <Link href="#enquiry" style={{ backgroundColor: "#0ea5e9", color: "white", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Start Your Engagement <ArrowRight size={18} />
              </Link>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                "Discovery Workshop",
                "Infrastructure Assessment",
                "Endpoint Inventory Review",
                "Security Gap Analysis",
                "Microsoft Intune Architecture",
                "Deployment Roadmap",
                "Risk Assessment",
                "Implementation Recommendations",
                "Best Practice Documentation",
                "Executive Summary"
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckSquare size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 500, fontSize: "1.05rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. READINESS ASSESSMENT */}
        <section id="assessment" className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#fef2f2", color: "#ef4444", padding: "8px 16px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem", marginBottom: "20px" }}>
                <Search size={16} /> Featured Service
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Microsoft Intune Readiness Assessment
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Before implementing Microsoft Intune, organisations need to understand whether their existing infrastructure, devices and security posture are ready for modern endpoint management.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
              <div style={{ backgroundColor: "#f8fafc", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <Laptop size={24} color="#0284c7" /> We Evaluate:
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {["Existing endpoint management tools", "Microsoft 365 licensing", "Device inventory", "Identity infrastructure", "Security policies", "Compliance requirements", "Remote workforce", "Business objectives"].map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)", fontSize: "1.05rem" }}>
                      <CheckCircle2 size={18} color="#0284c7" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>The Output: A Customised Roadmap</h3>
                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "32px" }}>
                  Following the assessment, you receive a detailed executive report outlining your current state, identified risks, licensing recommendations, and a phased strategic roadmap for your Microsoft Intune deployment.
                </p>
                <Link href="#enquiry" style={{ backgroundColor: "#0f172a", color: "white", padding: "16px 24px", borderRadius: "12px", fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  Request Your Assessment <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUR CONSULTING PROCESS */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Our Consulting Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
                A structured, proven methodology to transition your organisation from uncertainty to a clear, actionable endpoint management strategy.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", position: "relative" }}>
              {[
                { step: "01", title: "Discovery", desc: "Understanding goals" },
                { step: "02", title: "Assessment", desc: "Auditing environment" },
                { step: "03", title: "Workshops", desc: "Collaborative design" },
                { step: "04", title: "Solution Strategy", desc: "Architecting the plan" },
                { step: "05", title: "Roadmap", desc: "Phased timelines" },
                { step: "06", title: "Recommendations", desc: "Final handover" },
              ].map((phase, idx) => (
                <div key={idx} style={{ backgroundColor: "white", padding: "32px 24px", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.02)", position: "relative", zIndex: 1 }}>
                  <div style={{ color: "#0ea5e9", fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>STEP {phase.step}</div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>{phase.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE NOCASTRA */}
        <section className="responsive-section-padding" style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
                Why Choose Nocastra
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
              {[
                { icon: Users, title: "Specialist Consultants", desc: "Work directly with Microsoft Intune experts who have designed enterprise environments, not generalist IT support staff." },
                { icon: Briefcase, title: "Business-First Approach", desc: "We don't just talk technology. We ensure the technology serves your specific operational and compliance requirements." },
                { icon: ShieldCheck, title: "Security Expertise", desc: "Security isn't an afterthought. Zero Trust principles are embedded into every Intune architecture we design." },
                { icon: Compass, title: "Practical Recommendations", desc: "You receive clear, actionable roadmaps tailored to your budget and capability, rather than theoretical best practices." },
                { icon: Handshake, title: "Long-Term Partnership", desc: "From initial consulting through to deployment, migration, and ongoing managed support, we are here for the long haul." }
              ].map((feature, idx) => (
                <div key={idx} style={{ display: "flex", gap: "20px" }}>
                  <div style={{ flexShrink: 0, backgroundColor: "#f0f9ff", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <feature.icon size={24} color="#0284c7" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>{feature.title}</h3>
                    <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        
        <section className="responsive-section-padding" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "24px" }}>
                Frequently Asked Questions
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

        {/* 9. FINAL CTA (USING EXTRACTED COMPONENT) */}
        <IntuneEnquiryCTA 
          title="Start with a Microsoft Intune Readiness Assessment"
          paragraphs={[
            "Every successful modern workplace starts with a clear strategy. Engage with Nocastra's consultants today to evaluate your environment and build a deployment roadmap that aligns with your operational and security goals."
          ]}
          expectationsTitle="Assessment Deliverables"
          expectations={[
            "Comprehensive infrastructure audit",
            "Security and compliance gap analysis",
            "Microsoft 365 licensing recommendations",
            "Executive summary and strategic roadmap"
          ]}
          formTitle="Request Your Assessment"
          formSubtitle="Provide your details below to schedule your initial consultation."
          buttonText="Request Assessment"
        />

      </main>
      <Footer />
    </>
  );
}
