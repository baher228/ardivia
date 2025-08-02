import React from "react";

const TermsPage = () => {
  return (
    <div style={termsPageStyles}>
      <div style={containerStyles}>
        <div style={heroSectionStyles}>
          <h1 style={titleStyles}>Terms of Service</h1>
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
            <h2 style={sectionTitleStyles}>1. Agreement to Terms</h2>
            <p style={paragraphStyles}>
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you")
              and Viterra ("Company", "we", "us", or "our"), concerning your
              access to and use of the viterra.com website as well as any other
              media form, media channel, mobile website or mobile application
              related, linked, or otherwise connected thereto (collectively, the
              "Site").
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>2. Intellectual Property Rights</h2>
            <p style={paragraphStyles}>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the "Content") and the trademarks, service marks,
              and logos contained therein (the "Marks") are owned or controlled
              by us or licensed to us, and are protected by copyright and
              trademark laws and various other intellectual property rights and
              unfair competition laws of the United States, foreign
              jurisdictions, and international conventions.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>3. User Representations</h2>
            <p style={paragraphStyles}>
              By using the Site, you represent and warrant that:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                All registration information you submit will be true, accurate,
                current, and complete
              </li>
              <li style={listItemStyles}>
                You will maintain the accuracy of such information and promptly
                update such registration information as necessary
              </li>
              <li style={listItemStyles}>
                You have the legal capacity and you agree to comply with these
                Terms of Service
              </li>
              <li style={listItemStyles}>
                You are not a minor in the jurisdiction in which you reside
              </li>
              <li style={listItemStyles}>
                You will not access the Site through automated or non-human
                means, whether through a bot, script, or otherwise
              </li>
              <li style={listItemStyles}>
                You will not use the Site for any illegal or unauthorized
                purpose
              </li>
              <li style={listItemStyles}>
                Your use of the Site will not violate any applicable law or
                regulation
              </li>
            </ul>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>4. Prohibited Activities</h2>
            <p style={paragraphStyles}>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p style={paragraphStyles}>
              As a user of the Site, you agree not to:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                Systematically retrieve data or other content from the Site to
                create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us
              </li>
              <li style={listItemStyles}>
                Make any unauthorized use of the Site, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email
              </li>
              <li style={listItemStyles}>
                Use the Site to advertise or offer to sell goods and services
              </li>
              <li style={listItemStyles}>
                Engage in unauthorized framing of or linking to the Site
              </li>
              <li style={listItemStyles}>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information
              </li>
            </ul>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>5. Limitation of Liability</h2>
            <p style={paragraphStyles}>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          <div style={textBlockStyles}>
            <h2 style={sectionTitleStyles}>6. Contact Us</h2>
            <p style={paragraphStyles}>
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact us
              at:
            </p>
            <p style={paragraphStyles}>
              Viterra
              <br />
              Email: legal@viterra.com
              <br />
              Phone: 020 7620 1453
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const termsPageStyles: React.CSSProperties = {
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
    .terms-title {
      font-size: 2.5rem;
    }
    
    .terms-container {
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .terms-title {
      font-size: 2rem;
    }
    
    .section-title {
      font-size: 1.5rem;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default TermsPage;
