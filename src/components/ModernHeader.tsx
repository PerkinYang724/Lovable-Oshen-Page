import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const servicesItems = [
    { name: 'Product Demo Videos', href: '/product-demo-videos' },
    { name: 'Shorts', href: '/shorts' },
    { name: 'Video Production', href: '/video-production' }
  ];

  const resourcesItems = [
    { name: 'Script Generator', href: '/youtube-script-generator' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-background/90 backdrop-blur-md border-b border-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Oshen Studio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('tools')?.offsetTop || 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Tools
            </button>

            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Projects
            </button>

            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('journey')?.offsetTop || 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Journey
            </button>

            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop || 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              About
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              onClick={() => window.scrollTo({ top: document.getElementById('community')?.offsetTop || 0, behavior: 'smooth' })}
              className="btn-gradient font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-foreground hover:text-primary transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 border-t border-border/30 space-y-4">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Home
            </button>

            <button 
              onClick={() => {
                window.scrollTo({ top: document.getElementById('tools')?.offsetTop || 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Tools
            </button>

            <button 
              onClick={() => {
                window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Projects
            </button>

            <button 
              onClick={() => {
                window.scrollTo({ top: document.getElementById('journey')?.offsetTop || 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Journey
            </button>

            <button 
              onClick={() => {
                window.scrollTo({ top: document.getElementById('about')?.offsetTop || 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              About
            </button>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Button 
                onClick={() => {
                  window.scrollTo({ top: document.getElementById('community')?.offsetTop || 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="btn-gradient w-full font-semibold shadow-lg"
              >
                Join Community
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;