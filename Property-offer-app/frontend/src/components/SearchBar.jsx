import React from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  return (
    <div className='w-3/4 mx-auto flex h-12 rounded-md gap-2'>
        <input type="text" className='w-2/3 outline-none text-xl font-semibold bg-slate-200 px-20 border-none rounded-md' placeholder='Search here.. locations/title/description..'/>
            <button className='w-1/4 h-full bg-blue-900 text-white font-semibold py-auto text-2xl hover:bg-blue-950 rounded-md'><FaSearch className='text-xl mx-auto font-semibold'/></button>
    </div>
  )
}

export default SearchBar