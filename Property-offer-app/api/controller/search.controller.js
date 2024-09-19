import { AdvertiseList } from "../models/Advertise.model.js";
import { handleError } from "../utils/handleError.js";


export const searchAdvertisement = async (req, res)=>{
    try{
        const query = req.query.searchQuery ||""
        const limit = req.query.limit || '3'
        const page = req.query.page || '1'
        if(!query){
            res.status(200).json({"message":"Search item not provided"})
        }
        if(query.length<5){
            res.status(200).json({'message':"Atleast 4 letter required"})
        }

        const skip = (page-1)*limit
        const queryRegx = new RegExp(query, 'i')
        const results = await AdvertiseList.find({
            $or: [
                { title: { $regex: queryRegx } },
                { description: { $regex: queryRegx } },
            ],
            }).limit(limit).skip(skip)
        
        if(req.query.page){
            const advertiseCount = await AdvertiseList.countDocuments();
            if(skip>=advertiseCount){
                handleError(403, "Page not found.")
            }
        }
        

        if(results.length===0){
            res.status(200).json({searchList: "No search result"})
        }
        if(!results){
            res.status(500).json({message:"Error on searching the data."})
        }
        res.status(200).json({searchList: results})
    }catch(err){
        handleError(403, err.message)
    }
}

