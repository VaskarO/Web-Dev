import { handleError } from './handleError.js';
import jwt from 'jsonwebtoken'
export const verifyUser = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if(!token) return  next(handleError(401, 'Unauthorized'))
    
    jwt.verify(token, 'JWT-SECRET-KEY', (err, user)=>{
            if(err) return next(handleError(403, 'Not allowded'))
            // req.user = user;
            if(req.params.id !== user.userId ){
                return next(handleError(403, 'User didnot match!'))
            }
            // console.log(req.params.id)
            // console.log(user.userId)
            req.verifiedUserId = user.userId
            next()

        })
}