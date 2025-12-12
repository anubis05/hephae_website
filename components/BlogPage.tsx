import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Insights & <span className="text-blue-600">Updates</span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        Latest news, tutorials, and success stories from the Hephae ecosystem.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                        <Calendar size={40} className="text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Brewing...</h2>
                    <p className="text-gray-500 max-w-md mx-auto mb-8">
                        Our team is busy writing comprehensive guides on how to leverage AI for your business. Check back soon!
                    </p>

                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-gray-600 font-medium">
                        <span>Subscribe to newsletter</span>
                        <ArrowRight size={16} />
                    </div>
                </div>

            </div>
        </div>
    );
};
