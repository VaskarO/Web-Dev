import express from "express";
import {createAdvertise, updateAdvertisement,getAllAdvertisements,getAdvertisementsByUser,deleteAdvertisement} from '../controller/advertiseList.controller.js'
import { verifyUser } from "../utils/verifyUser.js";
import { getCurrentUser } from "../utils/getCurrentUser.js";

const advertiseListRoute = express.Router()

advertiseListRoute.post('/create',getCurrentUser, createAdvertise)
advertiseListRoute.post('/update/:id',getCurrentUser, updateAdvertisement)
advertiseListRoute.get('/advertisements', getAllAdvertisements)
advertiseListRoute.delete('/delete', deleteAdvertisement)
advertiseListRoute.get('/yourAdvertisements/:id',getCurrentUser, getAdvertisementsByUser)

export default advertiseListRoute