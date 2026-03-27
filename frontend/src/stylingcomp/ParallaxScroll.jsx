import React, { useEffect, useRef, useState } from 'react';

const ParallaxScroll = ({ children, speed = 0.5, className = '' }) => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

// Parallax Layer Component for multiple depth layers
export const ParallaxLayer = ({ 
  children, 
  depth = 1, 
  className = '', 
  direction = 'up' 
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -depth;
      
      if (direction === 'up') {
        setOffset(rate);
      } else if (direction === 'down') {
        setOffset(-rate);
      } else if (direction === 'left') {
        setOffset(rate);
      } else if (direction === 'right') {
        setOffset(-rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [depth, direction]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${offset}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

// Full Page Parallax Container
export const ParallaxContainer = ({ children, layers = [] }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {layers.map((layer, index) => (
        <ParallaxLayer
          key={index}
          depth={layer.depth || index * 0.5}
          direction={layer.direction || 'up'}
          className={`absolute inset-0 ${layer.className || ''}`}
        >
          {layer.children}
        </ParallaxLayer>
      ))}
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxScroll;
