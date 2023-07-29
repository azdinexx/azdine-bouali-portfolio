'use client';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectType } from '@/components/Project';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/projects')
      .then((res) => {
        setData(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='min-h-screen flex flex-col gap-4 my-5 '>
      <Link href={'/'}>
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
      {loading && (
        <div className='flex justify-center min-h-[50vh] items-center'>
          <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-100'></div>
        </div>
      )}
      {data.map((project: ProjectType, i) => {
        return <Project project={project} key={project.id} />;
      })}
    </div>
  );
}

export default Page;

function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className='flex border border-white/25 flex-col md:flex-row rounded-md hover:bg-white/25 overflow-hidden md:h-36 bg-white/5'>
        <div className='md:w-48 p-2'>
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={1000}
            height={1000}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='p-4 max-w-md md:max-w-3xl'>
          <span className='font-bold text-2xl'>{project.title}</span>
          <p>{project.description.slice(0, 100) + '...'}</p>
        </div>
      </div>
    </Link>
  );
}
