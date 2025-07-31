'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      <nav style={navbarStyles}>
        <div style={containerStyles}>
          <div style={logoStyles}>
            <Link href="/" style={logoLinkStyles}>
              viterra
            </Link>
          </div>

          <div style={rightControlsStyles}>
            <button
              aria-label="Search"
              onClick={toggleSearch}
              style={iconButtonStyles}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
              style={iconButtonStyles}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div style={searchOverlayStyles}>
          <input
            type="text"
            placeholder="Enter your search here"
            style={searchInputStyles}
            autoFocus
          />
          <button
            aria-label="Close search"
            onClick={toggleSearch}
            style={closeSearchButtonStyles}
          >
            &times;
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div style={menuOverlayStyles}>
          <nav style={menuNavStyles}>
            <ul style={menuListStyles}>
              <li style={menuCategoryStyles}>[home]</li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  viterra
                </Link>
              </li>

              <li style={menuCategoryStyles}>[making]</li>
              <li>
                <Link href="/places" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Places
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/success" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Success
                </Link>
              </li>

              <li style={menuCategoryStyles}>[connecting]</li>
              <li>
                <Link href="/who-we-are" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/our-team" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Our team
                </Link>
              </li>
              <li>
                <Link href="/join-us" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Join us
                </Link>
              </li>
              <li>
                <Link href="/get-in-touch" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Get in touch
                </Link>
              </li>

              <li style={menuCategoryStyles}>[thinking]</li>
              <li>
                <Link href="/our-values" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Our values
                </Link>
              </li>
              <li>
                <Link href="/common-ground" onClick={() => setIsMenuOpen(false)} style={menuLinkStyles}>
                  Common ground
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

const navbarStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '80px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  justifyContent: 'space-between',
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
};

const logoStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#000',
  textDecoration: 'none',
};

const logoLinkStyles: React.CSSProperties = {
  color: '#000',
  textDecoration: 'none',
};

const rightControlsStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const iconButtonStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const searchOverlayStyles: React.CSSProperties = {
  position: 'fixed',
  top: '80px',
  right: 0,
  left: 0,
  backgroundColor: '#fff',
  padding: '1rem 2rem',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const searchInputStyles: React.CSSProperties = {
  flex: 1,
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

const closeSearchButtonStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '2rem',
  lineHeight: 1,
  cursor: 'pointer',
  color: '#000',
};

const menuOverlayStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '320px',
  backgroundColor: '#f4d03f',
  padding: '3rem 2rem',
  zIndex: 10000,
  boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
  overflowY: 'auto',
};

const menuNavStyles: React.CSSProperties = {
  height: '100%',
};

const menuListStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontSize: '1.2rem',
  color: '#000',
};

const menuCategoryStyles: React.CSSProperties = {
  fontStyle: 'italic',
  fontWeight: '600',
  marginTop: '2rem',
  marginBottom: '1rem',
  color: '#000',
};

const menuLinkStyles: React.CSSProperties = {
  display: 'block',
  padding: '0.5rem 0',
  color: '#000',
  textDecoration: 'none',
  cursor: 'pointer',
};

export default Navbar;
