import { AdvertiseList } from "../models/Advertise.model.js"
import { handleError } from "../utils/handleError.js";

export const createAdvertise = async(req, res, next)=>{
    const userId = req.userId
    const {advertiseType,title,title1,description,price,numberOfRooms,floorNumber,numberOfBathrooms,availableFrom,petAllowed,haveBalcony} = req.body;

    const newAdvertiseList = new AdvertiseList({advertiseType,title,title1,description,price,numberOfRooms,floorNumber,numberOfBathrooms,availableFrom,petAllowed,haveBalcony, createdBy:userId})
    try{
        await newAdvertiseList.save()
        res.status(200).json({'message':'Advertisement created!!',"success":true, "AdvertisementId": newAdvertiseList._id})

    }catch(err){
        next(handleError(500,err.message))
    }

}

export const updateAdvertisement = async (req, res, next)=>{
    const currentUserId = req.userId;

    const getAdvertiseById = await AdvertiseList.findById({_id:req.params.id})
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
                numberOfBathrooms:req.body.numberOfBathrooms,
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

export const getAllAdvertisements = async (req, res, next)=>{
    try{
        const getAllAdveritisements = await AdvertiseList.find()
            // res.status(200).json({'message':"updated"})
            res.status(200).json({'success':'true', 'advertisements':getAllAdveritisements})
            
    }catch(err){
        next(handleError(500, err.message))
    }
}

export const deleteAdvertisement = async(req, res, next)=>{
    try{
        const deleteAdvertise = await AdvertiseList.findByIdAndDelete({_id:req.params.id})
        if(deleteAdvertise){
            res.status(200).json({'success':'true', 'message': `Advertisement with id ${req.params.id } is deleted.`} )
        }
    }catch(error){
        return next(handleError('500', error.message))
    }
}

export const getAdvertisementsByUser = async(req, res, next)=>{
    const userId = req.userId
    console.log(userId)
    try{
        const useAdvertiseList = await AdvertiseList.find({createdBy:userId});
        if(useAdvertiseList){
            res.status(200).json({Advertisements: useAdvertiseList})
        }
    }catch(error){
        next(500, error.message)
    }

}

export const getAdvertisementsById = async(req, res, next)=>{
    console.log(req.params.id)
    try{
        const advertiseemnt = await AdvertiseList.findById({_id:req.params.id});
        if(advertiseemnt){
            res.status(200).json({advertiseemnt: advertiseemnt})
        }
    }catch(error){
        next(500, error.message)
    }

}