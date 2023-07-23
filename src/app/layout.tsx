import './globals.css';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Contact from '../components/Contact';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Azdine Bouali',
  description:
    'Azdine Bouali - Full Stack Developer based in Morocco 🇲🇦 , with passion to create high quality websites and applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <script async src='https://s.pageclip.co/v1/pageclip.js'></script>
      <link
        precedence='default'
        rel='stylesheet'
        href='https://s.pageclip.co/v1/pageclip.css'
        media='screen'
      ></link>
      <body className={poppins.className}>
        <main className='max-w-5xl mx-auto '>{children}</main>
        <Contact />
      </body>
    </html>
  );
  9;
}
