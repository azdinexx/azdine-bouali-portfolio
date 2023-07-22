function Hero() {
  return (
    <div className='min-h-[80vh] flex items-center gap-0 mb-[10vh]'>
      <div className='text-8xl  '>
        <span className='text-4xl text-gray-400'>I am a</span>
        <h1 className='relative before:absolute before:w-6 before:h-6 before:bg-white before:bottom-0 before:-right-6 before:bg-gradient-to-tr before:from-[#4F4CBA] before:to-[#5e9fe1]'>
          {' '}
          Full Stack <br /> Software <br /> Developer
        </h1>

        <button
          className='text-xl py-2 px-6 
          rounded-md bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA] mb-10 shadow-md shadow-[#5e9fe1]'
        >
          Previus Projects
        </button>
      </div>
    </div>
  );
}

export default Hero;
