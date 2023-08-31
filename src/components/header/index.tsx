import React from 'react';
import Nav from '../Nav';

import { Sedgwick_Ave_Display } from 'next/font/google';
import Link from 'next/link';

const font = Sedgwick_Ave_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
});
function index() {
  return (
    <header className='text-white p-6 md:px-0 md:max-w-5xl mx-auto md:py-6 flex flex-col md:flex-row items-center justify-center md:gap-10 gap-3 md:justify-between'>
      <Link href={'/'}>
        <div
          className={`text-2xl ${font.className} hover:text-accent transition-colors duration-150`}
        >
          Azdine Bouali
        </div>
      </Link>
      <Nav />
    </header>
  );
}

export default index;
