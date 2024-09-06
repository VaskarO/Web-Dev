import { AdveriseList } from "../models/Advertise.model.js"
import { handleError } from "../utils/handleError.js";
import { verifyUser } from "../utils/verifyUser.js"

export const createAdvertise = async(req, res, next)=>{
    const userId = req.userId
    const {advertiseType,title,title1,description,price,numberOfRooms,floorNumber,haveBathroom,availableFrom,petAllowed,haveBalcony} = req.body;

    const newAdvertiseList = new AdveriseList({advertiseType,title,title1,description,price,numberOfRooms,floorNumber,haveBathroom,availableFrom,petAllowed,haveBalcony, createdBy:userId})
    console.log(userId)
    try{
        await newAdvertiseList.save()
        res.status(200).json({'message':'Advertisement created!!',"success":true, "AdvertisementId": newAdvertiseList._id})
        console.log()

    }catch(err){
        next(handleError(500,err.message))
    }

}