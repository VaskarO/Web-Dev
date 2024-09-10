import express from 'express';
import { getCurrentUser } from '../utils/getCurrentUser.js';
import { createAppointment } from '../controller/appointment.controller.js';

const appointmentRouter = express.Router()

appointmentRouter.post('/create/:id',getCurrentUser, createAppointment)

export default appointmentRouter