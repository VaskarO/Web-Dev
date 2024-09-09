import { Appointment } from "../models/Appointment.model.js"
import { handleError } from "../utils/handleError.js"

export const createAppointment= async(req, res, next)=>{
    const date = req.body.date
    const requestedTo = req.body.propertyHolderId
    const propertyId = req.params.id;
    const requestedBy = req.userId

    try{
        const createAppointment = Appointment.create({
            date,
            requestedBy,
            requestedTo,
            propertyId,
        })
        if(createAppointment){
            createAppointment.save()
            res.status(200).json({"message":"success","appointment": createAppointment})
        }
    }catch(error){
        next(handleError(500, error.message))
    }
}