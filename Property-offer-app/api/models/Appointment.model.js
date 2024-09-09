import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    date: {
        type:Date,
        require :true
    },
    requestedBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    requestedTo:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    propertyId:{
        type:Schema.Types.ObjectId,
        ref:AdvertiseList
    }
},{timeStamps:true})

export const Appointment = mongoose.model('Appointment', appointmentSchema)

