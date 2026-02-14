import { Mic, Pen, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreatorJourney = () => {
  const posts = [
    {
      icon: Mic,
      category: "Building Oshen Studio",
      title: "From Student Founder to Creator",
      description: "How I'm combining AI, creativity, and entrepreneurship to build something meaningful",
      image: "/lovable-uploads/IMG_20240606_161728_873.JPG"
    },
    {
      icon: Pen,
      category: "What I Learned",
      title: "A curated map of AI tools",
      description: "The patterns, insights, and productivity gains from making AI part of my everyday workflow",
      image: "/lovable-uploads/IMG_20240602_153113_482.JPG"
    },
    {
      icon: Camera,
      category: "Creative Workflows",
      title: "My Content Creation System",
      description: "How I use automation and AI to create more while doing less",
      image: "/lovable-uploads/IMG_20240601_134227_301.JPG"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            The Journey
          </h2>
          <p className="text-base text-muted-foreground">
            Reflections, insights, and lessons from building in public.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const cardContent = (
              <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <post.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{post.category}</p>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{post.description}</p>
                </div>
              </div>
            );

            if (index === 0) {
              return (
                <Link key={index} to="/video-gallery" className="block h-full">
                  {cardContent}
                </Link>
              );
            }

            if (index === 1) {
              return (
                <Link key={index} to="/ai-tools" className="block h-full">
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={index} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreatorJourney;
