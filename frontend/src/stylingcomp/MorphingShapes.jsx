import React, { useEffect, useRef } from 'react';

const MorphingShapes = ({ primaryColor = '#FF5F6F', secondaryColor = '#FFB6C1' }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    let animationPhase = 0;

    const morphShapes = () => {
      paths.forEach((path, index) => {
        const phase = (animationPhase + index * 0.5) % 3;
        const scale = 1 + Math.sin(phase) * 0.3;
        const rotation = phase * 120;
        const opacity = 0.1 + Math.sin(phase + index) * 0.05;

        path.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
        path.style.opacity = opacity;
        path.style.transition = 'all 2s ease-in-out';
      });

      animationPhase += 0.02;
      requestAnimationFrame(morphShapes);
    };

    morphShapes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Organic Shapes */}
        <path
          d="M200,300 Q400,200 600,300 T1000,300 Q900,400 700,350 T200,300"
          fill="url(#grad1)"
          transform-origin="center"
        />
        
        <path
          d="M100,500 Q300,400 500,500 T900,500 Q800,600 600,550 T100,500"
          fill="url(#grad2)"
          transform-origin="center"
        />
        
        <path
          d="M300,100 Q500,50 700,100 T1100,100 Q1000,200 800,150 T300,100"
          fill="url(#grad1)"
          transform-origin="center"
        />
        
        <path
          d="M50,700 Q250,650 450,700 T850,700 Q750,800 550,750 T50,700"
          fill="url(#grad2)"
          transform-origin="center"
        />

        {/* Floating Circles */}
        <circle cx="150" cy="150" r="80" fill="url(#grad1)" opacity="0.2" />
        <circle cx="1050" cy="650" r="100" fill="url(#grad2)" opacity="0.15" />
        <circle cx="600" cy="400" r="60" fill="url(#grad1)" opacity="0.25" />
        <circle cx="900" cy="200" r="70" fill="url(#grad2)" opacity="0.2" />
        <circle cx="300" cy="600" r="90" fill="url(#grad1)" opacity="0.18" />
      </svg>
    </div>
  );
};

export default MorphingShapes;
