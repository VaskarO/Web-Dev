import React from 'react'
import AdvertisementCard from '../components/AdvertisementCard.jsx'
const Advertisements = () => {
  return (
    <div className='w-4/5 mx-auto bg-slate-100  min-h-screen'>

        <h1 className='pt-10 text-center text-3xl font-semibold w-full mx-auto text-blue-800'>Available properties</h1>

        <div className='flex flex-wrap md:flex-wrap gap-1 justify-evenly items-center text-center pt-10'>
            <AdvertisementCard/>
            <AdvertisementCard/>
            <AdvertisementCard/>
            <AdvertisementCard/>
            <AdvertisementCard/>
            <AdvertisementCard/>
        </div>
    </div>
  )
}

export default Advertisements