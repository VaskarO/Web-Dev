import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'

export const signup= async (req, res, next)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400).json("All field required!!")
    } 
    const encryptedPassword = bcryptjs.hashSync(password, 7)

    const newUser = new User({username, email,password:encryptedPassword});
    try{
        await newUser.save()
        res.status(201).json({"message":"user created successfully."})
    }catch(err){
        next(err)
    }
}