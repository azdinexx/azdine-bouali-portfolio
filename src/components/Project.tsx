import Image from 'next/image';

function Project({ reverse = false }: { reverse?: boolean }) {
  let textStyles = 'grid place-content-center mb-10';
  let imageStyles = 'grid place-content-center ';
  if (reverse) {
    textStyles += ' order-1 md:order-3';
    imageStyles += ' order-1';
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:grid-rows-1    '>
      <div className={textStyles}>
        <div className='max-w-sm flex flex-col gap-2'>
          <p className='font-thin text-2xl text-[#4eb7df] '>Project 1</p>
          <h2 className='font-bold text-xl'>Ecommerce Website</h2>
          <p className='text-justify font-semibold text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod
            minima cum sint repellat possimus saepe deleniti! Corporis,
            architecto similique.
          </p>
          <button className='bg-gradient-to-r from-teal-500  to-purple-400   text-transparent bg-clip-text font-bold hover:opacity-75 flex'>
            Read More
          </button>
        </div>
      </div>

      <div className={imageStyles}>
        <div className='md:border-[.5rem] border-4 border-[#4eb7df] md:h-60 h-48 w-[20rem] md:w-[24rem] relative rounded-md'>
          <Image
            src='/projects/ecomerce.png'
            alt=''
            width={500}
            height={500}
            className='absolute  md:h-60  h-48 w-[20rem] md:w-[24rem] md:left-6 left-2 bottom-2 md:bottom-6 object-cover rounded-md'
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
