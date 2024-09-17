import React , {useContext, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import UserContext from '../contexts/UserContext'
const Signup = () => {
  const [signUpData, setSignUpData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const {loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  if(loggedIn){
    navigate('/advertisements?alreadyloggedin')
  }


  const handleChange =(e)=>{
    setSignUpData({
      ...signUpData,
      [e.target.id]:e.target.value
    })
  }


    const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
        setLoading(true)

        const res = await fetch('/api/auth/signup', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(signUpData)
      });
      const data = await res.json();
      console.log(data) 

      if(data.success === false){
        setLoading(false)
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/signin')
  }catch(error){
    setLoading(false)
    setError(error.message)
  }
  }
  console.log(signUpData)
  return (
    <div className='flex flex-col mx-auto my-auto pt-15 justify-center min-h-screen bg-slate-300 items-center'>
      <h1 className='pb-10 text-3xl center text font-bold ' >Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className=' w-1/3 flex flex-col'>
        <input onChange={handleChange} required type="text " id= "email" className ="mb-6 rounded-md font-normal  px-3 py-2 " placeholder='Email' />
        <input onChange={handleChange} required type="text " id='username' className ="mb-6 rounded-md font-normal  px-3 py-2 " placeholder='Username' />
        <input onChange={handleChange} required type="text " id='password' className ="mb-6 rounded-md font-normal  px-3 py-2 " placeholder='Password' />
        {/* <input onChange={handleChange} type="text " className ="mb-6 rx rounded-md font-normal  px-3 py-2 " placeholder='Confirm password' /> */}
        <button className='hover:bg-blue-900 w-full bg-blue-950 text-white py-3 font-bold rounded-md'> Signup now</button>
      </form>
      <p>Already have an account? <Link className='text-blue-600' to={'/signin'}>Sign in here.</Link></p>
    </div>
  )
}

export default Signup