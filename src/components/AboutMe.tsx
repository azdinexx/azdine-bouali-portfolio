import Image from 'next/image';

function AboutMe() {
  return (
    <div className='min-h-[90vh] flex gap-20'>
      <div className='w-1/2  flex items-center justify-center '>
        <div className='relative before:absolute before:content-[""]  before:w-full before:h-full before:border-[.5rem] before:top-6 before:-left-10 before:rounded'>
          <Image
            src='/profile.jpg'
            alt='azdine bouali'
            width={500}
            height={1500}
            className='w-72 h-[26rem] object-cover  z-10 '
          />
        </div>
      </div>
      <div className='w-1/2   flex flex-col justify-center items-start p-6 '>
        <h2 className='my-5 text-xl font-semibold'>About Me</h2>
        <p className='max-w-sm text-justify'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, in
          facere voluptas repellat fuga, unde doloribus perferendis neque
          consequuntur, quasi harum. Officia sed, esse beatae atque dolorum hic
          totam placeat.
        </p>
        <button
          className='my-10 text-xl py-3 px-6 font-
          rounded-md bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA]    '
        >
          Download My CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
