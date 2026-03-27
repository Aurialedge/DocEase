import React, { useState } from 'react';

const GlassmorphismCard = ({ 
  children, 
  className = '', 
  blur = 'md',
  opacity = 'medium',
  border = true,
  shadow = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const blurStyles = {
    none: 'backdrop-blur-none',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
  };

  const opacityStyles = {
    none: 'bg-white/0',
    low: 'bg-white/10',
    medium: 'bg-white/20',
    high: 'bg-white/30',
    full: 'bg-white/40',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  return (
    <div
      className={`
        relative rounded-2xl transition-all duration-500
        ${blurStyles[blur]}
        ${opacityStyles[opacity]}
        ${border ? 'border border-white/20' : ''}
        ${shadow ? shadowStyles.lg : ''}
        ${isHovered ? 'transform scale-105' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {/* Animated Border Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, #FF5F6F, #FFB6C1, #FFC0CB, #FF5F6F)',
          backgroundSize: '200% 200%',
          animation: isHovered ? 'gradient 3s ease infinite' : 'none',
          opacity: isHovered ? 0.3 : 0,
        }}
      />
      
      {/* Inner Glow */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent)',
          opacity: isHovered ? 1 : 0.5,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

// Pre-configured glassmorphism variants
export const GlassCard = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: {
      blur: 'md',
      opacity: 'medium',
      border: true,
      shadow: true,
    },
    minimal: {
      blur: 'sm',
      opacity: 'low',
      border: false,
      shadow: false,
    },
    strong: {
      blur: 'lg',
      opacity: 'high',
      border: true,
      shadow: 'xl',
    },
    neon: {
      blur: 'xl',
      opacity: 'medium',
      border: true,
      shadow: '2xl',
    },
  };

  return (
    <GlassmorphismCard
      className={className}
      {...variants[variant]}
    >
      {children}
    </GlassmorphismCard>
  );
};

export default GlassmorphismCard;
