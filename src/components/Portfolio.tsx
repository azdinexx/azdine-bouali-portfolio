'use client';
import Project from './Project';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProjectType } from './Project';
import NotYet from './NotYet';
import Link from 'next/link';
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
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/projects')
      .then((res) => {
        const data = res.data.filter((project: ProjectType) => {
          return project.type === 'website';
        });
        setData(data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading && (
        <div className='flex justify-center min-h-[50vh] items-center'>
          <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-100'></div>
        </div>
      )}
      {data.map((project: ProjectType, i) => {
        return (
          <Project reverse={i % 2 !== 0} project={project} key={project.id} />
        );
      })}
    </>
  );
}

function Tool() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/projects')
      .then((res) => {
        const data = res.data.filter((project: ProjectType) => {
          return project.type === 'tool';
        });
        setData(data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading && (
        <div className='flex justify-center min-h-[50vh] items-center'>
          <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-100'></div>
        </div>
      )}
      {data.length === 0 ? (
        <NotYet text='no Tools yet' />
      ) : (
        data.map((project: ProjectType, i) => {
          return (
            <Project reverse={i % 2 === 0} project={project} key={project.id} />
          );
        })
      )}
    </>
  );
}

function Scripts() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/projects')
      .then((res) => {
        const data = res.data.filter((project: ProjectType) => {
          return project.type === 'script';
        });
        setData(data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading && (
        <div className='flex justify-center min-h-[50vh] items-center'>
          <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-100'></div>
        </div>
      )}
      {data.length === 0 ? (
        <NotYet text='no Scripts yet' />
      ) : (
        data.map((project: ProjectType, i) => {
          return (
            <Project reverse={i % 2 === 0} project={project} key={project.id} />
          );
        })
      )}
    </>
  );
}
