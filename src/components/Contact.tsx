import Link from 'next/link';
import Footer from './Footer';

function Contact() {
  let before =
    'before:absolute before:w-72 before:h-72 before:bg-black before:left-0 before:top-0 before:content-[""] before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full  before:bg-gradient-to-tr before:from-[#4eb7df] before:to-[#4F4CBA] before:opacity-70';
  let after =
    'after:absolute after:w-72 after:h-72 after:bg-black after:right-0 after:top-0 after:content-[""] after:-translate-y-1/2 after:translate-x-1/2 after:rounded-full  after:bg-gradient-to-br after:from-[#4eb7df] after:to-[#4F4CBA] after:opacity-70';
  return (
    <div
      className={`bg-gradient-to-tl from-[#4eb7df] to-[#4F4CBA] min-h-screen rounded-lg md:rounded-t-[8rem] md:p-20 p-5 py-10 overflow-hidden relative ${before} ${after}`}
    >
      <h2 className='text-2xl text-center'>Contact</h2>
      <div className='grid gridcols-1 md:grid-cols-2 md:gap-10 pt-10 mb-10'>
        <div className='flex flex-col items-center md:items-start'>
          <h2 className='my-6 text-xl'>Drop Me a Message</h2>
          <p className='max-w-sm text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolores
            voluptate, quas nesciunt recusandae labore qui dolor sed error
            veritatis, eum est. Rerum perferendis provident necessitatibus non
            cum labore dolorum?
          </p>
          <div className='flex gap-3 py-5 flex-col my-5'>
            <Link href={'tel:212625818499'}>
              <div className='flex gap-4 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z'
                  />
                </svg>
                <button>+212 625818499</button>
              </div>
            </Link>
            <Link href={'mailto:azdinebouali2002@gmail.com'}>
              <div className='flex gap-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.588 1.063T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .725.45 1.137T18.5 15q.6 0 1.05-.413T20 13.45V12q0-3.275-2.363-5.638T12 4Q8.725 4 6.362 6.363T4 12q0 3.275 2.363 5.638T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z'
                  />
                </svg>
                <button>azdinebouali2002@gmail.com</button>
              </div>
            </Link>
            <Link href={'mailto:azdinebouali2002@gmail.com'}>
              <div className='flex gap-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z'
                  />
                </svg>
                <button>Morocco</button>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <form
            action='https://send.pageclip.co/bzDEnc0kp4p3Ekn14rnubRTv0KzG1J2m/azdinePortfolio'
            method='post'
            className='mt-5 p-5   max-w-sm flex flex-col gap-5 bg-gradient-to-br from-[#4eb7df] to-[#4F4CBA] rounded-lg'
          >
            <label htmlFor='name'>
              <input
                className='pl-5 bg-slate-800 text-white py-2 rounded-md w-auto'
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                autoComplete='off'
              />
            </label>
            <label htmlFor='email'>
              <input
                className='pl-5 bg-slate-800 text-white py-2 rounded-md w-auto'
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                autoComplete='off'
              />
            </label>
            <label htmlFor='message'>
              <textarea
                className='p-5 rounded-md bg-slate-800 text-white h-36'
                name='message'
                id='message'
                placeholder='Message'
              ></textarea>
            </label>
            <button className='pageclip-form__submit' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
