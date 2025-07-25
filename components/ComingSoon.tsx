import React from 'react';

interface ComingSoonProps {
  onNavigate?: (page: string) => void;
}

export function ComingSoon({ onNavigate }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-8 max-w-2xl">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            COMING SOON
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/70 text-lg sm:text-xl mb-8 leading-relaxed">
            We're working hard to bring you the ultimate social media campaign management platform. 
            Get ready to track, analyze, and optimize like never before.
          </p>
          
          {/* Feature Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-8 h-8 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-white/60 text-sm">Deep insights into your campaign performance</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-8 h-8 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Payment Automation</h3>
              <p className="text-white/60 text-sm">Streamlined creator payment processing</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-8 h-8 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Video Tracking</h3>
              <p className="text-white/60 text-sm">Monitor video performance across platforms</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-white/50 text-sm uppercase tracking-wider">
              Stay Updated
            </p>
            <p className="text-white/70">
              Follow us for the latest updates and be the first to know when we launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 