import Project from './Project';
function Portfolio() {
  return (
    <div className='min-h-screen'>
      <h2 className='uppercase text-center font-bold mb-10 mt-20'>Portfolio</h2>
      <nav>
        <ul className='flex justify-between max-w-md mx-auto'>
          <li className='text-[#4eb7df] underline decoration-wavy  '>
            website
          </li>
          <li>Desktop</li>
          <li>Mobile</li>
          <li>Other Projects</li>
        </ul>
      </nav>
      <div className='pt-20 flex flex-col gap-20'>
        <Project />
        <Project reverse />
        <Project />
      </div>
      <div className='flex justify-center'>
        <button
          className='text-sm py-2 px-10 font-
        rounded-md        bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA] my-10   '
        >
          View All
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
