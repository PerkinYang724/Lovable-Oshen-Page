import { ExternalLink } from 'lucide-react';

const FeaturedTools = () => {
  const tools = [
    {
      name: "ChatGPT",
      description: "My go-to for brainstorming and content creation",
      url: "https://chat.openai.com",
      icon: "🤖"
    },
    {
      name: "Notion",
      description: "Perfect for organizing life and creative projects",
      url: "https://notion.so",
      icon: "📝"
    },
    {
      name: "n8n",
      description: "My favorite tool for automating workflows",
      url: "https://n8n.io",
      icon: "⚡"
    },
    {
      name: "NotebookLM",
      description: "A free AI-powered notebook that allows you to study and learn anything.",
      url: "https://notebooklm.google.com",
      icon: "🧠"
    },
    {
      name: "Cursor",
      description: "AI-powered coding that feels like magic",
      url: "https://cursor.sh",
      icon: "💻"
    },
    {
      name: "Make.com",
      description: "Building complex automations with ease",
      url: "https://make.com",
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
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cinematic-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{tool.icon}</span>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-300">{tool.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
