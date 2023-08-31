import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog ',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='max-w-5xl mx-auto '>{children}</main>
      <Footer />
    </>
  );
}
