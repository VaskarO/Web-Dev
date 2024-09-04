import express from  'express'
import { register } from '../controller/user.controller.js'


const userRoute= express.Router()


userRoute.post('/register', register)

userRoute.post('/login',(req, res)=> res.send('login'))

userRoute.post('/auth', (req, res)=>res.send('auth route'))

userRoute.get('/profile',(req, res)=> res.send('profile'))

userRoute.post('/logout',(req, res)=> res.send('logout'))

// export const userLogin = app.post('/login', loginUser)

// export const userAuth = app.post('/auth', userAuth)

export default userRoute

