import { Brain, Video, Lightbulb } from 'lucide-react';

const MissionSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Learn AI Tools",
      description: "Master cutting-edge AI tools that amplify your creativity"
    },
    {
      icon: Video,
      title: "Build Creative Projects",
      description: "Turn ideas into reality with practical workflows"
    },
    {
      icon: Lightbulb,
      title: "Live with Intention",
      description: "Design a life of focus, freedom, and flow"
    }
  ];

  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
            What <span className="cinematic-gradient-text">Oshen Studio</span> Stands For
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We believe technology should give you back time, not take it away. Oshen Studio shares AI tools and creative workflows that help students and creators design a life of focus, freedom, and flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="cinematic-card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <pillar.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
