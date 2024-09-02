import express, { json } from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config()

const app = express();

app.use(express.json())

mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log('DB CONNECTED..')
}).catch((error)=>{
    console.log(error)
})

app.listen(3000, ()=>{
    console.log('Server running at port 3000.')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)

app.use((error, req, res, next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || 'server error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})