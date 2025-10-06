"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const getNavHeight = (width: number): number => {
  if (width < 768) return 60;
  if (width < 1500) return 10;
  return 96;
};

const CROP_TOP_BOTTOM_PERCENT = 15;

const HeroSection: React.FC = () => {
  const [navHeight, setNavHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      setNavHeight(getNavHeight(window.innerWidth));
      setWidth(window.innerWidth);
      // Set a CSS var for mobile "real" viewport height if needed elsewhere
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = width < 860;

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
    const crop = CROP_TOP_BOTTOM_PERCENT;

    return {
      heroStyles: {
        position: "relative",
        marginTop: 0,
        // Use svh only on mobile; keep desktop/tablet as vh (UNCHANGED)
        height: isMobile ? "calc(100svh)" : "calc(100vh)",
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
        // On mobile, lift the focal point a bit so the subject isn't behind the header/notch
        objectPosition: isMobile ? "center 35%" : "center center",
        zIndex: -1,
        pointerEvents: "none",
      } as React.CSSProperties,

      overlayStyles: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        // Slightly stronger gradient on mobile for readability over video
        background: isMobile
          ? "linear-gradient(to bottom, rgba(0,0,0,0.50), rgba(0,0,0,0.65))"
          : "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.45))",
        // Respect safe areas on mobile without affecting desktop
        paddingInline: "1rem",
        paddingTop: isMobile ? "calc(env(safe-area-inset-top) + 0.5rem)" : 0,
        paddingBottom: isMobile
          ? "calc(env(safe-area-inset-bottom) + 0.75rem)"
          : 0,
        display: "grid",
        placeItems: "center",
      } as React.CSSProperties,

      glassStyles: {
        width: "min(1200px, 100%)",
        padding: isMobile ? "1.75rem" : "2.2rem",
        borderRadius: "20px",
        // Slightly darker and blurrier on mobile for text contrast
        background: isMobile ? "rgba(0,0,0,0.28)" : "rgba(0,0,0,0.2)",
        backdropFilter: isMobile ? "blur(8px)" : "blur(4px)",
        WebkitBackdropFilter: isMobile ? "blur(8px)" : "blur(4px)",
        // Soft shadow to lift the card only on mobile
        boxShadow: isMobile ? "0 10px 30px rgba(0,0,0,0.35)" : "none",
      } as React.CSSProperties,

      twoColumnStyles: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1px 1.2fr",
        gap: isMobile ? "1.25rem" : "2rem",
        width: "100%",
        alignItems: "start",
      } as React.CSSProperties,

      leftColumnStyles: {
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-start",
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
        // Add a small text shadow only on mobile to separate from video
        textShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.5)" : "none",
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
        paddingLeft: isMobile ? "0rem" : "0.5rem",
        maxWidth: isMobile ? "680px" : "720px",
        alignItems: isMobile ? "center" : "flex-start",
      } as React.CSSProperties,

      kickerStyles: {
        color: "rgba(255,255,255,0.92)",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        fontSize: isMobile ? "0.85rem" : "0.9rem",
        margin: 0,
        marginBottom: isMobile ? "0.5rem" : "0.6rem",
        fontFamily: "var(--font-primary)",
        textAlign: isMobile ? "center" : "left",
        opacity: 0.95,
      } as React.CSSProperties,

      titleStyles: {
        fontSize: isMobile
          ? "clamp(1.9rem, 6.5vw, 2.4rem)"
          : "clamp(1.8rem, 4.2vw, 3.2rem)",
        fontWeight: 300,
        lineHeight: 1.18,
        letterSpacing: "-0.01em",
        color: "#ffffff",
        margin: 0,
        marginBottom: isMobile ? "0.7rem" : "0.8rem",
        textAlign: isMobile ? "center" : "left",
        fontFamily: "var(--font-primary)",
        textShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.45)" : "none",
      } as React.CSSProperties,

      descriptionStyles: {
        color: "rgba(255,255,255,0.94)",
        fontSize: isMobile ? "1rem" : "clamp(1rem, 2vw, 1.1rem)",
        lineHeight: 1.55,
        margin: 0,
        maxWidth: isMobile ? "52ch" : "62ch",
        fontFamily: "var(--font-primary)",
        textAlign: isMobile ? "center" : "left",
        textShadow: isMobile ? "0 1px 6px rgba(0,0,0,0.35)" : "none",
      } as React.CSSProperties,
    };
  }, [navHeight, width]); // depend directly on width so mobile toggles immediately

  return (
    <motion.section
      style={heroStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video style={videoStyles} autoPlay muted loop playsInline>
        <source src="/videos/heroVideoHR.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={overlayStyles}>
        <div style={glassStyles}>
          <div style={twoColumnStyles}>
            <motion.div
              style={leftColumnStyles}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <h1 style={logoStyles}>ARDIVIA</h1>
            </motion.div>

            {!isMobile ? <div style={lineStyles} /> : null}

            <motion.div
              style={rightColumnStyles}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <p style={kickerStyles}>Landscape & Garden Design</p>
              {!isMobile ? (
                <h2 style={titleStyles}>
                  Makers of climate-resilient, sociable places.
                </h2>
              ) : null}

              <p style={descriptionStyles}>
                Ardivia is an established landscape and garden design company;
                building and maintaining gardens and outdoor spaces in London
                and the Home Counties.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

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
