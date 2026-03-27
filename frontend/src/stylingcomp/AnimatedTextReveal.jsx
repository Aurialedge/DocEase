import React, { useState, useEffect } from 'react';

const AnimatedTextReveal = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 50,
  color = '#FF5F6F',
  revealDirection = 'left'
}) => {
  const [revealedChars, setRevealedChars] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setRevealedChars((prev) => {
        if (prev < text.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [isVisible, text.length, duration]);

  const getRevealStyle = (index) => {
    const isRevealed = index < revealedChars;
    const delay = index * duration;

    switch (revealDirection) {
      case 'left':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateX(0)' : 'translateX(-20px)',
          transition: `all 0.5s ease-out ${delay}ms`,
        };
      case 'right':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateX(0)' : 'translateX(20px)',
          transition: `all 0.5s ease-out ${delay}ms`,
        };
      case 'top':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
          transition: `all 0.5s ease-out ${delay}ms`,
        };
      case 'bottom':
        return {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
          transition: `all 0.5s ease-out ${delay}ms`,
        };
      default:
        return {
          opacity: isRevealed ? 1 : 0,
          transition: `all 0.5s ease-out ${delay}ms`,
        };
    }
  };

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            ...getRevealStyle(index),
            color: char === ' ' ? 'transparent' : color,
            display: char === ' ' ? 'inline' : 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// Multi-line animated text component
export const AnimatedTextRevealMulti = ({ lines, className = '', baseDelay = 0 }) => {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={index} className="block">
          <AnimatedTextReveal
            text={line}
            delay={baseDelay + index * 200}
            duration={30}
            color="#FF5F6F"
            revealDirection="left"
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedTextReveal;
