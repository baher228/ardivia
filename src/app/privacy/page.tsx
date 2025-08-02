import React from "react";

const PrivacyPage = () => {
  return (
    <div style={privacyPageStyles}>
      <div style={containerStyles}>
        <div style={heroSectionStyles}>
          <h1 style={titleStyles}>Privacy Policy</h1>
          <p style={subtitleStyles}>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div style={contentSectionStyles}>
          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Introduction</h2>
            <p style={paragraphStyles}>
              Viterra ("we", "our", or "us") is committed to protecting and
              respecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website viterra.com (the "Site"). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the Site.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Information We Collect</h2>
            <p style={paragraphStyles}>
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>
            <h3 style={subsectionTitleStyles}>Personal Data</h3>
            <p style={paragraphStyles}>
              Personally identifiable information, such as your name, shipping
              address, email address, telephone number, and any other
              information that constitutes personal data under applicable law
              ("Personal Data").
            </p>
            <h3 style={subsectionTitleStyles}>Derivative Data</h3>
            <p style={paragraphStyles}>
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Use of Your Information</h2>
            <p style={paragraphStyles}>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>Create and manage your account</li>
              <li style={listItemStyles}>
                Process payments and prevent fraudulent transactions
              </li>
              <li style={listItemStyles}>Send you a newsletter</li>
              <li style={listItemStyles}>
                Request feedback and contact you about your use of the Site
              </li>
              <li style={listItemStyles}>
                Respond to your comments, questions, and provide customer
                service
              </li>
              <li style={listItemStyles}>Improve our Site and services</li>
            </ul>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Disclosure of Your Information</h2>
            <p style={paragraphStyles}>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <h3 style={subsectionTitleStyles}>By Law or to Protect Rights</h3>
            <p style={paragraphStyles}>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Security of Your Information</h2>
            <p style={paragraphStyles}>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>Contact Us</h2>
            <p style={paragraphStyles}>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p style={paragraphStyles}>
              Viterra
              <br />
              Email: privacy@viterra.com
              <br />
              Phone: 020 7620 1453
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const privacyPageStyles: React.CSSProperties = {
  paddingTop: "120px",
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
  fontSize: "1.1rem",
  color: "#666",
  fontWeight: "400",
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
  marginBottom: "1.5rem",
};

const subsectionTitleStyles: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#000",
  marginTop: "1.5rem",
  marginBottom: "1rem",
};

const paragraphStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: "1.7",
  color: "#555",
  marginBottom: "1rem",
};

const listStyles: React.CSSProperties = {
  paddingLeft: "1.5rem",
  marginBottom: "1rem",
};

const listItemStyles: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: "1.7",
  color: "#555",
  marginBottom: "0.5rem",
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .privacy-title {
      font-size: 2.5rem;
    }
    
    .privacy-container {
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .privacy-title {
      font-size: 2rem;
    }
    
    .section-title {
      font-size: 1.5rem;
    }
    
    .subsection-title {
      font-size: 1.25rem;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default PrivacyPage;
