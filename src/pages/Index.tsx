import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationSection from '@/components/CertificationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              
            </p>
            <p className="text-sm text-gray-400">
             
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
