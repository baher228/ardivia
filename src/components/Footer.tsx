import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={footerContentStyles}>
          <div style={contactSectionStyles}>
            <div style={locationStyles}>
              <h4 style={locationTitleStyles}>Alton</h4>
              <p style={contactTextStyles}>01420 593 250</p>
              <p style={contactTextStyles}>alton@viterra.com</p>
              <p style={addressStyles}>
                Lenten House, 16 Lenten Street, Alton, GU34 1HG
              </p>
            </div>
            
            <div style={locationStyles}>
              <h4 style={locationTitleStyles}>London</h4>
              <p style={contactTextStyles}>020 7620 1453</p>
              <p style={contactTextStyles}>london@viterra.com</p>
              <p style={addressStyles}>
                First Floor Studio, The Old School, 4 Exton Street, London SE1 8UE
              </p>
            </div>
          </div>
          
          <div style={socialLinksStyles}>
            <a href="https://instagram.com" style={socialLinkStyles}>Instagram</a>
            <a href="https://linkedin.com" style={socialLinkStyles}>LinkedIn</a>
          </div>
          
          <div style={bottomLinksStyles}>
            <a href="/careers" style={footerLinkStyles}>Careers</a>
            <a href="/privacy" style={footerLinkStyles}>Privacy</a>
            <a href="https://rabbithole.com" style={footerLinkStyles}>Site by Rabbithole®</a>
          </div>
        </div>
        
        <div style={copyrightStyles}>
          <p>© viterra, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyles: React.CSSProperties = {
  backgroundColor: '#f8f8f8',
  padding: '3rem 0 2rem',
  marginTop: '4rem',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const footerContentStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gap: '3rem',
  marginBottom: '2rem',
};

const contactSectionStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const locationStyles: React.CSSProperties = {
  marginBottom: '1rem',
};

const locationTitleStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: '#000',
};

const contactTextStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '0.25rem',
};

const addressStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  lineHeight: '1.4',
  marginTop: '0.5rem',
};

const socialLinksStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const socialLinkStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const bottomLinksStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const footerLinkStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const copyrightStyles: React.CSSProperties = {
  borderTop: '1px solid #e0e0e0',
  paddingTop: '1rem',
  fontSize: '0.8rem',
  color: '#999',
};

export default Footer;
