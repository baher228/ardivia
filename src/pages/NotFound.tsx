import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={notFoundPageStyles}>
      <div style={containerStyles}>
        <div style={contentStyles}>
          <h1 style={titleStyles}>404</h1>
          <h2 style={subtitleStyles}>Page Not Found</h2>
          <p style={descriptionStyles}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div style={actionsStyles}>
            <Link to="/" style={primaryButtonStyles}>
              Go Home
            </Link>
            <Link to="/places" style={secondaryButtonStyles}>
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const notFoundPageStyles: React.CSSProperties = {
  paddingTop: '120px', // Account for fixed navbar
  minHeight: '80vh',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '0 2rem',
};

const contentStyles: React.CSSProperties = {
  textAlign: 'center',
};

const titleStyles: React.CSSProperties = {
  fontSize: '8rem',
  fontWeight: '300',
  color: '#000',
  marginBottom: '1rem',
  letterSpacing: '-0.02em',
  lineHeight: '1',
};

const subtitleStyles: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '500',
  color: '#000',
  marginBottom: '1rem',
};

const descriptionStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#666',
  marginBottom: '3rem',
  lineHeight: '1.6',
};

const actionsStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const primaryButtonStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 2rem',
  backgroundColor: '#000',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'background-color 0.3s ease',
};

const secondaryButtonStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 2rem',
  backgroundColor: 'transparent',
  color: '#000',
  textDecoration: 'none',
  border: '1px solid #000',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'all 0.3s ease',
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .not-found-title {
      font-size: 6rem !important;
    }
    
    .not-found-subtitle {
      font-size: 1.5rem !important;
    }
    
    .not-found-container {
      padding: 0 1rem !important;
    }
    
    .not-found-actions {
      flex-direction: column !important;
      align-items: center !important;
    }
    
    .not-found-actions a {
      width: 200px !important;
      text-align: center !important;
    }
  }
  
  @media (max-width: 480px) {
    .not-found-title {
      font-size: 4rem !important;
    }
    
    .not-found-subtitle {
      font-size: 1.25rem !important;
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

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default NotFound;
