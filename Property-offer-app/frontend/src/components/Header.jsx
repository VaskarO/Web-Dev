import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
const Header = () => {
  return (
    <header className='flex h-16 w-full bg-gray-200 justify-between'>
        <div className='ml-3 sm:w-1/5 my-auto'>
            <h1 className='text-blue-900 text-xl font-extrabold'><Link to={'/'}><span>PROPERTY</span><span className='text-purple-950 font-bold'>OFFERS</span></Link></h1>
        </div>
        <div className=' my-auto ml-3 flex gap-9 text-md font-semibold justify-center text-center items-center text-blue-900  sm:w-3/5'>
            <Link className='hidden sm:block' to={'/'}>Home</Link>
            <Link className='hidden sm:block' to={'/about'}>About</Link>
            <Link className='hidden sm:block' to={'/profie'}>Profile</Link>
            <Link className='hidden sm:block ' to={'/signup'}><button className='bg-green-800 drop-shadow-xl cursor-pointer px-3 py-1 rounded-sm text-gray-100 font-medium items-center'>Sign Up</button></Link>
        </div>
        <div className='sm:w-1/5 my-auto flex  font-medium justify-center text-center items-center mr-3 gap-2'>
            <form className='flex bg-white h-9 px-3 justify-center items-center'>
             <input placeholder='serach properties' className='focus:outline-none text-md font-semibold' type="text" />
             <button className ='drop-shadow-xl cursor-pointer py-1 rounded-sm text-blue-950 font-normal px-2 h-7'><FaSearch className='text-lg'/></button>
            </form>
            
           
        </div>
    </header>
  )
}

export default Header