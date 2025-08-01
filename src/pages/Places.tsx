import React from 'react';
import SectionCard from '../components/SectionCard';

interface Place {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
  description?: string;
}

const Places: React.FC = () => {
  const places: Place[] = [
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2023/05/Goodmans-7-10x7.jpg',
      title: "Goodman's Fields",
      location: "Aldgate, London",
      link: '/place/goodmans-field',
      description: 'A vibrant mixed-use development creating new public spaces in the heart of London.'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2023/05/Places-WhitehillBordon-thumb-10x6.jpg',
      title: "Whitehill and Bordon",
      location: "Bordon, Hampshire",
      link: '/place/whitehill-and-bordon',
      description: 'Transforming a former military town into a sustainable community for the future.'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Edenbrook-Web-Photo-by-Studio-Maple-268.jpg',
      title: "Edenbrook Village",
      location: "Alton, Hampshire",
      link: '/place/edenbrook-village',
      description: 'A new garden village that celebrates the natural landscape of the South Downs.'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Kings-Cross-Author-Web-49.jpg',
      title: "King's Cross Development",
      location: "London",
      link: '/place/kings-cross',
      description: 'Contributing to one of London\'s most significant urban regeneration projects.'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Reading-Greenpark-Web-224.jpg',
      title: "Green Park Village",
      location: "Reading, Berkshire",
      link: '/place/green-park-village',
      description: 'Creating sustainable communities with integrated green infrastructure.'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/FCB-studios_Rotherhithe-Primary-School_London_©HuftonCrow_021-FCBS_WEB-10x5.jpg',
      title: "Rotherhithe Primary School",
      location: "London",
      link: '/place/rotherhithe-school',
      description: 'Award-winning school landscape design that puts learning in a garden setting.'
    }
  ];

  return (
    <div style={placesPageStyles}>
      <div style={containerStyles}>
        <div style={heroSectionStyles}>
          <h1 style={titleStyles}>Making places</h1>
          <p style={subtitleStyles}>
            Discover our portfolio of climate-resilient, sociable places that bring communities together.
          </p>
        </div>

        <div style={filterSectionStyles}>
          <div style={filterButtonsStyles}>
            <button style={{...filterButtonStyles, ...activeFilterStyles}}>
              All Projects
            </button>
            <button style={filterButtonStyles}>
              Residential
            </button>
            <button style={filterButtonStyles}>
              Commercial
            </button>
            <button style={filterButtonStyles}>
              Education
            </button>
            <button style={filterButtonStyles}>
              Public Realm
            </button>
          </div>
        </div>

        <div style={placesGridStyles}>
          {places.map((place, index) => (
            <div key={index} style={placeItemStyles}>
              <SectionCard
                imageSrc={place.imageSrc}
                title={place.title}
                subtitle={place.location}
                link={place.link}
              />
              {place.description && (
                <p style={placeDescriptionStyles}>{place.description}</p>
              )}
            </div>
          ))}
        </div>

        <div style={ctaSectionStyles}>
          <h2 style={ctaTitleStyles}>Have a project in mind?</h2>
          <p style={ctaTextStyles}>
            We'd love to hear about your vision and explore how we can help create 
            exceptional places together.
          </p>
          <button style={primaryButtonStyles}>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

const placesPageStyles: React.CSSProperties = {
  paddingTop: '120px', // Account for fixed navbar
  minHeight: '100vh',
  backgroundColor: '#fff',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const heroSectionStyles: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '3rem',
};

const titleStyles: React.CSSProperties = {
  fontSize: '3.5rem',
  fontWeight: '300',
  color: '#000',
  marginBottom: '1rem',
  letterSpacing: '-0.02em',
};

const subtitleStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  color: '#666',
  fontWeight: '400',
  lineHeight: '1.6',
  maxWidth: '700px',
  margin: '0 auto',
};

const filterSectionStyles: React.CSSProperties = {
  marginBottom: '3rem',
  display: 'flex',
  justifyContent: 'center',
};

const filterButtonsStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const filterButtonStyles: React.CSSProperties = {
  padding: '0.5rem 1rem',
  backgroundColor: 'transparent',
  color: '#666',
  border: '1px solid #ddd',
  borderRadius: '20px',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const activeFilterStyles: React.CSSProperties = {
  backgroundColor: '#000',
  color: '#fff',
  borderColor: '#000',
};

const placesGridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '3rem',
  marginBottom: '4rem',
};

const placeItemStyles: React.CSSProperties = {
  // Individual place item styling if needed
};

const placeDescriptionStyles: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#666',
  lineHeight: '1.6',
  marginTop: '1rem',
  padding: '0 1.5rem',
};

const ctaSectionStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '4rem 0',
  borderTop: '1px solid #e0e0e0',
  marginTop: '2rem',
};

const ctaTitleStyles: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '500',
  color: '#000',
  marginBottom: '1rem',
};

const ctaTextStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#666',
  marginBottom: '2rem',
  maxWidth: '600px',
  margin: '0 auto 2rem',
  lineHeight: '1.6',
};

const primaryButtonStyles: React.CSSProperties = {
  padding: '0.75rem 2rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .places-title {
      font-size: 2.5rem !important;
    }
    
    .places-container {
      padding: 0 1rem !important;
    }
    
    .places-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .filter-buttons {
      gap: 0.5rem !important;
    }
    
    .filter-button {
      font-size: 0.8rem !important;
      padding: 0.4rem 0.8rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .places-title {
      font-size: 2rem !important;
    }
    
    .filter-buttons {
      flex-direction: column !important;
      align-items: center !important;
    }
  }
  
  .filter-button:hover {
    background-color: #f0f0f0 !important;
    border-color: #999 !important;
  }
  
  .filter-button.active:hover {
    background-color: #333 !important;
  }
  
  .primary-button:hover {
    background-color: #333 !important;
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default Places;
