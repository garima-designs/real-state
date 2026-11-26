import React from 'react';

export default function ProjectOverview() {
  return (
    <section id="overview" className="project-overview container" aria-label="Project Overview">
      {/* Left Column: Narrative Copy */}
      <div className="overview-narrative reveal-on-scroll">
        <span className="section-tag">OVERVIEW</span>
        <h2 className="overview-heading">About The Address</h2>
        <p className="overview-paragraph overview-lead">
          A thoughtfully planned residential community where architecture, greenery and modern
          urban living exist in quiet harmony.
        </p>
        <p className="overview-paragraph">
          The Address brings together expansive layouts, abundant natural light, and refined
          finishes to create a private sanctuary in the heart of New Chandigarh.
        </p>
        <div className="overview-badge" aria-label="Location">
          <svg
            className="badge-pin-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span className="badge-text">New Chandigarh, Punjab</span>
        </div>
      </div>

      {/* Right Column: 2x2 Highlights Grid */}
      <div className="overview-stats-wrap reveal-on-scroll stagger-2">
        <div className="project-stats" role="list" aria-label="Key Project Highlights">
          <div className="stat-item" role="listitem">
            <span className="stat-number">5 Acres</span>
            <span className="stat-label">Total Project Area</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number">3</span>
            <span className="stat-label">Residential Towers</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Residences</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number">2, 3 &amp; 4</span>
            <span className="stat-label">BHK Configurations</span>
          </div>
        </div>
        <p className="stats-disclaimer">Illustrative project data for master planning demonstration.</p>
      </div>
    </section>
  );
}
