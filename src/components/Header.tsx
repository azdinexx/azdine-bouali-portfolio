import Link from 'next/link';

function Header() {
  const liStyles =
    'text-sm font-medium text-gray-700 hover:text-gray-900 mr-4 last:mr-0 hover:underline transition-all duration-400 ease-in-out';
  return (
    <header className='py-4 flex items-center gap-2 justify-between mx-6'>
      <h1 className='text-lg font-bold' id='top'>
        Portfolio
      </h1>
      {/* navigation */}
      <nav>
        <ul className='flex'>
          <li className={liStyles}>
            <Link href='/'>Home</Link>
          </li>

          <li className={liStyles}>
            <Link href='#projects' className='scroll-smooth  '>
              Projects
            </Link>
          </li>
          <li className={liStyles}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
