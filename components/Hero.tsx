import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="hero-wide-container">
        <div className="hero-card">
          {/* Main Architectural Hero Image */}
          <div className="hero-image-wrap">
            <Image
              src="/images/hero.webp"
              alt="The Address Residences - Premium modern architecture residential building with warm ambient evening illumination"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 96vw, 1920px"
              className="hero-image"
            />
            {/* Concentrated Dark Overlay for Text Legibility */}
            <div className="hero-overlay" aria-hidden="true" />
          </div>

          {/* Hero Content (Lower Left) */}
          <div className="hero-content">
            <span className="hero-eyebrow">THE ADDRESS RESIDENCES</span>
            <h1 className="hero-title">
              Designed for the Way
              <br className="hero-br" />
              You Want to Live.
            </h1>
            <p className="hero-description">
              Discover thoughtfully designed 2, 3 and 4 BHK homes, where contemporary
              architecture meets everyday comfort.
            </p>
          </div>

          {/* Creative Inverted Corner Cutout for CTA */}
          <div className="hero-cutout" aria-hidden="false">
            {/* Top Inverted Corner */}
            <svg
              className="cutout-corner corner-top"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 0C0 13.255 10.745 24 24 24H0V0Z" fill="#FFFFFF" />
            </svg>

            {/* Right Inverted Corner */}
            <svg
              className="cutout-corner corner-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 24C13.255 24 24 13.255 24 0H0V24Z" fill="#FFFFFF" />
            </svg>

            <a
              href="#enquiry"
              className="hero-cta-btn"
              aria-label="Schedule a Site Visit"
            >
              <span>Schedule a Site Visit</span>
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

          {/* Understated Scroll to Explore Control (Bottom Right) */}
          <a
            href="#overview"
            className="hero-scroll-btn"
            aria-label="Scroll down to project overview"
          >
            <span className="scroll-label">Scroll to explore</span>
            <svg
              className="scroll-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
