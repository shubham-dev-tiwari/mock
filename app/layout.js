import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NEET Mock Test | Practice & Ace Your Medical Entrance',
  description: 'Prepare for NEET with timed mock tests, instant solutions, and performance analytics. Built for serious NEET aspirants.',
  keywords: 'NEET, mock test, medical entrance, NEET preparation, practice tests',
  authors: [{ name: 'NEET Mock Test' }],
  openGraph: {
    title: 'NEET Mock Test | Practice & Ace Your Medical Entrance',
    description: 'Prepare for NEET with timed mock tests, instant solutions, and performance analytics.',
    url: 'https://yourwebsite.com',
    siteName: 'NEET Mock Test',
    images: [
      {
        url: '/hero-poster.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEET Mock Test',
    description: 'Prepare for NEET with timed mock tests and performance analytics',
    images: ['/hero-poster.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
