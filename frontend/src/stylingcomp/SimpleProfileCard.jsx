import React, { useState } from 'react';
import { assets } from '../assets/assets';

const SimpleProfileCard = ({ userData, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
      
      {/* Main Card Container */}
      <div 
        className={`relative bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-8 border border-pink-200 transform transition-all duration-500 cursor-pointer ${
          isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '320px',
          height: '480px'
        }}
      >
        {/* Card Header */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-3xl"></div>
        
        {/* Profile Image */}
        <div className="flex flex-col items-center mt-16">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-60 transition-all duration-500 ${
              isHovered ? 'scale-150' : 'scale-100'
            }`}></div>
            <img 
              src={userData?.image || assets.profile_pic}
              alt="Profile"
              className="relative w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={onImageClick}
            />
            {/* Status Badge */}
            <div className="absolute bottom-3 right-3 w-8 h-8 bg-green-500 border-4 border-white rounded-full animate-pulse"></div>
          </div>
          
          {/* User Name */}
          <h2 className="mt-8 text-3xl font-bold text-gray-800 text-center">
            {userData?.name || "John Doe"}
          </h2>
          
          {/* Role Badge */}
          <div className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-semibold shadow-lg">
            User
          </div>
        </div>
        
        {/* Card Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">Click to view full profile</p>
            <div className="flex justify-center">
              <svg className="w-4 h-4 text-pink-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-60 transition-all duration-1000 ${
          isHovered ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'
        }`}></div>
        <div className={`absolute bottom-8 left-4 w-6 h-6 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-40 transition-all duration-1000 delay-200 ${
          isHovered ? '-translate-y-2 rotate-45' : 'translate-y-0 rotate-0'
        }`}></div>
      </div>
    </div>
  );
};

export default SimpleProfileCard;
