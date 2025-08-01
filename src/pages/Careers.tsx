import React from 'react';

const Careers: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior Landscape Architect',
      location: 'London',
      type: 'Full-time',
      description: 'We are looking for an experienced landscape architect to join our London team and lead on major urban development projects.'
    },
    {
      title: 'Urban Designer',
      location: 'Alton',
      type: 'Full-time',
      description: 'Join our Alton studio to work on innovative urban design projects that create climate-resilient communities.'
    },
    {
      title: 'Graduate Landscape Architect',
      location: 'London / Alton',
      type: 'Full-time',
      description: 'Perfect opportunity for recent graduates to develop their skills working on diverse landscape architecture projects.'
    }
  ];

  return (
    <div style={careersPageStyles}>
      <div style={containerStyles}>
        <div style={heroSectionStyles}>
          <h1 style={titleStyles}>Join our team</h1>
          <p style={subtitleStyles}>
            We're growing our team. See our latest career opportunities.
          </p>
          <p style={descriptionStyles}>
            At fabrik, we believe that great design comes from great people. We're looking for 
            passionate landscape architects, urban designers, and creative thinkers who share 
            our commitment to creating climate-resilient, sociable places.
          </p>
        </div>

        <div style={benefitsSectionStyles}>
          <h2 style={sectionTitleStyles}>Why work with us?</h2>
          <div style={benefitsGridStyles}>
            <div style={benefitItemStyles}>
              <h3 style={benefitTitleStyles}>Meaningful Projects</h3>
              <p style={benefitTextStyles}>
                Work on award-winning projects that make a real difference to communities 
                and the environment.
              </p>
            </div>
            <div style={benefitItemStyles}>
              <h3 style={benefitTitleStyles}>Professional Development</h3>
              <p style={benefitTextStyles}>
                Continuous learning opportunities, mentorship, and support for 
                professional qualifications.
              </p>
            </div>
            <div style={benefitItemStyles}>
              <h3 style={benefitTitleStyles}>Collaborative Culture</h3>
              <p style={benefitTextStyles}>
                Work in a supportive, creative environment where every voice is valued 
                and innovation is encouraged.
              </p>
            </div>
            <div style={benefitItemStyles}>
              <h3 style={benefitTitleStyles}>Work-Life Balance</h3>
              <p style={benefitTextStyles}>
                Flexible working arrangements and a commitment to maintaining a 
                healthy work-life balance.
              </p>
            </div>
          </div>
        </div>

        <div style={jobsSectionStyles}>
          <h2 style={sectionTitleStyles}>Current Opportunities</h2>
          <div style={jobsListStyles}>
            {jobOpenings.map((job, index) => (
              <div key={index} style={jobItemStyles}>
                <div style={jobHeaderStyles}>
                  <h3 style={jobTitleStyles}>{job.title}</h3>
                  <div style={jobMetaStyles}>
                    <span style={jobLocationStyles}>{job.location}</span>
                    <span style={jobTypeStyles}>{job.type}</span>
                  </div>
                </div>
                <p style={jobDescriptionStyles}>{job.description}</p>
                <button style={applyButtonStyles}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={ctaSectionStyles}>
          <h2 style={ctaTitleStyles}>Don't see the right role?</h2>
          <p style={ctaTextStyles}>
            We're always interested in hearing from talented individuals. 
            Send us your CV and portfolio, and we'll keep you in mind for future opportunities.
          </p>
          <button style={primaryButtonStyles}>
            Send us your details
          </button>
        </div>
      </div>
    </div>
  );
};

const careersPageStyles: React.CSSProperties = {
  paddingTop: '120px', // Account for fixed navbar
  minHeight: '100vh',
  backgroundColor: '#fff',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 2rem',
};

const heroSectionStyles: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '4rem',
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
  fontWeight: '500',
  marginBottom: '1.5rem',
};

const descriptionStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.7',
  color: '#555',
  maxWidth: '700px',
  margin: '0 auto',
};

const benefitsSectionStyles: React.CSSProperties = {
  marginBottom: '4rem',
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '500',
  color: '#000',
  marginBottom: '2rem',
  textAlign: 'center',
};

const benefitsGridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
};

const benefitItemStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '1.5rem',
};

const benefitTitleStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#000',
  marginBottom: '1rem',
};

const benefitTextStyles: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#666',
};

const jobsSectionStyles: React.CSSProperties = {
  marginBottom: '4rem',
};

const jobsListStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const jobItemStyles: React.CSSProperties = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '2rem',
  backgroundColor: '#f9f9f9',
};

const jobHeaderStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1rem',
  flexWrap: 'wrap',
  gap: '1rem',
};

const jobTitleStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#000',
  margin: 0,
};

const jobMetaStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const jobLocationStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  backgroundColor: '#e8e8e8',
  padding: '0.25rem 0.75rem',
  borderRadius: '12px',
};

const jobTypeStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  backgroundColor: '#e8e8e8',
  padding: '0.25rem 0.75rem',
  borderRadius: '12px',
};

const jobDescriptionStyles: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#555',
  marginBottom: '1.5rem',
};

const applyButtonStyles: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const ctaSectionStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '3rem 0',
  borderTop: '1px solid #e0e0e0',
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
    .careers-title {
      font-size: 2.5rem !important;
    }
    
    .careers-container {
      padding: 0 1rem !important;
    }
    
    .benefits-grid {
      grid-template-columns: 1fr !important;
    }
    
    .job-header {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
  }
  
  @media (max-width: 480px) {
    .careers-title {
      font-size: 2rem !important;
    }
    
    .section-title {
      font-size: 1.5rem !important;
    }
  }
  
  .apply-button:hover, .primary-button:hover {
    background-color: #333 !important;
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default Careers;
