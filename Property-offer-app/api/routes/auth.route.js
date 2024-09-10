import express from 'express';
import { signin, signup,logout } from '../controller/auth.controller.js';

const authRouter = express.Router()

authRouter.post('/signup', signup)
authRouter.post('/signin', signin)
authRouter.post('/logout', logout)

export default authRouter