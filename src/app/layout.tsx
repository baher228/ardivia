import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Viterra - Makers of climate-resilient, sociable places",
  description:
    "Viterra is a landscape architecture and urban design firm creating climate-resilient, sociable places that bring communities together. We specialize in residential, commercial, and public realm projects.",
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
