import HeroNew from '@/components/sections/HeroNew';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <HeroNew />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
