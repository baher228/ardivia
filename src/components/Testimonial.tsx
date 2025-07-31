import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section style={testimonialStyles}>
      <div style={containerStyles}>
        <div style={quoteMarkStyles}>"</div>
        <blockquote style={quoteStyles}>
          viterra have <em style={emphasisStyles}>supported</em> us on some of our highest profile projects 
          with their <em style={emphasisStyles}>eye for detail</em> and <em style={emphasisStyles}>innovative designs</em>, 
          as well as high quality images, helping the team achieve planning permissions for large 
          schemes in Bristol and the Queen Elizabeth Olympic Park. They work <em style={emphasisStyles}>successfully</em> with 
          architects to <em style={emphasisStyles}>blend</em> the landscape into the overall design and are 
          attuned to cost pressures.
        </blockquote>
        <div style={attributionStyles}>
          <p style={nameStyles}>
            <strong>Ben Stephen</strong>
          </p>
          <p style={titleStyles}>
            Senior Development Manager, Places for People
          </p>
        </div>
      </div>
    </section>
  );
};

const testimonialStyles: React.CSSProperties = {
  backgroundColor: '#f4d03f', // Yellow background like the original
  padding: '4rem 0',
  margin: '4rem 0',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 2rem',
  textAlign: 'left',
};

const quoteMarkStyles: React.CSSProperties = {
  fontSize: '6rem',
  color: '#000',
  fontFamily: 'Georgia, serif',
  lineHeight: '1',
  marginBottom: '1rem',
  opacity: 0.3,
};

const quoteStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '1.6',
  color: '#000',
  fontWeight: '400',
  margin: '0 0 2rem 0',
  fontStyle: 'normal',
  maxWidth: '800px',
};

const emphasisStyles: React.CSSProperties = {
  fontStyle: 'italic',
  fontWeight: '500',
};

const attributionStyles: React.CSSProperties = {
  marginTop: '2rem',
};

const nameStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#000',
  margin: '0 0 0.25rem 0',
};

const titleStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
  margin: 0,
  fontWeight: '400',
};

export default Testimonial;
