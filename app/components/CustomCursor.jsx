'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on pointer devices (desktops/laptops), not touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animFrame;

    const lerp = (a, b, t) => a + (b - a) * t;

    // Animation loop — runs every frame
    const tick = () => {
      // Dot follows mouse instantly via transform (no top/left conflict with React)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
      }
      // Ring follows with elastic lag
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.13);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.13);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      animFrame = requestAnimationFrame(tick);
    };
    animFrame = requestAnimationFrame(tick);

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, textarea, label')) {
        setIsHovering(true);
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, textarea, label')) {
        setIsHovering(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp   = () => setIsClicking(false);
    const onLeave     = () => setIsVisible(false);
    const onEnter     = () => setIsVisible(true);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout',  onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup',   onMouseUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout',  onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup',   onMouseUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []); // empty deps — positions tracked via refs, not state

  // Derived sizes
  const dotSize   = isClicking ? 14 : 8;
  const ringSize  = isHovering ? 52 : isClicking ? 22 : 36;
  const ringColor = isHovering ? 'rgba(8,145,178,0.9)' : 'rgba(8,145,178,0.45)';
  const ringGlow  = isHovering ? '0 0 18px rgba(8,145,178,0.4)' : 'none';

  return (
    <>
      {/* ── Inner Dot ── */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          backgroundColor: '#0891b2',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          // Only animate size/opacity — transform is set frame-by-frame via JS
          transition: 'width 150ms ease, height 150ms ease, opacity 300ms ease',
          willChange: 'transform',
        }}
      />

      {/* ── Outer Trailing Ring ── */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          border: `1.5px solid ${ringColor}`,
          borderRadius: '50%',
          boxShadow: ringGlow,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          // Only animate size/opacity/color — transform is set frame-by-frame via JS
          transition: 'width 200ms ease, height 200ms ease, opacity 300ms ease, border-color 200ms ease, box-shadow 200ms ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
