import express from 'express'
import dotenv from 'dotenv'
import  userRoute  from './routes/user.routes.js'

dotenv.config()
const port = process.env.PORT || 5000


const app = express()

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.use('/api/user/', userRoute)

app.listen(port, ()=>{
    console.log('Server running at port:', port);
})