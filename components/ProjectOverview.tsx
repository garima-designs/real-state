import React from 'react';
import Image from 'next/image';
import StatsCounter from '@/components/StatsCounter';

export default function ProjectOverview() {
  return (
    <section id="overview" className="project-overview-section" aria-label="Project Overview">
      <div className="container">
        {/* Subtle Editorial Top Label & Divider */}
        <div className="overview-top-header reveal-on-scroll">
          <span className="overview-editorial-label">01 / THE PROJECT</span>
          <div className="overview-top-divider" aria-hidden="true" />
        </div>

        {/* Balanced Two-Column Layout */}
        <div className="overview-grid">
          {/* Left Column: Narrative Copy, CTA & Architectural Detail Photo */}
          <div className="overview-narrative-col reveal-on-scroll">
            <h2 className="overview-heading">
              More than a home.
              <br />
              A better way to live.
            </h2>
            <div className="overview-copy">
              <p className="overview-paragraph">
                The Address is a thoughtfully planned residential community where contemporary
                architecture, green spaces and everyday living come together.
              </p>
              <p className="overview-paragraph">
                From expansive layouts to carefully considered details, every space is designed to
                make everyday life feel more effortless.
              </p>
            </div>

            <div className="overview-cta-wrap">
              <a href="#amenities" className="overview-lifestyle-cta">
                <span>Discover the lifestyle</span>
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

            {/* Architectural Detail Photograph (~16:7 aspect ratio) */}
            <figure className="overview-detail-figure">
              <div className="overview-detail-image-wrap">
                <Image
                  src="/images/overview-detail.webp"
                  alt="Contemporary architectural detail at The Address Residences featuring warm timber louvers, concrete and glass"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="overview-detail-img"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>

          {/* Right Column: Unified Statistics Panel */}
          <div className="overview-stats-col reveal-on-scroll stagger-2">
            <div className="stats-unified-panel" role="region" aria-label="Project Statistics">
              <div className="stats-panel-header">
                <span className="stats-panel-title">THE ADDRESS IN NUMBERS</span>
              </div>

              {/* 2x2 Statistics Grid */}
              <div className="stats-2x2-grid" role="list">
                {/* Stat 1: 5 Acres */}
                <div className="stat-cell" role="listitem">
                  <div className="stat-cell-top">
                    <svg
                      className="stat-cell-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 4v14" />
                    </svg>
                    <StatsCounter
                      target={5}
                      suffix=" Acres"
                      label="Total project area"
                      duration={900}
                    />
                  </div>
                  <span className="stat-cell-label">Total project area</span>
                </div>

                {/* Stat 2: 03 Residential Towers */}
                <div className="stat-cell" role="listitem">
                  <div className="stat-cell-top">
                    <svg
                      className="stat-cell-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="9" y1="6" x2="9" y2="6.01" />
                      <line x1="15" y1="6" x2="15" y2="6.01" />
                      <line x1="9" y1="10" x2="9" y2="10.01" />
                      <line x1="15" y1="10" x2="15" y2="10.01" />
                      <line x1="9" y1="14" x2="9" y2="14.01" />
                      <line x1="15" y1="14" x2="15" y2="14.01" />
                      <line x1="9" y1="18" x2="15" y2="18" />
                    </svg>
                    <StatsCounter
                      target={3}
                      formatAsTwoDigits={true}
                      label="Residential towers"
                      duration={850}
                    />
                  </div>
                  <span className="stat-cell-label">Residential towers</span>
                </div>

                {/* Horizontal Divider inside Grid */}
                <div className="stats-grid-divider" aria-hidden="true" />

                {/* Stat 3: 200+ Premium Residences */}
                <div className="stat-cell" role="listitem">
                  <div className="stat-cell-top">
                    <svg
                      className="stat-cell-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <StatsCounter
                      target={200}
                      suffix="+"
                      label="Premium residences"
                      duration={1000}
                    />
                  </div>
                  <span className="stat-cell-label">Premium residences</span>
                </div>

                {/* Stat 4: 2-4 BHK Home Configurations */}
                <div className="stat-cell" role="listitem">
                  <div className="stat-cell-top">
                    <svg
                      className="stat-cell-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                    <span className="stat-number stat-number--static">2-4 BHK</span>
                  </div>
                  <span className="stat-cell-label">Home configurations</span>
                </div>
              </div>

              {/* Panel Footer Tagline & Disclaimer */}
              <div className="stats-panel-footer">
                <p className="stats-panel-tagline">Thoughtfully planned. Designed around you.</p>
                <p className="stats-disclaimer">*Illustrative project data for master planning demonstration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
