'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to apply subtle sticky header border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close menu if window is resized past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
      role="banner"
    >
      <div className="header-container">
        {/* Brand Aligned to the Left */}
        <Link
          href="/"
          className="brand"
          aria-label="The Address Residences Home"
          onClick={(e) => {
            closeMenu();
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="brand-title">The Address.</span>
          <span className="brand-subtitle">RESIDENCES</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>

        {/* Navigation & CTA Aligned to the Right */}
        <nav
          id="primary-nav"
          className={`nav-menu ${isOpen ? 'is-open' : ''}`}
          aria-label="Primary Navigation"
        >
          <ul className="nav-links">
            <li>
              <a href="#overview" className="nav-link" onClick={closeMenu}>
                Overview
              </a>
            </li>
            <li>
              <a href="#amenities" className="nav-link" onClick={closeMenu}>
                Amenities
              </a>
            </li>
            <li>
              <a href="#gallery" className="nav-link" onClick={closeMenu}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#floor-plans" className="nav-link" onClick={closeMenu}>
                Floor Plans
              </a>
            </li>
            <li>
              <a href="#location" className="nav-link" onClick={closeMenu}>
                Location
              </a>
            </li>
          </ul>

          <div className="nav-cta">
            <a href="#enquiry" className="enquiry-btn" onClick={closeMenu}>
              <span>Enquire Now</span>
              <svg
                className="btn-arrow"
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
