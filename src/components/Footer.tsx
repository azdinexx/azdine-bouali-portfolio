import Link from 'next/link';

function Footer() {
  return (
    <div className='flex items-center py-4 px-6 my-10 justify-between bg-white border rounded-full'>
      <h3
        className='font-bold text-lg max-w-[50%]
      sm:max-w-full'
      >
        Let &apos;s work together and build something great.
      </h3>
      <div className=' '>
        <Link href='#top' className='scroll-smooth'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10v8M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
