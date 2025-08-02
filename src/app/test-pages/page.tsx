import React from "react";
import Link from "next/link";

const TestPages = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "Places", path: "/places" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "404 Page", path: "/non-existent-page" },
  ];

  return (
    <div style={testPageStyles}>
      <div style={containerStyles}>
        <div style={heroSectionStyles}>
          <h1 style={titleStyles}>Page Verification</h1>
          <p style={subtitleStyles}>
            Test all pages to ensure they are working correctly
          </p>
        </div>

        <div style={pagesGridStyles}>
          {pages.map((page, index) => (
            <div key={index} style={pageCardStyles}>
              <h3 style={pageNameStyles}>{page.name}</h3>
              <Link href={page.path} style={pageLinkStyles}>
                Visit Page
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const testPageStyles: React.CSSProperties = {
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

const pagesGridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
};

const pageCardStyles: React.CSSProperties = {
  backgroundColor: "#f8f8f8",
  padding: "2rem",
  borderRadius: "8px",
  textAlign: "center",
  border: "1px solid #e0e0e0",
};

const pageNameStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "500",
  color: "#000",
  marginBottom: "1rem",
};

const pageLinkStyles: React.CSSProperties = {
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#000",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "4px",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "background-color 0.3s ease",
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .test-title {
      font-size: 2.5rem;
    }
    
    .test-container {
      padding: 0 1rem;
    }
    
    .pages-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .test-title {
      font-size: 2rem;
    }
  }
  
  .page-link:hover {
    background-color: #333;
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default TestPages;
