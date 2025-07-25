import React, { useEffect, useRef, useState } from 'react';

export function LiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let isInitialized = false;

    const trails: Array<{ x: number; y: number; opacity: number; element: HTMLDivElement }> = [];
    const maxTrails = 8;

    // Create trail elements
    for (let i = 0; i < maxTrails; i++) {
      const trail = document.createElement('div');
      trail.className = 'liquid-trail';
      trail.style.opacity = '0';
      document.body.appendChild(trail);
      trails.push({ x: mouseX, y: mouseY, opacity: 0, element: trail });
      trailsRef.current.push(trail);
    }

    const updateCursor = () => {
      if (!isInitialized) {
        requestAnimationFrame(updateCursor);
        return;
      }
      
      if (mouseX !== 0 && mouseY !== 0) {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        // Much faster and more responsive movement
        cursorX += dx * 0.8;
        cursorY += dy * 0.8;
      }

      cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;

      // Update trails with slightly faster response too
      trails.forEach((trail, index) => {
        const delay = index * 2;
        const targetX = cursorX - delay * 2;
        const targetY = cursorY - delay * 2;
        
        trail.x += (targetX - trail.x) * 0.15;
        trail.y += (targetY - trail.y) * 0.15;
        trail.opacity = Math.max(0, 1 - index / maxTrails);

        trail.element.style.transform = `translate(${trail.x - 4}px, ${trail.y - 4}px)`;
        trail.element.style.opacity = (trail.opacity * 0.6).toString();
      });

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isInitialized) {
        cursorX = mouseX;
        cursorY = mouseY;
        isInitialized = true;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseUp = (e: MouseEvent) => {
      setIsClicking(false);
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Clean up trail elements
      trailsRef.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      trailsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`liquid-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
    />
  );
} 