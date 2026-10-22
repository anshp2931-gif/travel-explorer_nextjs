import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wayfinder — Luxury Spatial Travel Explorer",
  description: "Browse curated global destinations organized by geographic region, terrain systems, and spatial telemetry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 antialiased font-sans relative selection:bg-teal-500/30 selection:text-teal-200">
        {/* Ambient atmospheric glows */}
        <div className="ambient-glow glow-top-right" aria-hidden="true" />
        <div className="ambient-glow glow-bottom-left" aria-hidden="true" />
        <div className="ambient-glow glow-center" aria-hidden="true" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
