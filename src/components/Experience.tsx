import { LogosReact } from '@/icones/react';
import { SkillIconsNextjsDark } from '@/icones/next';
import { VscodeIconsFileTypeNode } from '@/icones/node';
import { DeviconJavascript } from '@/icones/js';
import { DeviconVuejs } from '@/icones/vue';
import { LogosTailwindcssIcon } from '@/icones/tailwind';

function Experience() {
  return (
    <div className='min-h-screen'>
      <h2 className='uppercase text-center font-bold mb-10 mt-20'>
        Experience
      </h2>
      <div className='relative grid grid-cols-3 gap-20 p-20 place-items-center'>
        <Icon svg={<LogosReact />} title='React' />
        <Icon svg={<SkillIconsNextjsDark />} title='Next.js' />
        <Icon svg={<VscodeIconsFileTypeNode />} title='Node' />
        <Icon svg={<DeviconJavascript />} title='JavaScript' />
        <Icon svg={<DeviconVuejs />} title='Vue' />
        <Icon svg={<LogosTailwindcssIcon />} title='Tailwind' />
      </div>
    </div>
  );
}

export default Experience;

function Icon({ svg, title }: { svg: React.ReactNode; title: string }) {
  return (
    <div className='  flex items-center flex-col gap-2'>
      {svg}
      <p>{title}</p>
    </div>
  );
}
