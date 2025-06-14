import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send(
      'service_yyi1dcr',
      'template_xkuejbg',
      formData,
      '51x-SXmB3-0VJEkTt'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Something went wrong. Please try again.");
    });
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/khadija-sellami-057b72242/', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/khsellami', color: 'hover:text-gray-400' },
    { name: 'Email', icon: '📧', url: 'mailto:sellamikhadija14@gmail.com', color: 'hover:text-red-400' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fadeInUp">
            Contact Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-slideInLeft">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Talk About Your Project</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Have a project in mind? An idea to develop? 
                  Don't hesitate to contact me to discuss your needs 
                  and see how we can work together on AI, ML, or web development solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-violet to-portfolio-pink rounded-full flex items-center justify-center group-hover:animate-pulse">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400">Khouribga, Morocco</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-violet to-portfolio-pink rounded-full flex items-center justify-center group-hover:animate-pulse">
                    📧
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">sellamikhadija14@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-violet to-portfolio-pink rounded-full flex items-center justify-center group-hover:animate-pulse">
                    📱
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400">+212 626291660</p>
                  </div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-4 pt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover-glow ${social.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact form */}
            <div className="animate-slideInRight">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-portfolio-violet border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-pink focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-portfolio-violet border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-pink focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-portfolio-violet border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-pink focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-portfolio-violet to-portfolio-pink text-white font-semibold rounded-lg hover-glow transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-portfolio-violet border-opacity-20">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Khadija Sellami - AI & Data Engineering Student. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with ❤️ and lots of coffee.</p>
        </div>
      </footer>
    </section>
  );
};