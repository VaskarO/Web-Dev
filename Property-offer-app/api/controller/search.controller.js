import { AdveriseList } from "../models/Advertise.model";
import { handleError } from "../utils/handleError";


export const searchAdvertisement = async (req, res)=>{
    try{
        const query = req.query.search ||""
        const results = await AdveriseList.find({
            $text:{
                $search:query,
                $caseSensitive:false,

            }
        })
        if(!results){
            res.status(500).json({message:"Error on searching the data."})
        }
        res.status(200).res.json({searchList: results})
    }catch(err){
        handleError(403, err.messages)
    }
}

