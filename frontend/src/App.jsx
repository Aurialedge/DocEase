import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Splash from './pages/Splash'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './stylingcomp/ParticleBackground'
import WaveAnimation from './stylingcomp/WaveAnimation'
import MorphingShapes from './stylingcomp/MorphingShapes'
import GradientOrb from './stylingcomp/GradientOrb'

const app =()=>{
  return (
    <div className='relative min-h-screen w-full'>
      {/* Content */}
      <div className='relative z-10'>
        <Routes>
          <Route path='/' element={<Splash/>}/>
          <Route path='/*' element={
            <div className='mx-4 sm:mx-[10%]'>
              <Navbar/>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                {/* adding the dynamic path for the doctors speciality */}
                <Route path='/doctors/:speciality' element={<Doctors/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/my-appointments' element={<MyAppointment/>}/> 
                <Route path='/appointment/:docId' element={<Appointment/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
              <Footer/>
            </div>
          }/>
        </Routes>
      </div>
    </div>
  )
}

export default app;