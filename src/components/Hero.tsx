import { Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import ScrollingBrands from '@/components/ScrollingBrands';
const Hero = () => {
  useEffect(() => {
    // Add Wistia scripts to head
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/0fb8qag6m0.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    // Add Wistia styles to head
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

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);
  return <section className="relative pt-32 pb-20 overflow-hidden cinematic-section" style={{
    contain: 'layout'
  }}>
    {/* Film grain effect */}
    <div className="absolute inset-0 cinematic-grain opacity-20 z-0" style={{
      willChange: 'opacity'
    }}></div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl mx-auto" style={{
          textWrap: 'balance',
          lineHeight: '1.15'
        }}>
          <span className="cinematic-gradient-text cinematic-text-shadow">AI × Flow × Freedom</span>
        </h1>
      </div>

      {/* Subtitle 1 */}
      <div className="text-center mb-6">
        <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto cinematic-text-shadow" style={{
          lineHeight: '1.45'
        }}>Empowering students and creators with AI tools and creative workflows to build meaningful projects</p>
      </div>

      {/* Subtitle 2 */}
      <div className="text-center mb-12">
        <p className="text-base md:text-lg text-gray-300 font-normal max-w-3xl mx-auto cinematic-text-shadow" style={{
          lineHeight: '1.5'
        }}>
          Learn AI tools, master creative workflows, and design a life of <span className="font-semibold text-yellow-400">focus, freedom, and flow</span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Button size="lg" className="cinematic-cta text-lg px-10 py-6 font-semibold shadow-2xl hover:shadow-glow transition-all duration-500 transform hover:scale-105" onClick={() => window.scrollTo({ top: document.getElementById('demo-video')?.offsetTop || 0, behavior: 'smooth' })}>
          Watch Demo
        </Button>
        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-10 py-6 font-semibold transition-all duration-300" onClick={() => window.scrollTo({ top: document.getElementById('community')?.offsetTop || 0, behavior: 'smooth' })}>
          Join Community
        </Button>
      </div>

      {/* Demo Video */}
      <div id="demo-video" className="relative max-w-4xl mx-auto mb-20" style={{
        contain: 'layout'
      }}>
        <div className="relative cinematic-video-container overflow-hidden shadow-cinematic border border-white/10" style={{
          aspectRatio: '16/9',
          willChange: 'transform'
        }}>
          <wistia-player media-id="0fb8qag6m0" seo="false" aspect="1.7777777777777777"></wistia-player>
        </div>

        {/* Cinematic light flares */}
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl cinematic-flare" style={{
          willChange: 'transform, opacity'
        }}></div>
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400/15 rounded-full blur-3xl cinematic-flare" style={{
          animationDelay: '1s',
          willChange: 'transform, opacity'
        }}></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold cinematic-gradient-text mb-2">5+</div>
          <div className="text-gray-300">AI Tools Mastered</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold cinematic-gradient-text mb-2">3</div>
          <div className="text-gray-300">Projects Launched</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold cinematic-gradient-text mb-2">100+</div>
          <div className="text-gray-300">Hours Creating</div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;