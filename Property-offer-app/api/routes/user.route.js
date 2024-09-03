import express from 'express';
import { test, userUpdate } from '../controller/user.controller.js';

const userRouter = express.Router()


// userRouter.get('/test', (req, res)=>{
//     return res.send('Hello from user route.')
// })

userRouter.get('/test', test)
userRouter.post('/update/:id', userUpdate)

export default userRouter