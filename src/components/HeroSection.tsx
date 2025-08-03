"use client";

import React from "react";
import Link from "next/link";

/* —————————————————————————————————— */
/*  pick the exact height of your sticky nav bar here */
const NAV_HEIGHT = 96; // px
/* —————————————————————————————————— */

interface HeroSlide {
  image: string;
  title: string;
}

const slides: HeroSlide[] = [
  {
    image:
      "https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Edenbrook-Web-Photo-by-Studio-Maple-268.jpg",
    title: "Makers of climate-resilient, sociable places.",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section style={heroStyles}>
      <div style={slideContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ ...slideStyles, backgroundImage: `url(${slide.image})` }}
          >
            {/* note the custom paddingTop = nav height */}
            <div style={{ ...overlayStyles, paddingTop: NAV_HEIGHT }}>
              <div style={twoColumnStyles}>
                {/* logo column 
                <div style={leftColumnStyles}>
                  <h1 style={logoStyles}>viterra</h1>
                </div>
                
                {/* divider */}
                {/*
                <div style={lineStyles} />

                {/* headline column */}
                {/*
                <div style={rightColumnStyles}>
                  <h1 style={titleStyles}>{slide.title}</h1>
                </div>
                */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ───────────────────  styles  ─────────────────── */

const heroStyles: React.CSSProperties = {
  position: "relative",
  marginTop: `${NAV_HEIGHT}px`,
  height: "100vh",
  overflow: "hidden",
};

const slideContainerStyles: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const slideStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.3)",
  paddingLeft: "2rem",
  paddingRight: "2rem",
};

/* grid: | 1fr | 1px | 1fr |  – puts divider at exactly 50 % */
const twoColumnStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1px 1fr",
  width: "100%",
  height: "100%",
  alignItems: "flex-start",
};

const leftColumnStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
};

const logoStyles: React.CSSProperties = {
  fontSize: "4rem",
  fontWeight: 300,
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  margin: 0,
};

const lineStyles: React.CSSProperties = {
  width: "1px",
  height: "70%",
  backgroundColor: "#fff",
  animation: "lineAppear 1s ease-out 0.5s both",
  justifySelf: "center",
};

const rightColumnStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "2rem",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3.5rem",
  fontWeight: 300,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: "#fff",
  margin: 0,
  maxWidth: "600px",
  textAlign: "left",
  fontFamily: "Arial, sans-serif",
};

export default HeroSection;
