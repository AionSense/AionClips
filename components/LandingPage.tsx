import React from 'react';
import { Link } from 'react-router-dom';
import { LogoBackground } from './LogoBackground';
import { Button } from "./ui/button";

export function LandingPage() {
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
    <div className="relative min-h-screen text-white overflow-visible">
      {/* Background Logo - Full screen container */}
      <div className="fixed inset-0 overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center">
          <LogoBackground className="opacity-90" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-12 max-w-4xl mx-auto px-8">
          {/* Brand Name */}
          <h2 className="text-4xl font-bold tracking-wider text-white/90 mb-8">
            AIONCLIPS
          </h2>
          
          {/* Community Text */}
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            We are a community of creators united by shared success and driven by collective growth
          </p>
          
          {/* Main Heading */}
          <h1 className="text-6xl font-bold leading-tight tracking-wider">
            MADE BY CREATORS<br />
            FOR CREATORS
          </h1>
          
          <h1 className="text-6xl font-bold leading-tight tracking-wider">
            BUILD DREAMS<br />
            BIGGER THAN<br />
            YOURSELF
          </h1>
          
          {/* Get Started Button - Clean design without gradient */}
          <Link to="/coming-soon">
            <Button 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm shadow-lg text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Left Sidebar Features - ONLY these are 2x bigger */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <div className="space-y-12">
          {features.map((feature, index) => (
            <Link 
              key={index}
              to="/coming-soon"
              className="text-white/40 text-3xl font-medium tracking-wider hover:text-white/80 transition-colors duration-300 cursor-pointer block text-left"
            >
              {feature}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 