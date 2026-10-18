import { useRef } from 'react';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import useHorizontalScroll from './hooks/useHorizontalScroll.js';

export const STOPS = [
  { id: 'origin', label: 'Origin' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];
const STOP_IDS = STOPS.map((s) => s.id);

export default function App() {
  const active = useActiveSection(STOP_IDS);
  const routeRef = useRef(null);
  useHorizontalScroll(routeRef);

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <TopBar stops={STOPS} active={active} />
      <main className="route" ref={routeRef}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
