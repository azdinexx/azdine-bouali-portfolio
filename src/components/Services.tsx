'use client';
import { useState } from 'react';
import Project from './Project';
import data from '../../public/services.json';

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

function Service({
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div className='w-64 h-48 bg-white/5 rounded   p-4 flex flex-col justify-center  gap-2'>
      <div className='flex  gap-2 font-semibold'>
        <h2>{title}</h2>
      </div>
      <p className='text-xs mb-auto'>
        {description.length > 100
          ? description.slice(0, 100) + '...'
          : description}
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
      <h2 className='absolute  pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#fff]/5 '>
        Website
      </h2>
      <div className='relative grid grid-cols-3 gap-10 p-20'>
        {data.services
          .find((service) => {
            return service.name === 'Web';
          })
          ?.items.map((item, index) => {
            return <Service key={index} {...item} />;
          })}
        <AskForService />
      </div>
    </>
  );
}

function ChromeExtension() {
  return (
    <>
      <h2 className='absolute pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#fff]/5 '>
        Chrome Extension
      </h2>
      <div className=' relative grid grid-cols-3 gap-10 p-20'>
        {data.services
          .find((service) => {
            return service.name === 'Extensions';
          })
          ?.items.map((item, index) => {
            return <Service key={index} {...item} />;
          })}
        <AskForService />
      </div>
    </>
  );
}
function Scripting() {
  return (
    <>
      <h2 className='absolute pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#fff]/5 '>
        Scripting
      </h2>
      <div className=' relative grid grid-cols-3 gap-10 p-20'>
        {data.services
          .find((service) => {
            return service.name === 'Scripting';
          })
          ?.items.map((item, index) => {
            return <Service key={index} {...item} />;
          })}
        <AskForService />
      </div>
    </>
  );
}
function CMS() {
  return (
    <>
      <h2 className='absolute pointer-events-none text-9xl right-1/2 translate-x-1/2 -z text-[#fff]/5 '>
        CMS
      </h2>
      <div className='relative grid grid-cols-3 gap-10 p-20'>
        {data.services
          .find((service) => {
            return service.name === 'CMS';
          })
          ?.items.map((item, index) => {
            return <Service key={index} {...item} />;
          })}
        <AskForService />
      </div>
    </>
  );
}
