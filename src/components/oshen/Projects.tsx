import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Users, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Users,
      iconImage: "/lovable-uploads/glowup.png",
      name: "Glowup",
      tagline: "Build your habit 1% every day",
      description: "A mobile app that helps you build your habit 1% every day",
      demo: "http://localhost:8081/onboarding-question",
      story: "#"
    },
    {
      icon: Zap,
      backgroundColor: "bg-red-50",
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
    <section className="py-24 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Things I've Built
          </h2>
          <p className="text-base text-muted-foreground">
            Projects that blend creativity, technology, and impact.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className={`w-16 h-16 rounded-2xl mb-4 overflow-hidden ${project.iconImage ? '' : `${project.backgroundColor || 'bg-secondary'} flex items-center justify-center`}`}>
                    {project.iconImage ? (
                      <img
                        src={project.iconImage}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <project.icon className="h-8 w-8 text-foreground" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      className="rounded-full bg-foreground text-background hover:opacity-85 transition-opacity h-10 px-6 text-sm font-medium"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Try Demo
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-border text-foreground hover:bg-secondary h-10 px-6 text-sm font-medium"
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
