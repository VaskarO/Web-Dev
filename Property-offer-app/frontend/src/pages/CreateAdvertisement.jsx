import React from 'react'

const CreateAdvertisement = () => {
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto h-full bg-slate-200'>
      <h1 className='text-3xl font-semibold my-5'>Create your advertisement:</h1>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Advertisement Type</label>
        <input className='w-4/6 py-2 px-3' type="text" placeholder='type' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Title</label>
        <input className='w-4/6 py-2 px-3' type="text" placeholder='Title' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Price</label>
        <input className='w-4/6 py-2 px-3' type="number" placeholder='Price' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Description</label>
        <input className='w-4/6 py-2 px-3'  type="text-area" placeholder='Description o your property' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Location</label>
        <input className='w-4/6 py-2 px-3' type="text" placeholder='Location' />
      </div>


      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Rooms Quantity</label>
        <input className='w-4/6 py-2 px-3' type="number" placeholder='No. of rooms' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Floor</label>
        <input className='w-4/6 py-2 px-3' type="number" placeholder='Floor ' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Bathrooms</label>
        <input className='w-4/6 py-2 px-3' type="number" placeholder='Bathrooms ' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Balcony available:</label>
        <input className='w-4/6 py-2 px-3' type="text" placeholder='Balcony availablle' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Pet Allowded</label>
        <input className='w-4/6 py-2 px-3' type="text" placeholder='Pet allowded ' />
      </div>

      <div className='flex flex-warp w-3/4 gap-3 my-4 justify-center'>
        <button className='bg-blue-900 drop-shadow-lg text-white font-semibold px-4 py-2 w-1/2 hover:bg-blue-800'>Create now</button>
      </div>

    

    </div>

    
  )
}

export default CreateAdvertisement