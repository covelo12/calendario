const Appointment = require('../models/AppointmentModel')

// get all appointments
const getAllAppointments = async (req, res) => {
    const  appointments = await Appointment.find({}).sort({createdAt: -1})
    res.status(200).json(appointments)
}

// get one day's appointments
const getDayAppointments = async (req, res) => {
    const {id} = req.params
    const appointments = await Appointment.findById({id}).sort({createdAt: -1})
    if(!appointments) {
        return res.status(404).json({mssg: 'Appointment not found'})
    }
    res.status(200).json(appointments)
}
// create an appointment
const createAppointment = async (req, res) => {    const{title,date,type,description} = req.body

    try{
        const newAppointment = await Appointment.create({title, date, type ,description})
        res.status(200).json(newAppointment)
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
}
// delete an appointment
const deleteAppointment = async (req, res) => {}

// update an appointment

module.exports = {
    getAllAppointments,
    getDayAppointments,
    createAppointment
}
