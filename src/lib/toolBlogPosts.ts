import { toolsData } from '@/pages/ToolDetail';

export type ToolBlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content?: string;
    toolName: string;
    toolSlug: string;
};

export const getToolBlogPost = (slug: string): ToolBlogPost | null => {
    for (const [toolKey, tool] of Object.entries(toolsData)) {
        const blogPost = tool.blogPosts.find(p => p.slug === slug);
        if (blogPost) {
            return {
                ...blogPost,
                toolName: tool.name,
                toolSlug: toolKey
            };
        }
    }
    return null;
};

