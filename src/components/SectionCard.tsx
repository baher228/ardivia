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
            style={imageStyles}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "#f0f0f0";
              target.style.display = "flex";
              target.style.alignItems = "center";
              target.style.justifyContent = "center";
              target.alt = "Image not available";
            }}
          />
        </div>
        <div style={contentStyles}>
          {category && <p style={categoryStyles}>{category}</p>}
          {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
          <h3 style={titleStyles}>{title}</h3>
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
};

const cardLinkStyles: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
};

const imageContainerStyles: React.CSSProperties = {
  position: "relative",
  width: "100%",
  paddingBottom: "60%", // 5:3 aspect ratio
  overflow: "hidden",
};

const imageStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
};

const contentStyles: React.CSSProperties = {
  padding: "1rem 0",
};

const categoryStyles: React.CSSProperties = {
  fontSize: "12px",
  color: "#666",
  marginBottom: "0.25rem",
  fontWeight: 600,
  textTransform: "uppercase",
};

const subtitleStyles: React.CSSProperties = {
  fontSize: "14px",
  color: "#666",
  marginBottom: "0.25rem",
  fontWeight: 400,
};

const titleStyles: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 400,
  color: "#212121",
  lineHeight: 1.2,
  margin: 0,
};

export default SectionCard;
