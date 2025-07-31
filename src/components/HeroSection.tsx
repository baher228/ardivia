'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      image: 'https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Edenbrook-Web-Photo-by-Studio-Maple-268.jpg',
      title: 'Makers of climate-resilient, sociable places.',
      subtitle: "We're growing our team. See our latest career opportunities",
      ctaText: 'Join our team',
      ctaLink: '/careers'
    },
    {
      image: 'https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Kings-Cross-Author-Web-49.jpg',
      title: 'Makers of climate-resilient, sociable places.',
      subtitle: "We're growing our team. See our latest career opportunities",
      ctaText: 'Join our team',
      ctaLink: '/careers'
    },
    {
      image: 'https://fabrikuk.com/wp-content/uploads/2025/04/Fabrik-Reading-Greenpark-Web-224.jpg',
      title: 'Makers of climate-resilient, sociable places.',
      subtitle: "We're growing our team. See our latest career opportunities",
      ctaText: 'Read More',
      ctaLink: '/who-we-are'
    },
    {
      image: 'https://fabrikuk.com/wp-content/uploads/2025/04/Goodmans-Field-WEB-Chris-Hopkinson-Chromaphotography-7989_2560px.jpg',
      title: 'Makers of climate-resilient, sociable places.',
      subtitle: "We're growing our team. See our latest career opportunities",
      ctaText: 'Read More',
      ctaLink: '/who-we-are'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section style={heroStyles}>
      <div style={slideContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...slideStyles,
              opacity: index === currentSlide ? 1 : 0,
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div style={overlayStyles}>
              <div style={contentStyles}>
                <div style={ctaBannerStyles}>
                  <strong>{slide.subtitle.split('.')[0]}</strong>
                  <br />
                  <Link href={slide.ctaLink} style={ctaBannerLinkStyles}>
                    {slide.subtitle.split('.')[1]?.trim()}
                  </Link>
                </div>
                
                <h1 style={titleStyles}>{slide.title}</h1>
                
                <Link href={slide.ctaLink} style={ctaButtonStyles}>
                  {slide.ctaText} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={indicatorsStyles}>
        {slides.map((_, index) => (
          <button
            key={index}
            style={{
              ...indicatorStyles,
              backgroundColor: index === currentSlide ? '#fff' : 'rgba(255, 255, 255, 0.5)'
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

const heroStyles: React.CSSProperties = {
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
  marginTop: '80px', // Account for fixed navbar
};

const slideContainerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const slideStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'opacity 1s ease-in-out',
};

const overlayStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const contentStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  color: '#fff',
  width: '100%',
};

const ctaBannerStyles: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#000',
  padding: '1rem 1.5rem',
  borderRadius: '4px',
  marginBottom: '2rem',
  fontSize: '0.9rem',
  lineHeight: '1.4',
  maxWidth: '400px',
};

const ctaBannerLinkStyles: React.CSSProperties = {
  color: '#0066cc',
  textDecoration: 'underline',
};

const titleStyles: React.CSSProperties = {
  fontSize: '4rem',
  fontWeight: '300',
  lineHeight: '1.1',
  marginBottom: '2rem',
  maxWidth: '600px',
  letterSpacing: '-0.02em',
};

const ctaButtonStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
};

const indicatorsStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '0.5rem',
};

const indicatorStyles: React.CSSProperties = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default HeroSection;
