import mongoose from 'mongoose';

export  const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.DB_CONNECT)
        console.log("Mongo database connected:", connection.connection.host)
    }catch(err){
        console.error(`Error::${err.message}`)
        process.exit(1);
    }
}