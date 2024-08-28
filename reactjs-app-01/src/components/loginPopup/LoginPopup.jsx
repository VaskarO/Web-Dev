import React from 'react'
import { useState } from 'react'
const LoginPopup = ({setShowLogin}) => {
    const [signupForm, setSignupForm] = useState('Sign Up')
  return (
    <div>
        <form action="">
            <div>
                <h2>{signupForm}</h2>
                <h1 onClick={()=>setShowLogin(false)}>Close</h1>
                <div>
                    {signupForm ==="Sign Up"?<input type="text" placeholder='Your Name' />:<></>}
                    
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Provide Password' />
                </div>
                <div>
                    <button>{signupForm==="Sign Up"?"Create account":"Login"}</button>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>*I agree the terms of use of privacy policy after.</p>
                </div>
                {signupForm==="Login"?<p>Required new account? <span onClick={()=>setSignupForm("Sign Up")}>Sign up here.</span></p>:<><p>Already have an account? <span onClick={()=> setSignupForm("Login")}>Sign in here.</span></p></>}
                
            </div>
        </form>
    </div>
  )
}

export default LoginPopup