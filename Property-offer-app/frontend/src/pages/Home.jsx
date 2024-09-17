import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import UserContext from '../contexts/UserContext'

const Home = () => {
  const {str1} = useContext(UserContext)
  const {loggedIn} = useContext(UserContext)
  const {userInfo} = useContext(UserContext)
  return (
    <div className='flex flex-col text-cemter justify-center h-screen items-center'>
     <h1 className='text-5xl font-bold text-blue-900'>NEW ERA OF PROPERTY DEALING.</h1>
      <h2  className='text-md'>.</h2>
      <Link to={'/advertisements'}> <button  className='px-6 py-3 mt-4 font-semibold text-blue-900 shadow-lg text-md rounded-sm border-x-4 border-lime-800'>Now on offer</button></Link>
      {/* <h1>{loggedIn?"User Logged In":""}</h1>
      {console.log(userInfo)} */}
      <h1 className='text-2xl my-10 text-purple-900 font-semibold'>{loggedIn?`Welcome to property offer:${userInfo.username}`:"Discover wide range of properties on offer."}</h1>

      <SearchBar/>

    </div>
  )
}

export default Home