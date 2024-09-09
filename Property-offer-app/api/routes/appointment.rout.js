import express from 'express';
import { getCurrentUser } from '../utils/getCurrentUser';

const appointmentRouter = express.Router()

appointmentRouter.post('/create/:id',getCurrentUser, createAppointment)

export default appointmentRouter