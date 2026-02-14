import { Brain, Video, Lightbulb } from 'lucide-react';

const MissionSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Learn AI Tools",
      description: "Master cutting-edge AI tools that amplify your creativity and productivity."
    },
    {
      icon: Video,
      title: "Build Creative Projects",
      description: "Turn ideas into reality with practical, repeatable workflows."
    },
    {
      icon: Lightbulb,
      title: "Live with Intention",
      description: "Design a life centered on focus, freedom, and flow."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            What Oshen Studio Stands For
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technology should give you back time, not take it away. We share AI tools and creative workflows that help you design a life of intention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-5">
                <pillar.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
