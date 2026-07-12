import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nocastra - Humanized IT Support",
  description: "Humanized IT Support by a Team of Experts offering specialized web development, server hardening, vulnerability assessment, and IT support services.",
  keywords: "IT Support, Server Hardening, Vulnerability Assessment, Web Development, IT Assessment, Graphic Design, Microsoft 365, Cybersecurity, Nocastra",
  openGraph: {
    title: "Nocastra - Humanized IT Support",
    description: "Humanized IT Support by a Team of Experts offering specialized web development, server hardening, vulnerability assessment, and IT support services.",
    url: "https://www.nocastra.com",
    siteName: "Nocastra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nocastra - Humanized IT Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocastra - Humanized IT Support",
    description: "Humanized IT Support by a Team of Experts offering specialized web development, server hardening, vulnerability assessment, and IT support services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
