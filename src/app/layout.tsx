import './globals.css';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';

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
      <body className={poppins.className}>
        <main className='max-w-5xl mx-auto '>{children}</main>
      </body>
    </html>
  );
}
