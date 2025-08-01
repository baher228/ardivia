"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const showBrandOnThisPage = pathname !== "/"; // hide brand on home page

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // scroll-aware brand visibility
  const [brandHidden, setBrandHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    // reset brand visibility on route change
    setBrandHidden(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const diff = y - lastY.current;

      // hide when scrolling down, show when scrolling up or near top
      if (y < 6) {
        setBrandHidden(false);
      } else if (diff > 4) {
        setBrandHidden(true);
      } else if (diff < -4) {
        setBrandHidden(false);
      }
      lastY.current = y;
    };

    // initial position
    lastY.current = window.scrollY || window.pageYOffset;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((v) => !v);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      {/* --- top bar --- */}
      <nav style={navbarStyles} aria-label="Main">
        {/* centered brand (not on home). It fades out while scrolling down */}
        {showBrandOnThisPage && (
          <Link
            href="/"
            style={{
              ...logoLinkStyles,
              opacity: brandHidden ? 0 : 1,
              transform: brandHidden
                ? "translate(-50%, -8px)"
                : "translate(-50%, 0)",
              pointerEvents: brandHidden ? "none" : "auto",
            }}
            aria-label="Viterra home"
          >
            viterra
          </Link>
        )}

        {/* right-hand controls */}
        <div style={rightControlsStyles}>
          <button
            aria-label="Search"
            onClick={toggleSearch}
            className="iconBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="iconBtn"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- search overlay --- */}
      {isSearchOpen && (
        <div style={searchOverlayStyles} className="searchIn">
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
            className="closeBtn"
          >
            &times;
          </button>
        </div>
      )}

      {/* --- slide-out menu --- */}
      {isMenuOpen && (
        <div style={menuOverlayStyles} className="drawerIn">
          <nav style={menuNavStyles} aria-label="Site">
            <ul style={menuListStyles}>
              <li style={menuCategoryStyles}>[home]</li>
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  viterra
                </Link>
              </li>

              <li style={menuCategoryStyles}>[making]</li>
              <li>
                <Link
                  href="/places"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Places
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Success
                </Link>
              </li>

              <li style={menuCategoryStyles}>[connecting]</li>
              <li>
                <Link
                  href="/who-we-are"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Our team
                </Link>
              </li>
              <li>
                <Link
                  href="/join-us"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Join us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-in-touch"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Get in touch
                </Link>
              </li>

              <li style={menuCategoryStyles}>[thinking]</li>
              <li>
                <Link
                  href="/our-values"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Our values
                </Link>
              </li>
              <li>
                <Link
                  href="/common-ground"
                  onClick={() => setIsMenuOpen(false)}
                  style={menuLinkStyles}
                >
                  Common ground
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* styled-jsx for animations & hovers */}
      <style jsx>{`
        /* initial nav reveal */
        nav {
          animation: navFadeIn 300ms ease forwards;
        }
        @keyframes navFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* circular icon interactions */
        .iconBtn {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 180ms ease, transform 80ms ease;
        }
        .iconBtn:hover {
          background: rgba(255, 255, 255, 0.12);
        }
        .iconBtn:active {
          transform: scale(0.96);
        }

        /* drawer in from right */
        .drawerIn {
          animation: slideInRight 260ms ease forwards;
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* search overlay slide down */
        .searchIn {
          animation: slideDown 220ms ease forwards;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .closeBtn:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

/* ---------- base styles (match the reference look) ---------- */
const navbarStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "72px",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000,
  pointerEvents: "none", // icons/brand re-enable events locally
};

const logoLinkStyles: React.CSSProperties = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 0)",
  transition: "opacity 180ms ease, transform 180ms ease",
  fontSize: "1.75rem",
  fontWeight: 500,
  letterSpacing: "0.5px",
  color: "#fff",
  textDecoration: "none",
  pointerEvents: "auto",
};

const rightControlsStyles: React.CSSProperties = {
  position: "absolute",
  right: "1.5rem",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  gap: "0.75rem",
  pointerEvents: "auto",
};

const searchOverlayStyles: React.CSSProperties = {
  position: "fixed",
  top: "72px",
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  padding: "1rem 2rem",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  zIndex: 10001,
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const searchInputStyles: React.CSSProperties = {
  flex: 1,
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
};

const closeSearchButtonStyles: React.CSSProperties = {
  background: "none",
  border: "none",
  fontSize: "2rem",
  lineHeight: 1,
  cursor: "pointer",
  color: "#000",
};

const menuOverlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "320px",
  backgroundColor: "#fff",
  padding: "3rem 2rem",
  zIndex: 10001,
  boxShadow: "-4px 0 10px rgba(0,0,0,0.1)",
  overflowY: "auto",
};

const menuNavStyles: React.CSSProperties = {
  height: "100%",
};

const menuListStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontSize: "1.2rem",
  color: "#000",
  fontFamily: "Arial, sans-serif",
};

const menuCategoryStyles: React.CSSProperties = {
  fontStyle: "italic",
  fontWeight: 600,
  marginTop: "2rem",
  marginBottom: "1rem",
  color: "#000",
};

const menuLinkStyles: React.CSSProperties = {
  display: "block",
  padding: "0.5rem 0",
  color: "#000",
  textDecoration: "none",
  cursor: "pointer",
};

export default Navbar;
