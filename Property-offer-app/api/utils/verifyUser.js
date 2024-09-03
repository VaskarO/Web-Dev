
import jwt from 'jsonwebtoken'
export const verifyUser = (req, res, next)=>{
    const token = req.cookies.accessToken;
    if(!token) return  next(errorHandler(401, 'Unauthorized'))
    
        jwt.verify(token, 'JWT_SECRET_KEY', (err, user)=>{
            if(err) return next(errorHandler(403, 'Not allowded'))
            req.user = user;
            next()
        })
}