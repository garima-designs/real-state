'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  formatAsTwoDigits?: boolean;
  duration?: number;
  label: string;
}

export default function StatsCounter({
  target,
  suffix = '',
  prefix = '',
  formatAsTwoDigits = false,
  duration = 900,
  label,
}: StatsCounterProps) {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // If reduced motion is preferred, show final value immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      setHasAnimated(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(element);

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeOutProgress * target);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    if (formatAsTwoDigits && num < 10) {
      return `0${num}`;
    }
    return num.toString();
  };

  const finalString = `${prefix}${formatNumber(target)}${suffix}`;
  const displayString = hasAnimated
    ? `${prefix}${formatNumber(count)}${suffix}`
    : finalString; // fallback before observer or SSR

  return (
    <span
      ref={containerRef}
      className="stat-number tabular-nums"
      aria-label={`${prefix}${formatNumber(target)}${suffix} ${label}`}
    >
      <span aria-hidden="true">
        {hasAnimated ? `${prefix}${formatNumber(count)}` : `${prefix}${formatNumber(target)}`}
        {suffix && <span className="stat-unit">{suffix}</span>}
      </span>
    </span>
  );
}
