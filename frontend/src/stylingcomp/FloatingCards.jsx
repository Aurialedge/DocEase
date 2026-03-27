import React, { useState, useEffect } from 'react';

const FloatingCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardData = [
      { icon: '🏥', title: 'Hospitals', color: 'from-blue-400 to-blue-600' },
      { icon: '👨‍⚕️', title: 'Doctors', color: 'from-green-400 to-green-600' },
      { icon: '💊', title: 'Pharmacy', color: 'from-purple-400 to-purple-600' },
      { icon: '🔬', title: 'Labs', color: 'from-red-400 to-red-600' },
      { icon: '🚑', title: 'Emergency', color: 'from-yellow-400 to-yellow-600' },
      { icon: '💉', title: 'Vaccines', color: 'from-pink-400 to-pink-600' },
    ];

    const floatingCards = cardData.map((card, index) => ({
      ...card,
      id: index,
      x: Math.random() * 80 + 10, // 10% to 90% of screen width
      y: Math.random() * 80 + 10, // 10% to 90% of screen height
      rotation: Math.random() * 360,
      scale: Math.random() * 0.3 + 0.7,
      animationDuration: Math.random() * 10 + 15,
      animationDelay: Math.random() * 5,
    }));

    setCards(floatingCards);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {cards.map((card) => (
        <div
          key={card.id}
          className="absolute bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-center backdrop-blur-sm bg-white/80 border border-white/20"
          style={{
            left: `${card.x}%`,
            top: `${card.y}%`,
            transform: `rotate(${card.rotation}deg) scale(${card.scale})`,
            animation: `float ${card.animationDuration}s ease-in-out ${card.animationDelay}s infinite`,
          }}
        >
          <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-2 shadow-lg`}>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <span className="text-xs font-semibold text-gray-700">{card.title}</span>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(0px) rotate(-5deg);
          }
          75% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCards;
