import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt="Logo"/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>DocEase is a one stop solution for all your healthcare needs.
                    <br/>Developed and Managed by Team OutMart</p>
            </div>
            {/* center section  */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right section  */}
            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>IIIT Nagpur, Maharashtra</li>
                    <li>Email: outmartai@gmail.com</li>
                    <li>Phone: 7249566615</li>
                </ul>
            </div>
        </div>
            {/* bottom section  */}
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2026 DocEase. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer