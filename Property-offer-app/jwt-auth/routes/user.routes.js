import express from  'express'
import { auth, login, logout, profile, register } from '../controller/user.controller.js'


const userRoute= express.Router()


userRoute.post('/register', register)

userRoute.post('/login',login)

userRoute.post('/auth', auth)
userRoute.get('/profile',profile)

userRoute.post('/logout',logout)

// export const userLogin = app.post('/login', loginUser)

// export const userAuth = app.post('/auth', userAuth)

export default userRoute

