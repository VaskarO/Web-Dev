import express from 'express';
import searchAdvertisement from '../controller/search.controller.js';

const searchRoute = express.Router();

searchRoute.get('/query', searchAdvertisement)

export default searchRoute