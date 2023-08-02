import './globals.css';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Contact from '../components/Contact';
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Azdine Bouali | Full Stack Developer | Next.js, React, Node.js',
  description:
    'Azdine Bouali - Full Stack Developer based in Morocco 🇲🇦 , with passion to create high quality websites and applications. I am a self-taught developer, I love to learn new things and I am always looking for new challenges.',
  metadataBase: new URL('https://azeatbouali.tech/'),
  keywords: [
    'Azdine Bouali',
    'Azdine',
    'Bouali',
    'Azdine Bouali Portfolio',
    'Azdine Bouali Website',
    'Azdine Bouali Blog',
    'Azdine Bouali Resume',
    'Azdine Bouali CV',
    'Azdine Bouali Full Stack Developer',
    'Azdine Bouali Full Stack Developer Portfolio',
    'Azdine Bouali Full Stack Developer Website',
    'Azdine Bouali Full Stack Developer Blog',
    'Azdine Bouali Full Stack Developer Resume',
    'Azdine Bouali Full Stack Developer CV',
    'Azdine Bouali Full Stack Developer Portfolio Website',
    'Azdine Bouali Full Stack Developer Portfolio Blog',
    'Azdine Bouali Full Stack Developer Portfolio Resume',
    'Azdine Bouali Full Stack Developer Portfolio CV',
    'Azdine Bouali Full Stack Developer Website Blog',
    'Azdine Bouali Full Stack Developer Website Resume',
    'Azdine Bouali Full Stack Developer Website CV',
    'Azdine Bouali Full Stack Developer Blog Resume',
    'Azdine Bouali Full Stack Developer Blog CV',
    'Azdine Bouali Full Stack Developer Resume CV',
    'Azdine Bouali Full Stack Developer Portfolio Website Blog',
    'Azdine Bouali Full Stack Developer Portfolio Website Resume',
    'Azdine Bouali Full Stack Developer Portfolio Website CV',
    'Azdine Bouali Full Stack Developer Portfolio Blog Resume',
    'Azdine Bouali Full Stack Developer Portfolio Blog CV',
    'Azdine Bouali Full Stack Developer Portfolio Resume CV',
    'Azdine Bouali Full Stack Developer Website Blog Resume',
    'Azdine Bouali Full Stack Developer Website Blog CV',
    'Azdine Bouali Full Stack Developer Website Resume CV',
    'Azdine Bouali Full Stack Developer Blog Resume CV',
    'Azdine Bouali Full Stack Developer Portfolio Website Blog Resume',
    'Azdine Bouali Full Stack Developer Portfolio Website Blog CV',
    'Azdine Bouali Full Stack Developer Portfolio Website Resume CV',
  ],
  applicationName: 'Azdine Bouali',
  authors: [{ name: 'Azdine Bouali', url: 'https://azeatbouali.tech/' }],
  generator: 'Next.js',
  robots: 'index, follow',
  referrer: 'origin-when-cross-origin', // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-referrer
  themeColor: { media: '(prefers-color-scheme: dark)', color: '#000000' },
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1.0',
  creator: 'Azdine Bouali',
  publisher: 'Azdine Bouali',
  manifest: 'https://azeatbouali.tech/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://azeatbouali.tech',
    title: 'Azdine Bouali | Full Stack Developer | Next.js, React, Node.js',
    description:
      'Azdine Bouali - Full Stack Developer based in Morocco 🇲🇦 , with passion to create high quality websites and applications. I am a self-taught developer, I love to learn new things and I am always looking for new challenges.',
    siteName: 'Azdine Bouali',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: ' ',
  },
  verification: { google: 'PuJ3o_u68u7AY15-irImWZflZYExXr586HN0_E54WPQ' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='max-w-5xl mx-auto px-4 md:px-2  '>
          <Header />
          {children}
          <Analytics />
        </main>
        <Contact />
      </body>
    </html>
  );
}

import Head from 'next/head';
