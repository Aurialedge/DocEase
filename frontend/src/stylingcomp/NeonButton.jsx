import React, { useState } from 'react';

const NeonButton = ({ 
  children, 
  onClick, 
  className = '', 
  neonColor = '#FF5F6F',
  glowColor = '#FFB6C1',
  size = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    onClick?.(e);
  };

  return (
    <button
      className={`
        relative overflow-hidden rounded-full font-semibold transition-all duration-300
        ${sizeStyles[size]}
        ${className}
      `}
      style={{
        background: `linear-gradient(135deg, ${neonColor}, ${glowColor})`,
        boxShadow: isHovered 
          ? `0 0 30px ${neonColor}, 0 0 60px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.3)`
          : `0 0 10px ${neonColor}, inset 0 0 10px rgba(255,255,255,0.2)`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        textShadow: `0 0 10px ${neonColor}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Animated Border */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(45deg, transparent, ${neonColor}, transparent)`,
          animation: 'rotate 2s linear infinite',
          opacity: isHovered ? 0.7 : 0.3,
        }}
      />
      
      {/* Inner Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-md"
        style={{
          background: `radial-gradient(circle, ${glowColor}40, transparent)`,
          opacity: isHovered ? 1 : 0.5,
        }}
      />
      
      {/* Click Ripple Effect */}
      {isClicked && (
        <div 
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: `radial-gradient(circle, ${neonColor}60, transparent)`,
          }}
        />
      )}
      
      {/* Button Content */}
      <span className="relative z-10 text-white">
        {children}
      </span>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};

export default NeonButton;
