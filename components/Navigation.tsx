import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <div className="flex items-center space-x-6">
        <Link
          to="/terms"
          className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider"
        >
          Terms
        </Link>
        <Link
          to="/privacy"
          className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider"
        >
          Privacy
        </Link>
      </div>
    </nav>
  );
} 