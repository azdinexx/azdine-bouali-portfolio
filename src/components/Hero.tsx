'use client';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='min-h-[80vh] flex items-center gap-0 mb-[10vh]'>
      <div className='md:text-8xl text-7xl  '>
        <motion.span
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-4xl text-gray-400'
        >
          I am a
        </motion.span>
        <motion.h1
          initial={{ y: 25, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className='relative before:absolute before:w-6 before:h-6 before:bg-white before:bottom-0 before:-right-6 before:bg-gradient-to-tr before:from-[#4F4CBA] before:to-[#5e9fe1]'
        >
          {' '}
          Full Stack <br /> Software <br /> Developer
        </motion.h1>

        <button
          className='text-xl py-2 px-6 
          rounded-md bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA] mb-10 shadow-md shadow-[#5e9fe1]'
        >
          Previus Projects
        </button>
      </div>
    </div>
  );
}
const parallax = {};
export default Hero;
