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
    <div className="flex w-full md:w-4/5 pt-5 flex-col mx-auto min-h-screen">
  <h1 className="text-3xl font-semibold mx-auto my-5 text-center">Detail Information</h1>
  
  <div className="flex flex-col md:flex-row flex-wrap p-5 gap-5 justify-around items-start">
    <div className="w-full md:w-2/5">
      <img className="w-full rounded-lg shadow-lg" src={thumbnail} alt="" />
    </div>

    <div className="w-full md:w-1/2">
      <h1 className="text-2xl italic text-blue-800 font-bold">
        {advertise.advertiseType === 'sale' ? 'For Sale' : 'Rental Property'}
      </h1>

      <h1 className="text-xl font-semibold mt-4">Title</h1>
      <p>{advertise.title}</p>

      <h1 className="text-xl font-semibold mt-4">Price</h1>
      <p>{advertise.price}</p>

      <h1 className="text-xl font-semibold pt-5">Description</h1>
      <p>{advertise.description}</p>

      <h1 className="text-xl font-semibold pt-5">Location</h1>
      <p>Street 123, City, State, Country</p>

      <h1 className="text-xl font-semibold pt-5">Facilities</h1>
      <p>Floors: <strong>{advertise.floorNumber}</strong></p>
      <p>Rooms: <strong>{advertise.numberOfRooms}</strong></p>
      <p>Balcony: <strong>{advertise.haveBalcony ? 'Available' : 'Not available'}</strong></p>
      <p>Bathroom: <strong>{advertise.haveBalcony ? 'Available' : 'Not available'}</strong></p>
      <p>Pet Allowed: <strong>{advertise.petAllowed ? 'Yes' : 'No'}</strong></p>

      <h1 className="text-xl font-semibold pt-5">Available From</h1>
      <p>{advertise.availableFrom}</p>

      <h1 className="text-xl font-semibold pt-5">Seller</h1>
      <p>Firstname Lastname</p>

      <div className="flex flex-col md:flex-row gap-2 mt-5">
        <Link to={''} className="w-full md:w-1/2">
          <button className="bg-blue-900 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-800 hover:text-gray-200">
            View on map
          </button>
        </Link>
        <Link to={''} className="w-full md:w-1/2">
          <button className="bg-green-900 text-white w-full py-2 rounded-md font-semibold hover:bg-green-800 hover:text-gray-200">
            Make an appointment
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdDetail