import React from 'react';
import Link from 'next/link';
import { ProjectType } from '@/components/Project';
import Image from 'next/image';

async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const res = await fetch(`http://localhost:3000/api/projects/${slug}`);
  if (!res.ok) {
    return null;
  }
  const data: ProjectType = await res.json();

  return (
    <div className='min-h-screen flex flex-col gap-4 my-5 '>
      <Link href={'/projects'}>
        <button className='flex gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z'
            />
          </svg>
        </button>
      </Link>
      <article className='mb-36'>
        <h1
          style={{ lineHeight: '1.2' }}
          className='md:text-5xl text-3xl   font-semibold uppercase  '
        >
          {data.title}
        </h1>
        <span>{data.date}</span>
        <p className='my-4 text-justify'>{data.description}</p>
        <Image
          width={1000}
          height={1000}
          alt={data.title}
          src={data.thumbnail}
          className='rounded-md'
        />
        <p className='my-4 text-justify'>{data.article}</p>
      </article>
      <div className='flex justify-between mb-10'>
        <Link href={data.next}>
          <div className={data.next === '' ? 'text-white/25' : 'text-white '}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z'
              />
            </svg>
          </div>
        </Link>
        <Link href={data.prev}>
          <div className={data.prev === '' ? 'text-white/25' : 'text-white'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z'
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default page;
