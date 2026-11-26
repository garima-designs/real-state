'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Landmark {
  id: string;
  name: string;
  time: string;
  x: number; // percentage from left
  y: number; // percentage from top
  icon: string;
}

const landmarks: Landmark[] = [
  {
    id: 'schools',
    name: 'Schools & Universities',
    time: '5 min',
    x: 32,
    y: 26,
    icon: 'school',
  },
  {
    id: 'health',
    name: 'Healthcare Facilities',
    time: '10 min',
    x: 74,
    y: 30,
    icon: 'health',
  },
  {
    id: 'shopping',
    name: 'Shopping & Dining',
    time: '12 min',
    x: 24,
    y: 68,
    icon: 'shopping',
  },
  {
    id: 'transit',
    name: 'Public Transport',
    time: '8 min',
    x: 48,
    y: 78,
    icon: 'transit',
  },
  {
    id: 'airport',
    name: 'Airport Connectivity',
    time: '25 min',
    x: 82,
    y: 70,
    icon: 'airport',
  },
];

export default function Location() {
  const [activeId, setActiveId] = useState<string>('schools');

  const activeLandmark = landmarks.find((l) => l.id === activeId) || landmarks[0];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'school':
        return (
          <svg
            className="location-icon"
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
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case 'health':
        return (
          <svg
            className="location-icon"
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
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'shopping':
        return (
          <svg
            className="location-icon"
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
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
      case 'transit':
        return (
          <svg
            className="location-icon"
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
            <rect x="4" y="3" width="16" height="16" rx="2" />
            <path d="M4 11h16M12 3v8M8 19l-2 3M16 19l2 3M8 15h.01M16 15h.01" />
          </svg>
        );
      case 'airport':
        return (
          <svg
            className="location-icon"
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
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="location" className="location-section" aria-label="Location and Neighbourhood">
      <div className="container">
        <div className="location-layout">
          {/* Left Column: Text & Interactive Advantages List (~45%) */}
          <div className="location-content reveal-on-scroll">
            <span className="section-tag">THE NEIGHBOURHOOD</span>
            <h2 className="location-heading">Close to everything that matters.</h2>
            <p className="location-description">
              Enjoy the convenience of city living without compromising on peace and privacy.
              Everyday essentials, leisure destinations and important transport connections are
              always within reach.
            </p>

            <div className="location-list" role="tablist" aria-label="Key neighbourhood connections">
              {landmarks.map((l) => {
                const isActive = l.id === activeId;
                return (
                  <button
                    key={l.id}
                    type="button"
                    className={`location-item ${isActive ? 'is-active' : ''}`}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(l.id)}
                  >
                    <div className="location-category">
                      {renderIcon(l.icon)}
                      <span className="location-name">{l.name}</span>
                    </div>
                    <div className="location-time-badge">
                      <span className="location-time">{l.time}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Map Preview (~55%) */}
          <div className="location-map-wrap reveal-on-scroll stagger-2">
            <figure className="map-figure">
              <div className="map-canvas-container">
                <Image
                  src="/images/location-map.webp"
                  alt="Isometric architectural masterplan neighbourhood visualization of The Address Residences showing surrounding road networks and connectivity"
                  width={680}
                  height={480}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 55vw"
                  className="map-image"
                  loading="lazy"
                />

                {/* The Address Central Marker */}
                <div
                  className="map-marker marker-central"
                  style={{ left: '50%', top: '48%' }}
                  title="The Address Residences"
                >
                  <div className="marker-pulse" />
                  <div className="marker-pin marker-pin--primary">
                    <span className="marker-dot" />
                  </div>
                  <span className="marker-label">The Address</span>
                </div>

                {/* Dynamic Destination Markers */}
                {landmarks.map((l) => {
                  const isActive = l.id === activeId;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      className={`map-marker marker-destination ${isActive ? 'is-active' : ''}`}
                      style={{ left: `${l.x}%`, top: `${l.y}%` }}
                      onClick={() => setActiveId(l.id)}
                      aria-label={`${l.name} - ${l.time}`}
                    >
                      <div className="marker-pin">
                        <span className="marker-dot" />
                      </div>
                      {isActive && (
                        <div className="marker-tooltip">
                          <span className="tooltip-title">{l.name}</span>
                          <span className="tooltip-time">{l.time} drive</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <figcaption className="map-caption">
                Illustrative neighbourhood visualization. Travel times are fictional.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
