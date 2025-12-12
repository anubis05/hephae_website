import React from 'react';
import { ExternalLink, ArrowRight, Sparkles, BarChart3, Box } from 'lucide-react';

interface AppCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    icon: React.ReactNode;
    url: string;
    tags: string[];
    gradient?: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, description, imageUrl, icon, url, tags, gradient }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
        >
            {/* Visual Header */}
            <div className={`h-48 w-full relative overflow-hidden ${!imageUrl ? gradient : ''}`}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        {icon}
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink size={18} className="text-gray-900" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-gray-50 rounded-xl text-blue-600">
                        {icon}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export const ShowcasePage: React.FC = () => {
    const apps = [
        {
            title: "AI Product Mockup",
            description: "Instantly generate professional product mockups in diverse settings. Perfect for e-commerce and marketing materials.",
            imageUrl: "/assets/product_mockup.png",
            icon: <Box size={24} />,
            url: "https://aistudio.google.com/apps/bundled/product_mockup?showPreview=true&showAssistant=true",
            tags: ["Gemini Pro Vision", "Image Generation", "E-commerce"],
            gradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
        },
        {
            title: "Marketing Business AI",
            description: "Your dedicated AI marketing strategist. Analyze trends, generate copy, and plan campaigns with data-driven insights.",
            icon: <BarChart3 size={24} />,
            url: "https://chatgpt.com/g/g-Wud3tXQj3-marketing-business-ai",
            tags: ["GPT-4", "Strategy", "Analytics"],
            gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>AI App Gallery</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Discover Powerful <span className="text-blue-600">AI Tools</span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        A curated collection of AI applications designed to supercharge your small business operations.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apps.map((app, index) => (
                        <AppCard key={index} {...app} />
                    ))}

                    {/* Coming Soon Card */}
                    <div className="group relative bg-gray-100 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-400 mb-2">More Coming Soon</h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            We are constantly building and vetting new tools to help your business grow.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
