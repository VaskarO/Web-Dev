import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {  useParams } from 'react-router-dom'


const UpdateAdvertisement = () => {
    const {id} = useParams()
    const [advertise, setAdvertise] = useState({})
    const [advertisementData, setAdvertisementData] = useState({})

    // console.log(id)
    useEffect(()=>{
      fetch(`/api/advertiseList/advertisement/${id}`)
      .then(response => response.json())
      .then(data =>{setAdvertise(data.advertiseemnt),  setAdvertisementData(data.advertiseemnt)})
      .catch(error=>console.log(error))
    }, [])


  const navigate = useNavigate()
  const handleOnChange =(e)=>{
    setAdvertisementData({
      ...advertisementData,
      [e.target.id]:e.target.value
    })
  }
  // console.log(advertisementData)
  // const handleSubmit = async(e)=>{
  //   e.preventDefault()
  //   try{
  //     if(advertisementData.advertiseType==="" || advertisementData.title===""  || advertisementData.description===""   || advertisementData.price===""  || advertisementData.numberOfRooms===""  || advertisementData.floorNumber===""  || advertisementData.numberOfBathrooms===""  || advertisementData.availableFrom===""  || advertisementData.petAllowed===""  || advertisementData.haveBalcony==="" ){
  //       alert('All field required!')
  //     }

  //     const res = await fetch(`/api/advertiseList/update/${id}`, {
  //       method:'POST',
  //       headers:{
  //         'Content-Type':'application/json',
  //       },
  //       body:JSON.stringify(advertisementData)
  //     }).then(data=>data.json())

  //     if(res.success ===false){
  //       alert('Error on creating advertisement'. res.message)
  //     }      
  //     if(res.success === true){
  //       navigate(`/adDetails/${res.AdvertisementId}`)
  //       alert('Advertisement created successfully.')
  //     }

  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Check if any required field is empty
      if (
        advertisementData.advertiseType === '' || 
        advertisementData.title === '' || 
        advertisementData.description === '' || 
        advertisementData.price === '' || 
        advertisementData.numberOfRooms === '' || 
        advertisementData.floorNumber === '' || 
        advertisementData.numberOfBathrooms === '' || 
        advertisementData.availableFrom === '' || 
        advertisementData.petAllowed === '' || 
        advertisementData.haveBalcony === ''
      ) {
        alert('All fields are required!');
        return; // Stop further execution
      }
  
      // Send the request to update advertisement
      const res = await fetch(`http://localhost:3000/api/advertiseList/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(advertisementData),
      });
  
      const data = await res.json(); // Parse JSON response
  
      // Handle response success/failure
      if (data.success === false) {
        alert(`Error on updating advertisement: ${data.message}`);
      } else if (data.success === true) {
        navigate(`/adDetails/${data.AdvertisementId}`);
        alert('Advertisement updated successfully.');
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto h-full bg-slate-200'>
      <h1 className='text-3xl font-semibold my-5'>Create your advertisement:</h1>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Advertisement Type</label>
        <select onChange={handleOnChange} id='advertiseType' className='w-4/6 py-2 px-3' type="text" placeholder=''  >
        <option value={advertisementData.type}>{`${advertisementData.advertiseType}`}</option>
        <option className='bg-white' value={'sale'}>Sale</option>
        <option value={'rent'}>Rent</option>
        </select>
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Title</label>
        <input value= {advertisementData.title} onChange={handleOnChange} id='title' className='w-4/6 py-2 px-3' type="text" placeholder='Title' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Price</label>
        <input value= {advertisementData.price}  onChange={handleOnChange} id = "price" className='w-4/6 py-2 px-3' type="number" placeholder='Price' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Description</label>
        <textarea value= {advertisementData.description}  onChange={handleOnChange} id = "description" className='w-4/6 py-2 px-3'  type="text" rows = "4" placeholder='Description o your property' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Location</label>
        <input value= {advertisementData.location}  onChange={handleOnChange} id = 'location' className='w-4/6 py-2 px-3' type="text" placeholder='Location' />
      </div>


      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Rooms Quantity</label>
        <input value= {advertisementData.numberOfRooms}  onChange={handleOnChange} id = 'numberOfRooms' className='w-4/6 py-2 px-3' type="number" placeholder='No. of rooms' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Floor</label>
        <input value= {advertisementData.floorNumber} onChange={handleOnChange} id= 'floorNumber' className='w-4/6 py-2 px-3' type="number" placeholder='Floor ' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Bathrooms</label>
        <input value= {advertisementData.numberOfBathrooms} onChange={handleOnChange} id='numberOfBathrooms' className='w-4/6 py-2 px-3' type="number" placeholder='Bathrooms ' />
      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Balcony available:</label>
        <select onChange={handleOnChange} id = 'haveBalcony' className='w-4/6 py-2 px-3' type="text" placeholder='type'  >
        <option value= {advertisementData.haveBalcony}>{advertisementData.haveBalcony?'Yes':'No'}</option>
        <option className='bg-white' value={'true'}>Yes</option>
        <option value={'false'}>No</option>
        </select>      </div>

      <div className='flex flex-warp w-3/4 bg-slate-100 gap-3 my-2'>
        <label htmlFor="" className='w-2/6 py-2 px-2'>Pet Allowded</label>
        <select onChange={handleOnChange} id='petAllowed' className='w-4/6 py-2 px-3' type="text" placeholder=''  >
        <option value= {advertisementData.petAllowed}>{advertisementData.petAllowed?'Yes':'No'}</option>
        <option className='bg-white' value={'true'}>Yes</option>
        <option value={'false'}>No</option>
        </select>      </div>

      <div className='flex flex-warp w-3/4 gap-3 my-4 justify-center'>
        <button onClick = {handleSubmit} className='bg-blue-900 drop-shadow-lg text-white font-semibold px-4 py-2 w-1/2 hover:bg-blue-800'>Update now</button>
      </div>

    

    </div>

    
  )
}

export default UpdateAdvertisement