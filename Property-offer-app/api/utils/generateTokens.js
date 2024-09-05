import jwt from 'jsonwebtoken';

export const generateToken = async(res,userId)=>{
    const token = jwt.sign({userId}, 'JWT-SECRET-KEY', { expiresIn:'30d'})
    res.cookie('accessToken', token, {
        httpOnly:true,
        sameSite:'strict',
        maxAge: 30*24*60*60*1000
    })
}