import express from 'express';
import { signin, signup,logout, getUserInfo } from '../controller/auth.controller.js';
import { getCurrentUser } from '../utils/getCurrentUser.js';
const authRouter = express.Router()

authRouter.post('/signup', signup)
authRouter.post('/signin', signin)
authRouter.post('/logout', logout)
authRouter.get('/getUser',getCurrentUser,getUserInfo  )
export default authRouter