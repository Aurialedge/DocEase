import React from 'react'
import { doctors } from '../assets/assets'
import GlassmorphismCard, { GlassCard } from '../stylingcomp/GlassmorphismCard'
import NeonButton from '../stylingcomp/NeonButton'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
  const navigate = useNavigate();
  
  return (
    <div className='py-20 px-6 bg-gradient-to-b from-pink-50 to-white'>
      <div>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4'>
            <svg className='w-4 h-4 mr-2' fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>Top Rated Healthcare Professionals</span>
          </div>
          
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            <span className='bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'>
              Top Doctors to Book
            </span>
          </h1>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Browse our extensive list of verified, top-rated doctors and book your appointment with confidence
          </p>
        </div>

        {/* Doctors Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12'>
          {doctors.slice(0, 10).map((item, index) => (
            <GlassCard 
              key={index}
              variant="strong"
              className='group cursor-pointer animate-slide-up transform hover:-translate-y-3 transition-all duration-500'
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
            >
              {/* Image Container */}
              <div className='relative h-48 bg-gradient-to-br from-pink-100 to-pink-200 overflow-hidden rounded-t-2xl -m-6 mb-4'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                <img
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  src={item.image}
                  alt={item.name}
                />
                
                {/* Availability Badge */}
                <div className='absolute top-3 right-3 bg-primary text-white px-1.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm bg-green-500/90'>
                  <div className='w-1 h-1 bg-white rounded-full animate-pulse'></div>
                  <span className='text-xs'>Available</span>
                </div>
                
                {/* Quick View Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                  <div className='text-white'>
                    <p className='text-sm font-semibold'>Quick Book</p>
                    <p className='text-xs opacity-90'>Click to schedule</p>
                  </div>
                </div>
              </div>
              
              {/* Doctor Info */}
              <div className='p-2'>
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-1'>
                      {item.name}
                    </h3>
                    <p className='text-sm text-gray-600 font-medium'>
                      {item.speciality}
                    </p>
                  </div>
                  
                  <div className='flex items-center gap-1 text-xs text-yellow-500'>
                    <svg className='w-4 h-4' fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className='font-semibold'>4.8</span>
                  </div>
                </div>
                
                <div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
                  <div className='flex items-center gap-1'>
                    <svg className='w-3 h-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.experience}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <svg className='w-3 h-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.address.line1.split(',')[0]}</span>
                  </div>
                </div>
                
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>${item.fees}</p>
                    <p className='text-xs text-gray-500'>Consultation</p>
                  </div>
                  
                  <div className='w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200'>
                    <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center animate-fade-in'>
          <NeonButton 
            neonColor="#FF5F6F"
            glowColor="#FFB6C1"
            size="large"
            onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
          >
            <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View All Doctors
          </NeonButton>
          
          <p className='text-sm text-gray-500 mt-4'>
            Over {doctors.length} certified healthcare professionals
          </p>
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

export default TopDoctors