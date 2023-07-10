import Link from 'next/link';
const pdf = 'hhh';
function Contact() {
  return (
    <div className='mx-6 bg-yellow-400 p-4 rounded-md aspect-video flex items-center  justify-center  flex-col relative'>
      <h1 className='absolute inset font-extrabold text-[4rem] opacity-5 '>
        CONTACT
      </h1>
      <div className='md:text-2xl flex flex-col gap-4  '>
        <h2 className='font-bold'>
          Intressted in working with me? <br />
          Reach out to me at{' '}
        </h2>
        <div className=' flex  flex-col justify-start'>
          <button className='text-white py-1 px-3 rounded-md flex items-center gap-2 hover:text-gray-100 z-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z'
              />
            </svg>
            <Link href='mailto:azdinebouali2002@gmail.com'>Email Me</Link>
          </button>
          <button className='text-gray-900 py-1 px-3 rounded-md flex items-center gap-2 hover:text-gray-600 -translate-x-1 z-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z'
              />
            </svg>
            <Link href={pdf} download>
              Download Resume
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
