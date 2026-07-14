import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Stats from "@/src/components/Stats";
import AboutSection from "@/src/components/AboutSection";
import Services from "@/src/components/Services";
import FeaturedService from "@/src/components/FeaturedService";
import WhyChoose from "@/src/components/WhyChoose";
import Industries from "@/src/components/Industries";
import Integration from "@/src/components/Integration";
import LogoSlider from "@/src/components/LogoSlider";
import Portfolio from "@/src/components/Portfolio";
import Hosting from "@/src/components/Hosting";
import FinalCTA from "@/src/components/FinalCTA";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutSection />
        <Services />
        <FeaturedService />
        <WhyChoose />
        <Industries />
        <Integration />
        <Portfolio />
        
        {/* Clients section */}
        <section id="clients" style={{ padding: "80px 0 0", backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)", position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px", padding: "0 5%" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.82rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "var(--primary)",
              marginBottom: "12px",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "var(--primary-light)"
            }}>Clients</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Trusted by Businesses That Value Reliability
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Join more than 150 organizations that trust Nocastra to manage their IT infrastructure, strengthen security, and deliver modern digital solutions.
            </p>
          </div>
          <LogoSlider />
        </section>
        
        <Hosting />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
