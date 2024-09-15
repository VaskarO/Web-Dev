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
     <h1 className='text-3xl'>Hello,</h1>
      <h2  className='text-md'>Your property listing website.</h2>
      {/* <h1>{loggedIn?"User Logged In":""}</h1>
      {console.log(userInfo)} */}
      <h1 className='text-2xl my-10'>Welcome: {userInfo.username}</h1>
      <SearchBar/>
      <p className='my-6 text-2xl font-semibold'>OR</p>
     <Link to={'/advertisements'}> <button  className='px-6 py-3 border-s-indigo-900 mt-4 font-semibold text-white bg-blue-900 shadow-xl text-xl rounded-md'>View al availabe  properties</button></Link>
    </div>
  )
}

export default Home