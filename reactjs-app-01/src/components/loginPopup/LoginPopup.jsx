import React from 'react'
import { useState } from 'react'
const LoginPopup = ({setShowLogin}) => {
    const [signupForm, setSignupForm] = useState('Sign Up')
  return (
    <div className='flex flex-col h-lvh w-full items-center justify-center mx-auto p-9 absolute z-10  bg-opacity-50 bg-black'>
        <form action="" className='flex justify-center py-9 w-1/3  bg-slate-400 '>
            <div className='flex flex-col '>
                <div>
                <h1 className="drop-shadow-md rounded-3xl text-white text-center items-center cursor-pointer bg-red-800 px-1 py-1 w-1/6 float-end" onClick={()=>setShowLogin(false)}>X</h1>
                </div>
                
                <h2 className='text-3xl text-center text-blue-950'>{signupForm}</h2>
                <div className='flex flex-col'>
                    {signupForm ==="Sign Up"?<input className='p-3 mt-6 bg-white py-3 drop-shadow-lg' type="text" placeholder='Your Name' />:<></>}
                    
                    <input className='p-3 mt-6 bg-white py-3 drop-shadow-lg' type="email" placeholder='Your Email' />
                    <input className='p-3 mt-6 bg-white py-3 drop-shadow-lg' type="password" placeholder='Provide Password' />
                </div>
                <div>
                    <button className='w-full bg-green-700 text-white py-3 drop-shadow-lg mt-6 hover:bg-green-900'>{signupForm==="Sign Up"?"Create account":"Login"}</button>
                </div>
                <div className='flex items-start pt-3 w-full mb-5'>
                    <input type="checkbox" />
                    <p className='text-sm'>*I agree the terms of use of privacy policy after.</p>
                </div>
                {signupForm==="Login"?<p>Required new account? <span className='pl-3 text-green-900 cursor-pointer underline' onClick={()=>setSignupForm("Sign Up")}>Sign up here.</span></p>:<><p>Already have an account? <span className='pl-3 text-green-900 cursor-pointer underline' onClick={()=> setSignupForm("Login")}>Sign in here.</span></p></>}
                
            </div>
        </form>
    </div>
  )
}

export default LoginPopup