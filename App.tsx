import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { TeachingSection } from './components/TeachingSection';
import { Footer } from './components/Footer';
import { PROFILE, RESEARCH_DATA, TEACHING_DATA } from './constants';

const App: React.FC = () => {
  // Simple state to handle active section highlighting in nav
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'research', 'teaching', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header activeSection={activeSection} cvUrl={PROFILE.cvUrl} />
      
      <main className="flex-grow">
        <div id="home">
          <Hero profile={PROFILE} />
        </div>
        
        <div id="research">
          <ResearchSection data={RESEARCH_DATA} />
        </div>
        
        <div id="teaching">
          <TeachingSection data={TEACHING_DATA} />
        </div>
      </main>

      <div id="contact">
        <Footer profile={PROFILE} />
      </div>
    </div>
  );
};

export default App;