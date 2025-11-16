import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, BookOpen, Star, Clock } from 'lucide-react';
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Tool data structure - in production, this would come from a CMS or API
const toolsData: Record<string, {
    name: string;
    icon: string;
    description: string;
    externalUrl: string;
    review: {
        rating: number;
        title: string;
        content: string;
        pros: string[];
        cons: string[];
        verdict: string;
    };
    tutorialVideos: {
        id: string;
        title: string;
        description: string;
        duration?: string;
        type: 'youtube' | 'wistia';
        embedUrl: string;
    }[];
    blogPosts: {
        slug: string;
        title: string;
        excerpt: string;
        date: string;
    }[];
}> = {
    'chatgpt': {
        name: 'ChatGPT',
        icon: '🤖',
        description: 'My go-to for brainstorming and content creation',
        externalUrl: 'https://chat.openai.com',
        review: {
            rating: 4,
            title: 'The AI Assistant That Changed How I Work',
            content: 'ChatGPT has become an indispensable part of my creative workflow. Whether I\'m brainstorming video ideas, writing scripts, or solving complex problems, it\'s always there to help me think through challenges from new angles.',
            pros: [
                'Incredible versatility - handles everything from creative writing to technical problem-solving',
                'Natural conversation flow makes it feel like working with a smart colleague',
                'Constantly improving with regular updates and new features',
                'Free tier is surprisingly capable for most use cases'
            ],
            cons: [
                'Can sometimes hallucinate facts, so fact-checking is essential',
                'Free tier has rate limits during peak hours',
                'Not always great at maintaining context in very long conversations'
            ],
            verdict: 'If you\'re only going to use one AI tool, make it ChatGPT. It\'s the Swiss Army knife of AI assistants and has fundamentally changed how I approach creative and analytical work.'
        },
        tutorialVideos: [
            {
                id: '1',
                title: 'Getting Started with ChatGPT for Content Creation',
                description: 'Learn how to use ChatGPT to brainstorm ideas, write scripts, and create engaging content.',
                duration: '12:34',
                type: 'youtube',
                embedUrl: 'https://www.youtube.com/embed/PDcuMwnxbZE'
            }
        ],
        blogPosts: [
            {
                slug: 'chatgpt-content-creation',
                title: 'How I Use ChatGPT for Video Script Writing',
                excerpt: 'Discover my workflow for creating compelling video scripts using ChatGPT as a creative partner.',
                date: '2024-01-15'
            }
        ]
    },
    'notion': {
        name: 'Notion',
        icon: '/lovable-uploads/notion-logo.png', // Replace with your Notion logo image path
        description: 'Perfect for organizing life and creative projects',
        externalUrl: 'https://notion.so',
        review: {
            rating: 5,
            title: 'The All-in-One Workspace I Can\'t Live Without',
            content: 'Notion has completely transformed how I organize my projects, ideas, and life. It\'s the one app that replaced multiple tools for me - notes, project management, databases, and even my personal wiki.',
            pros: [
                'Incredibly flexible - can be a simple note app or a complex project management system',
                'Beautiful, clean interface that makes organizing enjoyable',
                'Powerful database features for tracking projects and ideas',
                'Great collaboration features for team projects',
                'Free tier is very generous'
            ],
            cons: [
                'Can be overwhelming for beginners due to its flexibility',
                'Mobile app is good but not as powerful as desktop',
                'Learning curve for advanced features like formulas and relations'
            ],
            verdict: 'Notion is perfect for creators and knowledge workers who want one tool to rule them all. It\'s become the central hub for all my projects and ideas.'
        },
        tutorialVideos: [
            {
                id: '1',
                title: 'How I Use Notion to Organize My Entire Day',
                description: 'In this video, I’m breaking down exactly how I use Notion’s Time Block template to plan my entire day — before I even start doing anything.\n\nThis is the same workflow I use as a college student + creator to stay organized, reduce stress, and make every morning intentional instead of chaotic.',
                duration: '08:42',
                type: 'youtube',
                embedUrl: 'https://youtu.be/LRc1m7xPWCc?si=wtDkXnxtbjR1zq-Z'
            }
        ],
        blogPosts: [
            {
                slug: 'notion-for-creators',
                title: 'My Notion Setup for Content Creators',
                excerpt: 'A deep dive into how I organize my entire creative workflow in Notion.',
                date: '2024-02-10'
            }
        ]
    },
    'n8n': {
        name: 'n8n',
        icon: '/lovable-uploads/n8n-logo.png',
        description: 'My favorite tool for automating workflows',
        externalUrl: 'https://n8n.io',
        review: {
            rating: 5,
            title: 'The Automation Powerhouse That Saves Me Hours',
            content: 'n8n is like having a technical co-founder who never sleeps. I use it to automate everything from content distribution to data collection, saving me countless hours every week.',
            pros: [
                'Self-hostable, so you own your data completely',
                'Visual workflow builder makes complex automations intuitive',
                'Huge library of integrations with popular tools',
                'Free self-hosted version is incredibly powerful',
                'Active community and great documentation'
            ],
            cons: [
                'Self-hosting requires some technical knowledge',
                'Cloud version can get expensive for high-volume workflows',
                'Learning curve for complex workflows'
            ],
            verdict: 'If you do anything repetitive in your workflow, n8n can probably automate it. It\'s the most powerful automation tool I\'ve used, and the self-hosted option makes it perfect for privacy-conscious creators.'
        },
        tutorialVideos: [
            {
                id: '1',
                title: 'Automating Your Content Workflow with n8n',
                description: 'Learn how to set up automations that save hours every week.',
                duration: '20:15',
                type: 'youtube',
                embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            }
        ],
        blogPosts: []
    },
    'notebooklm': {
        name: 'NotebookLM',
        icon: '/lovable-uploads/notebookLM-logo.png',
        description: 'A free AI-powered notebook that allows you to study and learn anything.',
        externalUrl: 'https://notebooklm.google.com',
        review: {
            rating: 4,
            title: 'The AI Study Companion I Wish I Had in College',
            content: 'NotebookLM is Google\'s take on AI-powered note-taking, and it\'s genuinely impressive. It lets you upload documents and have conversations with them, making it perfect for research and learning.',
            pros: [
                'Completely free to use',
                'Amazing at synthesizing information from multiple sources',
                'Great for research and learning complex topics',
                'Clean, focused interface',
                'Powered by Google\'s latest AI models'
            ],
            cons: [
                'Still in early stages, so some features are limited',
                'Requires Google account',
                'File upload limits for free tier'
            ],
            verdict: 'NotebookLM is perfect for students, researchers, and anyone who needs to quickly understand complex documents. It\'s free and incredibly powerful for what it does.'
        },
        tutorialVideos: [
            {
                id: '1',
                title: 'Using NotebookLM for Research and Learning',
                description: 'Discover how to use NotebookLM to quickly understand and synthesize information from multiple sources.',
                duration: '10:45',
                type: 'youtube',
                embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            }
        ],
        blogPosts: []
    },
    'cursor': {
        name: 'Cursor',
        icon: '/lovable-uploads/cursor-logo.png',
        description: 'AI-powered coding that feels like magic',
        externalUrl: 'https://cursor.sh',
        review: {
            rating: 5,
            title: 'The Code Editor That Understands Context',
            content: 'Cursor is what happens when you combine a great code editor with AI that actually understands your codebase. It\'s not just autocomplete - it\'s like having a pair programmer who knows your entire project.',
            pros: [
                'Incredible code understanding and generation',
                'Built on VS Code, so familiar interface',
                'Great at refactoring and explaining code',
                'Context-aware suggestions based on your entire codebase',
                'Free tier is very capable'
            ],
            cons: [
                'Requires internet connection for AI features',
                'Can be resource-intensive on large codebases',
                'Learning curve for advanced features'
            ],
            verdict: 'If you write code, you need to try Cursor. It\'s made me significantly more productive and has changed how I approach coding entirely.'
        },
        tutorialVideos: [
            {
                id: '1',
                title: 'Getting Started with Cursor for AI-Powered Coding',
                description: 'Learn how to use Cursor to write code faster and better with AI assistance.',
                duration: '18:30',
                type: 'youtube',
                embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            }
        ],
        blogPosts: []
    },
    'make-com': {
        name: 'Make.com',
        icon: '/lovable-uploads/make-logo.png',
        description: 'Building complex automations with ease',
        externalUrl: 'https://make.com',
        review: {
            rating: 4,
            title: 'The No-Code Automation Platform That Just Works',
            content: 'Make.com (formerly Integromat) is like Zapier but more powerful. It\'s my go-to for complex automations that need conditional logic and data transformations.',
            pros: [
                'Visual workflow builder is intuitive and powerful',
                'Excellent for complex, multi-step automations',
                'Great data transformation tools',
                'Generous free tier',
                'Huge library of app integrations'
            ],
            cons: [
                'Can get expensive for high-volume workflows',
                'Learning curve for advanced features',
                'Some operations can be slow on free tier'
            ],
            verdict: 'Make.com is perfect for creators who need powerful automations but don\'t want to code. It\'s more flexible than Zapier and great for complex workflows.'
        },
        tutorialVideos: [
            {
                id: '1',
                title: 'Building Your First Automation with Make.com',
                description: 'Learn how to create powerful automations without writing any code.',
                duration: '14:25',
                type: 'youtube',
                embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            }
        ],
        blogPosts: []
    }
};

const convertToEmbedUrl = (url: string): string => {
    // Handle YouTube URLs
    if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (url.includes('youtube.com/embed/')) {
        return url;
    }
    return url;
};

const ToolDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const tool = slug ? toolsData[slug] : null;

    if (!tool) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
                <SEO
                    title="Tool Not Found - Oshen Studio"
                    description="The requested tool could not be found."
                />
                <ModernHeader />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
                    <p className="text-gray-300 mb-8">
                        The tool you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            <SEO
                title={`${tool.name} Review & Tutorials - Oshen Studio`}
                description={tool.description}
                url={`https://oshenstudio.com/tools/${slug}`}
            />

            <ModernHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Tools
                    </Link>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                        <div className="text-6xl md:text-7xl">
                            {tool.icon.startsWith('/') || tool.icon.startsWith('http') ? (
                                <img
                                    src={tool.icon}
                                    alt={`${tool.name} logo`}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                />
                            ) : (
                                tool.icon
                            )}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                {tool.name}
                            </h1>
                            <p className="text-xl text-gray-300 mb-6">
                                {tool.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < tool.review.rating
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400">
                                    {tool.review.rating}/5 Rating
                                </span>
                            </div>
                        </div>
                        <Button
                            asChild
                            className="btn-gradient font-semibold px-8 py-6 text-lg shadow-lg hover:scale-105 transition"
                        >
                            <a
                                href={tool.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Visit {tool.name}
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <Tabs defaultValue="review" className="w-full">
                        <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-12 bg-gray-800/50 border border-gray-700">
                            <TabsTrigger value="review" className="data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-400">
                                Review
                            </TabsTrigger>
                            <TabsTrigger value="tutorials" className="data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-400">
                                Tutorials
                            </TabsTrigger>
                            <TabsTrigger value="blog" className="data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-400">
                                Blog Posts
                            </TabsTrigger>
                        </TabsList>

                        {/* Review Tab */}
                        <TabsContent value="review" className="space-y-8">
                            <div className="cinematic-card p-8 bg-gray-800/40 rounded-2xl border border-gray-700">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-6 w-6 ${i < tool.review.rating
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <h2 className="text-3xl font-bold">{tool.review.title}</h2>
                                </div>

                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    {tool.review.content}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
                                        <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                                            <span className="text-2xl">✓</span> Pros
                                        </h3>
                                        <ul className="space-y-3">
                                            {tool.review.pros.map((pro, index) => (
                                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>{pro}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
                                        <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                                            <span className="text-2xl">✗</span> Cons
                                        </h3>
                                        <ul className="space-y-3">
                                            {tool.review.cons.map((con, index) => (
                                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                                    <span className="text-red-400 mt-1">•</span>
                                                    <span>{con}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                        Final Verdict
                                    </h3>
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        {tool.review.verdict}
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Tutorials Tab */}
                        <TabsContent value="tutorials" className="space-y-6">
                            {tool.tutorialVideos.length > 0 ? (
                                tool.tutorialVideos.map((video) => (
                                    <div
                                        key={video.id}
                                        className="cinematic-card bg-gray-800/40 rounded-2xl border border-gray-700 overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gray-900">
                                            {video.type === 'youtube' ? (
                                                <iframe
                                                    src={convertToEmbedUrl(video.embedUrl)}
                                                    title={video.title}
                                                    className="w-full h-full"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p className="text-gray-400">Video player loading...</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-4 mb-2">
                                                <h3 className="text-2xl font-bold">{video.title}</h3>
                                                {video.duration && (
                                                    <Badge variant="secondary" className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {video.duration}
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-gray-300">{video.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="cinematic-card p-12 bg-gray-800/40 rounded-2xl border border-gray-700 text-center">
                                    <Play className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                                    <p className="text-gray-400 text-lg">
                                        Tutorial videos coming soon!
                                    </p>
                                </div>
                            )}
                        </TabsContent>

                        {/* Blog Posts Tab */}
                        <TabsContent value="blog" className="space-y-6">
                            {tool.blogPosts.length > 0 ? (
                                tool.blogPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        to={`/blog/${post.slug}`}
                                        className="cinematic-card p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02] block"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <BookOpen className="h-5 w-5 text-yellow-400" />
                                                    <Badge variant="secondary">
                                                        {new Date(post.date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </Badge>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                                                <p className="text-gray-300">{post.excerpt}</p>
                                            </div>
                                            <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="cinematic-card p-12 bg-gray-800/40 rounded-2xl border border-gray-700 text-center">
                                    <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                                    <p className="text-gray-400 text-lg">
                                        Blog posts about {tool.name} coming soon!
                                    </p>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ToolDetail;

