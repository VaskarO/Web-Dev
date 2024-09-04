import express from 'express';
import { test, userUpdate } from '../controller/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const userRouter = express.Router()


// userRouter.get('/test', (req, res)=>{
//     return res.send('Hello from user route.')
// })

userRouter.get('/test', test)
userRouter.post('/update/:id',verifyUser, userUpdate)

export default userRouter