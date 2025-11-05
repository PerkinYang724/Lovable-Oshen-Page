import { useEffect } from 'react';
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';

// Video data structure
interface Video {
    id: string;
    type: 'youtube' | 'instagram';
    embedUrl?: string;
    reelUrl?: string;
    title: string;
    caption?: string;
}

// Helper function to convert YouTube watch URLs to embed URLs
const convertToEmbedUrl = (url: string): string => {
    // If it's already an embed URL, return as is
    if (url.includes('/embed/')) {
        return url;
    }

    // Extract video ID from watch URL
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) {
        return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }

    // Extract video ID from short URL format (youtu.be)
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) {
        return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }

    // If it's just a video ID, add embed prefix
    if (url.length === 11 && !url.includes('/')) {
        return `https://www.youtube.com/embed/${url}`;
    }

    // Return as is if we can't parse it
    return url;
};

const VideoGallery = () => {
    // Sample video content - replace with your actual videos
    const videos: Video[] = [
        {
            id: '1',
            type: 'youtube',
            embedUrl: 'https://www.youtube.com/watch?v=PDcuMwnxbZE', // Will be auto-converted to embed format
            title: 'Flow with ChatGPT',
            caption: 'Why Flow State Makes You Happier & More Productive'
        },

        {
            id: '2',
            type: 'instagram',
            reelUrl: 'https://www.instagram.com/p/DQbShAwkWvx/',
            title: 'Two Sleepy People',
            caption: 'From watching a movie @twosleepymovie that changed everything → to meeting the creator who started it all. \n this one’s personal. this one’s for the dreamers.'
        },
    ];

    // Load Instagram embed script dynamically
    useEffect(() => {
        // Only run on client-side
        if (typeof window === 'undefined') return;

        // Check if Instagram script is already loaded
        if (window.instgrm) {
            window.instgrm.Embeds.process();
            return;
        }

        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Process embeds after script loads
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        // Cleanup function
        return () => {
            // Don't remove script as it might be used elsewhere
            // Just process embeds on component mount/unmount
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
    }, []);

    // Process Instagram embeds when component updates
    useEffect(() => {
        if (typeof window !== 'undefined' && window.instgrm) {
            // Small delay to ensure DOM is ready
            const timer = setTimeout(() => {
                window.instgrm!.Embeds.process();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [videos]);

    return (
        <div className="min-h-screen cinematic-section">
            <SEO
                title="Video Gallery - Oshen Studio"
                description="Watch cinematic videos from Oshen Studio - YouTube content and Instagram Reels showcasing AI tools, creativity, and entrepreneurship."
                keywords="Oshen Studio videos, YouTube videos, Instagram Reels, creator content, AI tools videos"
                url="https://oshenstudio.com/video-gallery"
            />

            <ModernHeader />
            <Breadcrumb />

            {/* Page Header */}
            <section className="pt-32 pb-12 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 cinematic-text-shadow">
                        🎬 Oshen Studio Video Gallery
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Cinematic videos showcasing AI tools, creativity, and the journey from student founder to creator
                    </p>
                </div>
            </section>

            {/* Video Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="cinematic-card rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden bg-gray-800/40 border border-gray-700"
                            >
                                {/* Video Container */}
                                <div className="relative w-full aspect-video">
                                    {video.type === 'youtube' && video.embedUrl ? (
                                        <iframe
                                            src={convertToEmbedUrl(video.embedUrl)}
                                            title={video.title}
                                            className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : video.type === 'instagram' && video.reelUrl ? (
                                        <div className="absolute top-0 left-0 w-full h-full rounded-t-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                                            <blockquote
                                                className="instagram-media"
                                                data-instgrm-permalink={video.reelUrl}
                                                data-instgrm-version="14"
                                                style={{
                                                    background: '#FFF',
                                                    border: '0',
                                                    borderRadius: '0',
                                                    margin: '0',
                                                    maxWidth: '100%',
                                                    minWidth: '326px',
                                                    padding: '0',
                                                    width: '100%'
                                                }}
                                            >
                                                {/* Instagram will replace this with the actual embed */}
                                            </blockquote>
                                        </div>
                                    ) : null}
                                </div>

                                {/* Video Title and Caption */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                                    {video.caption && (
                                        <p className="text-gray-300 text-sm">{video.caption}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VideoGallery;

