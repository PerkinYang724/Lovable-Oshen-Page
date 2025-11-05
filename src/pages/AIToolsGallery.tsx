"use client";

import React, { useState } from "react";
import {
    ExternalLink,
    Search,
    Filter,
    Sparkles,
    ArrowDown,
} from "lucide-react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

interface AITool {
    id: string;
    name: string;
    logo?: string;
    description: string;
    link: string;
    tags: string[];
    industry: string;
    purpose?: string;
    price?: string;
    difficulty?: string;
    featured?: boolean;
    perkinsPick?: boolean;
    review?: string;
}

const AIToolsGallery: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
    const [selectedPrice, setSelectedPrice] = useState<string>("all");
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 🧩 Tool Data
    const aiTools: AITool[] = [
        {
            id: "1",
            name: "Runway",
            description:
                "Turn rough ideas into cinematic cuts with AI-powered video editing.",
            link: "https://runwayml.com",
            tags: ["Video", "AI Editing", "Free Plan"],
            industry: "Creators / Filmmakers",
            price: "Freemium",
            difficulty: "Easy",
            featured: true,
            perkinsPick: true,
            review: "Used in my recent video edit.",
        },
        {
            id: "2",
            name: "Pika Labs",
            description: "Generate stunning video content from text prompts in seconds.",
            link: "https://pika.art",
            tags: ["Video Generation", "Text-to-Video"],
            industry: "Creators / Filmmakers",
            price: "Freemium",
            difficulty: "Medium",
        },
        {
            id: "3",
            name: "ElevenLabs",
            description: "Create natural, human-like voices for your content.",
            link: "https://elevenlabs.io",
            tags: ["Voice", "Text-to-Speech", "Free Plan"],
            industry: "Creators / Filmmakers",
            price: "Freemium",
            difficulty: "Easy",
            perkinsPick: true,
        },
        {
            id: "4",
            name: "Midjourney",
            description: "Generate breathtaking visuals and concept art.",
            link: "https://midjourney.com",
            tags: ["Image Generation", "Art"],
            industry: "Creators / Filmmakers",
            price: "Paid",
            difficulty: "Medium",
            featured: true,
        },
        {
            id: "5",
            name: "Notion AI",
            description: "Your AI-powered workspace for everything.",
            link: "https://notion.so",
            tags: ["Productivity", "Writing", "Free Plan"],
            industry: "Startups / Founders",
            price: "Freemium",
            difficulty: "Easy",
            perkinsPick: true,
            featured: true,
        },
        {
            id: "6",
            name: "ChatGPT",
            description:
                "Your AI assistant for strategy, writing, and problem-solving.",
            link: "https://chat.openai.com",
            tags: ["Writing", "Strategy", "Free Plan"],
            industry: "Startups / Founders",
            price: "Freemium",
            difficulty: "Easy",
            featured: true,
        },
        {
            id: "7",
            name: "Typedream AI",
            description: "Build beautiful websites without code.",
            link: "https://typedream.com",
            tags: ["No-Code", "Web Builder"],
            industry: "Startups / Founders",
            price: "Freemium",
            difficulty: "Easy",
        },
        {
            id: "8",
            name: "Claude",
            description: "Deep reasoning AI for complex tasks and long documents.",
            link: "https://claude.ai",
            tags: ["Writing", "Analysis", "Free Plan"],
            industry: "Startups / Founders",
            price: "Freemium",
            difficulty: "Easy",
        },
        {
            id: "9",
            name: "Perplexity",
            description: "Get accurate answers with citations for your research.",
            link: "https://perplexity.ai",
            tags: ["Research", "Citations", "Free Plan"],
            industry: "Students",
            price: "Freemium",
            difficulty: "Easy",
            perkinsPick: true,
            featured: true,
        },
        {
            id: "10",
            name: "StudyGPT",
            description: "AI tutor that helps you learn and understand concepts.",
            link: "https://chat.openai.com",
            tags: ["Learning", "Tutoring", "Free Plan"],
            industry: "Students",
            price: "Freemium",
            difficulty: "Easy",
        },
        {
            id: "11",
            name: "Grammarly",
            description:
                "Perfect your writing with AI-powered grammar and style checks.",
            link: "https://grammarly.com",
            tags: ["Writing", "Grammar", "Free Plan"],
            industry: "Students",
            price: "Freemium",
            difficulty: "Easy",
        },
        {
            id: "12",
            name: "Replit AI",
            description: "Code, deploy, and ship faster with AI assistance.",
            link: "https://replit.com",
            tags: ["Coding", "Deployment", "Free Plan"],
            industry: "Developers",
            price: "Freemium",
            difficulty: "Medium",
            featured: true,
        },
        {
            id: "13",
            name: "v0.dev",
            description: "Generate beautiful UI components from text descriptions.",
            link: "https://v0.dev",
            tags: ["UI Components", "React", "Free Plan"],
            industry: "Developers",
            price: "Free",
            difficulty: "Easy",
            perkinsPick: true,
        },
        {
            id: "14",
            name: "Lovable",
            description: "Build full-stack apps with AI in minutes.",
            link: "https://lovable.dev",
            tags: ["Full-Stack", "App Builder", "Free Plan"],
            industry: "Developers",
            price: "Freemium",
            difficulty: "Easy",
        },
        {
            id: "15",
            name: "GitHub Copilot",
            description: "Your AI pair programmer that writes code alongside you.",
            link: "https://github.com/features/copilot",
            tags: ["Coding", "IDE", "Paid"],
            industry: "Developers",
            price: "Paid",
            difficulty: "Easy",
        },
        {
            id: "16",
            name: "Cursor",
            description: "AI-powered code editor that understands your context.",
            link: "https://cursor.sh",
            tags: ["Code Editor", "AI Assistant"],
            industry: "Developers",
            price: "Freemium",
            difficulty: "Easy",
            featured: true,
        },
        {
            id: "17",
            name: "OpusClip",
            description: "Turn long videos into viral short-form content automatically.",
            link: "https://opusclip.com",
            tags: ["Video Editing", "Short Form", "Free Plan"],
            industry: "Marketing",
            price: "Freemium",
            difficulty: "Easy",
            featured: true,
        },
        {
            id: "18",
            name: "Copy.ai",
            description: "Generate marketing copy that converts.",
            link: "https://copy.ai",
            tags: ["Copywriting", "Marketing", "Free Plan"],
            industry: "Marketing",
            price: "Freemium",
            difficulty: "Easy",
        },
        {
            id: "19",
            name: "Jasper",
            description: "Create content that matches your brand voice.",
            link: "https://jasper.ai",
            tags: ["Content", "Brand Voice"],
            industry: "Marketing",
            price: "Paid",
            difficulty: "Easy",
        },
        {
            id: "20",
            name: "ClimateGPT",
            description: "AI-powered insights for climate action and sustainability.",
            link: "https://www.earth.org/climategpt/",
            tags: ["Climate", "Research", "Free Plan"],
            industry: "Sustainability / Energy",
            price: "Free",
            difficulty: "Easy",
        },
        {
            id: "21",
            name: "Earth Engine",
            description:
                "Analyze planetary-scale environmental data with AI.",
            link: "https://earthengine.google.com",
            tags: ["Data Analysis", "Environmental", "Free Plan"],
            industry: "Sustainability / Energy",
            price: "Freemium",
            difficulty: "Medium",
        },
    ];

    // Filters
    const industries = [
        "all",
        "Creators / Filmmakers",
        "Startups / Founders",
        "Students",
        "Developers",
        "Marketing",
        "Sustainability / Energy",
    ];
    const prices = ["all", "Free", "Freemium", "Paid"];
    const difficulties = ["all", "Easy", "Medium", "Hard"];

    const featuredTools = aiTools.filter((t) => t.featured).slice(0, 5);

    const filteredTools = aiTools.filter((tool) => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            );
        const matchesIndustry =
            selectedIndustry === "all" || tool.industry === selectedIndustry;
        const matchesPrice =
            selectedPrice === "all" || tool.price === selectedPrice;
        const matchesDifficulty =
            selectedDifficulty === "all" || tool.difficulty === selectedDifficulty;
        return matchesSearch && matchesIndustry && matchesPrice && matchesDifficulty;
    });

    const toolsByIndustry = industries
        .filter((i) => i !== "all")
        .map((industry) => ({
            industry,
            tools: filteredTools.filter((t) => t.industry === industry),
        }))
        .filter((group) => group.tools.length > 0);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Email submitted:", email);
        setTimeout(() => {
            setIsSubmitting(false);
            setEmail("");
            alert("Thanks for subscribing! Check your email for confirmation.");
        }, 1000);
    };

    const scrollToTools = () => {
        document.getElementById("tools-section")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            <SEO
                title="AI Tools That Help You Flow - Oshen Studio"
                description="Curated collection of AI tools for creators, students, and builders."
                keywords="AI tools, AI apps, creative automation, Oshen Studio"
                url="https://oshenstudio.com/ai-tools"
                type="website"
            />

            <ModernHeader />

            {/* Hero */}
            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        AI Tools That Help You{" "}
                        <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                            Flow
                        </span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                        A curated collection of AI tools for creators, students, and builders.
                    </p>
                    <Button
                        onClick={scrollToTools}
                        className="btn-gradient font-semibold px-8 py-5 text-lg shadow-lg hover:scale-105 transition"
                    >
                        Explore the Tools
                        <ArrowDown className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>

            {/* Featured */}
            {featuredTools.length > 0 && (
                <section className="py-16 bg-gray-900/60">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-3 mb-8">
                            <Sparkles className="h-6 w-6 text-yellow-400" />
                            <h2 className="text-3xl font-bold">This Week’s Flow Tools</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredTools.map((tool) => (
                                <div
                                    key={tool.id}
                                    className="cinematic-card p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:scale-[1.02] transition-all"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-semibold">{tool.name}</h3>
                                        {tool.perkinsPick && (
                                            <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full">
                                                Perkin’s Pick
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">
                                        {tool.description}
                                    </p>
                                    {tool.review && (
                                        <p className="text-xs text-yellow-400 italic mb-2">
                                            “{tool.review}”
                                        </p>
                                    )}
                                    <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                                        <div className="flex gap-2 flex-wrap">
                                            {tool.tags.slice(0, 2).map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={tool.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-yellow-400 hover:text-yellow-300"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Search & Filter */}
            <section
                id="tools-section"
                className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 py-6"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative mb-4">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="What do you want to do today?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <Filter className="text-gray-400 h-4 w-4" />
                        <select
                            value={selectedIndustry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                            className="bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white"
                        >
                            {industries.map((i) => (
                                <option key={i} value={i} className="bg-gray-800">
                                    {i === "all" ? "All Industries" : i}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.target.value)}
                            className="bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white"
                        >
                            {prices.map((p) => (
                                <option key={p} value={p} className="bg-gray-800">
                                    {p === "all" ? "All Prices" : p}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                            className="bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white"
                        >
                            {difficulties.map((d) => (
                                <option key={d} value={d} className="bg-gray-800">
                                    {d === "all" ? "All Levels" : d}
                                </option>
                            ))}
                        </select>
                        {(selectedIndustry !== "all" ||
                            selectedPrice !== "all" ||
                            selectedDifficulty !== "all" ||
                            searchQuery) && (
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedIndustry("all");
                                        setSelectedPrice("all");
                                        setSelectedDifficulty("all");
                                    }}
                                    className="px-3 py-2 text-gray-400 hover:text-white"
                                >
                                    Clear
                                </button>
                            )}
                    </div>
                </div>
            </section>

            {/* Tools by Industry */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {toolsByIndustry.length > 0 ? (
                        toolsByIndustry.map((group) => (
                            <div key={group.industry} className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 text-gray-200">
                                    {group.industry}
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.tools.map((tool) => (
                                        <div
                                            key={tool.id}
                                            className="cinematic-card p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:scale-[1.02] transition-all"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-semibold">{tool.name}</h3>
                                                {tool.perkinsPick && (
                                                    <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full">
                                                        Perkin's Pick
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-300 text-sm mb-4">
                                                {tool.description}
                                            </p>
                                            {tool.review && (
                                                <p className="text-xs text-yellow-400 italic mb-3">
                                                    "{tool.review}"
                                                </p>
                                            )}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tool.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                                                <div className="flex gap-2 text-xs text-gray-400">
                                                    {tool.price && <span>{tool.price}</span>}
                                                    {tool.difficulty && (
                                                        <>
                                                            <span>•</span>
                                                            <span>{tool.difficulty}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <a
                                                    href={tool.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-yellow-400 hover:text-yellow-300"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-lg">
                                No tools found matching your filters.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Email CTA */}
            <section className="py-16 bg-gray-900/60">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Get Weekly AI Tool Recommendations
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Join our newsletter and discover new AI tools every week.
                    </p>
                    <form onSubmit={handleEmailSubmit} className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
                        />
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-gradient font-semibold px-6 py-3"
                        >
                            {isSubmitting ? "Subscribing..." : "Subscribe"}
                        </Button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AIToolsGallery;
