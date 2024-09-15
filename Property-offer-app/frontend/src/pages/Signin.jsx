import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const Signin = () => {
  const {setLoggedIn} = useContext(UserContext)
  const {setUserInfo} = useContext(UserContext)

  const navigate = useNavigate()
  const [signinData, setSigninData] = useState({})
  
  const handleChange = (e)=>{
    return setSigninData({
      ...signinData,
      [e.target.id]:e.target.value
    })
  }
  const handleSubmit = async (e)=>  {
    e.preventDefault();
    try{
      console.log(signinData)
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(signinData)
      });
      const data = await res.json()
      console.log(data)

      if(data.success === false){
        return alert("Login credential invalid")
        navigate('/signin')
      }
      setLoggedIn(true)
      setUserInfo(data)
      navigate('/profile')

    }catch(error){
      console.log(error)
    }

  }

  
  return (
    <div className='flex flex-col mx-auto my-auto pt-15 justify-center min-h-screen bg-slate-300 items-center'>
    <h1 className='pb-10 text-3xl center text font-bold ' >Sign In</h1>
    <form onSubmit={handleSubmit} action="" className=' w-1/3 flex flex-col'>
      <input onChange={handleChange} type="text " id= "email" className ="mb-6 rounded-md font-normal  px-3 py-2 " placeholder='Email' />
      <input onChange={handleChange} type="text " id='password' className ="mb-6 rounded-md font-normal  px-3 py-2 " placeholder='Password' />
      {/* <input onChange={handleChange} type="text " className ="mb-6 rx rounded-md font-normal  px-3 py-2 " placeholder='Confirm password' /> */}
      <button className='hover:bg-blue-900 w-full bg-blue-950 text-white py-3 font-bold rounded-md'> Signin now</button>
    </form>
  </div>
  )
}

export default Signin