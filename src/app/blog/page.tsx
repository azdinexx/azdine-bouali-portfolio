import React from 'react';
import Back from '@/components/shared/Back';
import Article from '@/components/Writing/Article';
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
        <h1 className='text-4xl font-semibold mb-6'>Blog</h1>
        <p className='md:max-w-md mx-auto max-w-xs'>
          This is where I write about FullStack development, coding career
          advice, and anything else going on in my life that might benefit
          others.
        </p>
      </div>
      <div className='grid md:grid-cols-2 rid-cols-1 md:gap-10 gap-5'>
        {Articles.map((article, i) => {
          return (
            <Link
              key={article.title + i}
              href={article.title.replaceAll(' ', '-')}
            >
              <Article {...article} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Page;
