
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import ParticleBackground from '../stylingcomp/ParticleBackground'
import WaveAnimation from '../stylingcomp/WaveAnimation'
import GradientOrb from '../stylingcomp/GradientOrb'
import GlassmorphismCard, { GlassCard } from '../stylingcomp/GlassmorphismCard'
import NeonButton from '../stylingcomp/NeonButton'
import AnimatedTextReveal from '../stylingcomp/AnimatedTextReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className='relative min-h-screen'>
      {/* Background Creative Components */}
      <ParticleBackground particleCount={20} color="#FF5F6F" />
      <GradientOrb position={{ x: 30, y: 40 }} colors={['#FF5F6F', '#FFB6C1', '#FFC0CB']} />
      <GradientOrb position={{ x: 70, y: 60 }} colors={['#FFB6C1', '#FFC0CB', '#FF69B4']} />
      
      {/* Wave Animation at bottom */}
      <WaveAnimation color="#FF5F6F" speed={0.02} amplitude={40} />
      
      {/* Main Content */}
      <div className='relative z-30 max-w-7xl mx-auto px-6 py-12'>
        
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4'>
            <svg className='w-4 h-4 mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </div>
          
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            CONTACT <AnimatedTextReveal 
              text="US"
              color="#FF5F6F"
              delay={300}
              revealDirection="left"
              className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            />
          </h1>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            <AnimatedTextReveal 
              text="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              color="#6B7280"
              delay={800}
              duration={30}
              revealDirection="right"
            />
          </p>
        </div>

        {/* Contact Info Section */}
        <div className='flex flex-col lg:flex-row gap-12 items-center mb-20'>
          <div className='lg:w-1/2 animate-slide-up'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-3xl opacity-20 blur-3xl transform scale-110'></div>
              <img 
                className='relative w-full rounded-2xl shadow-2xl'
                src={assets.contact_image}
                alt='Contact DocEase'
              />
            </div>
          </div>

          <div className='lg:w-1/2 space-y-8 animate-slide-up' style={{ animationDelay: '200ms' }}>
            <GlassCard variant="strong" className="p-8">
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Our Office</h3>
                    <p className='text-gray-600'>IIIT Nagpur, Butibori, Nagpur, Maharashtra</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A9.002 9.002 0 0113.255 21 9 9 0 013 13.255 9.002 9.002 0 0110.745 3 9 9 0 0121 13.255z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Careers at DocEase</h3>
                    <p className='text-gray-600 mb-4'>Learn more about the teams and the job openings</p>
                    <NeonButton 
                      neonColor="#FF5F6F"
                      glowColor="#FFB6C1"
                      size="small"
                    >
                      Explore Jobs
                    </NeonButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Contact Form & Cards */}
        <div className='grid lg:grid-cols-3 gap-12 mb-20'>
          {/* Contact Form */}
          <div className='lg:col-span-2 animate-slide-up' style={{ animationDelay: '300ms' }}>
            <GlassCard variant="strong" className="p-8">
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Your Name</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                      placeholder='John Doe'
                      required
                    />
                  </div>
                  
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                      placeholder='john@example.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                    placeholder='+91 98765 43210'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='4'
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none'
                    placeholder='How can we help you?'
                    required
                  ></textarea>
                </div>

                <NeonButton 
                  neonColor="#FF5F6F"
                  glowColor="#FFB6C1"
                  size="large"
                  type="submit"
                >
                  Send Message
                </NeonButton>
              </form>
            </GlassCard>
          </div>

          {/* Contact Cards */}
          <div className='space-y-6 animate-slide-up' style={{ animationDelay: '400ms' }}>
            <GlassCard variant="minimal" className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'>
                  <svg className='w-6 h-6 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-gray-900'>Email</h3>
              </div>
              <p className='text-gray-600'>support@docease.com</p>
              <p className='text-gray-500 text-sm mt-1'>We respond within 24 hours</p>
            </GlassCard>

            <GlassCard variant="minimal" className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'>
                  <svg className='w-6 h-6 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-gray-900'>Phone</h3>
              </div>
              <p className='text-gray-600'>+91 98765 43210</p>
              <p className='text-gray-500 text-sm mt-1'>Mon-Fri: 9AM-9PM</p>
            </GlassCard>

            <GlassCard variant="minimal" className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'>
                  <svg className='w-6 h-6 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-gray-900'>Support Hours</h3>
              </div>
              <div className='text-gray-600 space-y-1'>
                <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
                <p>Sat - Sun: 8:00 AM - 12:00 PM</p>
              </div>
              <p className='text-gray-500 text-sm mt-2'>24/7 Emergency Support</p>
            </GlassCard>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-white text-center'>
          <h2 className='text-3xl font-bold mb-6'>Frequently Asked Questions</h2>
          <p className='text-white/90 max-w-2xl mx-auto mb-8'>
            Find quick answers to common questions about our healthcare services
          </p>
          <NeonButton 
            neonColor="#FFFFFF"
            glowColor="#FFB6C1"
            size="large"
          >
            View FAQ
          </NeonButton>
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

export default Contact
