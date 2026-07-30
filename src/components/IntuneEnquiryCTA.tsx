import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface IntuneEnquiryCTAProps {
  title?: string;
  paragraphs?: React.ReactNode[];
  expectationsTitle?: string;
  expectations?: string[];
  formTitle?: string;
  formSubtitle?: string;
  buttonText?: string;
}

export default function IntuneEnquiryCTA({
  title = "Ready to Modernise Your Endpoint Management?",
  paragraphs = [
    "Whether you're planning your first Microsoft Intune deployment, migrating from an existing endpoint management platform or looking to optimise your current environment, Nocastra is here to help.",
    "Our Microsoft Intune specialists will take the time to understand your organisation, assess your existing infrastructure and recommend a solution tailored to your operational, security and compliance requirements. No generic recommendations—just practical guidance designed around your business.",
    <span key="p3" style={{ fontWeight: 500 }}>Book a consultation with our team and discover how Microsoft Intune can simplify endpoint management, strengthen security and support a more productive modern workplace.</span>
  ],
  expectationsTitle = "What You Can Expect",
  expectations = [
    "A discussion about your current IT environment and business objectives",
    "An assessment of your endpoint management challenges",
    "Recommendations tailored to your organisation's requirements",
    "Guidance on Microsoft Intune deployment, migration or optimisation",
    "Answers to your technical and business questions",
    "A clear roadmap for implementing Microsoft Intune successfully"
  ],
  formTitle = "Book Your Microsoft Intune Consultation",
  formSubtitle = "Complete the form below and one of our specialists will be in touch to discuss your requirements and recommend the most suitable approach.",
  buttonText = "Request Consultation"
}: IntuneEnquiryCTAProps) {
  return (
    <section id="enquiry" style={{ 
      padding: "80px 5%", 
      backgroundColor: "#ffffff",
      borderBottom: "1px solid var(--border-color)"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
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
              {title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  {p}
                </p>
              ))}
            </div>
            
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>
              {expectationsTitle}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {expectations.map((item, idx) => (
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
              {formTitle}
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "32px" }}>
              {formSubtitle}
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
                {buttonText} <ArrowRight size={18} />
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
              { name: "Microsoft Intune Support", url: "/microsoft-intune/support" },
              { name: "Endpoint Security with Microsoft Intune", url: "/microsoft-intune/endpoint-security" }
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
  );
}
