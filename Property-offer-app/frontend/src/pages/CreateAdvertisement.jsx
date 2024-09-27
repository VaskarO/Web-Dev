import React, {useState} from 'react'

const CreateAdvertisement = () => {
  const [advertisementData, setAdvertisementData] = useState('')
  // const [type, setType] = useState('')
  // const [title, setTitle]= useState('')
  // const [price, setPrice] = useState(0)
  // const [description ,setDescription] = useState('')
  // const [location, setLocation] = useState('')
  // const [rooms, setRooms] = useState(0)
  // const [floor, setFloor] = useState(0)
  // const [bathrooms, setBathrooms] = useState(0)
  // const [balcony , setBalcony]  = useState(0)
  // const [petAllow, setPetAllow] = useState('')
  // console.log(type)
  const handleOnChange =(e)=>{
    setAdvertisementData({
      ...advertisementData,
      [e.target.id]:e.target.value
    })
  }
  console.log(advertisementData)
  const handleSubmit = async()=>{
    // fetch('')
  }
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto h-full bg-slate-200'>
      <h1 className='text-3xl font-semibold my-5'>Create your advertisement:</h1>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Advertisement Type</label>
        <select onChange={handleOnChange} id='type' className='w-4/6 py-2 px-3' type="text" placeholder=''  >
        <option value="">Please select one:</option>
        <option className='bg-white' value={'sale'}>Sale</option>
        <option value={'rent'}>Rent</option>
        </select>
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Title</label>
        <input onChange={handleOnChange} id='title' className='w-4/6 py-2 px-3' type="text" placeholder='Title' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Price</label>
        <input onChange={handleOnChange} id = "price" className='w-4/6 py-2 px-3' type="number" placeholder='Price' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Description</label>
        <textarea onChange={handleOnChange} id = "description" className='w-4/6 py-2 px-3'  type="text" rows = "4" placeholder='Description o your property' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Location</label>
        <input onChange={handleOnChange} id = 'location' className='w-4/6 py-2 px-3' type="text" placeholder='Location' />
      </div>


      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Rooms Quantity</label>
        <input onChange={handleOnChange} id = 'rooms' className='w-4/6 py-2 px-3' type="number" placeholder='No. of rooms' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Floor</label>
        <input onChange={handleOnChange} id= 'floor' className='w-4/6 py-2 px-3' type="number" placeholder='Floor ' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Bathrooms</label>
        <input onChange={handleOnChange} id='bathrooms' className='w-4/6 py-2 px-3' type="number" placeholder='Bathrooms ' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Balcony available:</label>
        <select onChange={handleOnChange} id = 'balcony' className='w-4/6 py-2 px-3' type="text" placeholder='type'  >
        <option value="">Please select one:</option>
        <option className='bg-white' value={'yes'}>Yes</option>
        <option value={'no'}>No</option>
        </select>      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Pet Allowded</label>
        <select onChange={handleOnChange} id='petAllowded' className='w-4/6 py-2 px-3' type="text" placeholder=''  >
        <option value="">Please select one:</option>
        <option className='bg-white' value={'yes'}>Yes</option>
        <option value={'no'}>No</option>
        </select>      </div>

      <div className='flex flex-warp w-3/4 gap-3 my-4 justify-center'>
        <button onClick = {handleSubmit} className='bg-blue-900 drop-shadow-lg text-white font-semibold px-4 py-2 w-1/2 hover:bg-blue-800'>Create now</button>
      </div>

    

    </div>

    
  )
}

export default CreateAdvertisement