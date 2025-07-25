import React from 'react';

interface BackButtonProps {
  onNavigate: (page: string) => void;
}

export function BackButton({ onNavigate }: BackButtonProps) {
  return (
    <button
      onClick={() => onNavigate('landing')}
      className="fixed top-8 left-8 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
      aria-label="Back to home"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
} 