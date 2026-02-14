import { Button } from '@/components/ui/button';
import { MessageCircle, Podcast, Lightbulb, ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Let's Create Something Together
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            I'm always open to connecting with fellow creators, founders, and anyone passionate about using technology for good.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-5">
                <opp.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{opp.title}</h3>
              <p className="text-sm text-muted-foreground">{opp.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover:opacity-85 transition-opacity px-8 h-12 text-sm font-medium"
            onClick={() => window.open('mailto:p@oshenstudio.com', '_blank')}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Or DM me on Instagram or LinkedIn
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
