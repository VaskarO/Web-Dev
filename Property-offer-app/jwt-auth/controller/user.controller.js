import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js'
import { errorHandler } from '../middleware/errorMiddleware.js';

export const register = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("All field required")
    }
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists!")
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid user data!')
    }
})

export const login = asyncHandler(async (req, res)=>{
    res.status(200).json({message:"User Login.."})
})

export const logout = asyncHandler(async (req, res)=>{
    res.send(200).json({message:"user logout"})
})

export const auth = asyncHandler(async (req, res)=>{
    res.status(200).json({message: "user authentication."})
})

export const profile = asyncHandler(async (req, res)=>{
    req.status(200).json({message: "user Profile"})
})