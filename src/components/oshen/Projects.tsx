import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Users,
      iconImage: "/lovable-uploads/glowup.png",
      name: "Glowup",
      tagline: "build your habit 1% every day",
      description: "A mobile app that helps you build your habit 1% every day",
      demo: "http://localhost:8081/onboarding-question",
      story: "#"
    },
    {
      icon: Zap,
      backgroundColor: "bg-gradient-to-br from-red-400 to-red-500",
      name: "Pomodoro Flow",
      tagline: "A focus app powered by AI",
      description: "Smart productivity tool that adapts to your work patterns and helps you achieve deep focus states",
      demo: "https://gemini-pomodoro-pwa.vercel.app",
      story: "#"
    },
    {
      icon: Sparkles,
      iconImage: "/lovable-uploads/AIC.png",
      name: "AI Collaborate Club",
      tagline: "Building a student AI community",
      description: "A thriving community where students learn, experiment, and build together with AI tools",
      demo: "https://www.scuaiclub.com",
      story: "https://youtu.be/NQCd6QKWQ9k"
    }
  ];

  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
            Things I've <span className="cinematic-gradient-text">Built</span>
          </h2>
          <p className="text-xl text-gray-200">
            Projects that blend creativity, technology, and impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cinematic-card p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className={`w-20 h-20 rounded-2xl mb-4 ${project.iconImage ? '' : `${project.backgroundColor || 'bg-gradient-to-br from-yellow-400 to-yellow-500'} flex items-center justify-center`}`}>
                    {project.iconImage ? (
                      <img 
                        src={project.iconImage} 
                        alt={project.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <project.icon className="h-10 w-10 text-black" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-yellow-400 font-semibold">{project.tagline}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <Button
                      className="cinematic-cta"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Try Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.open(project.story, '_blank')}
                    >
                      Watch Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
