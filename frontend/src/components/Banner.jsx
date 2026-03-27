import React from 'react'
import { assets } from '../assets/assets'
import GlassmorphismCard, { GlassCard } from '../stylingcomp/GlassmorphismCard'
import NeonButton from '../stylingcomp/NeonButton'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate=useNavigate();

  return (
    <div className='py-20 px-6 bg-gradient-to-b from-pink-50 to-white'>
      <div>
        
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4'>
            <svg className='w-4 h-4 mr-2' fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Premium Healthcare Service
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Book Your <span className='bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'>Appointment</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            With 100+ Trusted Doctors - Instant Booking - 24/7 Support
          </p>
        </div>

        {/* Main Banner Content */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
          <div className='flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12'>
            
            {/* Left Side - Content */}
            <div className='flex-1 space-y-6'>
              
              {/* Features */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <GlassCard variant="minimal" className="p-4">
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center'>
                      <svg className='w-5 h-5 text-pink-600' fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-900'>Verified Doctors</p>
                      <p className='text-sm text-gray-600'>100+ Professionals</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard variant="minimal" className="p-4">
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center'>
                      <svg className='w-5 h-5 text-pink-600' fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-900'>Instant Booking</p>
                      <p className='text-sm text-gray-600'>Quick & Easy</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard variant="minimal" className="p-4">
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center'>
                      <svg className='w-5 h-5 text-pink-600' fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-900'>24/7 Support</p>
                      <p className='text-sm text-gray-600'>Always Available</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Main CTA */}
              <div className='space-y-4'>
                <h2 className='text-2xl font-bold text-gray-900'>
                  Ready to book your appointment?
                </h2>
                <p className='text-gray-600'>
                  Join thousands of satisfied patients who trust DocEase for their healthcare needs.
                </p>
                
                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                  <NeonButton 
                    neonColor="#FF5F6F"
                    glowColor="#FFB6C1"
                    size="large"
                    onClick={()=>{navigate('/login'); scrollTo(0,0)}}
                  >
                    Create Account
                  </NeonButton>
                  <NeonButton 
                    neonColor="#FFFFFF"
                    glowColor="#FFB6C1"
                    size="large"
                  >
                    Learn More
                  </NeonButton>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className='lg:w-1/2 flex justify-center'>
              <div className='relative'>
                {/* Background decoration */}
                <div className='absolute -inset-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl'></div>
                
                {/* Image container */}
                <div className='relative bg-white rounded-2xl p-8 border border-gray-100'>
                  <img 
                    className='w-full max-w-sm mx-auto' 
                    src={assets.appointment_img} 
                    alt="Doctor Appointment" 
                  />
                  
                  {/* Stats badges */}
                  <div className='absolute -top-2 -right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                    98% Satisfaction
                  </div>
                  
                  <div className='absolute -bottom-2 -left-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold'>
                    500+ Daily Bookings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12'>
          <div className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
            <div className='w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-6 h-6 text-pink-600' fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>10,000+</h3>
            <p className='text-gray-600'>Happy Patients</p>
          </div>

          <div className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
            <div className='w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-6 h-6 text-pink-600' fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>24/7</h3>
            <p className='text-gray-600'>Available Support</p>
          </div>

          <div className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
            <div className='w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-6 h-6 text-pink-600' fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Instant</h3>
            <p className='text-gray-600'>Booking Confirmation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner