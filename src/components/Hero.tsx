import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/0fb8qag6m0.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='0fb8qag6m0']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/0fb8qag6m0/swatch');
        display: block;
        filter: blur(5px);
        padding-top:56.25%;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="pt-28 pb-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-6"
          style={{ lineHeight: '1.08' }}
        >
          AI. Flow. Freedom.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
          Empowering students and creators with AI tools and creative workflows to build meaningful projects.
        </p>

        <p className="text-sm text-muted-foreground/70 mb-10">
          Learn AI tools. Master creative workflows. Design a life of focus.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover:opacity-85 transition-opacity px-8 h-12 text-sm font-medium"
            onClick={() => {
              const el = document.getElementById('demo-video');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Watch Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border text-foreground hover:bg-secondary px-8 h-12 text-sm font-medium"
            onClick={() => {
              const el = document.getElementById('community');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Community
          </Button>
        </div>

        {/* Demo Video */}
        <div id="demo-video" className="max-w-2xl mx-auto mb-20">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50" style={{ aspectRatio: '16/9' }}>
            <wistia-player media-id="0fb8qag6m0" seo="false" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: '5+', label: 'AI Tools Mastered' },
            { value: '3', label: 'Projects Launched' },
            { value: '100+', label: 'Hours Creating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
