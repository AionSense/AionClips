import React from 'react';
import { LogoBackground } from './LogoBackground';
import { Button } from "./ui/button";

interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    "VIDEO TRACKING",
    "CAMPAIGN ANALYTICS", 
    "PAYMENT AUTOMATION",
    "CREATOR MANAGEMENT",
    "REAL-TIME UPDATES",
    "PERFORMANCE INSIGHTS",
    "TEAM COLLABORATION"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Logo Background - positioned to allow glow to extend */}
      <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <LogoBackground className="opacity-[0.9]" />
      </div>
      
      {/* Top Left Brand and Community Text */}
      <div className="absolute top-8 left-8 z-10">
        <h2 className="text-white text-2xl font-bold tracking-wider mb-4 logo-gradient">
          AIONCLIPS
        </h2>
        <p className="text-white/80 text-sm uppercase tracking-wider max-w-xs leading-relaxed">
          We are a community of creators united by shared success and driven by collective growth
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-8">
          {/* Subtitle */}
          <p className="text-white/60 text-sm uppercase tracking-wider mb-8">
            MADE BY CREATORS FOR CREATORS
          </p>
          
          {/* Main Heading - Back to original size */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-12">
            BUILD DREAMS<br />
            BIGGER THAN<br />
            YOURSELF
          </h1>
          
          {/* Get Started Button - Clean design without gradient */}
          <Button 
            size="lg" 
            onClick={() => onNavigate?.('coming-soon')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm shadow-lg text-lg px-8 py-4 rounded-xl transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Left Sidebar Features - ONLY these are 2x bigger */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <div className="space-y-12">
          {features.map((feature, index) => (
            <button 
              key={index}
              onClick={() => onNavigate?.('coming-soon')}
              className="text-white/40 text-3xl font-medium tracking-wider hover:text-white/80 transition-colors duration-300 cursor-pointer block text-left"
            >
              {feature}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 