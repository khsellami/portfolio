import { useState } from 'react';

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio & Website Generator',
      description: 'Web platform allowing users to create personal portfolios and design websites for clients. Built with modern web technologies.',
      technologies: ['HTML', 'CSS', 'Tailwind CSS', 'PHP', 'MySQL'],
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Intelligent Voice Assistant',
      description: 'Smart voice assistant capable of understanding and responding to user commands using natural language processing.',
      technologies: ['Python', 'NLP', 'SpeechRecognition', 'AI Models'],
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
      icon: '🎤'
    },
    {
      id: 3,
      title: 'Human Action Recognition',
      description: 'Computer vision system recognizing human actions (walking, jumping, running) using pose estimation and deep learning.',
      technologies: ['Python', 'OpenPose', 'TensorFlow', 'Keras', 'OpenCV'],
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
      icon: '🏃'
    },
    {
      id: 4,
      title: 'Mobile App for Opticians',
      description: 'Mobile application for optician management developed during internship at KJR Telecom using web technologies.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
      icon: '👓'
    },
    {
      id: 5,
      title: 'Data Science Projects',
      description: 'Various data analysis and visualization projects using machine learning algorithms and statistical methods.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
      icon: '📊'
    },
    {
      id: 6,
      title: 'Machine Learning Models',
      description: 'Implementation of various ML algorithms for classification, regression, and data analysis using modern frameworks.',
      technologies: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'Seaborn'],
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
      icon: '🤖'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fadeInUp">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative glass-effect rounded-2xl overflow-hidden hover-glow cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project image */}
                <div className="relative h-48 bg-gradient-to-br from-portfolio-violet to-portfolio-pink overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white opacity-50 group-hover:opacity-70 transition-opacity">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        className="px-4 py-2 bg-portfolio-violet text-white rounded-lg hover:bg-portfolio-violet-dark transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        className="px-4 py-2 bg-portfolio-pink text-white rounded-lg hover:bg-portfolio-pink-light transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-portfolio-pink transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-portfolio-violet bg-opacity-20 text-portfolio-violet rounded-full border border-portfolio-violet border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-portfolio-violet rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-portfolio-violet to-portfolio-pink text-white font-semibold rounded-full hover-glow transition-all duration-300">
              <a href='https://github.com/khsellami'>View More Projects</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};