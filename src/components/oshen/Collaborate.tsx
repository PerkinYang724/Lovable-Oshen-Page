import { Button } from '@/components/ui/button';
import { MessageCircle, Podcast, Lightbulb } from 'lucide-react';

const Collaborate = () => {
  const opportunities = [
    {
      icon: Lightbulb,
      title: "Collaborations",
      description: "Let's build something amazing together"
    },
    {
      icon: Podcast,
      title: "Speaking & Podcasts",
      description: "Love talking about AI, creativity, and entrepreneurship"
    },
    {
      icon: MessageCircle,
      title: "Building Projects",
      description: "Always excited to work on meaningful ideas"
    }
  ];

  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
            Let's Create Something <span className="cinematic-gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            I'm always open to connecting with fellow creators, founders, and anyone passionate about using technology for good
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opp, index) => (
            <div 
              key={index}
              className="cinematic-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <opp.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{opp.title}</h3>
              <p className="text-gray-300">{opp.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="cinematic-cta text-lg px-10 py-6 font-semibold shadow-2xl hover:shadow-glow transition-all duration-500 transform hover:scale-105"
            onClick={() => window.open('mailto:hello@oshenstudio.com', '_blank')}
          >
            Get in Touch →
          </Button>
          <p className="text-gray-400 mt-4">
            Or DM me on Instagram or LinkedIn
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
