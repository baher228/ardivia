import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionCard from '../components/SectionCard';
import Testimonial from '../components/Testimonial';
import NewsSection from '../components/NewsSection';

interface Place {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
}

const Home: React.FC = () => {
  const places: Place[] = [
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2023/05/Goodmans-7-10x7.jpg',
      title: "Goodman's Fields",
      subtitle: "Aldgate, London",
      link: '/place/goodmans-field'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2023/05/Places-WhitehillBordon-thumb-10x6.jpg',
      title: "Whitehill and Bordon",
      subtitle: "Bordon, Hampshire",
      link: '/place/whitehill-and-bordon'
    }
  ];

  return (
    <div style={homePageStyles}>
      <HeroSection />

      <section style={makingPlacesStyles}>
        <div style={containerStyles}>
          <div style={sectionHeaderStyles}>
            <h2 style={sectionTitleStyles}>Making places</h2>
            <a href="/places" style={viewAllLinkStyles}>
              view all places →
            </a>
          </div>
          
          <div style={placesGridStyles}>
            {places.map((place, index) => (
              <SectionCard
                key={index}
                imageSrc={place.imageSrc}
                title={place.title}
                subtitle={place.subtitle}
                link={place.link}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      <NewsSection />
    </div>
  );
};

const homePageStyles: React.CSSProperties = {
  minHeight: '100vh',
};

const makingPlacesStyles: React.CSSProperties = {
  padding: '4rem 0',
  backgroundColor: '#f8f8f8',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const sectionHeaderStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '3rem',
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: '400',
  color: '#000',
  margin: 0,
};

const viewAllLinkStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

const placesGridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '2rem',
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .section-header {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 1rem !important;
    }
    
    .section-title {
      font-size: 2rem !important;
    }
    
    .places-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    
    .making-places-container {
      padding: 0 1rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .section-title {
      font-size: 1.75rem !important;
    }
  }
  
  .view-all-link:hover {
    color: #000 !important;
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default Home;
