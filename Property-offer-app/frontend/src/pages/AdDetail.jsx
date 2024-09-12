import React from 'react'
import thumbnail from '../assets/images/300x200.png'
import { Link } from 'react-router-dom'
const AdDetail = () => {
  return (
    <div className='flex w-4/5 pt-5 flex-col mx-auto h-screen'>
        <h1 className='text-3xl font-semibold mx-auto my-5'>Detail Informations:</h1>
        
        <div className='flex flex-wrap p-5 gap-2 justify-around'>
            <div className='w-2/5 '>
            <img className='w-full  rounded-lg shadow-lg' src={thumbnail} alt="" />
            </div>
            <div className='w-1/2 '>
                <h1 className='text-xl font-semibold'>Title</h1>
                <p>This is a title </p>
                <h1 className='text-xl font-semibold pt-5'>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio labore reprehenderit mollitia suscipit, nesciunt sunt sit facilis quibusdam alias ea a, accusamus veniam dolorum cupiditate. Neque numquam porro praesentium similique. </p>
                <h1 className='text-xl font-semibold pt-5'>Location</h1>
                <p>Street 123, City, State, Country</p>

                <h1 className='text-xl font-semibold pt-5'>Facilities</h1>
                <p>-Facility 1</p>
                <p>-Facility 2</p>
                <p>-Facility 3</p>
                <p>-Facility 4</p>

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