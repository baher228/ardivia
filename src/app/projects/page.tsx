"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
  description?: string;
  category: string;
  year: number;
  service: string;
};

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const isMobile = width < 860;

  const allProjects: Project[] = [
    {
      imageSrc: "/photos/projects/novorizhskyResidence/1.jpg",
      title: "Novorizhsky Residence Garden",
      location: "Moscow",
      link: "/place/novorizhsky-residence",
      description:
        "Minimalist landscape design featuring basalt rock accents, calm lawn panels, and structured planting for a serene private estate.",
      category: "Residential",
      year: 2023,
      service: "Private Garden Design",
    },
    {
      imageSrc: "/photos/projects/westfieldContemporary/1.jpg",
      title: "Westfield Contemporary Outdoor Living",
      location: "Indiana",
      link: "/place/westfield-contemporary",
      description:
        "Sunset-facing courtyard with floating cedar benches, a monolithic fire table, and drought-tolerant planting for year-round enjoyment.",
      category: "Residential",
      year: 2024,
      service: "Outdoor Living Design",
    },
    {
      imageSrc: "/photos/projects/outdoorKitchen/1.png",
      title: "Lakeside Outdoor Kitchen & Fireplace",
      location: "Lake Country, Wisconsin",
      link: "/place/outdoor-kitchen",
      description:
        "A fully equipped stone-and-steel cooking space with a modern brick fireplace, designed for seamless lakeside entertaining.",
      category: "Residential",
      year: 2022,
      service: "Outdoor Kitchen & Fireplace",
    },
    {
      imageSrc: "/photos/projects/razdory/1.jpg",
      title: "Razdory 2-3 Estate Gardens",
      location: "Moscow",
      link: "/place/razdory",
      description:
        "Elegant formal gardens framing a classical estate, featuring sculpted evergreens, seasonal blooms, and precisely edged lawns for a refined, timeless appeal.",
      category: "Residential",
      year: 2023,
      service: "Estate Garden Design",
    },
  ];

  const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "Education",
    "Public Realm",
  ];

  const filtered = allProjects.filter(
    (p) => activeCategory === "All Projects" || p.category === activeCategory
  );

  const {
    page,
    container,
    hero,
    heroTitle,
    heroSubtitle,
    filtersWrap,
    filters,
    filterBtn,
    activeFilterBtn,
    list,
    row,
    thumbWrap,
    thumb,
    rightCol,
    rowTitle,
    metaGrid,
    metaBlock,
    metaLabel,
    metaValue,
    desc,
    cta,
    ctaTitle,
    ctaText,
    ctaBtn,
    separator,
  } = useMemo(() => {
    const styles = {
      page: {
        paddingTop: isMobile ? "80px" : "120px",
        minHeight: "100vh",
        backgroundColor: "#FAFBF9",
      } as React.CSSProperties,

      container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : "0 2rem",
      } as React.CSSProperties,

      hero: {
        textAlign: "center",
        marginBottom: "2.5rem",
      } as React.CSSProperties,

      heroTitle: {
        fontSize: isMobile ? "2.5rem" : "3.25rem",
        fontWeight: 300,
        letterSpacing: "-0.02em",
        margin: 0,
        color: "#0A0A0A",
      } as React.CSSProperties,

      heroSubtitle: {
        fontSize: "1.15rem",
        color: "#606462",
        maxWidth: 720,
        margin: "0.85rem auto 0",
        lineHeight: 1.6,
      } as React.CSSProperties,

      filtersWrap: {
        marginBottom: "2.25rem",
        display: "flex",
        justifyContent: "center",
      } as React.CSSProperties,

      filters: {
        display: "flex",
        gap: "0.75rem",
        flexWrap: "wrap",
        justifyContent: "center",
      } as React.CSSProperties,

      filterBtn: {
        padding: "8px 14px",
        backgroundColor: "transparent",
        color: "#4F5552",
        border: "1px solid #DDE2DB",
        borderRadius: 999,
        fontSize: "0.92rem",
        cursor: "pointer",
        transition: "all .2s ease",
      } as React.CSSProperties,

      activeFilterBtn: {
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        borderColor: "#0A0A0A",
      } as React.CSSProperties,

      list: {
        display: "grid",
        gap: "22px",
        marginBottom: "56px",
      } as React.CSSProperties,

      row: {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "520px 1fr",
        gap: isMobile ? "1rem" : "32px",
        alignItems: "center",
        background: "#F4F6F3",
        border: "1px solid #E5E9E3",
        borderRadius: "16px",
        padding: isMobile ? "1rem" : "24px",
      } as React.CSSProperties,

      thumbWrap: {
        width: "100%",
        height: "0",
        paddingBottom: "66.666%", // 3:2 aspect
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
      } as React.CSSProperties,

      thumb: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        borderRadius: "12px",
      } as React.CSSProperties,

      rightCol: {
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      } as React.CSSProperties,

      rowTitle: {
        fontSize: isMobile ? "1.5rem" : "2.25rem",
        lineHeight: 1.1,
        margin: 0,
        color: "#233029",
        letterSpacing: "-0.01em",
        fontWeight: 700,
      } as React.CSSProperties,

      metaGrid: {
        display: "grid",
        gridTemplateColumns: isMobile
          ? "repeat(2, 1fr)"
          : "repeat(3, minmax(0, 1fr))",
        gap: "18px",
        alignItems: "start",
      } as React.CSSProperties,

      metaBlock: {
        display: "grid",
        gap: "4px",
      } as React.CSSProperties,

      metaLabel: {
        fontSize: "0.72rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#728076",
      } as React.CSSProperties,

      metaValue: {
        fontSize: "0.98rem",
        color: "#233029",
      } as React.CSSProperties,

      desc: {
        fontSize: "0.98rem",
        color: "#415047",
        lineHeight: 1.6,
        marginTop: "6px",
      } as React.CSSProperties,

      cta: {
        textAlign: "center",
        padding: isMobile ? "24px 0 36px" : "48px 0 72px",
        borderTop: "1px solid #E5E9E3",
        marginTop: "6px",
      } as React.CSSProperties,

      ctaTitle: {
        fontSize: isMobile ? "1.5rem" : "2rem",
        margin: 0,
        color: "#0A0A0A",
        fontWeight: 600,
      } as React.CSSProperties,

      ctaText: {
        fontSize: "1.05rem",
        color: "#606462",
        maxWidth: 640,
        margin: "12px auto 24px",
        lineHeight: 1.6,
      } as React.CSSProperties,

      ctaBtn: {
        display: "inline-block",
        padding: "12px 22px",
        backgroundColor: "var(--primary-green)",
        color: "#FFFFFF",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "0.95rem",
        transition: "all .2s ease",
      } as React.CSSProperties,

      separator: {
        height: "2px",
        width: "100%",
        background: "var(--primary-green)",
        opacity: 0.65,
        borderRadius: "2px",
        margin: "6px 0 16px",
      } as React.CSSProperties,
    };
    return styles;
  }, [isMobile]);

  return (
    <motion.div
      style={page}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={container}>
        {/* Hero */}
        <motion.div
          style={hero}
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h1 style={heroTitle}>Our Projects</h1>
          <p style={heroSubtitle}>
            Explore our portfolio of climate-resilient, sociable places that
            bring communities together.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          style={filtersWrap}
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={filters}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  ...filterBtn,
                  ...(c === activeCategory ? activeFilterBtn : {}),
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* LIST */}
        <div style={list}>
          {filtered.map((p, idx) => (
            <React.Fragment key={p.title}>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={
                  isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.05 }}
              >
                <Link href={p.link} style={{ textDecoration: "none" }}>
                  <article className="projects-row" style={row}>
                    <div style={thumbWrap}>
                      <img src={p.imageSrc} alt={p.title} style={thumb} />
                    </div>

                    <div style={rightCol}>
                      <h2 style={rowTitle}>{p.title}</h2>

                      <div style={metaGrid}>
                        <div style={metaBlock}>
                          <div style={metaLabel}>Year</div>
                          <div style={metaValue}>{p.year}</div>
                        </div>
                        <div style={metaBlock}>
                          <div style={metaLabel}>Location</div>
                          <div style={metaValue}>{p.location}</div>
                        </div>
                        <div style={metaBlock}>
                          <div style={metaLabel}>Service</div>
                          <div style={metaValue}>{p.service}</div>
                        </div>
                      </div>

                      {p.description && <p style={desc}>{p.description}</p>}
                    </div>
                  </article>
                </Link>
              </motion.div>

              {/* Root primary-green separator between projects */}
              {idx < filtered.length - 1 && (
                <div style={separator} aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          style={cta}
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={ctaTitle}>Have a project in mind?</h3>
          <p style={ctaText}>
            We'd love to hear about your vision and explore how we can help
            create exceptional places together.
          </p>
          <motion.a
            href="/contact"
            style={ctaBtn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "var(--primary-green)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
