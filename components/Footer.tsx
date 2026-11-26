'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Top Main Area */}
        <div className="footer-main">
          {/* Brand and Tagline Column */}
          <div className="footer-brand-col">
            <Link
              href="/"
              className="brand footer-brand"
              aria-label="The Address Residences Home"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="brand-title">The Address.</span>
              <span className="brand-subtitle">RESIDENCES</span>
            </Link>
            <p className="footer-tagline">
              Modern living, thoughtfully designed. A conceptual residential community in New Chandigarh.
            </p>

            <div className="footer-contact">
              <span className="footer-contact-link">
                enquiries@theaddressresidences.com <span className="demo-tag">(Demo)</span>
              </span>
              <span className="footer-contact-link">
                +91 98765 43210 <span className="demo-tag">(Demo)</span>
              </span>
              <address className="footer-address">
                Riverside Avenue, Sector 21
                <br />
                New Chandigarh, Punjab
              </address>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-nav-list">
              <li>
                <a href="#overview" className="footer-link">
                  Overview
                </a>
              </li>
              <li>
                <a href="#amenities" className="footer-link">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer-link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#floor-plans" className="footer-link">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#location" className="footer-link">
                  Location
                </a>
              </li>
              <li>
                <a href="#enquiry" className="footer-link">
                  Enquire
                </a>
              </li>
            </ul>
          </div>

          {/* Connect / Demo Column */}
          <div className="footer-social-col">
            <h3 className="footer-col-title">Connect (Demo)</h3>
            <ul className="footer-social-list">
              <li>
                <span className="footer-link footer-link--demo">
                  <span>Instagram</span>
                  <span className="link-badge">Demo</span>
                </span>
              </li>
              <li>
                <span className="footer-link footer-link--demo">
                  <span>LinkedIn</span>
                  <span className="link-badge">Demo</span>
                </span>
              </li>
              <li>
                <span className="footer-link footer-link--demo">
                  <span>YouTube</span>
                  <span className="link-badge">Demo</span>
                </span>
              </li>
            </ul>

            <div className="back-to-top-wrap">
              <button
                type="button"
                className="back-to-top-btn"
                onClick={scrollToTop}
                aria-label="Back to top of page"
              >
                <span>Back to Top</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 The Address Residences. All rights reserved.</p>
          <p className="demo-notice">
            Practical web developer assessment demo project. All visuals and specifications are conceptual.
          </p>
        </div>
      </div>
    </footer>
  );
}
