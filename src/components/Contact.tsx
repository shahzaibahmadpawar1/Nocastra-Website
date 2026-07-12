"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ShieldCheck } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Vulnerability Assessment",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Vulnerability Assessment",
        message: "",
      });
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="grid-bg"></div>
      <div className={styles.container}>
        
        {/* Left Side: Contact Information */}
        <motion.div 
          className={styles.infoCol}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>Get in Touch</span>
          <h2 className={styles.title}>
            Get a Free <strong className={styles.titleHighlight}>Consultation</strong>
          </h2>
          <p className={styles.description}>
            Ready to secure your workspace or build a modern custom web platform? Reach out to our IT experts today. We respond to all queries within one business day.
          </p>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Mail size={22} />
              </div>
              <div className={styles.itemText}>
                <h4>Email Us</h4>
                <a href="mailto:info@nocastra.com">info@nocastra.com</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Phone size={22} />
              </div>
              <div className={styles.itemText}>
                <h4>Call Us</h4>
                <a href="tel:+923214682968">+92 321 4682968</a>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <h4>Follow Us</h4>
            <div className={styles.socialRow}>
              <a 
                href="https://www.facebook.com/Nocastra-102684362282691" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/nocastra/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          className={styles.formCard}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>Required Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="Vulnerability Assessment">Vulnerability Assessment</option>
                  <option value="Server Hardening">Server Hardening</option>
                  <option value="Web & Custom Development">Web & Custom Development</option>
                  <option value="Web Speed Optimization">Web Speed Optimization</option>
                  <option value="UI/UX & Graphic Design">UI/UX & Graphic Design</option>
                  <option value="Microsoft 365 Management">Microsoft 365 Management</option>
                  <option value="IT Assessment & Audits">IT Assessment & Audits</option>
                </select>
              </div>

              <div className={`${styles.formGroup} styles.fullWidth`}>
                <label htmlFor="message" className={styles.label}>Message Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  className={styles.textarea}
                ></textarea>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
            </button>

            {submitSuccess && (
              <div className={styles.successToast}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <ShieldCheck size={18} /> Message sent successfully! We will get back to you shortly.
                </span>
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
