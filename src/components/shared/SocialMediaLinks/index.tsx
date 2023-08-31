import React from 'react';
import { Linkedin } from '@/icones/linkedin';
import { Github } from '@/icones/github';
import Link from 'next/link';
import { Discord } from '@/icones/discord';

const SOCIAL_MEDIA_LINKS = [
  {
    title: 'Discord',
    link: '#',
    icon: <Discord />,
    divider: true,
  },
  {
    title: 'Github',
    link: 'https://github.com/azdinexx',
    icon: <Github />,
    divider: true,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/azz-eddine-bouali/',
    icon: <Linkedin />,
  },
];

function SocialMediaWidget() {
  return (
    <ul className='flex  border w-fit px-2 py-2 rounded-full'>
      {SOCIAL_MEDIA_LINKS.map((elt) => {
        return (
          <li
            key={elt.title}
            className={`${
              elt.divider ? ' border-r' : ''
            } px-3 hover:text-accent`}
          >
            <Link href={elt.link} target='_blank'>
              {elt.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialMediaWidget;
