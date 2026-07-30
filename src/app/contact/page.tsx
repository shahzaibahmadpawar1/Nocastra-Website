import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - Nocastra",
  description: "Get a free IT consulting review or security assessment. Reach out to Nocastra specialists via email, phone, or message form.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
