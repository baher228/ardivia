"use client";

import React from "react";
import Link from "next/link";

interface SectionCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  link: string;
  category?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  imageSrc,
  title,
  subtitle,
  link,
  category,
}) => {
  return (
    <div style={cardStyles}>
      <Link href={link} style={cardLinkStyles}>
        <div style={imageContainerStyles}>
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            style={imageStyles}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "#d9d9d9";
              target.alt = "Image not available";
            }}
          />
          <div style={overlayStyles} aria-hidden="true" />
          <div style={textWrapStyles}>
            {category ? <p style={categoryStyles}>{category}</p> : null}
            <h3 style={titleStyles}>{title}</h3>
            {subtitle ? <p style={subtitleStyles}>{subtitle}</p> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};

const cardStyles: React.CSSProperties = {
  backgroundColor: "transparent",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  borderRadius: 16,
};

const cardLinkStyles: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
};

/* Adaptive media area: fluid aspect ratio for nicer tablet sizing */
const imageContainerStyles: React.CSSProperties = {
  position: "relative",
  width: "100%",
  // from ~60% on wide screens up to ~75% on narrow
  paddingBottom: "clamp(60%, 68vw, 75%)",
  overflow: "hidden",
  borderRadius: 16,
};

const imageStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1)",
  transition: "transform 0.35s ease",
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.65) 100%)",
  pointerEvents: "none",
};

const textWrapStyles: React.CSSProperties = {
  position: "absolute",
  left: 18,
  right: 18,
  bottom: 18,
};

const categoryStyles: React.CSSProperties = {
  margin: 0,
  marginBottom: 6,
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.92)",
  fontWeight: 700,
};

const titleStyles: React.CSSProperties = {
  margin: 0,
  marginBottom: 6,
  fontSize: 20,
  lineHeight: 1.2,
  fontWeight: 700,
  textTransform: "uppercase",
  color: "#ffffff",
  textShadow: "0 2px 6px rgba(0,0,0,0.35)",
};

const subtitleStyles: React.CSSProperties = {
  margin: 0,
  fontSize: 14,
  lineHeight: 1.35,
  color: "rgba(255,255,255,0.88)",
};

export default SectionCard;
