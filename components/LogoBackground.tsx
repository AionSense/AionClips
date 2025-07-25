import React from 'react';
import logo from '/src/assets/Frame 5 (2).png';

interface LogoBackgroundProps {
  className?: string;
}

export function LogoBackground({ className }: LogoBackgroundProps) {
  return (
    <img 
      src={logo}
      alt="AIONCLIPS Logo"
      className={className}
      style={{ 
        width: '1200px', 
        height: '1200px', 
        objectFit: 'contain'
      }}
    />
  );
} 