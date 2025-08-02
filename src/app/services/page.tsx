"use client";

import React, { useState, useEffect } from "react";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const processStepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      style={servicesPageStyles}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div style={containerStyles}>
        <motion.div style={heroSectionStyles} variants={itemVariants}>
          <h1 style={titleStyles}>Our Services</h1>
          <p style={subtitleStyles}>
            Comprehensive landscape design and construction services tailored to
            your unique vision.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ServicesSection />
        </motion.div>

        <motion.div style={processSectionStyles} variants={itemVariants}>
          <h2 style={sectionTitleStyles}>Our Design Process</h2>
          <div style={processStepsStyles}>
            <motion.div
              style={processStepStyles}
              variants={processStepVariants}
            >
              <div style={stepNumberStyles}>1</div>
              <h3 style={stepTitleStyles}>Consultation</h3>
              <p style={stepDescriptionStyles}>
                We begin with a thorough consultation to understand your needs,
                preferences, and the unique characteristics of your site.
              </p>
            </motion.div>
            <motion.div
              style={processStepStyles}
              variants={processStepVariants}
            >
              <div style={stepNumberStyles}>2</div>
              <h3 style={stepTitleStyles}>Concept Design</h3>
              <p style={stepDescriptionStyles}>
                Our team develops initial design concepts that reflect your
                vision while addressing site constraints and opportunities.
              </p>
            </motion.div>
            <motion.div
              style={processStepStyles}
              variants={processStepVariants}
            >
              <div style={stepNumberStyles}>3</div>
              <h3 style={stepTitleStyles}>Detailed Design</h3>
              <p style={stepDescriptionStyles}>
                We refine the chosen concept into detailed plans,
                specifications, and planting schedules ready for implementation.
              </p>
            </motion.div>
            <motion.div
              style={processStepStyles}
              variants={processStepVariants}
            >
              <div style={stepNumberStyles}>4</div>
              <h3 style={stepTitleStyles}>Construction</h3>
              <p style={stepDescriptionStyles}>
                Our skilled team brings the design to life with meticulous
                attention to detail and the highest quality materials and
                craftsmanship.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FaqSection />
        </motion.div>
      </div>
    </motion.div>
  );
};

const servicesPageStyles: React.CSSProperties = {
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
  marginBottom: "4rem",
  paddingTop: "2rem",
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

const processSectionStyles: React.CSSProperties = {
  padding: "4rem 0",
  backgroundColor: "#f8f8f8",
  margin: "4rem 0",
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "500",
  color: "#000",
  marginBottom: "3rem",
  textAlign: "center",
};

const processStepsStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
};

const processStepStyles: React.CSSProperties = {
  textAlign: "center",
  padding: "2rem",
};

const stepNumberStyles: React.CSSProperties = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  fontWeight: "500",
  margin: "0 auto 1.5rem",
};

const stepTitleStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#000",
  marginBottom: "1rem",
};

const stepDescriptionStyles: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.6",
  color: "#666",
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .services-title {
      font-size: 2.5rem !important;
    }
    
    .services-container {
      padding: 0 1rem !important;
    }
    
    .process-steps {
      grid-template-columns: 1fr !important;
    }
  }
  
  @media (max-width: 480px) {
    .services-title {
      font-size: 2rem !important;
    }
    
    .section-title {
      font-size: 1.5rem !important;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default ServicesPage;
