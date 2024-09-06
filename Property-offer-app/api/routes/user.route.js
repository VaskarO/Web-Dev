import express from 'express';
import { getUserProfile, updateUserProfile, deleteUserProfile } from '../controller/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const userRouter = express.Router()


// userRouter.get('/test', (req, res)=>{
//     return res.send('Hello from user route.')
// })

userRouter.get('/userProfile/:id',verifyUser, getUserProfile)
userRouter.delete('/userProfile/:id',verifyUser, deleteUserProfile)
userRouter.put('/updateProile/:id',verifyUser, updateUserProfile)


export default userRouter