'use client';
import { LogosReact } from '@/icones/react';
import { SkillIconsNextjsDark } from '@/icones/next';
import { VscodeIconsFileTypeNode } from '@/icones/node';
import { DeviconJavascript } from '@/icones/js';
import { DeviconVuejs } from '@/icones/vue';
import { LogosTailwindcssIcon } from '@/icones/tailwind';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className='min-h-screen'>
      <h2 className='uppercase text-center font-bold mb-10 mt-20'>
        Experience
      </h2>
      <div className='relative grid grid-cols-3 gap-20 p-20 place-items-center'>
        <Icon id={1} svg={<LogosReact />} title='React' />
        <Icon id={2} svg={<SkillIconsNextjsDark />} title='Next.js' />
        <Icon id={3} svg={<VscodeIconsFileTypeNode />} title='Node' />
        <Icon id={4} svg={<DeviconJavascript />} title='JavaScript' />
        <Icon id={5} svg={<DeviconVuejs />} title='Vue' />
        <Icon id={6} svg={<LogosTailwindcssIcon />} title='Tailwind' />
      </div>
    </div>
  );
}

export default Experience;

function Icon({
  id,
  svg,
  title,
}: {
  id: number;
  svg: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: 0.12 * id }}
      className='  flex items-center flex-col gap-2'
    >
      {svg}
      <p>{title}</p>
    </motion.div>
  );
}
