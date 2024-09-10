import express from "express";
import {createAdvertise, updateAdvertisement,getAllAdvertisements,getAdvertisementsByUser,deleteAdvertisement, getAdvertisementsById} from '../controller/advertiseList.controller.js'
import { verifyUser } from "../utils/verifyUser.js";
import { getCurrentUser } from "../utils/getCurrentUser.js";

const advertiseListRoute = express.Router()

advertiseListRoute.post('/create',getCurrentUser, createAdvertise)
advertiseListRoute.post('/update/:id',getCurrentUser, updateAdvertisement)
advertiseListRoute.get('/advertisements', getAllAdvertisements)
advertiseListRoute.delete('/delete', deleteAdvertisement)
advertiseListRoute.get('/advertiseemnt/:id', getAdvertisementsById)
advertiseListRoute.get('/yourAdvertisements/',getCurrentUser, getAdvertisementsByUser)

export default advertiseListRoute