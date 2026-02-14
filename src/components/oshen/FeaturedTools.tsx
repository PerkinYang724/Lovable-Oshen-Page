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
      icon: "/lovable-uploads/notion-logo.png"
    },
    {
      name: "n8n",
      description: "My favorite tool for automating workflows",
      slug: "n8n",
      icon: "/lovable-uploads/n8n-logo.png"
    },
    {
      name: "NotebookLM",
      description: "A free AI-powered notebook for studying and learning",
      slug: "notebooklm",
      icon: "/lovable-uploads/notebookLM-logo.png"
    },
    {
      name: "Cursor",
      description: "AI-powered coding that feels like magic",
      slug: "cursor",
      icon: "/lovable-uploads/cursor-logo.png"
    },
    {
      name: "Make.com",
      description: "Building complex automations with ease",
      slug: "make-com",
      icon: "/lovable-uploads/make-logo.png"
    }
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            AI Tools I Love
          </h2>
          <p className="text-base text-muted-foreground">
            The essential toolkit that powers my creative workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={`/tools/${tool.slug}`}
              className="group bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 no-underline block"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div className="flex items-start justify-between mb-4">
                {tool.icon.startsWith('/') || tool.icon.startsWith('http') ? (
                  <img
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-3xl">{tool.icon}</span>
                )}
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
