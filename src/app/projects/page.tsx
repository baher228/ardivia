"use client";

import React, { useState, useEffect } from "react";
import SectionCard from "@/components/SectionCard";
import { motion } from "framer-motion";

interface Project {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
  description?: string;
  category: string;
}

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Projects");

  useEffect(() => {
    setIsVisible(true);
  }, []);
{/** 
    {
      imageSrc:
        "/photos/projects/goodmanFields/1.jpg",
      title: "Goodman's Fields",
      location: "Aldgate, London",
      link: "/place/goodmans-field",
      description:
        "A vibrant mixed-use development creating new public spaces in the heart of London.",
      category: "Residential",
    },
    {
      imageSrc:
        "https://fabrikuk.com/wp-content/uploads/2023/05/Places-WhitehillBordon-thumb-10x6.jpg",
      title: "Whitehill and Bordon",
      location: "Bordon, Hampshire",
      link: "/place/whitehill-and-bordon",
      description:
        "Transforming a former military town into a sustainable community for the future.",
      category: "Residential",
    },
    {
      imageSrc:
        "https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Edenbrook-Web-Photo-by-Studio-Maple-268.jpg",
      title: "Edenbrook Village",
      location: "Alton, Hampshire",
      link: "/place/edenbrook-village",
      description:
        "A new garden village that celebrates the natural landscape of the South Downs.",
      category: "Residential",
    },*/}
  const allProjects: Project[] = [
    
    {
      imageSrc:
        "/photos/projects/NovorizhskyResidence/1.jpg",
      title: "Novorizhsky Residence Garden",
      location: "Moscow",
      link: "/place/novorizhsky-residence",
      description:
        "Minimalist landscape design featuring basalt rock accents, calm lawn panels, and structured planting for a serene private estate.",
      category: "Residential",
    },
    {
      imageSrc:
        "/photos/projects/westfieldContemporary/1.jpg",
      title: "Westfield Contemporary Outdoor Living",
      location: "Indiana",
      link: "/place/westfield-contemporary",
      description:
        "Sunset-facing courtyard with floating cedar benches, a monolithic fire table, and drought-tolerant planting for year-round enjoyment.",
      category: "Residential",
    },
    {
      imageSrc:
        "/photos/projects/outdoorKitchen/1.png",
      title: "Lakeside Outdoor Kitchen & Fireplace",
      location: "Lake Country, Wisconsin",
      link: "/place/ourdoor-kitchen",
      description:
        "A fully equipped stone-and-steel cooking space with a modern brick fireplace, designed for seamless lakeside entertaining.",
      category: "Residential",
    },
    {
      imageSrc:
        "/photos/projects/razdory/1.jpg",
      title: "Razdory 2-3 Estate Gardens",
      location: "Moscow",
      link: "/place/razdory",
      description:
        "Elegant formal gardens framing a classical estate, featuring sculpted evergreens, seasonal blooms, and precisely edged lawns for a refined, timeless appeal.",
      category: "Residential",
    },
    
  ];

  const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "Education",
    "Public Realm",
  ];

  const filteredProjects = allProjects.filter(project => 
    activeCategory === "All Projects" || project.category === activeCategory
  );

  return (
    <motion.div
      style={projectsPageStyles}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={containerStyles}>
        <motion.div 
          style={heroSectionStyles}
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 style={titleStyles}>Our Projects</h1>
          <p style={subtitleStyles}>
            Explore our portfolio of climate-resilient, sociable places that
            bring communities together.
          </p>
        </motion.div>

        <motion.div 
          style={filterSectionStyles}
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={filterButtonsStyles}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                style={{
                  ...filterButtonStyles,
                  ...(category === activeCategory ? activeFilterStyles : {}),
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div style={projectsGridStyles}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              style={projectItemStyles}
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              layout
            >
              <SectionCard
                imageSrc={project.imageSrc}
                title={project.title}
                subtitle={project.location}
                link={project.link}
              />
              {project.description && (
                <p style={projectDescriptionStyles}>{project.description}</p>
              )}
              <div style={categoryTagStyles}>{project.category}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={ctaSectionStyles}
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 style={ctaTitleStyles}>Have a project in mind?</h2>
          <p style={ctaTextStyles}>
            We'd love to hear about your vision and explore how we can help
            create exceptional places together.
          </p>
          <motion.a
  href="/contact"
  style={primaryButtonStyles}
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#111"
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20
  }}
>
  Get in touch
</motion.a>

        </motion.div>
      </div>
    </motion.div>
  );
};

const projectsPageStyles: React.CSSProperties = {
  paddingTop: "120px",
  minHeight: "100vh",
  backgroundColor: "#fff",
};

const containerStyles: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
};

const heroSectionStyles: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "3rem",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3.5rem",
  fontWeight: "300",
  color: "#000",
  marginBottom: "1rem",
  letterSpacing: "-0.02em",
};

const subtitleStyles: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#666",
  fontWeight: "400",
  lineHeight: "1.6",
  maxWidth: "700px",
  margin: "0 auto",
};

const filterSectionStyles: React.CSSProperties = {
  marginBottom: "3rem",
  display: "flex",
  justifyContent: "center",
};

const filterButtonsStyles: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
};

const filterButtonStyles: React.CSSProperties = {
  padding: "0.5rem 1rem",
  backgroundColor: "transparent",
  color: "#666",
  border: "1px solid #ddd",
  borderRadius: "20px",
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const activeFilterStyles: React.CSSProperties = {
  backgroundColor: "#000",
  color: "#fff",
  borderColor: "#000",
};

const projectsGridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "3rem",
  marginBottom: "4rem",
};

const projectItemStyles: React.CSSProperties = {
  position: "relative",
};

const projectDescriptionStyles: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "#666",
  lineHeight: "1.6",
  marginTop: "1rem",
  padding: "0 1.5rem",
};

const categoryTagStyles: React.CSSProperties = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  padding: "0.25rem 0.75rem",
  borderRadius: "12px",
  fontSize: "0.75rem",
  fontWeight: "500",
};

const ctaSectionStyles: React.CSSProperties = {
  textAlign: "center",
  padding: "4rem 0",
  borderTop: "1px solid #e0e0e0",
  marginTop: "2rem",
};

const ctaTitleStyles: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "500",
  color: "#000",
  marginBottom: "1rem",
};

const ctaTextStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  color: "#666",
  marginBottom: "2rem",
  maxWidth: "600px",
  margin: "0 auto 2rem",
  lineHeight: "1.6",
};

const primaryButtonStyles: React.CSSProperties = {
  display: "inline-block",
  padding: "0.75rem 2rem",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "0.9rem",
  fontWeight: "500",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.3s ease",
};

export default ProjectsPage;
