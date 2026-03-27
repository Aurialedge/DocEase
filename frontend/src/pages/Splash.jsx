import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setAnimateOut(true);
    }, 2500);

    // Navigate to home after 3 seconds total
    const navigationTimer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
              }}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div 
        className={`relative z-10 transition-all duration-1000 transform ${
          animateOut 
            ? 'scale-150 opacity-0 rotate-12' 
            : 'scale-100 opacity-100 rotate-0'
        }`}
      >
        {/* Logo container with rotation effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full scale-150 animate-pulse"></div>
          
          {/* Main text */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white relative"
            style={{
              transform: 'rotate(-15deg)',
              textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)',
              animation: 'glow 2s ease-in-out infinite alternate, slideIn 1s ease-out'
            }}
          >
            DocEase
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-white/90 text-center mt-4 relative"
            style={{
              transform: 'rotate(-15deg)',
              animation: 'slideIn 1.2s ease-out, fadeIn 1.5s ease-out'
            }}
          >
            Healthcare Made Simple
          </p>
        </div>
      </div>

      {/* Loading dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          from { filter: brightness(1) drop-shadow(0 0 20px rgba(255,255,255,0.5)); }
          to { filter: brightness(1.2) drop-shadow(0 0 40px rgba(255,255,255,0.8)); }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-100px) rotate(-15deg);
          }
          to { 
            opacity: 1;
            transform: translateX(0) rotate(-15deg);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Splash;
