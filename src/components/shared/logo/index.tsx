import { Sansita_Swashed } from 'next/font/google';

const Sanita = Sansita_Swashed({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
function Logo() {
  return (
    <span className={`${Sanita.className} text-xl  py-1 `}>Azdine Bouali</span>
  );
}

export default Logo;
