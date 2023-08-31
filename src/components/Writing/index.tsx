import React from 'react';
import Article from './Article';
import Link from 'next/link';
const Articles = [
  {
    title: 'How to successfully migrate from MongoDB to PlanetScale',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['shopify', 'react', 'nodejs', 'mongodb'],
  },
  {
    title: 'shopify guide for beginners',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['shopify', 'react', 'css', 'mongodb'],
  },
  {
    title: 'how to build a shopify store in 2023',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['Next.js', 'PlanetScale', 'Tailwindcss'],
  },
  {
    title: 'production ready ecommerce store with shopify',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/hero-1.jpg',
    tags: ['Next.js', 'PlanetScale', 'Tailwindcss'],
  },
];
export default function Writing({ font }: { font: { className: string } }) {
  return (
    <section className='md:max-w-5xl mx-4 md:mx-auto py-36 flex flex-col gap-8'>
      <h3
        className={`${font.className} text-center md:text-left text-4xl font-semibold`}
      >
        Writing
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10  '>
        {Articles.map(
          (article, i) =>
            i < 3 && <Article key={i + article.title} {...article} />
        )}
      </div>
      <Link href={'/blog'}>
        <div className='flex justify-center md:justify-end items-end group text-primary  '>
          <span className=''>Check Out More Writings</span>
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
