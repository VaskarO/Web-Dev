import mongoose from "mongoose";
import { isContext } from "vm";

type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject = {}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database")
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGOD_CONN_STR || "", {})
        connection.isConnected=db.connections[0].readyState
        console.log("Database connected.")
    } catch (error) {
        console.log("Database connection failed.")
        process.exit(1)
    }

}

export default dbConnect;
   