import React from 'react';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = '#FF5F6F', 
  type = 'pulse',
  className = '' 
}) => {
  const sizeStyles = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const renderSpinner = () => {
    switch (type) {
      case 'pulse':
        return (
          <div className={`${sizeStyles[size]} ${className}`}>
            <div 
              className="w-full h-full rounded-full animate-pulse"
              style={{ backgroundColor: color }}
            />
          </div>
        );

      case 'dots':
        return (
          <div className={`flex gap-2 ${className}`}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeStyles[size].split(' ')[0]} ${sizeStyles[size].split(' ')[1]} rounded-full animate-bounce`}
                style={{
                  backgroundColor: color,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      case 'ring':
        return (
          <div className={`${sizeStyles[size]} relative ${className}`}>
            <div 
              className="w-full h-full rounded-full border-4 border-transparent border-t-current animate-spin"
              style={{ 
                borderTopColor: color,
                borderRightColor: color,
              }}
            />
          </div>
        );

      case 'morph':
        return (
          <div className={`${sizeStyles[size]} relative ${className}`}>
            <div 
              className="w-full h-full animate-pulse"
              style={{
                backgroundColor: color,
                borderRadius: '50%',
                animation: 'morph 2s ease-in-out infinite',
              }}
            />
          </div>
        );

      case 'gradient':
        return (
          <div className={`${sizeStyles[size]} relative ${className}`}>
            <div 
              className="w-full h-full rounded-full animate-spin"
              style={{
                background: `conic-gradient(${color}, transparent, ${color})`,
                animationDuration: '1s',
              }}
            />
            <div className="absolute inset-2 bg-white rounded-full" />
          </div>
        );

      case 'hearts':
        return (
          <div className={`relative ${sizeStyles[size]} ${className}`}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: color,
                  transform: `rotate(45deg) translate(${i * 8 - 8}px, ${i * 8 - 8}px)`,
                  borderRadius: '0 50% 50% 50%',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <div className={`${sizeStyles[size]} ${className}`}>
            <div 
              className="w-full h-full rounded-full border-4 border-current border-t-transparent animate-spin"
              style={{ borderColor: color }}
            />
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center">
      {renderSpinner()}
      
      <style jsx>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 50%;
            transform: scale(1);
          }
          25% {
            border-radius: 20%;
            transform: scale(0.8);
          }
          50% {
            border-radius: 50%;
            transform: scale(1.2);
          }
          75% {
            border-radius: 30%;
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
