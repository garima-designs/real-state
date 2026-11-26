'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FloorPlanData {
  title: string;
  builtUp: string;
  carpet: string;
  beds: string;
  baths: string;
  balconies: string;
  image: string;
  alt: string;
  label: string;
}

export const FLOOR_PLANS_DATA: Record<string, FloorPlanData> = {
  '2bhk': {
    title: '2 BHK Residence',
    builtUp: '1,250 sq. ft.',
    carpet: '950 sq. ft.',
    beds: '2',
    baths: '2',
    balconies: '1',
    image: '/images/floor-plan-2bhk.webp',
    alt: 'Realistic 3D isometric furnished floor plan render of 2 BHK luxury residence at The Address Residences',
    label: '2 BHK',
  },
  '3bhk': {
    title: '3 BHK Residence',
    builtUp: '1,650 sq. ft.',
    carpet: '1,280 sq. ft.',
    beds: '3',
    baths: '3',
    balconies: '2',
    image: '/images/floor-plan-3bhk.webp',
    alt: 'Realistic 3D isometric furnished floor plan render of 3 BHK luxury residence at The Address Residences',
    label: '3 BHK',
  },
  '4bhk': {
    title: '4 BHK Residence',
    builtUp: '2,200 sq. ft.',
    carpet: '1,720 sq. ft.',
    beds: '4',
    baths: '4',
    balconies: '3',
    image: '/images/floor-plan-4bhk.webp',
    alt: 'Realistic 3D isometric furnished floor plan render of 4 BHK luxury residence at The Address Residences',
    label: '4 BHK',
  },
};

export default function FloorPlans() {
  const [selectedKey, setSelectedKey] = useState<string>('3bhk');
  const [isFading, setIsFading] = useState<boolean>(false);

  const plan = FLOOR_PLANS_DATA[selectedKey] || FLOOR_PLANS_DATA['3bhk'];

  const selectPlan = (key: string) => {
    if (key === selectedKey || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedKey(key);
      setIsFading(false);
      // Synchronize with EnquiryForm via CustomEvent
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('floorPlanSelected', {
            detail: { label: FLOOR_PLANS_DATA[key].label, key },
          })
        );
      }
    }, 250);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentKey: string) => {
    const keys = ['2bhk', '3bhk', '4bhk'];
    const currentIndex = keys.indexOf(currentKey);
    let nextIndex: number | null = null;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % keys.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + keys.length) % keys.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = keys.length - 1;
    }

    if (nextIndex !== null) {
      selectPlan(keys[nextIndex]);
    }
  };

  return (
    <section id="floor-plans" className="floor-plans" aria-label="Floor Plans">
      <div className="container">
        {/* Section Header */}
        <div className="floor-plans-header reveal-on-scroll">
          <div className="floor-plans-copy">
            <span className="section-tag">FLOOR PLANS</span>
            <h2 className="floor-plans-title">Find a space that feels like you.</h2>
            <p className="floor-plans-description">
              Explore our thoughtfully designed residences, crafted for different lifestyles and
              everyday comfort.
            </p>
          </div>

          {/* Configuration Selector */}
          <div
            className="plan-selector"
            role="tablist"
            aria-label="Residence configuration selector"
          >
            {(['2bhk', '3bhk', '4bhk'] as const).map((key) => {
              const item = FLOOR_PLANS_DATA[key];
              const isSelected = selectedKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  id={`tab-${key}`}
                  className={`plan-btn ${isSelected ? 'is-active' : ''}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="plan-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectPlan(key)}
                  onKeyDown={(e) => handleKeyDown(e, key)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Floor Plan Layout */}
        <div
          className="plan-layout reveal-on-scroll stagger-2"
          id="plan-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selectedKey}`}
        >
          {/* Left Column: 3D Isometric Architectural Cutaway Preview (~60%) */}
          <div className="plan-preview">
            <div
              className="plan-image-container"
              style={{
                opacity: isFading ? 0 : 1,
                transition: 'opacity 0.25s ease-in-out',
              }}
            >
              <Image
                src={plan.image}
                alt={plan.alt}
                width={800}
                height={560}
                className="plan-image"
                priority={selectedKey === '3bhk'}
              />
            </div>
          </div>

          {/* Right Column: Property Specifications (~40%) */}
          <div className="plan-details">
            <h3 className="plan-name">{plan.title}</h3>

            <div className="plan-areas">
              <div className="area-item">
                <span className="area-label">Built-up Area</span>
                <span className="area-value">{plan.builtUp}</span>
              </div>
              <div className="area-divider" aria-hidden="true"></div>
              <div className="area-item">
                <span className="area-label">Carpet Area</span>
                <span className="area-value">{plan.carpet}</span>
              </div>
            </div>

            <div className="plan-specs">
              <div className="spec-row">
                <span className="spec-label">
                  <svg
                    className="spec-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 4v16M2 8h20v12M2 17h20M6 8v3M10 8v3" />
                  </svg>
                  <span>Bedrooms</span>
                </span>
                <span className="spec-value">{plan.beds}</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">
                  <svg
                    className="spec-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1zM6 12V5a2 2 0 0 1 2-2h3v9" />
                  </svg>
                  <span>Bathrooms</span>
                </span>
                <span className="spec-value">{plan.baths}</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">
                  <svg
                    className="spec-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 10h18M3 14h18M3 18h18M5 10v10M12 10v10M19 10v10M4 6h16" />
                  </svg>
                  <span>Balconies</span>
                </span>
                <span className="spec-value">{plan.balconies}</span>
              </div>
            </div>

            <div className="plan-actions">
              <a href="#enquiry" className="plan-cta">
                <span>Enquire About {plan.label}</span>
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
              <p className="plan-disclaimer">
                *Conceptual 3D isometric representations for visualization. Actual layout dimensions may vary slightly during construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
