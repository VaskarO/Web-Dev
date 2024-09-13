import React, { useEffect, useState } from 'react'
import thumbnail from '../assets/images/300x200.png'
import { Link, useParams } from 'react-router-dom'
const AdDetail = () => {
  const {id} = useParams()
  const [advertise, setAdvertise] = useState([])
  // console.log(id)
  useEffect(()=>{
    fetch(`/api/advertiseList/advertisement/${id}`)
    .then(response => response.json())
    .then(data =>setAdvertise(data.advertiseemnt))
    .catch(error=>console.log(error))
  }, [])
  console.log(advertise)
  return (
    <div className='flex w-4/5 pt-5 flex-col mx-auto h-screen'>
        <h1 className='text-3xl font-semibold mx-auto my-5'>Detail Informations:</h1>
        
        <div className='flex flex-wrap p-5 gap-2 justify-around'>
            <div className='w-2/5 '>
            <img className='w-full  rounded-lg shadow-lg' src={thumbnail} alt="" />
            </div>
            <div className='w-1/2 '>
                <h1 className='text-2xl italic text-blue-800 font-bold'>{advertise.advertiseType==='sale'?"For Sale":"Rental property"}</h1>
                <h1 className='text-xl font-semibold'>Title</h1>
                <p>{advertise.title}</p>
                <h1 className='text-xl font-semibold'>Price</h1>
                <p>{advertise.price}</p>
                <h1 className='text-xl font-semibold pt-5'>Description</h1>
                <p>{advertise.description} </p>
                <h1 className='text-xl font-semibold pt-5'>Location</h1>
                <p>Street 123, City, State, Country</p>
             
                <h1 className='text-xl font-semibold pt-5'>Facilities</h1>
                <p>Floors : <strong>{advertise.floorNumber}</strong> </p>
                <p>Rooms : <strong>{advertise.numberOfRooms}</strong> </p>
                <p>Balcony : <strong>{advertise.haveBalcony?"Available":"Not available"}</strong> </p>
                <p>Bathroom : <strong>{advertise.haveBalcony?"Available":"Not available"}</strong> </p>                <p>Floors : <strong>{advertise.floorNumber}</strong> </p>
                <p>Pet Allowded : <strong>{advertise.petAllowed?"Yes":"Not"}</strong> </p>                
     
                <h1 className='text-xl font-semibold pt-5'>Available From</h1>
                <p>{advertise.availableFrom} </p>
                <h1 className='text-xl font-semibold pt-5'>Seller</h1>
                <p>Firstname Lastname </p>
                <div className='flex gap-2'>
                    <div className='w-1/2'>
                    <Link to={''}>    <button className='mt-5 bg-blue-900 text-white w-full py-2 rounded-md float-right font-semibold hover:bg-blue-800 hover:text-gray-200'>View on map</button></Link>
                    </div>
                    <div className='w-1/2'>
                    <Link to={''}>    <button className='mt-5 bg-green-900 text-white w-full py-2 rounded-md float-right font-semibold hover:bg-blue-800 hover:text-gray-200'>Make an appointment</button></Link>
                    </div>
                </div>
              
            </div>
        </div>

    </div>
  )
}

export default AdDetail