import { AkarIconsLinkedinv2Fill } from '@/icones/linkedin';
import { sansita_Swashed } from './Header';
import { IconParkGithubOne } from '@/icones/github';
function Footer() {
  return (
    <div className='border-t pt-10 flex justify-between items-center'>
      <h3 className={`${sansita_Swashed.className} text-lg`}>Azdine Bouali</h3>
      <p>2023 - azdine bouali, All rights reserved.</p>
      <div className='flex gap-4'>
        <div className='p-2 bg-gradient-to-br from-[#3e8ede] to-[#5d59c8] rounded-md'>
          <AkarIconsLinkedinv2Fill />
        </div>
        <div className='p-2 bg-gradient-to-br from-[#3e8ede] to-[#5d59c8] rounded-md'>
          <IconParkGithubOne />
        </div>
      </div>
    </div>
  );
}

export default Footer;
