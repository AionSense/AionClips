import React from 'react';

interface LogoBackgroundProps {
  className?: string;
}

export function LogoBackground({ className }: LogoBackgroundProps) {
  return (
    <img 
      src="/Frame 5 (2).png"
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