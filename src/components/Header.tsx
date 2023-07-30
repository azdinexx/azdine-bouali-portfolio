'use client';
import { Sansita_Swashed } from 'next/font/google';
import Link from 'next/link';

const sansita_Swashed = Sansita_Swashed({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});
import { motion } from 'framer-motion';
function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='py-4 flex justify-between items-center'
    >
      <Link href={'/'}>
        <div className={`${sansita_Swashed.className} text-2xl`}>
          Azdine Bouali
        </div>
      </Link>
      <nav className='flex gap-10 items-center'>
        <ul className='md:flex gap-4 hidden '>
          <Link href={'/#services'}>
            <li>services</li>
          </Link>

          <Link href={'projects'}>
            <li>projects</li>
          </Link>
          <Link href={'#contact'}>
            <li>contact</li>
          </Link>
        </ul>
        <button
          className='py-2 px-6 font-
          rounded-md bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA]'
        >
          Hire me
        </button>
      </nav>
    </motion.div>
  );
}

export default Header;
