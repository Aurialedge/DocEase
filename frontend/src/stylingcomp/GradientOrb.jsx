import React, { useState, useEffect, useRef } from 'react';

const GradientOrb = ({ position = { x: 50, y: 50 }, colors = ['#FF5F6F', '#FFB6C1', '#FFC0CB'] }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const orbRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const getOrbPosition = () => {
    if (!orbRef.current) return { x: 0, y: 0 };
    
    const rect = orbRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = calculateDistance(mousePosition.x, mousePosition.y, centerX, centerY);
    const maxDistance = 200;
    
    if (distance < maxDistance) {
      const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
      const force = (1 - distance / maxDistance) * 30;
      
      return {
        x: Math.sin(angle) * force,
        y: Math.cos(angle) * force
      };
    }
    
    return { x: 0, y: 0 };
  };

  const orbPosition = getOrbPosition();
  const gradientColors = colors.join(', ');

  return (
    <div
      ref={orbRef}
      className="fixed pointer-events-none z-30"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) translate(${orbPosition.x}px, ${orbPosition.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div
        className={`relative transition-all duration-1000 ${isHovered ? 'scale-125' : 'scale-100'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer Glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl animate-pulse"
          style={{
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${gradientColors})`,
            opacity: 0.4,
          }}
        />
        
        {/* Middle Layer */}
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            width: '200px',
            height: '200px',
            left: '50px',
            top: '50px',
            background: `radial-gradient(circle, ${gradientColors})`,
            opacity: 0.6,
          }}
        />
        
        {/* Inner Core */}
        <div
          className="absolute rounded-full"
          style={{
            width: '100px',
            height: '100px',
            left: '100px',
            top: '100px',
            background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
            boxShadow: `0 0 60px ${colors[0]}`,
          }}
        />
        
        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${150 + Math.cos(i * 60 * Math.PI / 180) * 80}px`,
              top: `${150 + Math.sin(i * 60 * Math.PI / 180) * 80}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GradientOrb;
