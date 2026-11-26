import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        color: '#1C1C1C',
        fontFamily: 'var(--font-manrope), sans-serif',
      }}
    >
      <span
        style={{
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#666666',
          marginBottom: '12px',
        }}
      >
        404 — PAGE NOT FOUND
      </span>
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          margin: '0 0 16px 0',
        }}
      >
        Residence Not Found
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: '#666666',
          maxWidth: '460px',
          margin: '0 0 32px 0',
          lineHeight: 1.6,
        }}
      >
        The page you are looking for has been moved or does not exist. Return to The Address Residences home.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#1C1C1C',
          color: '#FFFFFF',
          padding: '12px 28px',
          borderRadius: '9999px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
