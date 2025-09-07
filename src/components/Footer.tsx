"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Facebook,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
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
    email: "london@ardivia.com",
    address:
      "First Floor Studio, The Old School, 4 Exton Street, London SE1 8UE",
  },
];

// ────────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────────
const currentYear = new Date().getFullYear();

const social = [
  {
    href: "https://instagram.com/ardivia",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://linkedin.com/company/ardivia",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "https://facebook.com/ardivia", label: "Facebook", Icon: Facebook },
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
      className="
        relative mt-auto text-emerald-50 selection:bg-emerald-200/30
        bg-[var(--primary-green)]
      "
    >
      {/* background accents that span full width */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(900px_300px_at_10%_0%,rgba(255,255,255,0.08),transparent_60%)]
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(900px_300px_at_90%_20%,rgba(0,0,0,0.10),transparent_60%)]
        "
      />

      {/* ---------- Content area (fuller width, longer height) ---------- */}
      <div
        className="
          relative
          mx-auto max-w-[min(140rem,98vw)]
          px-4 sm:px-6
          pt-18 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-36
        "
      >
        {/* Dense 12-col grid to use horizontal space */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Brand + intro */}
          <div className="col-span-12 lg:col-span-5 2xl:col-span-4 space-y-7">
            <h3 className="text-4xl md:text-[2.75rem] font-semibold tracking-wide text-white">
              Ardivia
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-emerald-50/90">
              Professional landscaping services crafting vibrant, enduring
              gardens. Design, build, and maintenance—tailored to how you live
              outdoors.
            </p>

            <nav className="flex flex-wrap gap-4">
              {social.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    inline-flex h-12 w-12 items-center justify-center rounded-full
                    bg-white/10 hover:bg-white/15
                    ring-1 ring-white/15 hover:ring-white/25
                    transition
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                  "
                >
                  <Icon className="h-5 w-5 text-white" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services as chips */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="leading-none">
                  <Link
                    href="/services"
                    className="
                      inline-flex items-center rounded-full
                      bg-white/8 hover:bg-white/14
                      ring-1 ring-white/15 hover:ring-white/25
                      px-3.5 py-2 text-sm md:text-base text-emerald-50
                      transition
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                      "
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links (URLs unchanged) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
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
                    className="
                      text-sm md:text-base text-emerald-50/90 hover:text-white
                      transition-colors
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="col-span-12 lg:col-span-2 2xl:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white">Locations</h4>
            <ul className="space-y-8">
              {locations.map((loc) => (
                <li key={loc.city} className="space-y-2">
                  <p className="font-medium text-white text-base md:text-lg">
                    {loc.city}
                  </p>
                  <p className="flex items-center gap-2 text-sm md:text-base text-emerald-50/90">
                    <Phone className="h-4 w-4" aria-hidden="true" /> {loc.phone}
                  </p>
                  <p className="flex items-center gap-2 text-sm md:text-base text-emerald-50/90 break-all">
                    <Mail className="h-4 w-4" aria-hidden="true" /> {loc.email}
                  </p>
                  <p className="flex items-start gap-2 text-sm md:text-base text-emerald-50/90">
                    <MapPin className="h-4 w-4 mt-0.5" aria-hidden="true" />{" "}
                    {loc.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations / badges row to add tasteful vertical mass */}
        </div>
      </div>

      {/* ---------- Bottom bar (full-width) ---------- */}
      <div className="relative border-t border-white/15">
        <div
          className="
            mx-auto max-w-[min(140rem,98vw)] px-4 sm:px-6
            py-7 md:py-9
            flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6
          "
        >
          <p className="text-sm md:text-base text-emerald-50/85">
            © {currentYear} Ardivia. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-6">
            {[
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Sitemap", "/sitemap"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="
                  text-sm md:text-base text-emerald-50/85 hover:text-white
                  transition-colors
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                "
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
            className="
              fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
              w-12 h-12 md:w-14 md:h-14 rounded-full
              bg-white/15 hover:bg-white/25 text-white
              backdrop-blur-sm ring-1 ring-white/25
              shadow-lg flex items-center justify-center
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-white
              transition
            "
          >
            <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
