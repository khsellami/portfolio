
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-lg backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text animate-fadeInUp">
            Portfolio
          </div>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.id} className={`animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-white transition-all duration-300 hover:text-portfolio-pink ${
                    activeSection === item.id ? 'text-portfolio-violet' : ''
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-portfolio-violet to-portfolio-pink transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
          
          <div className="md:hidden">
            <button className="text-white hover:text-portfolio-pink transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
