"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const getNavHeight = (width: number): number => {
  if (width < 768) return 60;
  if (width < 1024) return 74;
  return 96;
};

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
    twoColumnStyles,
    leftColumnStyles,
    logoStyles,
    lineStyles,
    rightColumnStyles,
    titleStyles,
  } = useMemo(() => {
    const px = (n: number) => `${n}px`;

    return {
      heroStyles: {
        position: "relative",
        marginTop: px(navHeight),
        height: "100vh",
        overflow: "hidden",
      } as React.CSSProperties,

      videoStyles: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      } as React.CSSProperties,

      overlayStyles: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingTop: px(navHeight),
        paddingInline: "2rem",
      } as React.CSSProperties,

      twoColumnStyles: {
        display: "grid",
        gridTemplateColumns: "1fr 1px 1fr",
        width: "100%",
        height: "100%",
        alignItems: "flex-start",
      } as React.CSSProperties,

      leftColumnStyles: {
        display: "flex",
        justifyContent: "flex-start",
      } as React.CSSProperties,

      logoStyles: {
        fontFamily: "var(--font-display)",
        fontSize: "4rem",
        fontWeight: 300,
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        margin: 0,
      } as React.CSSProperties,

      lineStyles: {
        width: "1px",
        height: "70%",
        backgroundColor: "#fff",
        animation: "lineAppear 1s ease-out 0.5s both",
        justifySelf: "center",
      } as React.CSSProperties,

      rightColumnStyles: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "2rem",
      } as React.CSSProperties,

      titleStyles: {
        fontSize: "3.5rem",
        fontWeight: 300,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "#fff",
        margin: 0,
        maxWidth: "600px",
        textAlign: "left",
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
      <video
        style={videoStyles}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/heroVideoHR.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay & content 
      <div style={overlayStyles}>
        <div style={twoColumnStyles}>
          <div style={leftColumnStyles}>
            <h1 style={logoStyles}>viterra</h1>
          </div>
          <div style={lineStyles} />
          <div style={rightColumnStyles}>
            <h1 style={titleStyles}>
              Makers of climate-resilient, sociable places.
            </h1>
          </div>
        </div>
      </div>*/}
    </motion.section>
  );
};

export default HeroSection;
