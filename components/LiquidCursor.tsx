import React, { useEffect, useRef } from 'react';

export function LiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Clean up any leftover trail elements from previous iterations
    const existingTrails = document.querySelectorAll('.liquid-trail');
    existingTrails.forEach(trail => trail.remove());

    const handleMouseMove = (e: MouseEvent) => {
      // Use direct positioning instead of transform to prevent jumps
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (target && target instanceof Element) {
        if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
          cursor.classList.add('hover');
        }
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="liquid-cursor"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 9999,
        left: '0px',
        top: '0px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74, 74, 74, 0.8) 0%, rgba(90, 90, 90, 0.6) 50%, transparent 100%)',
        transition: 'none'
      }}
    />
  );
} 