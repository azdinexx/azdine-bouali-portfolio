import Image from 'next/image';

function AboutMe() {
  return (
    <div className='min-h-[90vh] flex gap-20'>
      <div className='w-1/2  flex items-center justify-center '>
        <div className='relative before:absolute before:content-[""]  before:w-full before:h-full before:border-[.5rem] before:border-[#4eb7df] before:bottom-6 before:left-6  before:rounded-md'>
          <Image
            src='/profile.jpg'
            alt='azdine bouali'
            width={500}
            height={1500}
            className='w-72 h-[26rem] object-cover   rounded-md'
          />
          <a
            target='_blank'
            href='https://unsplash.com/@unstable_affliction'
            className='absolute bottom-1  text-[#4eb7df] text-xs font-semibold hover:underline left-1/2 -translate-x-1/2'
          >
            @IvanBandura
          </a>
        </div>
      </div>
      <div className='w-1/2   flex flex-col justify-center items-start p-6 '>
        <h2 className='my-5 text-xl font-semibold underline decoration-wavy decoration-[.18rem] text-[#4eb7df] '>
          About Me
        </h2>
        <p className='max-w-sm text-justify'>
          I am a full stack software developer with over a year of experience
          building and delivering high-quality web applications. I am proficient
          in a variety of programming languages and technologies, including
          JavaScript, React, Node.js, Python, Django, and SQL.
        </p>
        <button
          className='my-10 text-xl py-3 px-6 font-
          rounded-md bg-gradient-to-r from-[#4eb7df] to-[#4F4CBA] hover:bg-gradient-to-tr hover:from-[#4F4CBA] hover:to-[#5e9fe1] transition-colors  duration-500 hover:transition-colors  hover:duration-500 flex items-center gap-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-6-1l-4-4h2.5v-3h3v3H16l-4 4Z'
            />
          </svg>
          Download My CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
