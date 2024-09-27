import React from 'react'
import thumbnail from '../assets/images/300x200.png'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  const handleCreate =(e)=>{
    e.preventDefault()
    navigate('/createAdvertisement')
  }
  return (
    <div className="flex flex-wrap w-4/5 mx-auto">
  <div className="w-full md:w-1/2 bg-slate-300 min-h-screen">
    <div className="p-10 flex flex-col">
      <img
        className="rounded-lg shadow-lg w-full md:w-2/3 h-full object-cover"
        src={thumbnail}
        alt=""
      />
      <p className="mt-5 text-lg font-semibold">
        Fullname: <i className="text-blue-900 text-lg font-normal">UserFullname</i>
      </p>
      <p className="mt-5 text-lg font-semibold">
        Email: <i className="text-blue-900 text-lg font-normal">user@email.com</i>
      </p>
      <p className="mt-5 text-lg font-semibold">
        Phone: <i className="text-blue-900 text-lg font-normal">+1 0000000000</i>
      </p>
      <p className="mt-5 text-lg font-semibold">
        Address: <i className="text-blue-900 text-lg font-normal">Street nr 1, City, State, Country</i>
      </p>
      <button className="px-3 py-2 bg-blue-900 text-white shadow-lg w-full md:w-1/2 mt-5 font-semibold hover:bg-blue-700">
        Update profile
      </button>
    </div>
  </div>

  <div className="w-full md:w-1/2 bg-slate-200 min-h-screen flex flex-col items-center justify-center p-2">
    <button className="px-8 py-3 bg-green-800 text-white shadow-lg w-full md:w-1/2 mt-5 font-semibold hover:bg-green-600">
      View Dashboard
    </button>
    <button onClick={handleCreate} className="px-8 py-3 bg-green-800 text-white shadow-lg w-full md:w-1/2 mt-5 font-semibold hover:bg-green-600">
      Create Advertisement
    </button>
    <button className="px-8 py-3 bg-green-800 text-white shadow-lg w-full md:w-1/2 mt-5 font-semibold hover:bg-green-700">
      Manage Advertisements
    </button>
    <button className="px-8 py-3 bg-green-800 text-white shadow-lg w-full md:w-1/2 mt-5 font-semibold hover:bg-green-700">
      Manage Appointments
    </button>
  </div>
</div>

    // <div className='flex flex-wrap w-4/5 mx-auto'>
    //   <div className='w-1/2 bg-slate-300 h-screen'>
    //     <div className='p-10 flex flex-col'>
    //     <img className="rounded-lg shadow-lg w-2/3 h-full  object-cover" src={thumbnail} alt="" />
    //     <p className='mt-5 text-lg font-semibold'>Fullname: <i className='text-blue-900 text-lg font-normal'>UserFullname</i> </p>
    //     <p className='mt-5 text-lg font-semibold'>Email: <i className='text-blue-900 text-lg font-normal'>user@email.com</i> </p>
    //     <p className='mt-5 text-lg font-semibold'>Phone: <i className='text-blue-900 text-lg font-normal'>+1 0000000000</i> </p>
    //     <p className='mt-5 text-lg font-semibold'>Address: <i className='text-blue-900 text-lg font-normal'>Street nr 1, City, State, Country</i> </p>
    //     <button className='px-3 py-2 bg-blue-900 text-white shadow-lg w-1/2 mt-5 font-semibold hover:bg-blue-700'>Update profile</button>
    //     </div>
    //   </div>
      
    //   <div className='w-1/2 bg-slate-200 h-screen flex flex-col items-center justify-center'>
    //   <button className='px-8 py-3 bg-green-800 text-white shadow-lg w-1/2 mt-5 font-semibold hover:bg-green-600'>View Dashboard</button>
    //   <button className='px-8 py-3 bg-green-800 text-white shadow-lg w-1/2 mt-5 font-semibold hover:bg-green-600'>Create Advertisement</button>
    //   <button className='px-8 py-3 bg-green-800 text-white shadow-lg w-1/2 mt-5 font-semibold hover:bg-green-700'>Manage Advertisements</button>
    //   <button className='px-8 py-3 bg-green-800 text-white shadow-lg w-1/2 mt-5 font-semibold hover:bg-green-700'>Manage Appointments</button>
    //   </div>

    // </div>
  )
}

export default Profile