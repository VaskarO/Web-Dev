import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'
import { handleError } from '../utils/handleError.js'

export const updateUserProfile = async(req, res, next)=>{
    if(req.verifiedUserId !== req.params.id) return next(errorHandler(401, "Invalid account, not authorized."))
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

export const getUserProfile= async(req, res, next)=>{

    //verifiedUserId from varifyUser middleware
    if(req.verifiedUserId !== req.params.id) {return next(handleError(404, "User not varified"))}
    
    try{
        const currentUser =await User.findById({_id: req.verifiedUserId})
        // console.log(currentUser)
        const {password, ...userInfo} = currentUser._doc
        res.status(200).json(userInfo)
    }catch(err){
        return next(handleError(500, 'Internal server error'))
    }
}

export const deleteUserProfile =async(req, res, next)=>{
    if(req.verifiedUserId !== req.params.id) {return next(handleError(404, "User not varified"))}
    try{
        const currentUser = await User.findByIdAndDelete({_id:req.verifiedUserId})

        if(currentUser){
            res.status(200).json({
                'userId':currentUser._id,
                'message':`User with userId :${currentUser._id} deleted.`
            }).clearCookie('accessToken')
        }

    }catch(err){
        return next(handleError(500, 'Internal server error!!'))
    }

}