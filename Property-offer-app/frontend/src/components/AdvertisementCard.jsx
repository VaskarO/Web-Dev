import React from 'react'
import thumbnail from '../assets/images/300x200.png'
import { FaMapMarkerAlt  } from 'react-icons/fa'

const AdvertisementCard = () => {
  return (
    <div className='w-1/4  mb-4 bg-slate-200 p-2 shadow-md' > 
    <img className='rounded-lg shadow-sm' src={thumbnail} alt="" />
    <h2 className='text-md font-semibold pt-2'>PROPERTY TITLE</h2>
    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque placeat adipisci assumenda ipsum voluptas quidem ducimus.</p>
    <div className='flex justify-center gap-3 items-center px-5 font-semibold pt-2'>
    <FaMapMarkerAlt /> 
    <p >Street, City, ST</p>
    </div>
    <button className='bg-blue-900 text-white w-full mt-2 py-2 rounded-md float-right font-semibold hover:bg-blue-800 hover:text-gray-200'>More details</button>
    </div>
  )
}

export default AdvertisementCard