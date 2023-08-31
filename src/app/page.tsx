import Hero from '@/components/Hero';
import Footer from '@/components/footer';

import React from 'react';
import RecentWork from '@/components/recentWork';
import Writing from '@/components/Writing';

import { Sedgwick_Ave_Display } from 'next/font/google';

const font = Sedgwick_Ave_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
});

function Page() {
  return (
    <>
      <Hero />
      <RecentWork font={font} />
      <Writing font={font} />
      <Footer />
    </>
  );
}

export default Page;
