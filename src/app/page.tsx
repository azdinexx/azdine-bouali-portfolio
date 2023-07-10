import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div
      className='
    min-h-screen
    px-4 md:px-2
    '
    >
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}