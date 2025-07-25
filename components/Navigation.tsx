import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <div className="flex items-center space-x-6">
        <button
          onClick={() => onNavigate('terms')}
          className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider"
        >
          Terms
        </button>
        <button
          onClick={() => onNavigate('privacy')}
          className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider"
        >
          Privacy
        </button>
      </div>
    </nav>
  );
} 