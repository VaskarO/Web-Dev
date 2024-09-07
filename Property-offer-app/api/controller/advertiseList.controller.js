import { AdveriseList } from "../models/Advertise.model.js"
import { handleError } from "../utils/handleError.js";

export const createAdvertise = async(req, res, next)=>{
    const userId = req.userId
    const {advertiseType,title,title1,description,price,numberOfRooms,floorNumber,haveBathroom,availableFrom,petAllowed,haveBalcony} = req.body;

    const newAdvertiseList = new AdveriseList({advertiseType,title,title1,description,price,numberOfRooms,floorNumber,haveBathroom,availableFrom,petAllowed,haveBalcony, createdBy:userId})
    try{
        await newAdvertiseList.save()
        res.status(200).json({'message':'Advertisement created!!',"success":true, "AdvertisementId": newAdvertiseList._id})

    }catch(err){
        next(handleError(500,err.message))
    }

}

export const updateAdvertisement = async (req, res, next)=>{
    const currentUserId = req.userId;

    const getAdvertiseById = await AdveriseList.findById({_id:req.params.id})
    // console.log(getAdvertiseById.createdBy)
    if(currentUserId !== getAdvertiseById.createdBy) {return next(handleError(403, 'Unauthorized request!'))}

    try{
        const updateAdvertise = await AdveriseList.findByIdAndUpdate(req.params.id, {
            $set:{
                advertiseType:req.body.advertiseType,
                title:req.body.title,
                description:req.body.description,
                price:req.body.price,
                numberOfRooms:req.body.numberOfRooms,
                floorNumber:req.body.floorNumber,
                haveBathroom:req.body.haveBathroom,
                availableFrom:req.body.availableFrom,
                petAllowed: req.body.petAllowed,
                haveBalcony:req.body.haveBalcony,
                }
            },{new:true})
            // res.status(200).json({'message':"updated"})
            res.status(200).json({'success':'true', 'message':`Advertisement with ID ${req.params.id} is successfully updated`, 'advertisement':updateAdvertise})
            
    }catch(err){
        next(handleError(500, err.message))
    }
}