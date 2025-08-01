import React from "react";

const About: React.FC = () => {
  return (
    <div style={aboutPageStyles}>
      <div style={containerStyles}>
        <div style={heroSectionStyles}>
          <h1 style={titleStyles}>Who we are</h1>
          <p style={subtitleStyles}>
            Makers of climate-resilient, sociable places.
          </p>
        </div>

        <div style={contentSectionStyles}>
          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Our Vision</h2>
            <p style={paragraphStyles}>
              We are landscape architects and urban designers who create
              climate-resilient, sociable places that bring communities
              together. Our work spans from intimate garden spaces to
              large-scale urban developments, always with sustainability and
              social connection at the heart of our approach.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Our Approach</h2>
            <p style={paragraphStyles}>
              We believe that great places are born from understanding the
              unique character of each site and the needs of the people who will
              use them. Our designs respond to local climate, ecology, and
              culture while creating spaces that foster community interaction
              and environmental resilience.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Our Impact</h2>
            <p style={paragraphStyles}>
              From award-winning schools to transformative housing developments,
              our projects demonstrate how thoughtful landscape design can
              enhance quality of life, support biodiversity, and create lasting
              value for communities across the UK.
            </p>
          </div>
        </div>

        <div style={ctaSectionStyles}>
          <h2 style={ctaTitleStyles}>Ready to work with us?</h2>
          <p style={ctaTextStyles}>
            We&apos;re always looking for exciting new projects and talented
            people to join our team.
          </p>
          <div style={ctaButtonsStyles}>
            <a href="/contact" style={primaryButtonStyles}>
              Get in touch
            </a>
            <a href="/careers" style={secondaryButtonStyles}>
              Join our team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const aboutPageStyles: React.CSSProperties = {
  paddingTop: "120px", // Account for fixed navbar
  minHeight: "100vh",
  backgroundColor: "#fff",
};

const containerStyles: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "0 2rem",
};

const heroSectionStyles: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "4rem",
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
};

const contentSectionStyles: React.CSSProperties = {
  marginBottom: "4rem",
};

const textBlockStyles: React.CSSProperties = {
  marginBottom: "3rem",
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: "500",
  color: "#000",
  marginBottom: "1rem",
};

const paragraphStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: "1.7",
  color: "#555",
  marginBottom: "1rem",
};

const ctaSectionStyles: React.CSSProperties = {
  textAlign: "center",
  padding: "3rem 0",
  borderTop: "1px solid #e0e0e0",
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
};

const ctaButtonsStyles: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primaryButtonStyles: React.CSSProperties = {
  display: "inline-block",
  padding: "0.75rem 2rem",
  backgroundColor: "#000",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "4px",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "background-color 0.3s ease",
};

const secondaryButtonStyles: React.CSSProperties = {
  display: "inline-block",
  padding: "0.75rem 2rem",
  backgroundColor: "transparent",
  color: "#000",
  textDecoration: "none",
  border: "1px solid #000",
  borderRadius: "4px",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "all 0.3s ease",
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .about-title {
      font-size: 2.5rem !important;
    }
    
    .about-container {
      padding: 0 1rem !important;
    }
    
    .cta-buttons {
      flex-direction: column !important;
      align-items: center !important;
    }
    
    .cta-buttons a {
      width: 200px !important;
      text-align: center !important;
    }
  }
  
  @media (max-width: 480px) {
    .about-title {
      font-size: 2rem !important;
    }
    
    .section-title {
      font-size: 1.5rem !important;
    }
  }
  
  .primary-button:hover {
    background-color: #333 !important;
  }
  
  .secondary-button:hover {
    background-color: #000 !important;
    color: #fff !important;
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default About;
