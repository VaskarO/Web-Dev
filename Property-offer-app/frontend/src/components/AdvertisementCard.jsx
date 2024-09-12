import React from 'react'
import { Link } from 'react-router-dom'
import thumbnail from '../assets/images/300x200.png'
import { FaMapMarkerAlt  } from 'react-icons/fa'

const AdvertisementCard = ({item}) => {

  return (
    <div className='w-1/4  mb-4 bg-slate-200 p-2 shadow-md' > 
    <img className='rounded-lg shadow-sm' src={thumbnail} alt="" />
    <h2 className='text-md font-semibold pt-2'>{item.title}</h2>
    <p className='text-sm'>{item.description}</p>
    <div className='flex justify-center gap-3 items-center px-5 font-semibold pt-2'>
    <FaMapMarkerAlt /> 
    <p >Street, City, ST</p>
    </div>
    <Link to={`/adDetails/${item._id}`}>    <button className='bg-blue-900 text-white w-full mt-2 py-2 rounded-md float-right font-semibold hover:bg-blue-800 hover:text-gray-200'>More details</button></Link>

    </div>
  )
}

export default AdvertisementCard