"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteConfig } from "../config/site";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  /* ─── lock page when menu is open ─── */
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    closeNav();
  }, [pathname]);

  return (
    <header className={`${styles.header} ${navOpen ? styles.navOpen : ""}`}>
      <div className={styles.mainBar}>
        <Link href="/" className={styles.logo} aria-label="ARDIVIA — London">
          <span className={styles.logoText}>{siteConfig.name}</span>
          <span className={styles.logoSubtext}>London</span>
        </Link>

        <nav className={styles.nav} aria-hidden={!navOpen}>
          <button
            className={styles.closeNav}
            onClick={closeNav}
            aria-label="Close navigation"
          >
            ×
          </button>

          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>

          {/* CTA duplicated so it’s reachable inside the panel */}
          <a href="/contact" className={`${styles.ctaButton} ${styles.ctaMobile}`}>
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
            aria-expanded={navOpen}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
          >
            {/* Always 3 lines; no “X” transform */}
            <div className={styles.hamburger}>
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
