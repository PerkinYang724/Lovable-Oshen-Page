import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Tools', id: 'tools' },
    { label: 'Projects', id: 'projects' },
    { label: 'Journey', id: 'journey' },
    { label: 'About', id: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {!isHomePage && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondary transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="h-4 w-4 text-foreground" />
              </button>
            )}
            <Link
              to="/"
              className="text-base font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity"
            >
              Oshen Studio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo('community')}
              className="h-8 px-4 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-85 transition-opacity"
            >
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-2">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-sm text-muted-foreground hover:text-foreground py-2.5 px-2 rounded-lg hover:bg-secondary transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Button
                  onClick={() => scrollTo('community')}
                  className="w-full h-10 text-sm font-medium rounded-full bg-foreground text-background"
                >
                  Join Community
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ModernHeader;
