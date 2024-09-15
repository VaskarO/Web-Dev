import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import UserContext from '../contexts/UserContext';

const Header = () => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {loggedIn} = useContext(UserContext)
  const {setLoggedIn} = useContext(UserContext)
  const {setUserInfo} = useContext(UserContext)
  const [logoutMessage, setLogoutMessage] = useState('')

  const handleLogout = async (e)=>  {
    e.preventDefault();
    try{
      const res = await fetch('/api/auth/logout',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
      });
      const data = await res.json()
      console.log(data)

      if(data.success === false){
        navigate('/profile')
      }
      setLoggedIn(false)
      setUserInfo({})
      navigate('/signin')

    }catch(error){
      console.log(error)
    }

  }


  return (
    <header className="flex h-16 w-full bg-gray-200 justify-between items-center px-4 sm:px-6">
      {/* Logo */}
      <div className="text-blue-900 text-xl font-extrabold">
        <h1>
          <Link to="/">
            <span>PROPERTY</span>
            <span className="text-purple-950 font-bold">OFFERS</span>
          </Link>
        </h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-blue-900">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links Section */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-gray-200 sm:static sm:flex sm:items-center sm:w-auto sm:bg-transparent`}
      >
        <div className="flex flex-col sm:flex-row sm:gap-9 text-md font-semibold text-blue-900 w-full sm:w-auto">
          <Link className="py-2 px-4 sm:px-0 sm:py-0" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link className="py-2 px-4 sm:px-0 sm:py-0" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link className="py-2 px-4 sm:px-0 sm:py-0" to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
          {loggedIn === true?
           <Link className="py-2 px-4 sm:px-0 sm:py-0" to="" onClick={() => setIsMenuOpen(false)}>
           <button className="bg-red-800 drop-shadow-xl cursor-pointer px-3 py-1 rounded-sm text-gray-100 font-medium" onClick={handleLogout}>
             Logout
           </button>
           </Link>  
          :  <Link className="py-2 px-4 sm:px-0 sm:py-0" to="/signup" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-green-800 drop-shadow-xl cursor-pointer px-3 py-1 rounded-sm text-gray-100 font-medium">
              Sign Up
            </button>
          </Link>}
        </div>
      </nav>

      {/* Search Bar */}
      <div className="hidden sm:flex sm:w-1/5 justify-center items-center">
        <form className="flex bg-white h-9 px-3 justify-center items-center">
          <input
            placeholder="Search properties"
            className="focus:outline-none text-md font-semibold"
            type="text"
          />
          <button className="drop-shadow-xl cursor-pointer py-1 rounded-sm text-blue-950 font-normal px-2 h-7">
            <FaSearch className="text-lg" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;


// import React from 'react'
// import { Link } from 'react-router-dom'
// import {FaSearch} from 'react-icons/fa'
// const Header = () => {
//   return (
//     <header className='flex h-16 w-full bg-gray-200 justify-between'>
//         <div className='ml-3 sm:w-1/5 my-auto'>
//             <h1 className='text-blue-900 text-xl font-extrabold'><Link to={'/'}><span>PROPERTY</span><span className='text-purple-950 font-bold'>OFFERS</span></Link></h1>
//         </div>
//         <div className=' my-auto ml-3 flex gap-9 text-md font-semibold justify-center text-center items-center text-blue-900  sm:w-3/5'>
//             <Link className='hidden sm:block' to={'/'}>Home</Link>
//             <Link className='hidden sm:block' to={'/about'}>About</Link>
//             <Link className='hidden sm:block' to={'/profie'}>Profile</Link>
//             <Link className='hidden sm:block ' to={'/signup'}><button className='bg-green-800 drop-shadow-xl cursor-pointer px-3 py-1 rounded-sm text-gray-100 font-medium items-center'>Sign Up</button></Link>
//         </div>
//         <div className='sm:w-1/5 my-auto flex  font-medium justify-center text-center items-center mr-3 gap-2'>
//             <form className='flex bg-white h-9 px-3 justify-center items-center'>
//              <input placeholder='serach properties' className='focus:outline-none text-md font-semibold' type="text" />
//              <button className ='drop-shadow-xl cursor-pointer py-1 rounded-sm text-blue-950 font-normal px-2 h-7'><FaSearch className='text-lg'/></button>
//             </form>
            
           
//         </div>
//     </header>
//   )
// }

// export default Header