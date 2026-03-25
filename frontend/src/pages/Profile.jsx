import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Profile = () => {

  const [userData, setUserData] = useState({
    name: "Shivraj Perkar",
    image: assets.profile_pic,
    email: 'saperkar1862004@gmail.com',
    phone: '+91 0123456789',
    address: {
      line1: "IIIT Nagpur",
      line2: "Buribori, Nagpur"
    },
    gender: 'Male',
    dob: '2004-06-18'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src={userData.image} 
            alt="" 
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-md"
          />

          {
            isEdit
              ? <input 
                  type="text" 
                  value={userData.name} 
                  onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                  className="border px-4 py-2 rounded-lg w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              : <p className="text-2xl font-semibold text-gray-800">{userData.name}</p>
          }
        </div>

        <hr />

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold text-gray-700 mb-3">CONTACT INFORMATION</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">

            <p className="font-medium">Email:</p>
            <p>{userData.email}</p>

            <p className="font-medium">Phone:</p>
            {
              isEdit
                ? <input 
                    type="text" 
                    value={userData.phone} 
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                    className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                : <p>{userData.phone}</p>
            }

            <p className="font-medium">Address:</p>
            {
              isEdit
                ? <div className="flex flex-col gap-2">
                    <input 
                      value={userData.address.line1} 
                      onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                      type="text" 
                      className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <input 
                      value={userData.address.line2} 
                      onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                      type="text" 
                      className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                  </div>
                : <p>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
            }

          </div>
        </div>

        <hr />

        {/* Basic Info */}
        <div>
          <p className="text-lg font-semibold text-gray-700 mb-3">BASIC INFORMATION</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">

            <p className="font-medium">Gender:</p>
            {
              isEdit
                ? <select 
                    onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                    value={userData.gender}
                    className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                : <p>{userData.gender}</p>
            }

            <p className="font-medium">Birthday:</p>
            {
              isEdit 
              ? <input 
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                  value={userData.dob}
                  type="date"
                  className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              : <p>{userData.dob}</p>
            }

          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          {
            isEdit
            ? <button 
                onClick={()=>setIsEdit(false)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow transition duration-200"
              >
                Save Information
              </button>
            : <button 
                onClick={()=>setIsEdit(true)}
                className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition duration-200"
              >
                Edit
              </button>
          }
        </div>

      </div>
    </div>
  )
}

export default Profile