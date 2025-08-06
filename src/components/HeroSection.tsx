"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

/* ───────────────────────────────────────────── */
/*  1. helper – convert viewport width → height  */
const getNavHeight = (width: number): number => {
  if (width < 768) return 60;      // phones
  if (width < 1024) return 74;     // tablets
  return 96;                       // laptops / desktops
};
/* ───────────────────────────────────────────── */

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
  /* 2. keep the height in state and update on resize */
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    /* run once on mount & on every resize */
    const update = () => setNavHeight(getNavHeight(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* 3. memo-ise all style objects that depend on navHeight */
  const {
    heroStyles,
    slideContainerStyles,
    slideStyles,
    overlayStyles,
    twoColumnStyles,
    leftColumnStyles,
    logoStyles,
    lineStyles,
    rightColumnStyles,
    titleStyles,
  } = useMemo(() => {
    /* shorthand for px strings */
    const px = (n: number) => `${n}px`;

    return {
      heroStyles: {
        position: "relative",
        marginTop: px(navHeight),
        height: "100vh",
        overflow: "hidden",
      } as React.CSSProperties,

      slideContainerStyles: {
        position: "relative",
        width: "100%",
        height: "100%",
      } as React.CSSProperties,

      slideStyles: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } as React.CSSProperties,

      overlayStyles: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingTop: px(navHeight),     // pushes content below nav
        paddingLeft: "2rem",
        paddingRight: "2rem",
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
        fontFamily: "Arial, sans-serif",
      } as React.CSSProperties,
    };
  }, [navHeight]);

  /* 4. render */
  return (
    <motion.section
      style={heroStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={slideContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ ...slideStyles, backgroundImage: `url(${slide.image})` }}
          >
            <div style={overlayStyles}>
              <div style={twoColumnStyles}>
                {/* uncomment if you still need logo / text columns */}
                {/*
                <div style={leftColumnStyles}>
                  <h1 style={logoStyles}>viterra</h1>
                </div>
                <div style={lineStyles} />
                <div style={rightColumnStyles}>
                  <h1 style={titleStyles}>{slide.title}</h1>
                </div>
                */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeroSection;
