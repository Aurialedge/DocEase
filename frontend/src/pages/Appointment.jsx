import React, { useState,useContext, useEffect, use } from 'react'
import { useParams } from 'react-router-dom';
import{ AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment =() =>{

    const {docId}=useParams();
    const {doctors, currencySymbol} =useContext(AppContext);
    const [doctorInfo, setDoctorInfo] = useState(null);

    const daysOfWeek=['SUN','MON','TUE','WED','THURS','FRI','SAT' ]
    const [docSlots, setDocSlots] = useState([]);
    const[slotIndex,setSlotIndex]=useState(0);
    const[slotTime,setSlotTime]=useState("");

    const fetchDocInfo=async()=>{
        const docInfo=doctors.find(doc => doc._id === docId);
        setDoctorInfo(docInfo);
        console.log(docInfo);
        
    }

const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        let endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);
        if (today.getDate() === currentDate.getDate()) {
            currentDate.setHours(today.getHours() > 10 ? currentDate.getHours() + 1 : 10);
            currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
            currentDate.setHours(10, 0, 0, 0);
            currentDate.setMinutes(0);
        }
        let timeSlots = [];
        while (currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeSlots.push({
                datetime: new Date(currentDate),
                time: formattedTime
            });
            currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
        setDocSlots(prev => [...prev,timeSlots]);
    }
};

useEffect(() => {
    fetchDocInfo();
}, [docId, doctors]);

useEffect(() => {
    if (doctorInfo) getAvailableSlots();
}, [doctorInfo]);

useEffect(() => {
    console.log(docSlots);
}, [docSlots]);

return doctorInfo && (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        {/* Doctor Info */}
        <div className='flex flex-col sm:flex-row gap-4'>
            <div>
                <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={doctorInfo.image} alt="" />
            </div>
            <div className='flex-1 border border-gray-400 rounded-lg p-8 py-4 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                {/* Doc Info name degree exp */}
                <p className='flex item-center gap-2 text-2xl font-medium text-gray-900'>{doctorInfo.name} <img className='w-5 ' src={assets.verified_icon} alt="" /></p>
                {/* <p>{doctorInfo.degree}</p>
                <p>{doctorInfo.experience}</p> */}
                <div>
                    <p className='flex items-center gap-2 text-sm mt-1 text-gray-600'> {doctorInfo.degree} - {doctorInfo.speciality}</p>
                    <button className='py-0.5 px-2 border text-xs text-gray-600 hover:text-red-700 rounded-full mt-1 mx-3'>Experience: {doctorInfo.experience}</button>
                </div>
                {/* Doctor Description */}
                <div>
                    <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
                    <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{doctorInfo.about}</p>
                </div>
                <p className='text-gray-500 font-medium mt-4'>
                    Appointment fee: <span className='text-gray-600'>{currencySymbol}{doctorInfo.fees * 10}</span>
                </p>
            </div>
        </div>

    {/* Booking Slots */}
    <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
      <p>Booking Slots</p>
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {
            docSlots.length && docSlots.map((item, index) => (
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' :'border border-gray-200'}`} key={index}>
                   <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                   <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
            ))
        }
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'> 
        {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
            {item.time.toLowerCase()}
            </p>
        ))}
      </div>
      <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
        Book an Appointment
      </button>
    </div>


    {/* Lusting related doctors */}
    <RelatedDoctors docId={docId} speciality={doctorInfo.speciality}/>

    </div>
    </div>
);
}

export default Appointment;