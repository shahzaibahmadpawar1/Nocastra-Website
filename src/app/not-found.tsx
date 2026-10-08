import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Mail } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Page Unavailable - Nocastra",
  description:
    "The page you requested is not available. It may not have been published yet or the link may be incorrect.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "140px 5% 80px",
          background:
            "linear-gradient(180deg, #f1f5f9 0%, #f8fafc 45%, #ffffff 100%)",
        }}
      >
        <div style={{ maxWidth: "640px", textAlign: "center" }}>
          <p
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--primary)",
              backgroundColor: "var(--primary-light)",
              padding: "8px 16px",
              borderRadius: "9999px",
              marginBottom: "24px",
            }}
          >
            Page unavailable
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: "var(--text-primary)",
              letterSpacing: "-1px",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            This page isn&apos;t available right now
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "36px",
            }}
          >
            The content you&apos;re looking for may not have been published yet,
            could have been moved, or the link might be incorrect. Please return
            to the homepage or get in touch with our team for assistance.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
            }}
          >
            <Link href="/" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Mail size={18} />
              Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
