'use client';
import Project from './Project';
import { useState, useEffect } from 'react';
import { ProjectType } from './Project';
import NotYet from './NotYet';
import Link from 'next/link';
import { projects } from '../../public/projects/project.json';

function Portfolio() {
  const [active, setactive] = useState(0);

  return (
    <div className='min-h-screen' id='projects'>
      <h2 className='uppercase text-center font-bold mb-10 mt-20'>Portfolio</h2>
      <nav>
        <ul className='flex justify-between max-w-md mx-auto '>
          <button
            className={active === 0 ? 'text-[#4eb7df] underline   ' : ''}
            onClick={() => setactive(0)}
          >
            website
          </button>

          <button
            className={active === 1 ? 'text-[#4eb7df] underline   ' : ''}
            onClick={() => setactive(1)}
          >
            Tool
          </button>

          <button
            className={active === 2 ? 'text-[#4eb7df] underline   ' : ''}
            onClick={() => setactive(2)}
          >
            Script
          </button>
        </ul>
      </nav>
      <div className='pt-20 flex flex-col gap-20'>
        {active === 0 ? <Website /> : active === 1 ? <Tool /> : <Scripts />}
      </div>
      <div className='flex justify-center'>
        <Link href={'projects'}>
          <button
            className='text-sm py-2 px-10 font-
          rounded-md mt-20       bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA] my-10   '
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;

function Website() {
  return (
    <>
      {projects.map((project, i) => {
        if (project.type !== 'website') return;
        return (
          <Project reverse={i % 2 !== 0} project={project} key={project.id} />
        );
      })}
    </>
  );
}

function Tool() {
  return (
    <>
      {projects.map((project, i) => {
        if (project.type !== 'tool') return;
        return (
          <Project reverse={i % 2 !== 0} project={project} key={project.id} />
        );
      })}
    </>
  );
}

function Scripts() {
  return (
    <>
      {projects.filter((project) => project.type === 'script').length === 0 ? (
        <NotYet text='no Scripts yet' />
      ) : (
        projects.map((project, i) => {
          if (project.type !== 'script') return;
          return (
            <Project reverse={i % 2 !== 0} project={project} key={project.id} />
          );
        })
      )}
    </>
  );
}
