import Link from 'next/link';
import { ReactNode } from 'react';

const NavItems = [
  {
    href: '/contact',
    title: 'Contact',
  },
  {
    href: '/work',
    title: 'Work',
  },

  {
    href: '/blog',
    title: 'Blog',
  },
];

function Nav() {
  return (
    <nav className='flex gap-6 items-center'>
      <ul className='flex gap-5'>
        {NavItems.map((li) => {
          return (
            <Li key={li.href} href={li.href}>
              {li.title}
            </Li>
          );
        })}
      </ul>
      <Link href={'mailto:azdinebouali2002@gmail.com'}>
        <div className=' px-6 border-l flex gap-1 font-bold text-accent hover:opacity-80'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.588 1.063T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .725.45 1.137T18.5 15q.6 0 1.05-.413T20 13.45V12q0-3.275-2.363-5.638T12 4Q8.725 4 6.362 6.363T4 12q0 3.275 2.363 5.638T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z'
            />
          </svg>
          Email Me
        </div>
      </Link>
    </nav>
  );
}

export default Nav;

function Li({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li className='hover:text-accent'>
      <Link href={href}>{children}</Link>
    </li>
  );
}
