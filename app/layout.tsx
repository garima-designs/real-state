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
  title: 'The Address Residences | Contemporary Architecture & Luxury Living',
  description:
    'Discover thoughtfully designed 2, 3 and 4 BHK luxury residences at The Address Residences, where contemporary architecture meets timeless residential design.',
  icons: {
    icon: '/icon.svg',
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
