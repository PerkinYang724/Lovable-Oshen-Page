import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedTools = () => {
  const tools = [
    {
      name: "ChatGPT",
      description: "My go-to for brainstorming and content creation",
      slug: "chatgpt",
      icon: "/lovable-uploads/chatgpt-logo.png"
    },
    {
      name: "Notion",
      description: "Perfect for organizing life and creative projects",
      slug: "notion",
      icon: "/lovable-uploads/notion-logo.png" // Replace with your Notion logo image path
    },
    {
      name: "n8n",
      description: "My favorite tool for automating workflows",
      slug: "n8n",
      icon: "/lovable-uploads/n8n-logo.png"
    },
    {
      name: "NotebookLM",
      description: "A free AI-powered notebook that allows you to study and learn anything.",
      slug: "notebooklm",
      icon: "/lovable-uploads/notebookLM-logo.png"
    },
    {
      name: "Cursor",
      description: "AI-powered coding that feels like magic",
      slug: "cursor",
      icon: "💻"
    },
    {
      name: "Make.com",
      description: "Building complex automations with ease",
      slug: "make-com",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
            AI Tools <span className="cinematic-gradient-text">I Love</span>
          </h2>
          <p className="text-xl text-gray-200">
            The essential toolkit that powers my creative workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={`/tools/${tool.slug}`}
              className="cinematic-card p-6 hover:scale-105 transition-all duration-300 group no-underline block cursor-pointer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div className="flex items-start justify-between mb-4">
                {tool.icon.startsWith('/') || tool.icon.startsWith('http') ? (
                  <img
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <span className="text-4xl">{tool.icon}</span>
                )}
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-300">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
