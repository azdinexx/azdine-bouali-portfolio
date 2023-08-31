import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
}
export default function Article({ title, description, image, tags }: Props) {
  return (
    <div className=' rounded-lg shadow-lg p-5 flex flex-col gap-4 '>
      <div className='w-auto h-48 relative '>
        <Image
          width={400}
          height={600}
          src={image}
          alt={title}
          className='absolute top-0 right-0 rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='flex gap-2 mt-2'>
        {tags.map((tag, i) => (
          <span
            key={tag + i}
            className='bg-secondary/20 text-text/80 px-2 py-1 rounded-lg text-sm'
          >
            {tag}
          </span>
        ))}
      </div>
      <h4
        className='text-lg font-semibold'
        style={{
          filter: 'drop-shadow(0 0 2em #054c8a)',
        }}
      >
        {title}
      </h4>
      <p className='text-text/80'>{description}</p>
    </div>
  );
}
