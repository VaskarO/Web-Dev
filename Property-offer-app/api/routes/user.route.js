import express from 'express';
import { userProfile, userUpdate } from '../controller/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const userRouter = express.Router()


// userRouter.get('/test', (req, res)=>{
//     return res.send('Hello from user route.')
// })

userRouter.get('/userProfile/:id',verifyUser, userProfile)
userRouter.post('/update/:id',verifyUser, userUpdate)


export default userRouter