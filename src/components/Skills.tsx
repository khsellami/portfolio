import { useEffect, useState } from 'react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 90, color: 'from-portfolio-violet to-portfolio-pink' },
    { name: 'Machine Learning', level: 85, color: 'from-portfolio-pink to-portfolio-violet' },
    { name: 'JavaScript/PHP', level: 80, color: 'from-portfolio-violet to-portfolio-pink' },
    { name: 'Data Science', level: 85, color: 'from-portfolio-pink to-portfolio-violet' },
    { name: 'Computer Vision', level: 75, color: 'from-portfolio-violet to-portfolio-pink' },
    { name: 'Web Development', level: 80, color: 'from-portfolio-pink to-portfolio-violet' }
  ];

  const tools = [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Scikit-Learn', icon: '🔬' },
    { name: 'Pandas', icon: '🐼' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fadeInUp">
            Skills & Technologies
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills with progress bars */}
            <div className="space-y-8 animate-slideInLeft">
              <h3 className="text-2xl font-bold text-white mb-8">Programming & AI</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-portfolio-pink font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tools grid */}
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold text-white mb-8">Tools & Frameworks</h3>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div 
                    key={tool.name}
                    className="glass-effect p-6 rounded-xl hover-glow text-center group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4 group-hover:animate-bounce">
                      {tool.icon}
                    </div>
                    <h4 className="text-white font-semibold group-hover:text-portfolio-pink transition-colors">
                      {tool.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border border-portfolio-violet opacity-10 animate-rotate" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-portfolio-pink opacity-10 animate-rotate" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>
    </section>
  );
};