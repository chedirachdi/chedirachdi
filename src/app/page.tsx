import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Loading from './loading';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen" />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen" />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen" />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen" />}>
        <Contact />
      </Suspense>
    </main>
  );
}
