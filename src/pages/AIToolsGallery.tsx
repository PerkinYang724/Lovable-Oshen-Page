import { useState } from 'react';
import { ExternalLink, Search, Filter } from 'lucide-react';
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

interface AITool {
    id: string;
    name: string;
    description: string;
    category: string;
    url: string;
    icon?: string;
    tags: string[];
}

const AIToolsGallery = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Sample AI tools - you can expand this list
    const aiTools: AITool[] = [
        {
            id: '1',
            name: 'ChatGPT',
            description: 'Advanced conversational AI for writing, coding, analysis, and creative tasks',
            category: 'Writing & Content',
            url: 'https://chat.openai.com',
            tags: ['writing', 'coding', 'analysis', 'conversation']
        },
        {
            id: '2',
            name: 'Claude',
            description: 'Anthropic AI assistant with strong reasoning and long context capabilities',
            category: 'Writing & Content',
            url: 'https://claude.ai',
            tags: ['writing', 'analysis', 'reasoning', 'long-context']
        },
        {
            id: '3',
            name: 'Midjourney',
            description: 'AI image generation with stunning artistic and photorealistic results',
            category: 'Design & Visual',
            url: 'https://midjourney.com',
            tags: ['image-generation', 'art', 'design', 'visual']
        },
        {
            id: '4',
            name: 'Runway ML',
            description: 'Creative AI tools for video editing, image generation, and visual effects',
            category: 'Design & Visual',
            url: 'https://runwayml.com',
            tags: ['video', 'editing', 'visual-effects', 'generation']
        },
        {
            id: '5',
            name: 'Notion AI',
            description: 'AI-powered workspace for notes, docs, databases, and project management',
            category: 'Productivity',
            url: 'https://notion.so',
            tags: ['notes', 'productivity', 'organization', 'writing']
        },
        {
            id: '6',
            name: 'GitHub Copilot',
            description: 'AI pair programmer that suggests code and entire functions in real-time',
            category: 'Development',
            url: 'https://github.com/features/copilot',
            tags: ['coding', 'development', 'programming', 'assistant']
        },
        {
            id: '7',
            name: 'Perplexity',
            description: 'AI-powered search engine that provides accurate answers with citations',
            category: 'Research & Analysis',
            url: 'https://perplexity.ai',
            tags: ['search', 'research', 'answers', 'information']
        },
        {
            id: '8',
            name: 'Grammarly',
            description: 'AI writing assistant that helps improve grammar, clarity, and tone',
            category: 'Writing & Content',
            url: 'https://grammarly.com',
            tags: ['writing', 'grammar', 'editing', 'communication']
        },
        {
            id: '9',
            name: 'Figma',
            description: 'Design tool with AI features for faster prototyping and collaboration',
            category: 'Design & Visual',
            url: 'https://figma.com',
            tags: ['design', 'prototyping', 'ui-ux', 'collaboration']
        },
        {
            id: '10',
            name: 'ElevenLabs',
            description: 'AI voice synthesis and text-to-speech with natural, human-like voices',
            category: 'Audio & Voice',
            url: 'https://elevenlabs.io',
            tags: ['voice', 'audio', 'text-to-speech', 'synthesis']
        },
        {
            id: '11',
            name: 'Jasper',
            description: 'AI content creation platform for marketing copy, blogs, and social media',
            category: 'Writing & Content',
            url: 'https://jasper.ai',
            tags: ['marketing', 'content', 'copywriting', 'social-media']
        },
        {
            id: '12',
            name: 'Cursor',
            description: 'AI-powered code editor that understands context and writes code for you',
            category: 'Development',
            url: 'https://cursor.sh',
            tags: ['coding', 'editor', 'development', 'assistant']
        }
    ];

    const categories = ['all', ...Array.from(new Set(aiTools.map(tool => tool.category)))];

    const filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <SEO
                title="A Curated Map of AI Tools - Oshen Studio"
                description="Explore a curated collection of AI tools for creators, developers, and entrepreneurs. Discover tools for writing, design, coding, productivity, and more."
                keywords="AI tools, AI software, productivity tools, AI for creators, AI for developers, AI tools gallery, curated AI tools"
                url="https://oshenstudio.com/ai-tools"
                type="website"
            />

            <ModernHeader />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 cinematic-text-shadow">
                            A Curated Map of <span className="cinematic-gradient-text">AI Tools</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover the AI tools that have transformed my workflow. From writing and design to coding and productivity.
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="mb-8 flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search tools by name, description, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            />
                        </div>
                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="pl-12 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none cursor-pointer"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-gray-800">
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6 text-gray-400">
                        Showing {filteredTools.length} of {aiTools.length} tools
                    </div>

                    {/* Tools Grid */}
                    {filteredTools.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTools.map((tool) => (
                                <div
                                    key={tool.id}
                                    className="cinematic-card p-6 hover:scale-105 transition-all duration-300 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                                {tool.name}
                                            </h3>
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-400 bg-yellow-400/10 rounded-full mb-3">
                                                {tool.category}
                                            </span>
                                        </div>
                                        <a
                                            href={tool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-yellow-400 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>

                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                        {tool.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {tool.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs text-gray-400 bg-gray-700/50 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors"
                                    >
                                        Visit Tool <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-400 text-lg">No tools found matching your search.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                                className="mt-4 text-yellow-400 hover:text-yellow-300 underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AIToolsGallery;

