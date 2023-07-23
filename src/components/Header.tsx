'use client';
import { Sansita_Swashed } from 'next/font/google';

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
      <div className={`${sansita_Swashed.className} text-lg`}>
        Azdine Bouali
      </div>
      <nav className='flex gap-10 items-center'>
        <ul className='md:flex gap-4 hidden '>
          <li>home</li>
          <li>services</li>
          <li>projects</li>
          <li>contact</li>
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
