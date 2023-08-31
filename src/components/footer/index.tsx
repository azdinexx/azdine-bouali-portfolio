import React from 'react';
import SocialMediaWidget from '../shared/SocialMediaLinks';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className='md:max-w-5xl mx-4 md:mx-auto py-36 grid  md:grid-cols-2 gap-20'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-xl font-semibold'>Get In Touch</h4>
        <p className='max-w-sm'>
          Feel free to reach out if you have any questions, think we could work
          together, or just want to connect ✌️
        </p>
        <Link href={'mailto:azdinebouali2002@gmail.com'}>
          <div className='   flex gap-2 font-bold text-accent hover:opacity-80'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4ZM20 8l-7.475 4.675q-.125.075-.263.113t-.262.037q-.125 0-.263-.037t-.262-.113L4 8v10h16V8Zm-8 3l8-5H4l8 5ZM4 8v.25v-1.475v.025V6v.8v-.012V8.25V8v10V8Z'
              />
            </svg>
            azdinebouali@gmail.com
          </div>
        </Link>
        <Status />
        <SocialMediaWidget />
      </div>
      <Image
        width={400}
        height={400}
        className='w-72 -translate-y-5 translate-x-20 hidden md:block'
        alt=''
        src={'/images/contact.svg'}
      />
    </footer>
  );
}

export default Footer;

function Status() {
  return (
    <div className='flex gap-4 py-4 items-center'>
      Freelance Status
      <span className='px-4 py-2 text-blue-500 bg-blue-600/10 rounded-full'>
        Available for work
      </span>
    </div>
  );
}
