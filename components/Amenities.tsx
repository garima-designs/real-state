'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface AmenityItem {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const amenitiesData: AmenityItem[] = [
  {
    id: 'pool',
    index: '01',
    title: 'Swimming Pool',
    description: 'A refreshing escape from everyday life.',
    image: '/images/swimming-pool.webp',
    alt: 'Luxury architectural outdoor lap pool with crystal clear water and sun loungers at The Address Residences',
  },
  {
    id: 'fitness',
    index: '02',
    title: 'Fitness Centre',
    description: 'A dedicated space for your health and wellbeing.',
    image: '/images/fitness-centre.webp',
    alt: 'State-of-the-art residential fitness centre with panoramic forest views at The Address Residences',
  },
  {
    id: 'gardens',
    index: '03',
    title: 'Landscaped Gardens',
    description: 'Reconnect with nature in thoughtfully designed green spaces.',
    image: '/images/landscaped-garden.webp',
    alt: 'Landscaped courtyard gardens and walking path at The Address Residences',
  },
  {
    id: 'clubhouse',
    index: '04',
    title: 'Clubhouse',
    description: 'Spaces to unwind, connect and come together.',
    image: '/images/clubhouse.webp',
    alt: 'Luxury resident clubhouse lounge with coffered wood ceiling at The Address Residences',
  },
  {
    id: 'play-area',
    index: '05',
    title: "Children's Play Area",
    description: 'A dedicated space for little adventures.',
    image: '/images/kids-play-area.webp',
    alt: "Children's outdoor adventure play area in a landscaped setting at The Address Residences",
  },
  {
    id: 'walking-track',
    index: '06',
    title: 'Walking Track',
    description: 'Enjoy peaceful walks within the community.',
    image: '/images/walking-track.webp',
    alt: 'Scenic paved walking and jogging track through park grounds at The Address Residences',
  },
];

export default function Amenities() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollPrev(scrollLeft > 6);
    setCanScrollNext(scrollLeft < maxScroll - 6);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);

    return () => {
      track.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
    };
  }, [updateControls]);

  const getScrollAmount = () => {
    const track = trackRef.current;
    if (!track) return 300;
    const item = track.querySelector('.amenity-item') as HTMLElement | null;
    if (!item) return track.clientWidth / 4;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 20;
    return item.offsetWidth + gap;
  };

  const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  };

  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  };

  return (
    <section id="amenities" className="amenities container" aria-label="Amenities">
      <div className="amenities-header reveal-on-scroll">
        <div className="amenities-header-copy">
          <span className="section-tag">AMENITIES</span>
          <h2 className="amenities-title">Spaces beyond your home</h2>
        </div>
        <div className="slider-controls" aria-label="Amenities slider controls">
          <button
            type="button"
            className="slider-btn slider-btn--prev"
            aria-label="Previous amenities"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-btn slider-btn--next"
            aria-label="Next amenities"
            disabled={!canScrollNext}
            onClick={scrollNext}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="amenities-track"
        tabIndex={0}
        aria-label="Scrollable list of amenities"
      >
        {amenitiesData.map((item, idx) => (
          <article
            key={item.id}
            className="amenity-item"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div className="amenity-image-wrap">
              <span className="amenity-index">{item.index}</span>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 600px) 78vw, (max-width: 1024px) 34vw, 25vw"
                className="amenity-image"
                loading="lazy"
              />
            </div>
            <h3 className="amenity-title">{item.title}</h3>
            <p className="amenity-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
