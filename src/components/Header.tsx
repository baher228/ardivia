"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { siteConfig } from "../config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  /* ─── fade header on scroll ─── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ─── lock page when menu is open ─── */
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        navOpen ? styles.navOpen : ""
      }`}
    >
      {/* ───── top bar (phone & email) ───── */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <a href="tel:02089402832" className={styles.topLink}>
            <span className={styles.iconCircle}>
              {/* phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.73 19.73 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.73 19.73 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.38 12.38 0 0 0 .65 2.81 2 2 0 0 1-.45 2L8 9.8a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2-.45 12.38 12.38 0 0 0 2.81.65A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            020&nbsp;8940&nbsp;2832
          </a>

          <a href="mailto:info@viterra.co.uk" className={styles.topLink}>
            <span className={styles.iconCircle}>
              {/* envelope icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            info@viterra.co.uk
          </a>
        </div>
      </div>

      {/* ───── main bar (logo • nav • CTA • burger) ───── */}
      <div className={styles.mainBar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>{siteConfig.name}</span>
        </Link>

        <nav className={styles.nav}>
          {/* close “×” only visible on mobile */}
          <button
            className={styles.closeNav}
            onClick={closeNav}
            aria-label="Close navigation"
          >
            ×
          </button>

          <Link href="/about" className={styles.navLink} onClick={closeNav}>
            About
          </Link>
          <Link href="/services" className={styles.navLink} onClick={closeNav}>
            Services
          </Link>
          <Link href="/projects" className={styles.navLink} onClick={closeNav}>
            Projects
          </Link>
          <Link href="/contact" className={styles.navLink} onClick={closeNav}>
            Contact
          </Link>

          {/* CTA duplicated so it’s reachable inside the panel */}
          <a
            href="/contact"
            className={`${styles.ctaButton} ${styles.ctaMobile}`}
          >
            BOOK A FREE CONSULTATION
          </a>
        </nav>

        <div className={styles.actions}>
          <a href="/contact" className={styles.ctaButton}>
            BOOK A FREE CONSULTATION
          </a>

          <button
            className={styles.menuToggle}
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
          >
            <div
              className={`${styles.hamburger} ${navOpen ? styles.active : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
