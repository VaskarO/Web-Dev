import express from "express";
import {createAdvertise, updateAdvertisement} from '../controller/advertiseList.controller.js'
import { verifyUser } from "../utils/verifyUser.js";
import { getCurrentUser } from "../utils/getCurrentUser.js";

const advertiseListRoute = express.Router()

advertiseListRoute.post('/create',getCurrentUser, createAdvertise)
advertiseListRoute.post('/update/:id',getCurrentUser, updateAdvertisement)

export default advertiseListRoute