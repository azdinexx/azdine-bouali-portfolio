import Image from 'next/image';
import React from 'react';
import Header from '../header';
import SocialMediaWidget from '../shared/SocialMediaLinks';

function Hero() {
  return (
    <div className=' min-h-screen bg-background text-text relative'>
      {/* Background Image and Filter */}

      {/*       <div
        className='absolute bottom-0 w-full   h-36'
        style={{
          boxShadow: 'inset  0px -80px   50px  0px #598ec3ce',
        }}
      ></div> */}
      {/* Content */}
      <section className='relative  '>
        <Header />
        <div className='relative  px-4 md:px-0 md:max-w-5xl mx-auto flex '>
          <div className='   flex flex-col my-10 md:my-[7rem]  gap-10'>
            <h1 className='text-5xl '>Hi, I am Azdine Bouali</h1>
            <p
              className='max-w-sm text-text/90'
              style={{
                filter: 'drop-shadow(0 1em 3em #b26cef)',
              }}
            >
              I&apos;m a Full-Stack Developer from Morocco. I design, create and
              support websites and applications for clients and for fun. I love
              using Edge tech to create exceptional user experiences, and always
              strive to create high quality products.
            </p>
            <SocialMediaWidget />
          </div>
          <Image
            src='/images/hero-icon.svg'
            width={500}
            height={500}
            alt=''
            className='hidden md:block'
            style={{
              filter: 'drop-shadow(0 20px 3em #733090   )',
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
