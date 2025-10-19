
import { MapPin, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home page, Link component will handle navigation to /#section
  };

  return (
    <footer className="cinematic-section text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold cinematic-gradient-text">
              Oshen Studio
            </div>
            <p className="text-gray-300">
              Empowering students and creators with AI tools, workflows, and insights to build meaningful projects.
            </p>
            <p className="text-sm text-gray-400 italic">
              "Built with creativity and AI"
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('tools')?.offsetTop || 0, behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  AI Tools
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('journey')?.offsetTop || 0, behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Journey
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop || 0, behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  About Perkin
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://instagram.com/oshenstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/perkin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@oshenstudio.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('community')?.offsetTop || 0, behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">© 2025 Oshen Studio. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-yellow-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
