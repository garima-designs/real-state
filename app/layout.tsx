import { Manrope } from 'next/font/google';
import './globals.css';
import type { Metadata, Viewport } from 'next';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://real-state-one-snowy.vercel.app'),
  title: 'The Address Residences | Contemporary Architecture & Luxury Living',
  description:
    'Discover thoughtfully designed 2, 3 and 4 BHK luxury residences at The Address Residences, New Chandigarh. Where contemporary architecture meets everyday comfort.',
  keywords: [
    'The Address Residences',
    'Luxury Residences New Chandigarh',
    '2 BHK Apartments',
    '3 BHK Residences',
    '4 BHK Penthouses',
    'Contemporary Real Estate Architecture',
    'Architectural Landing Page Demo',
  ],
  authors: [{ name: 'The Address Residences Design Studio' }],
  creator: 'The Address Residences',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'The Address Residences | Contemporary Architecture & Luxury Living',
    description:
      'Discover thoughtfully designed 2, 3 and 4 BHK luxury residences at The Address Residences, New Chandigarh. Explore floor plans, amenities, and curated architecture.',
    url: 'https://real-state-one-snowy.vercel.app/',
    siteName: 'The Address Residences',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'The Address Residences Architectural Façade',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Address Residences | Contemporary Architecture & Luxury Living',
    description:
      'Discover thoughtfully designed 2, 3 and 4 BHK luxury residences at The Address Residences, New Chandigarh.',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
