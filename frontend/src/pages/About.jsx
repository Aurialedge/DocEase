import React from 'react'
import { assets } from '../assets/assets'
import ParticleBackground from '../stylingcomp/ParticleBackground'
import WaveAnimation from '../stylingcomp/WaveAnimation'
import GradientOrb from '../stylingcomp/GradientOrb'
import GlassmorphismCard, { GlassCard } from '../stylingcomp/GlassmorphismCard'
import NeonButton from '../stylingcomp/NeonButton'
import AnimatedTextReveal from '../stylingcomp/AnimatedTextReveal'

const About = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background Creative Components */}
      <ParticleBackground particleCount={20} color="#FF5F6F" />
      <GradientOrb position={{ x: 25, y: 35 }} colors={['#FF5F6F', '#FFB6C1', '#FFC0CB']} />
      <GradientOrb position={{ x: 75, y: 65 }} colors={['#FFB6C1', '#FFC0CB', '#FF69B4']} />
      
      {/* Wave Animation at bottom */}
      <WaveAnimation color="#FF5F6F" speed={0.02} amplitude={40} />
      
      {/* Main Content */}
      <div className='relative z-30 max-w-7xl mx-auto px-6 py-12'>
        
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4'>
            <svg className='w-4 h-4 mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About DocEase
          </div>
          
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            <AnimatedTextReveal 
              text="ABOUT US"
              color="#FF5F6F"
              delay={300}
              revealDirection="left"
              className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            />
          </h1>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            <AnimatedTextReveal 
              text="Your trusted healthcare partner for seamless medical appointments and health management"
              color="#6B7280"
              delay={800}
              duration={30}
              revealDirection="right"
            />
          </p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-12 items-center mb-20'>
          <div className='lg:w-1/2 animate-slide-up'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-3xl opacity-20 blur-3xl transform scale-110'></div>
              <img 
                className='relative w-full rounded-2xl shadow-2xl' 
                src={assets.about_image} 
                alt='About DocEase' 
              />
            </div>
          </div>
          
          <div className='lg:w-1/2 space-y-6 animate-slide-up' style={{ animationDelay: '200ms' }}>
            <GlassCard variant="strong" className="p-8">
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Welcome To DocEase</h2>
              <p className='text-gray-600 leading-relaxed mb-6'>
                Your Digital Assistant In Managing Your Healthcare In Convenient And Efficient Way. At DocEase, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing The Health Records.
              </p>
              
              <p className='text-gray-600 leading-relaxed mb-6'>
                DocEase Is Commited To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service Whether You're Booking Your First Appointment Or Managing Ongoing Care.
              </p>
              
              <div className='border-l-4 border-primary pl-4'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Our Vision</h3>
                <p className='text-gray-600 leading-relaxed'>
                  Our Vision At DocEase Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When You Need It.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='mb-20'>
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              WHY <span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>CHOOSE US</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Discover the benefits that make DocEase the preferred choice for healthcare management
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <GlassCard 
              variant="minimal" 
              className='group cursor-pointer animate-slide-up transform hover:-translate-y-2 transition-all duration-500' 
              style={{ animationDelay: '300ms' }}
            >
              <div className='w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300'>Efficiency</h3>
              <p className='text-gray-600 leading-relaxed'>
                Streamlined appointment scheduling that fits into your busy lifestyle. Book, manage, and track your healthcare journey with ease.
              </p>
            </GlassCard>

            <GlassCard 
              variant="minimal" 
              className='group cursor-pointer animate-slide-up transform hover:-translate-y-2 transition-all duration-500' 
              style={{ animationDelay: '400ms' }}
            >
              <div className='w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300'>Convenience</h3>
              <p className='text-gray-600 leading-relaxed'>
                Access to the network of personalized professionals in your area. Find the right healthcare provider near you with just a few clicks.
              </p>
            </GlassCard>

            <GlassCard 
              variant="minimal" 
              className='group cursor-pointer animate-slide-up transform hover:-translate-y-2 transition-all duration-500' 
              style={{ animationDelay: '500ms' }}
            >
              <div className='w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300'>Personalization</h3>
              <p className='text-gray-600 leading-relaxed'>
                Tailored recommendations and reminders to help you stay on top of your health. Get personalized care suggestions based on your medical history.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Stats Section */}
        <div className='bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-white text-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>10K+</div>
              <div className='text-white/80'>Happy Patients</div>
            </div>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>500+</div>
              <div className='text-white/80'>Expert Doctors</div>
            </div>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>24/7</div>
              <div className='text-white/80'>Support Available</div>
            </div>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>98%</div>
              <div className='text-white/80'>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
      `}</style>
    </div>
  )
}

export default About