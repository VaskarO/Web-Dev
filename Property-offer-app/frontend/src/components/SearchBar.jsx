import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const SearchBar = () => {
  const [query, setQuery]= useState('')
  return (
    <div className='w-3/4 mx-auto flex h-12 rounded-md gap-2'>
        <input type="text"
        value={query}
        onChange={(e)=>(setQuery(e.target.value))}
        className='w-2/3 outline-none text-xl font-semibold bg-slate-200 px-20 border-none rounded-md' placeholder='Search here.. locations/title/description..'/>
        <Link onClick={()=>query===''?alert("Provide any value"):setQuery('')} className='w-1/4 h-full bg-blue-900 text-white font-semibold py-auto text-2xl hover:bg-blue-950 rounded-md' to={`/search/${query}`} >
        <FaSearch className='text-xl my-3 mx-auto font-semibold'/>
        </Link>
    </div>
  )
}

export default SearchBar