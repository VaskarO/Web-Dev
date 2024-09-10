import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    date: {
        type:Date,
        require :true
    },
    requestedBy:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
   ,
    requestedTo:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    propertyId:{type: mongoose.Schema.Types.ObjectId, ref: 'Advertise'}
},{timeStamps:true})

export const Appointment = mongoose.model('Appointment', appointmentSchema)

