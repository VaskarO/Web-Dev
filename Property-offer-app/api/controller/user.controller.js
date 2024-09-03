import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'
export const test = (req, res)=>{
    res.send('from user.control.js - a test function')
}

export const userUpdate = async(req, res, next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401, "Invalid account, not authorized."))
    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id , {
            $set:{
                username:req.body.username,
                email:req.body.email,
                password: req.body.password
            }
        }, {new:true})

        const {password, ...rest} = updateUser._doc
        res.status(200).json(rest)
    }catch(err){
        next(err)
    }
}