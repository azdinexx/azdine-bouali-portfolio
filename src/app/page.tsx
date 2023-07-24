import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Experience from '../components/Experience';

/*
import Projects from '../components/Projects';
import Footer from '../components/Footer'; */

export default function Home() {
  return (
    <>
      <div
        className='
      min-h-screen
      
      '
      >
        <Hero />
        <AboutMe />
        <Portfolio />
        <Services />
        <Experience />
        {/*       
      <Projects />
    <Footer /> */}
      </div>
    </>
  );
}
