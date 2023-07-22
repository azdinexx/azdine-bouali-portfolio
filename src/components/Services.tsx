'use client';
import { useState } from 'react';
import Project from './Project';
function Portfolio() {
  const [index, setIndex] = useState(0);

  return (
    <div className='min-h-screen'>
      <h2 className='uppercase text-center font-bold mb-10 mt-20'>Services</h2>
      <nav>
        <ul className='flex justify-between max-w-md mx-auto'>
          <li>
            <button
              className={
                index === 0 ? 'text-[#4eb7df] underline decoration-wavy  ' : ''
              }
              onClick={() => setIndex(0)}
            >
              Website
            </button>
          </li>
          <li>
            <button
              className={
                index === 1 ? 'text-[#4eb7df] underline decoration-wavy  ' : ''
              }
              onClick={() => setIndex(1)}
            >
              Chrome Extension
            </button>
          </li>
          <li>
            <button
              className={
                index === 2 ? 'text-[#4eb7df] underline decoration-wavy  ' : ''
              }
              onClick={() => setIndex(2)}
            >
              Scripting
            </button>
          </li>
          <li>
            <button
              className={
                index === 3 ? 'text-[#4eb7df] underline decoration-wavy  ' : ''
              }
              onClick={() => setIndex(3)}
            >
              CMS
            </button>
          </li>
        </ul>
      </nav>
      {index === 0 ? (
        <Website />
      ) : index === 1 ? (
        <ChromeExtension />
      ) : index === 2 ? (
        <Scripting />
      ) : index === 3 ? (
        <CMS />
      ) : (
        ''
      )}
    </div>
  );
}

export default Portfolio;

function Service() {
  return (
    <div className='w-64 h-48 bg-white/5 rounded border p-4 flex flex-col justify-center  gap-2'>
      <div className='flex  gap-2 font-semibold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z'
          />
        </svg>
        <h2>Custom website creation</h2>
      </div>
      <p className='text-xs mb-auto'>
        I can create a custom website for you. I can create a custom website for
      </p>
      <button className='underline text-left w-fit'>more</button>
    </div>
  );
}

function AskForService() {
  return (
    <div
      className='  bg-gradient-to-r from-[#4eb7df] to-[#4F4CBA]
    
     hover:from-[#4eb6dfa6] hover:to-[#504cba92]
    w-64 h-48 rounded   p-4 flex flex-col justify-center  text-center '
    >
      <h2 className=''>Don&apos;t see what you need?</h2>

      <button className='underline  '>Contact me</button>
    </div>
  );
}

function Website() {
  return (
    <>
      <h2 className='absolute  pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#4a4fbd]/5 '>
        Website
      </h2>
      <div className='relative grid grid-cols-3 gap-10 p-20'>
        <Service />
        <Service />
        <Service />
        <AskForService />
      </div>
    </>
  );
}

function ChromeExtension() {
  return (
    <>
      <h2 className='absolute pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#4a4fbd]/5 '>
        Chrome Extension
      </h2>
      <div className=' relative grid grid-cols-3 gap-10 p-20'>
        <AskForService />
      </div>
    </>
  );
}
function Scripting() {
  return (
    <>
      <h2 className='absolute pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#4a4fbd]/5 '>
        Scripting
      </h2>
      <div className=' relative grid grid-cols-3 gap-10 p-20'>
        <AskForService />
      </div>
    </>
  );
}
function CMS() {
  return (
    <>
      <h2 className='absolute pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#4a4fbd]/5 '>
        CMS
      </h2>
      <div className='relative grid grid-cols-3 gap-10 p-20'>
        <AskForService />
      </div>
    </>
  );
}
