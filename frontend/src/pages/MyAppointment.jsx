import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  if (!doctors) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  if (doctors.length === 0) {
    return <div className="text-center mt-10 text-gray-500">No doctors available</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* Title */}
      <p className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        My Appointments
      </p>

      <div className="space-y-6">
        {doctors.slice(0, 3).map((item, index) => (

          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 p-5 border rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white"
          >

            {/* Left - Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name || 'Doctor'}
                onError={(e) => {
                  e.target.src = '';
                  e.target.alt = 'Image not available';
                }}
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <p className="text-center mt-2 font-medium text-gray-700">
                {item.name}
              </p>
            </div>

            {/* Middle - Details */}
            <div className="flex-1 text-gray-700 space-y-1">
              <p className="text-lg font-semibold text-gray-800">
                {item.name}
              </p>
              <p className="text-sm text-blue-600 font-medium">
                {item.speciality}
              </p>

              <p className="text-sm mt-2 font-medium text-gray-600">
                Address:
              </p>
              <p className="text-sm text-gray-500">{item.address.line1}</p>
              <p className="text-sm text-gray-500">{item.address.line2}</p>

              <p className="text-sm mt-2">
                <span className="font-medium text-gray-700">Date & Time:</span>{' '}
                18, June, 2026 | 8:30 PM
              </p>
            </div>

            {/* Right - Buttons */}
            <div className="flex flex-col justify-center gap-3">
              <button className="px-4 py-2 bg-primary text-white  rounded-lg hover:bg-green-700 transition">
                Pay Online
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition">
                Cancel Appointment
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment