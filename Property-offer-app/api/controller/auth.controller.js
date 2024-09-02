import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'
import { handleError } from '../utils/handleError.js';
import jwt from 'jsonwebtoken'

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

export const signin = async (req, res, next)=>{
    const { email, password } = req.body;
    try{
        const currentUser = await User.findOne({email})
        if(!currentUser){
            return next(handleError(404, 'User not found!!'))
        }
        const validPassword = bcryptjs.compareSync(req.body.password , currentUser.password);
        if(!validPassword){
            return next(handleError(401, 'Invalid username or password'))
        }

        const token = jwt.sign({id:currentUser._id}, 'JSON_SECRET_KEY');
        const {password, ...rest} = currentUser._doc;
        res.cookie('access_token', token, {httpOnly:true}).status(200).json(rest)
    }catch(error){
        next(error)
    }
}

// export const signin = async (req, res, next) => {
//     const { email, password } = req.body;
//     console.log(password);
//     try {
//         const currentUser = await User.findOne({ email });
//         if (!currentUser) {
//             return next(handleError(404, 'User not found!!'));
//         }

//         // Compare the provided password with the stored hashed password
//         const validPassword = await bcryptjs.compare(password, currentUser.password);
//         if (!validPassword) {
//             return next(handleError(401, 'Invalid username or password'));
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET || 'JSON_SECRET_KEY');

//         // Ensure _doc is defined before destructuring
//         const { password: pwd, ...rest } = currentUser._doc || {};

//         // Set cookie and return response
//         res.cookie('access_token', token, { httpOnly: true })
//             .status(200)
//             .json(rest);
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// };
