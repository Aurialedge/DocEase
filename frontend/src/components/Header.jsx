import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import AnimatedTextReveal, { AnimatedTextRevealMulti } from '../stylingcomp/AnimatedTextReveal'
import NeonButton from '../stylingcomp/NeonButton'

const Header = () => {
  return (
    <div className='relative overflow-hidden'>
      {/* Premium Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-pink-600 via-pink-500 to-rose-400'>
        {/* Animated gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-pink-300/20'></div>
        
        {/* Sophisticated pattern */}
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Floating elements for depth */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-rose-300/30 rounded-full blur-3xl animate-pulse delay-75'></div>
        <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-150'></div>
      </div>
      
      <div className='relative flex flex-col lg:flex-row items-center justify-between px-6 py-20 lg:px-20 lg:py-24'>
        
        {/* Left Side - Premium Content */}
        <div className='lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in'>
          
          {/* Premium Badge */}
          <div className='inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg'>
            <div className='relative'>
              <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
              <div className='absolute inset-0 bg-emerald-400 rounded-full animate-ping'></div>
            </div>
            <span className='ml-3 text-white font-medium text-sm'>Excellence in Healthcare Since 2024</span>
          </div>
          
          {/* Premium Heading */}
          <div className='space-y-6'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              <AnimatedTextReveal 
                text="Where Excellence" 
                color="white"
                delay={300}
                revealDirection="left"
                className="block mb-2"
              />
              <AnimatedTextReveal 
                text="Meets Compassion" 
                color="white"
                delay={800}
                revealDirection="right"
                className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent"
              />
            </h1>
            
            {/* Subtitle with elegant typography */}
            <p className='text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-lg'>
              <AnimatedTextReveal 
                text="Experience world-class healthcare with our distinguished team of medical professionals, dedicated to your well-being with precision and care."
                color="rgba(255,255,255,0.8)"
                delay={1200}
                duration={20}
                revealDirection="left"
              />
            </p>
          </div>

          {/* Premium Stats */}
          <div className='flex flex-wrap gap-6 justify-center lg:justify-start'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20'>
                <svg className='w-6 h-6 text-white' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <p className='text-2xl font-bold text-white'>500+</p>
                <p className='text-sm text-white/70'>Expert Doctors</p>
              </div>
            </div>
            
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20'>
                <svg className='w-6 h-6 text-white' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <div>
                <p className='text-2xl font-bold text-white'>50K+</p>
                <p className='text-sm text-white/70'>Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Premium CTA */}
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <NeonButton 
              neonColor="#FFFFFF"
              glowColor="#FFB6C1"
              size="large"
              className="px-8 py-4"
              onClick={() => document.getElementById('speciality')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Book Consultation
            </NeonButton>
            
            <NeonButton 
              neonColor="#FF5F6F"
              glowColor="#FFB6C1"
              size="large"
              className="px-8 py-4"
              onClick={() => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Our Specialists
            </NeonButton>
          </div>
        </div>

        {/* Right Side - Premium Visual */}
        <div className='lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end'>
          
          {/* Premium image container */}
          <div className='relative'>
            {/* Glow effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-pink-300/40 to-rose-300/40 rounded-3xl blur-3xl scale-110 animate-pulse'></div>
            
            {/* Main image frame */}
            <div className='relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl'>
              <img 
                className='w-full max-w-sm lg:max-w-md rounded-2xl shadow-xl' 
                src={assets.header_img} 
                alt="Premium Healthcare" 
              />
              
              {/* Floating premium badges */}
              <div className='absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2'>
                <svg className='w-4 h-4' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Premium Care</span>
              </div>
              
              <div className='absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2'>
                <svg className='w-4 h-4' fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Certified Excellence</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className='absolute top-1/4 -left-8 w-16 h-16 bg-pink-300/20 rounded-full blur-2xl animate-pulse'></div>
            <div className='absolute bottom-1/4 -right-8 w-20 h-20 bg-rose-300/20 rounded-full blur-2xl animate-pulse delay-75'></div>
          </div>
        </div>
      </div>

      {/* Premium bottom gradient */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent'></div>
    </div>
  )
}

export default Header