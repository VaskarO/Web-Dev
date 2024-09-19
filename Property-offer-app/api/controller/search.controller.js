import { AdvertiseList } from "../models/Advertise.model.js";
import { handleError } from "../utils/handleError.js";


export const searchAdvertisement = async (req, res)=>{
    try{
        const query = req.query.searchQuery ||""
        if(!query){
            res.status(200).json({"message":"Search item not provided"})
        }
        if(query.length<5){
            res.status(200).json({'message':"Atleast 4 letter required"})
        }
    //     const results = await AdvertiseList.aggregate([
    //         {
    //             $search: {
    //             text:{
    //                 query:'tite',
    //                 path:"title",

    //             }
    //         }
    //     },
    //     {
            
    //         $project:{
    //         _id:1,
    //         title:1,
    //     }
    // }
    // ])
        let results = await AdvertiseList.find({ title:  new RegExp(query, 'i'),  } )
        results.push(...results, ...await AdvertiseList.find({ description:  new RegExp(query, 'i'),  } ))

        console.log(results.length)
        console.log(results)
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

