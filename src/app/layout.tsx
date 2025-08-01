import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Viterra - Makers of climate-resilient, sociable places",
  description:
    "We are landscape architects and urban designers who create climate-resilient, sociable places that bring communities together.",
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
