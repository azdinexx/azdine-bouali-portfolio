import React from 'react';
import Work from './work';
import Link from 'next/link';
const Works = [
  {
    title: 'Ecommerce with shopify',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['shopify', 'react', 'nodejs', 'mongodb'],
  },
  {
    title: 'Book store',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['shopify', 'react', 'css', 'mongodb'],
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['Next.js', 'PlanetScale', 'Tailwindcss'],
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['Next.js', 'PlanetScale', 'Tailwindcss'],
  },
];
export default function RecentWork({ font }: { font: { className: string } }) {
  return (
    <section className='md:max-w-5xl mx-4 md:mx-auto py-36 flex flex-col gap-8'>
      <h3
        className={`${font.className} text-center md:text-left text-4xl font-semibold`}
      >
        Recent Work
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5  '>
        {Works.map(
          (work, i) => i < 6 && <Work key={i + work.title} {...work} />
        )}
      </div>
      <Link href={'/work'}>
        <div className='flex justify-center md:justify-end items-end group text-primary  '>
          <span className=''>Check Out More Work</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            className='group-hover:text-yellow-500 ml-2 '
          >
            <path
              fill='currentColor'
              d='M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z'
            />
          </svg>
        </div>
      </Link>
    </section>
  );
}
