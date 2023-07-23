import { Sansita_Swashed } from 'next/font/google';

export const sansita_Swashed = Sansita_Swashed({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

function Header() {
  return (
    <div className='py-4 flex justify-between items-center'>
      <div className={`${sansita_Swashed.className} text-lg`}>
        Azdine Bouali
      </div>
      <nav className='flex gap-10 items-center'>
        <ul className='flex gap-4'>
          <li>contact</li>
          <li>services</li>
        </ul>
        <button
          className='py-2 px-6 font-
          rounded-md bg-gradient-to-r from-[#5e9fe1] to-[#4F4CBA]'
        >
          Hire me
        </button>
      </nav>
    </div>
  );
}

export default Header;
