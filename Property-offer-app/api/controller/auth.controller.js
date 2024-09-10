import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'
import { handleError } from '../utils/handleError.js';
import { generateToken } from '../utils/generateTokens.js';

export const signup= async (req, res, next)=>{
    const {username, email, password} = req.body;
    // console.log(username)
    if(!username || !email || !password){
        res.status(400).json("All field required!!")
    } 
    const encryptedPassword = bcryptjs.hashSync(password, 7)

    const newUser = new User({username, email,password:encryptedPassword});
    try{
        await newUser.save()
        res.clearCookie('accessToken')
        generateToken(res, newUser._id)

        res.status(201).json({"message":"user created successfully."})
    }catch(err){
        next(err)
    }
}

export const signin = async (req, res, next)=>{
    const { email, password } = req.body;
    try{
        console.log(req.body)
        const currentUser = await User.findOne({email})
        if(!currentUser){
            return next(handleError(404, 'User not found!!'))
        }
        const validPassword = bcryptjs.compareSync(req.body.password , currentUser.password);
        if(!validPassword){
            return next(handleError(401, 'Invalid username or password'))
        }
        res.clearCookie('accessToken')
        // console.log(currentUser._id)
        generateToken(res, currentUser._id)
        res.status(201).json({
            _id:currentUser._id,
            username:currentUser.username,
            email:currentUser.email
        })
        // const token = jwt.sign({id:currentUser._id}, 'JSON_SECRET_KEY');
        // const {password, ...rest} = currentUser._doc;
        // res.cookie('access_token', token, {httpOnly:true}).status(200).json(rest)
    }catch(error){
        next(error)
    }
}

export const logout = async(req, res,next)=>{
    try{
        if(req.cookies= 'accessToken'){
            if(res.clearCookie('accessToken')){
                res.status(200).json({message: 'user logged out.'})
                next()
            }
        }
    }catch(err){
        handleError(404, err.message)
        next()
    }

 
}