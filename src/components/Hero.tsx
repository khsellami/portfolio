
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    console.log('Téléchargement du CV...');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)`
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-portfolio-violet opacity-20 animate-float rounded-full" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-portfolio-pink opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-portfolio-violet opacity-20 animate-float rounded-full" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-40 w-24 h-24 border-2 border-portfolio-pink opacity-25 animate-float transform rotate-45" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile image with glow effect */}
          <div className="relative mx-auto w-48 h-48 animate-scaleIn">
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-violet to-portfolio-pink rounded-full animate-pulse-glow" />
            <div className="relative w-full h-full bg-portfolio-dark rounded-full border-4 border-portfolio-violet flex items-center justify-center overflow-hidden">
              <div className="w-32 h-32 bg-gradient-to-br from-portfolio-violet to-portfolio-pink rounded-full flex items-center justify-center text-4xl font-bold text-white">
                KS
              </div>
            </div>
          </div>
          
              <div className="space-y-4">
      <h1 className="text-6xl md:text-8xl font-bold animate-slideInLeft">
        <span className="block gradient-text">Khadija</span>
        <span className="block text-white animate-slideInRight" style={{ animationDelay: '0.3s' }}>
          AI-Powered Web Developer
        </span>
      </h1>

      {/* Animated subtitle */}
      <div className="text-xl md:text-2xl text-gray-300 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
        <span className="inline-block mr-2">I’m a</span>
        <span className="gradient-text font-semibold">creative developer</span>
        <span className="inline-block ml-2">passionate about</span>
        <span className="gradient-text font-semibold ml-2">AI, Machine Learning, and Web Technologies</span>
      </div>
    </div>

          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <button 
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-gradient-to-r from-portfolio-violet to-portfolio-pink rounded-full text-white font-semibold transition-all duration-300 hover-glow"
            >
              <a href="/cv.pdf" download className="relative z-10">
                Download CV
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-pink to-portfolio-violet rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-portfolio-violet rounded-full text-portfolio-violet font-semibold hover:bg-portfolio-violet hover:text-white transition-all duration-300 hover-glow"
            >
              View my projects
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-portfolio-violet rounded-full flex justify-center">
              <div className="w-1 h-3 bg-portfolio-pink rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
