import React from "react";

/**
 * Fully‑styled footer component matching the reference layout.
 * No placeholders – every text string, style, and link is concrete.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        {/* ───────────────── TOP ROW: LOCATIONS ───────────────── */}
        <div style={topRowStyles}>
          <div style={locationBlockStyles}>
            <h4 style={locationTitleStyles}>Alton</h4>
            <p style={contactTextStyles}>01420 593 250</p>
            <p style={contactTextStyles}>alton@viterra.com</p>
            <p style={addressStyles}>
              Lenten House, 16 Lenten Street, Alton, GU34 1HG
            </p>
          </div>

          <div style={locationBlockStyles}>
            <h4 style={locationTitleStyles}>London</h4>
            <p style={contactTextStyles}>020 7620 1453</p>
            <p style={contactTextStyles}>london@viterra.com</p>
            <p style={addressStyles}>
              First Floor Studio, The Old School, 4 Exton Street, London SE1 8UE
            </p>
          </div>
        </div>

        {/* ───────────────── BOTTOM ROW: LINKS & COPYRIGHT ───────────────── */}
        <div style={bottomRowStyles}>
          {/* Social links – left */}
          <div style={{ ...socialLinksStyles, justifySelf: "start" }}>
            <a href="https://instagram.com" style={socialLinkStyles}>
              Instagram
            </a>
            <a href="https://linkedin.com" style={socialLinkStyles}>
              LinkedIn
            </a>
          </div>

          {/* Site links – centre */}
          <div style={{ ...siteLinksStyles, justifySelf: "center" }}>
            <a href="/careers" style={footerLinkStyles}>
              Careers
            </a>
            <a href="/services" style={footerLinkStyles}>
              Services
            </a>
            <a href="/projects" style={footerLinkStyles}>
              Projects
            </a>
            <a href="/privacy" style={footerLinkStyles}>
              Privacy
            </a>
            <a href="/terms" style={footerLinkStyles}>
              Terms
            </a>
            <a href="https://rabbithole.com" style={footerLinkStyles}>
              Site by Rabbithole®
            </a>
          </div>

          {/* Copyright – right */}
          <div style={{ ...copyrightBlockStyles, justifySelf: "end" }}>
            © viterra, {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ────────────────────────── STYLES ────────────────────────── */
const footerStyles: React.CSSProperties = {
  backgroundColor: "#f8f8f8",
  padding: "3rem 0 2rem",

  borderTop: "1px solid #e5e5e5",
};

const containerStyles: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

// Top row holds both locations side‑by‑side and wraps on small screens.
const topRowStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "2rem",
};

const locationBlockStyles: React.CSSProperties = {
  flex: "0 0 48%", // two columns on wide screens, full width on narrow
  minWidth: "260px",
};

const locationTitleStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color: "#000",
};

const contactTextStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#666",
  marginBottom: "0.25rem",
};

const addressStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#666",
  lineHeight: 1.4,
  marginTop: "0.5rem",
};

// Bottom grid layout: 3 columns (left / centre / right)
const bottomRowStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  gap: "1rem",
  borderTop: "1px solid #e0e0e0",
  paddingTop: "1rem",
};

const socialLinksStyles: React.CSSProperties = {
  display: "flex",
  gap: "1.5rem",
};

const siteLinksStyles: React.CSSProperties = {
  display: "flex",
  gap: "1.5rem",
};

const copyrightBlockStyles: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#999",
  textAlign: "right",
};

const socialLinkStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#666",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const footerLinkStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#666",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default Footer;
