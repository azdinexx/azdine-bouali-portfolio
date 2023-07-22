import Image from 'next/image';

function Project({ reverse = false }: { reverse?: boolean }) {
  let textStyles = 'grid place-content-center';
  let imageStyles = 'grid place-content-center';
  if (reverse) {
    textStyles += ' order-3';
    imageStyles += ' order-1';
  }
  return (
    <div className='grid grid-cols-2 gap-10 grid-rows-1 h-72  '>
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
        <div className='border-[.5rem] border-[#4eb7df] h-60 w-[24rem] relative rounded-md'>
          <Image
            src='/projects/ecomerce.png'
            alt=''
            width={500}
            height={500}
            className='absolute  h-60 w-[24rem] left-6 bottom-6 object-cover rounded-md'
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
