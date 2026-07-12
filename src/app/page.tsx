import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Stats from "@/src/components/Stats";
import Services from "@/src/components/Services";
import Integration from "@/src/components/Integration";
import Portfolio from "@/src/components/Portfolio";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Integration />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
