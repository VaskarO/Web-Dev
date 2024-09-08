import mongoose from "mongoose";

const advertiseSchema = mongoose.Schema({
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
    haveBathroom:{
        type:Boolean,
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
    createdBy:{
        type:String,
        required:true
    }

}, {timeStamps:true})

export const AdveriseList = mongoose.model('AdvertiseList', advertiseSchema)