import React, { useState, useContext, useEffect } from 'react'
import { doctors } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import ParticleBackground from '../stylingcomp/ParticleBackground'
import WaveAnimation from '../stylingcomp/WaveAnimation'
import GradientOrb from '../stylingcomp/GradientOrb'
import GlassmorphismCard, { GlassCard } from '../stylingcomp/GlassmorphismCard'
import NeonButton from '../stylingcomp/NeonButton'
import AnimatedTextReveal from '../stylingcomp/AnimatedTextReveal'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);
  
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()))
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality])

  const specialities = [
    { name: 'Gynecologist', icon: '👩‍⚕️', color: 'pink' },
    { name: 'General Physician', icon: '👨‍⚕️', color: 'blue' },
    { name: 'Dermatologist', icon: '🧑‍⚕️', color: 'green' },
    { name: 'Pediatrician', icon: '👶', color: 'yellow' },
    { name: 'Neurologist', icon: '🧠', color: 'purple' },
    { name: 'Gastroenterologist', icon: '🫃', color: 'red' }
  ];

  return (
    <div className='relative min-h-screen'>
      {/* Background Creative Components */}
      <ParticleBackground particleCount={20} color="#FF5F6F" />
      <GradientOrb position={{ x: 20, y: 30 }} colors={['#FF5F6F', '#FFB6C1', '#FFC0CB']} />
      <GradientOrb position={{ x: 80, y: 70 }} colors={['#FFB6C1', '#FFC0CB', '#FF69B4']} />
      
      {/* Wave Animation at bottom */}
      <WaveAnimation color="#FF5F6F" speed={0.02} amplitude={40} />
      
      {/* Main Content */}
      <div className='relative z-30 max-w-7xl mx-auto px-6 py-12'>
        
        {/* Header */}
        <div className='text-center mb-12 animate-fade-in'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            <AnimatedTextReveal 
              text="Find Your Specialist"
              color="#FF5F6F"
              delay={300}
              revealDirection="left"
              className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            />
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            <AnimatedTextReveal 
              text="Explore our network of certified healthcare professionals and book your appointment"
              color="#6B7280"
              delay={800}
              duration={30}
              revealDirection="right"
            />
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className='lg:hidden mb-6'>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              showFilter 
                ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:shadow-md'
            }`}
          >
            <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            {showFilter ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          
          {/* Sidebar Filters */}
          <div className={`${showFilter ? 'flex' : 'hidden'} lg:flex lg:w-80 flex-col gap-4 animate-slide-up`}>
            <div className='bg-white rounded-2xl shadow-lg p-6 sticky top-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-6 flex items-center gap-2'>
                <svg className='w-5 h-5 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter by Speciality
              </h3>
              
              <div className='space-y-3'>
                {specialities.map((spec, index) => (
                  <button
                    key={index}
                    onClick={() => speciality === spec.name ? navigate('/doctors') : navigate(`/doctors/${spec.name}`)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      speciality === spec.name
                        ? `bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg transform scale-105`
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    <span className='text-2xl'>{spec.icon}</span>
                    <div className='flex-1'>
                      <p className='font-semibold'>{spec.name}</p>
                      <p className={`text-xs ${speciality === spec.name ? 'text-white/80' : 'text-gray-500'}`}>
                        {doctors.filter(doc => doc.speciality === spec.name).length} doctors available
                      </p>
                    </div>
                    {speciality === spec.name && (
                      <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              {speciality && (
                <button
                  onClick={() => navigate('/doctors')}
                  className='w-full mt-4 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold hover:bg-primary/20 transition-colors duration-300'
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className='flex-1'>
            {filterDoc.length === 0 ? (
              <div className='text-center py-20'>
                <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <svg className='w-12 h-12 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4.5 4.5 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>No doctors found</h3>
                <p className='text-gray-600 mb-6'>Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => navigate('/doctors')}
                  className='px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300'
                >
                  View All Doctors
                </button>
              </div>
            ) : (
              <>
                {/* Results Count */}
                <div className='mb-8 flex items-center justify-between'>
                  <p className='text-gray-600'>
                    <span className='font-semibold text-gray-900'>{filterDoc.length}</span> doctors found
                    {speciality && <span className='ml-2'>in <span className='font-semibold'>{speciality}</span></span>}
                  </p>
                  
                  <div className='hidden md:flex items-center gap-2 text-sm text-gray-500'>
                    <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>Sort by: Recommended</span>
                  </div>
                </div>

                {/* Doctors Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                  {filterDoc.map((item, index) => (
                    <GlassCard 
                      key={index}
                      variant="strong"
                      className='group cursor-pointer animate-slide-up transform hover:-translate-y-2 transition-all duration-500'
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => navigate(`/appointment/${item._id}`)}
                    >
                      {/* Card Header */}
                      <div className='relative h-56 bg-gradient-to-br from-primary/10 to-primary/20 overflow-hidden rounded-t-2xl -m-6 mb-4'>
                        <img
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                          src={item.image}
                          alt={item.name}
                        />
                        
                        {/* Availability Badge */}
                        <div className='absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm bg-green-500/90'>
                          <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
                          <span className='text-xs'>Available</span>
                        </div>

                        {/* Quick Actions */}
                        <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200'>
                            <svg className='w-5 h-5 text-gray-700' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Doctor Info */}
                      <div className='p-2'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex-1'>
                            <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1'>
                              {item.name}
                            </h3>
                            <p className='text-sm text-primary font-medium mb-2'>
                              {item.speciality}
                            </p>
                            <p className='text-sm text-gray-600'>
                              {item.degree} • {item.experience}
                            </p>
                          </div>
                          
                          <div className='flex flex-col items-end gap-2'>
                            <div className='flex items-center gap-1 text-sm text-yellow-500'>
                              <svg className='w-4 h-4' fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span className='font-semibold'>4.8</span>
                            </div>
                            <p className='text-xs text-gray-500'>234 reviews</p>
                          </div>
                        </div>

                        <div className='flex items-center gap-3 text-xs text-gray-500 mb-4'>
                          <div className='flex items-center gap-1'>
                            <svg className='w-3 h-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{item.address.line1}</span>
                          </div>
                        </div>

                        <div className='flex items-center justify-between pt-4 border-t'>
                          <div>
                            <p className='text-2xl font-bold text-gray-900'>${item.fees}</p>
                            <p className='text-xs text-gray-500'>Consultation fee</p>
                          </div>
                          
                          <NeonButton 
                            neonColor="#FF5F6F"
                            glowColor="#FFB6C1"
                            size="small"
                          >
                            Book Now
                          </NeonButton>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </>
            )}
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

export default Doctors