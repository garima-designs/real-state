'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const progressRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position for sticky header state and update thin copper scroll progress bar
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 16);

          // Update copper scroll progress bar directly without React re-render
          if (progressRef.current) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
            progressRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const sectionIds = ['overview', 'amenities', 'gallery', 'floor-plans', 'location', 'enquiry'];
    const observedElements: HTMLElement[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    return () => {
      observer.disconnect();
    };
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
      {/* Thin Copper Scroll Progress Indicator */}
      <div
        ref={progressRef}
        className="scroll-progress-bar"
        aria-hidden="true"
      />

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
              <a
                href="#overview"
                className={`nav-link ${activeSection === 'overview' ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#amenities"
                className={`nav-link ${activeSection === 'amenities' ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                Amenities
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`nav-link ${activeSection === 'gallery' ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#floor-plans"
                className={`nav-link ${activeSection === 'floor-plans' ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                Floor Plans
              </a>
            </li>
            <li>
              <a
                href="#location"
                className={`nav-link ${activeSection === 'location' ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
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
