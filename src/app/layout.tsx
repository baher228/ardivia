import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Makers of climate-resilient, sociable places`,
  description: `${siteConfig.name} is a landscape architecture and urban design firm creating climate-resilient, sociable places that bring communities together. We specialize in residential, commercial, and public realm projects.`,
  manifest: "/site.webmanifest",
  icons: "/icons/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
