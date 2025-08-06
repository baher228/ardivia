"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Facebook,
  ChevronUp,
} from "lucide-react";

// ────────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────────
const services = [
  "Garden Design",
  "Landscaping",
  "Garden Maintenance",
  "Planting Design",
  "Hard Landscaping",
  "Soft Landscaping",
];

const locations = [
  {
    city: "London",
    phone: "020 7620 1453",
    email: "london@viterra.com",
    address:
      "First Floor Studio, The Old School, 4 Exton Street, London SE1 8UE",
  },
];

// ────────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────────
const currentYear = new Date().getFullYear();

const social = [
  { href: "https://instagram.com/viterra", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com/company/viterra", label: "LinkedIn", Icon: Linkedin },
  { href: "https://facebook.com/viterra", label: "Facebook", Icon: Facebook },
];

// ────────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────────
const Footer: React.FC = () => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      className="relative mt-auto text-neutral-300 selection:bg-green-600/40
                 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-700
                 bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      {/* ---------- Top grid ---------- */}
      <div
        className="mx-auto max-w-[min(90rem,90%)] px-6 pt-20 pb-12
                   grid gap-y-14 gap-x-10 md:grid-cols-4 xl:grid-cols-6"
      >
        {/* Column 1 – Brand */}
        <div className="md:col-span-2 xl:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold tracking-wide text-neutral-100">
            viterra
          </h2>
          <p className="text-sm md:text-base 2xl:text-lg leading-relaxed">
            Professional landscaping services creating beautiful outdoor
            spaces.<br className="hidden sm:inline" /> From garden design to
            maintenance, we bring your vision to life.
          </p>
          <nav className="flex space-x-6">
            {social.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-white
                           transition-colors"
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            ))}
          </nav>
        </div>
        {/* Column 4 – Quick links */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-neutral-100">Quick Links</h3>
          <ul className="space-y-3">
            {[
              ["About Us", "/about"],
              ["Our Projects", "/projects"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy"],
              ["Terms of Service", "/terms"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm md:text-base hover:text-white transition-colors
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 – Services */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-neutral-100">Services</h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm md:text-base hover:text-white transition-colors
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Locations */}
        <div className="space-y-6 xl:col-span-2">
          <h3 className="text-lg font-semibold text-neutral-100">Locations</h3>
          <ul className="space-y-8">
            {locations.map((loc) => (
              <li key={loc.city}>
                <p className="font-medium text-neutral-100">{loc.city}</p>
                <p className="text-sm md:text-base">{loc.phone}</p>
                <p className="text-sm md:text-base break-all">{loc.email}</p>
                <p className="text-sm md:text-base">{loc.address}</p>
              </li>
            ))}
          </ul>
        </div>

        
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-neutral-800">
        <div
          className="mx-auto max-w-[min(90rem,90%)] px-6 py-6
                     flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-xs md:text-sm text-neutral-400">
            © {currentYear} viterra. All rights reserved.
          </p>
          <nav className="flex space-x-6">
            {[
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Sitemap", "/sitemap"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-xs md:text-sm text-neutral-400 hover:text-white
                           transition-colors focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ---------- FAB ---------- */}
      <AnimatePresence>
        {showFab && (
          <motion.button
            key="fab"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
                       w-12 h-12 md:w-14 md:h-14 rounded-full
                       bg-neutral-800 hover:bg-neutral-700 text-white
                       shadow-lg flex items-center justify-center
                       focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-offset-2 focus-visible:outline-white
                       transition-colors"
          >
            <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
