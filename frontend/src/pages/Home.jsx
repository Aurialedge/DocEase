import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import TopDoctors from '../components/TopDoctors'
import SpecialityMenu from '../components/SpecialityMenu'
import ParticleBackground from '../stylingcomp/ParticleBackground'
import WaveAnimation from '../stylingcomp/WaveAnimation'
import GradientOrb from '../stylingcomp/GradientOrb'

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background Creative Components */}
      <ParticleBackground particleCount={25} color="#FF5F6F" />
      <GradientOrb position={{ x: 15, y: 25 }} colors={['#FF5F6F', '#FFB6C1', '#FFC0CB']} />
      <GradientOrb position={{ x: 85, y: 75 }} colors={['#FFB6C1', '#FFC0CB', '#FF69B4']} />
      
      {/* Wave Animation at bottom */}
      <WaveAnimation color="#FF5F6F" speed={0.02} amplitude={40} />
      
      {/* Main Content */}
      <div className='relative z-30 max-w-7xl mx-auto'>
        <div className='border-b border-white/20'>
          <Header/>
        </div>
        <div className='border-b border-white/20'>
          <SpecialityMenu/>
        </div>
        <div className='border-b border-white/20'>
          <TopDoctors/>
        </div>
        <div>
          <Banner/>
        </div>
      </div>
    </div>
  )
}

export default Home