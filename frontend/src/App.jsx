import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import MyAppointment from './pages/MyAppointment';
import Footer from './components/Footer';

const app =()=>{
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>


       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        {/* adding the dynamic path for the doctors speciality */}
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/> 
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default app;