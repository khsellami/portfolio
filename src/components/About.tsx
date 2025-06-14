export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fadeInUp">
            About me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <p className="text-lg text-gray-300 leading-relaxed">
                Computer Science and Data Engineering student with a passion for innovative technology solutions. 
                I specialize in web development, artificial intelligence, and machine learning, 
                combining technical expertise with creative problem-solving to build impactful digital experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my engineering degree while actively developing projects in machine learning, 
                computer vision, and web development. I enjoy transforming complex technical challenges into 
                elegant, user-friendly solutions that make a real difference.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass-effect p-4 rounded-lg hover-glow">
                  <h3 className="text-2xl font-bold gradient-text mb-2">10+</h3>
                  <p className="text-gray-400">Projects completed</p>
                </div>
                <div className="glass-effect p-4 rounded-lg hover-glow">
                  <h3 className="text-2xl font-bold gradient-text mb-2">3+</h3>
                  <p className="text-gray-400">Programming languages</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slideInRight">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold gradient-text mb-6">My expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-portfolio-violet rounded-full group-hover:animate-pulse" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-portfolio-pink rounded-full group-hover:animate-pulse" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">Web Development</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-portfolio-violet rounded-full group-hover:animate-pulse" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">Data Science & Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-portfolio-pink rounded-full group-hover:animate-pulse" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">Computer Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};