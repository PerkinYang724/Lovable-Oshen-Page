import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-3">
            <div className="text-base font-semibold text-foreground">
              Oshen Studio
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students and creators with AI tools, workflows, and insights to build meaningful projects.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'AI Tools', id: 'tools' },
                { label: 'Projects', id: 'projects' },
                { label: 'Journey', id: 'journey' },
                { label: 'About Perkin', id: 'about' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com/oshenstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/perkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@oshenstudio.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('community')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Oshen Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms</Link>
              <Link to="/cookie-policy" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
