import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import thumbnail from '../assets/images/300x200.png'
const SearchComponent = ({item}) => {
  
  return (
    <div className="min-w-64 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 bg-slate-200 p-4 shadow-md rounded-lg">
  <img className="rounded-lg shadow-sm w-full h-40 object-cover" src={thumbnail} alt="" />
  
  <h2 className="text-lg font-semibold pt-3">{item.title}</h2>
  <p className="text-sm text-gray-600">{item.description}</p>

  <div className="flex justify-center gap-2 items-center pt-2 text-sm font-semibold text-gray-800">
    <FaMapMarkerAlt className="text-red-500" />
    <p>Street, City, ST</p>
  </div>

  <Link to={`/adDetails/${item._id}`}>
    <button className="bg-blue-900 text-white w-full mt-3 py-2 rounded-md font-semibold hover:bg-blue-800 hover:text-gray-200">
      More details
    </button>
  </Link>
</div>
  )
}

export default SearchComponent