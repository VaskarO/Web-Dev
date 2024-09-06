import { handleError } from './handleError.js';
// import User from '../models/User.model.js';

import jwt from 'jsonwebtoken'
export const getCurrentUser = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if(!token) return  next(handleError(401, 'Unauthorized'))
    
    
    jwt.verify(token, 'JWT-SECRET-KEY', (err, user)=>{
            if(err) return next(handleError(403, 'Not allowded'))
            req.userId = user.userId            ;
            next()
        })
}