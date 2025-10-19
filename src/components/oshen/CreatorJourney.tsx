import { Mic, Pen, Camera } from 'lucide-react';

const CreatorJourney = () => {
  const posts = [
    {
      icon: Mic,
      category: "Building Oshen Studio",
      title: "From Student Founder to Creator",
      description: "How I'm combining AI, creativity, and entrepreneurship to build something meaningful",
      image: "/lovable-uploads/47f8806e-3150-4774-b551-83e624d0fa40.jpg"
    },
    {
      icon: Pen,
      category: "What I Learned",
      title: "Using AI Tools Daily for 6 Months",
      description: "The patterns, insights, and productivity gains from making AI part of my everyday workflow",
      image: "/lovable-uploads/47f8806e-3150-4774-b551-83e624d0fa40.jpg"
    },
    {
      icon: Camera,
      category: "Creative Workflows",
      title: "My Content Creation System",
      description: "How I use automation and AI to create more while doing less",
      image: "/lovable-uploads/47f8806e-3150-4774-b551-83e624d0fa40.jpg"
    }
  ];

  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
            The <span className="cinematic-gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-200">
            Reflections, insights, and lessons from building in public
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="cinematic-card overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <post.icon className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-yellow-400 text-sm font-semibold mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorJourney;
