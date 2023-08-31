import React from 'react';
import Back from '@/components/shared/Back';
import Work from '@/components/recentWork/work';
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
function Page() {
  return (
    <>
      <Back href='/' />
      <div
        className='text-center my-20  '
        style={{
          filter: 'drop-shadow(0 1em 3em #188ff7)',
        }}
      >
        <h1 className='text-4xl font-semibold mb-6'>Work</h1>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {Articles.map((article, i) => {
          return (
            <Link
              key={article.title + i}
              href={article.title.replaceAll(' ', '-')}
            >
              <Work {...article} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Page;
