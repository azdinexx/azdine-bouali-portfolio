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
  title: 'Azdine Bouali',
  description:
    'Azdine Bouali - Full Stack Developer based in Morocco 🇲🇦 , with passion to create high quality websites and applications.',
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
        </main>
        <Contact />
        <Analytics />
      </body>
    </html>
  );
  9;
}
