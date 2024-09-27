import mongoose from "mongoose";

const advertiseSchema = new mongoose.Schema({
    advertiseType:{
        type:String,
        required:true,
        enum: ['sale', 'rent']
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    numberOfRooms:{
        type:Number,
        required:true,
    },
    floorNumber:{
        type:Number,
        required:false,
    },
    numberOfBathrooms:{
        type:Number,
        required:false,
    },
    availableFrom:{
        type:String,
        required:false,
    },
    petAllowed:{
        type:Boolean,
        required:false
    },
    haveBalcony:{
        type:Boolean,
        required:false,
    },
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}

}, {timeStamps:true})

export const AdvertiseList = mongoose.model('AdvertiseList', advertiseSchema)