import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="gallery" className="architecture-gallery container" aria-label="Architectural Gallery">
      {/* Column 1: Intro + Tall Dining Photo */}
      <div className="gallery-column gallery-column--intro reveal-on-scroll">
        <div className="gallery-intro">
          <span className="section-tag">GALLERY</span>
          <h2 className="gallery-heading">
            A closer look at life
            <br />
            at The Address.
          </h2>
          <p className="gallery-description">
            Discover thoughtfully crafted interiors, contemporary architecture and spaces designed
            around everyday living.
          </p>
        </div>
        <figure className="gallery-card gallery-card--dining">
          <Image
            src="/images/gallery-dining.webp"
            alt="Contemporary architectural dining area with refined modern finishes at The Address Residences"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="gallery-image"
            loading="lazy"
          />
          <figcaption className="gallery-caption">Thoughtful interiors</figcaption>
        </figure>
      </div>

      {/* Column 2: Two Vertically Stacked Photos */}
      <div className="gallery-column gallery-column--stacked reveal-on-scroll stagger-2">
        <figure className="gallery-card gallery-card--living">
          <Image
            src="/images/gallery-living.webp"
            alt="Contemporary luxury living room with elegant furniture and panoramic windows at The Address Residences"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="gallery-image"
            loading="lazy"
          />
          <figcaption className="gallery-caption">Living spaces</figcaption>
        </figure>
        <figure className="gallery-card gallery-card--bedroom">
          <Image
            src="/images/gallery-bedroom.webp"
            alt="Premium master bedroom retreat with natural timber accents at The Address Residences"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="gallery-image"
            loading="lazy"
          />
          <figcaption className="gallery-caption">Private retreats</figcaption>
        </figure>
      </div>

      {/* Column 3: Large Portrait Exterior Photo + Outlined CTA Button */}
      <div className="gallery-column gallery-column--feature reveal-on-scroll stagger-3">
        <figure className="gallery-card gallery-card--exterior">
          <Image
            src="/images/gallery-exterior.webp"
            alt="Striking contemporary residential facade and architecture at The Address Residences"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="gallery-image"
            loading="lazy"
          />
          <figcaption className="gallery-caption">Contemporary architecture</figcaption>
        </figure>
        <a href="#floor-plans" className="gallery-cta">
          <span>Explore Floor Plans</span>
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
    </section>
  );
}
