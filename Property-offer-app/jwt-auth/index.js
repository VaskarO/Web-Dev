import express from 'express'
import dotenv from 'dotenv'
import  userRoute  from './routes/user.routes.js'
import { urlNotFound, errorHandler } from './middleware/errorMiddleware.js'
import { connectDB } from './db_config/db_conifig.js';

dotenv.config()
const port = process.env.PORT || 5000

connectDB();

const app = express()
app.use(express.json())
app.post('/', (req, res)=>{
    res.send('Hello')
})

app.use('/api/user', userRoute)


app.use(urlNotFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('Server running at port:', port);
})