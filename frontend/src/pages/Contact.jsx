
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 lg:px-8'>

      {/* Heading */}
      <div className='text-center pt-12'>
        <p className='text-3xl font-semibold text-gray-700 tracking-wide'>
          CONTACT <span className='text-primary'>US</span>
        </p>
      </div>

      {/* Contact Info Section */}
      <div className='my-14 flex flex-col md:flex-row items-center gap-12'>

        <img 
          className='w-full md:max-w-[380px] rounded-2xl shadow-md'
          src={assets.contact_image}
          alt=''
        />

        <div className='flex flex-col justify-center gap-8 md:w-1/2 text-gray-600'>

          <div className='space-y-2'>
            <b className='text-gray-800 text-lg'>OUR OFFICE</b>
            <p>IIIT Nagpur, Butibori, Nagpur, Maharashtra</p>
          </div>

          <div className='space-y-3'>
            <b className='text-gray-800 text-lg'>Careers at DocEase</b>
            <p>Learn more about the teams and the job openings</p>

            <button className='mt-2 w-fit px-6 py-2 border border-primary text-primary rounded-lg shadow hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300'>
              Explore jobs
            </button>
          </div>

        </div>
      </div>

      {/* Get In Touch */}
      <div className='text-center pt-6'>
        <p className='text-3xl font-semibold text-gray-700'>
          GET IN <span className='text-primary'>TOUCH</span>
        </p>
      </div>

      {/* Contact Cards */}
      <div className='grid md:grid-cols-3 gap-8 mt-12 mb-20'>

        <div className='border rounded-2xl px-8 py-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-gray-800 text-lg'>Email</b>
          <p className='mt-2'>outmart@gmail.com</p>
        </div>

        <div className='border rounded-2xl px-8 py-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-gray-800 text-lg'>Phone</b>
          <p className='mt-2'>+91 98765 43210</p>
        </div>

        <div className='border rounded-2xl px-8 py-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-gray-800 text-lg'>Support Hours</b>
          <div className='mt-2'>
            <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
            <p>Sat - Sun: 8:00 AM - 12:00 PM</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
