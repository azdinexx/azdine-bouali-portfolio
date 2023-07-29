'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ProjectType {
  id: number;
  title: string;
  slug: string;
  type: 'website' | 'tool' | 'script';
  description: string;
  thumbnail: string;
  tag: string;
  link: {
    live: string;
    github: string;
  };
  article: string;
}

function Project({
  reverse = false,
  project,
}: {
  reverse?: boolean;
  project: ProjectType;
}) {
  let textStyles = 'grid place-content-center mb-10';
  let imageStyles = 'grid place-content-center ';
  if (reverse) {
    textStyles += ' order-1 md:order-3';
    imageStyles += ' order-1';
  }
  return (
    <motion.div
      initial={{ y: 45, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className='grid grid-cols-1 md:grid-cols-2 gap-10 md:grid-rows-1    '
    >
      <div className={textStyles}>
        <div className='max-w-sm flex flex-col gap-2'>
          <p className='font-thin text-2xl text-[#4eb7df] '>{project.tag}</p>
          <h2 className='font-bold text-xl'>{project.title}</h2>
          <p className='text-justify font-semibold text-gray-200'>
            {project.description}
          </p>
          <Link href={`/projects/${project.slug}`}>
            <button className='bg-gradient-to-r from-teal-500  to-purple-400   text-transparent bg-clip-text font-bold hover:opacity-75 flex'>
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className={imageStyles}>
        <div className='md:border-[.5rem] border-4 border-[#4eb7df] md:h-60 h-48 w-[20rem] md:w-[24rem] relative rounded-md'>
          <Image
            src={project.thumbnail}
            alt=''
            width={1000}
            height={1000}
            className='absolute  md:h-60  h-48 w-[20rem] md:w-[24rem] md:left-6 left-2 bottom-2 md:bottom-6 object-cover rounded-md'
            draggable={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
