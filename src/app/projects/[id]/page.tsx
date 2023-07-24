import Image from 'next/image';

function page() {
  return (
    <div className='min-h-screen'>
      <button className='border px-4 py-1 rounded-full'>go back</button>
      <div className='text-justify text-xl flex flex-col gap-4 pb-20'>
        <h1 className='font-semibold text-2xl mt-5 '>Ecommerce Website 2023</h1>
        <span>2023 April 12</span>
        <Image
          alt='project 1'
          width={1000}
          height={800}
          src={'/projects/ecomerce.png'}
          className='rounded-md'
        ></Image>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          nam provident aut, pariatur hic eo vero accusantium, molestiae
          nesciunt l .
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          nam provident aut, pariatur hic eos explicabo vitae error, facilis
          neque quisquam volu antium, molestiae nesciunt laudantium aperiam
          adipisci.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          nam provident aut, pariatur hic eos explicabo vitae error, facilis
          neque quisquam voluptatem unde vero accusantium, molestiae nesciunt
          laudanti i.
        </p>
      </div>
      <div className='mb-20 flex justify-between'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
            />
          </svg>
          <span>project 2</span>
        </div>
        <div className='flex flex-col items-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
            />
          </svg>
          <span>project 3</span>
        </div>
      </div>
    </div>
  );
}

export default page;
