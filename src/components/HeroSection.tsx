"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const getNavHeight = (width: number): number => {
  if (width < 768) return 60;
  if (width < 1500) return 10;
  return 96;
};

// Crop 30% total in Y: 15% from the top + 15% from the bottom.
const CROP_TOP_BOTTOM_PERCENT = 15;

const HeroSection: React.FC = () => {
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const update = () => setNavHeight(getNavHeight(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const {
    heroStyles,
    videoStyles,
    overlayStyles,
    glassStyles,
    twoColumnStyles,
    leftColumnStyles,
    logoStyles,
    lineStyles,
    rightColumnStyles,
    kickerStyles,
    titleStyles,
    descriptionStyles,
  } = useMemo(() => {
    const px = (n: number) => `${n}px`;
    const crop = CROP_TOP_BOTTOM_PERCENT;

    return {
      heroStyles: {
        position: "relative",
        marginTop: 0,
        height: `calc(100vh )`,
        overflow: "hidden",
      } as React.CSSProperties,

      videoStyles: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `calc(100% + ${2 * crop}%)`,
        transform: `translateY(-${crop}%)`,
        objectFit: "cover",
        zIndex: -1,
        pointerEvents: "none",
      } as React.CSSProperties,

      overlayStyles: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        // Subtle darkening + vertical gradient for readability on bright frames
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.45))",
        paddingInline: "2rem",
        display: "grid",
        placeItems: "center",
      } as React.CSSProperties,

      // Optional soft “glass” container for content to pop on foliage frames
      glassStyles: {
        width: "min(1200px, 100%)",
        padding: "2.2rem",
        borderRadius: "20px",
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      } as React.CSSProperties,

      twoColumnStyles: {
        display: "grid",
        gridTemplateColumns: "1fr 1px 1.2fr",
        gap: "2rem",
        width: "100%",
        alignItems: "start",
      } as React.CSSProperties,

      leftColumnStyles: {
        display: "flex",
        justifyContent: "flex-start",
      } as React.CSSProperties,

      logoStyles: {
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
        fontWeight: 300,
        color: "#ffffff",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        margin: 0,
        lineHeight: 1,
      } as React.CSSProperties,

      lineStyles: {
        width: "1px",
        height: "72%",
        backgroundColor: "rgba(255,255,255,0.9)",
        animation: "lineAppear 900ms ease-out 500ms both",
        justifySelf: "center",
        alignSelf: "center",
      } as React.CSSProperties,

      rightColumnStyles: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "0.5rem",
        maxWidth: "720px",
      } as React.CSSProperties,

      kickerStyles: {
        color: "rgba(255,255,255,0.9)",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        fontSize: "0.9rem",
        margin: 0,
        marginBottom: "0.6rem",
        fontFamily: "var(--font-primary)",
      } as React.CSSProperties,

      titleStyles: {
        fontSize: "clamp(1.8rem, 4.2vw, 3.2rem)",
        fontWeight: 300,
        lineHeight: 1.15,
        letterSpacing: "-0.01em",
        color: "#ffffff",
        margin: 0,
        marginBottom: "0.8rem",
        textAlign: "left",
        fontFamily: "var(--font-primary)",
      } as React.CSSProperties,

      descriptionStyles: {
        color: "rgba(255,255,255,0.92)",
        fontSize: "clamp(1rem, 2vw, 1.1rem)",
        lineHeight: 1.55,
        margin: 0,
        maxWidth: "62ch",
        fontFamily: "var(--font-primary)",
      } as React.CSSProperties,
    };
  }, [navHeight]);

  return (
    <motion.section
      style={heroStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Video background */}
      <video style={videoStyles} autoPlay muted loop playsInline>
        <source src="/videos/heroVideoHR.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay & content */}
      <div style={overlayStyles}>
        <div style={glassStyles}>
          <div
            style={{
              ...twoColumnStyles,
              // Simple responsive collapse to single column on small screens
              gridTemplateColumns:
                typeof window !== "undefined" && window.innerWidth < 860
                  ? "1fr"
                  : "1fr 1px 1.2fr",
            }}
          >
            <motion.div
              style={leftColumnStyles}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <h1 style={logoStyles}>ARDIVIA</h1>
            </motion.div>

            {/* Divider (hidden on small screens) */}
            {typeof window !== "undefined" && window.innerWidth >= 860 ? (
              <div style={lineStyles} />
            ) : null}

            <motion.div
              style={rightColumnStyles}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <p style={kickerStyles}>Landscape & Garden Design</p>
              <h2 style={titleStyles}>
                Makers of climate-resilient, sociable places.
              </h2>
              <p style={descriptionStyles}>
                Ardivia is an established landscape and garden design company;
                building and maintaining gardens and outdoor spaces in London
                and the Home Counties.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Local keyframes for the divider animation */}
      <style>{`
        @keyframes lineAppear {
          from { transform: scaleY(0); transform-origin: top; opacity: 0; }
          to   { transform: scaleY(1); transform-origin: top; opacity: 1; }
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;
