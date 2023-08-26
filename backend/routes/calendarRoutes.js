const express= require('express')
const router = express.Router()
const Appointment = require('../models/AppointmentModel')

router.get('/',(req,res) => {
    res.json({mssg: 'All Appointments'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Day Appointments'})
})

router.post('/', async (req, res) => {
    const{title,date,type,description} = req.body

    try{
        const newAppointment = await Appointment.create({title, date, type ,description})
        res.status(200).json(newAppointment)
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete Appointment'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update Appointment'})
})

module.exports = router

