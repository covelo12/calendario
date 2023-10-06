const { default: mongoose } = require('mongoose')
const Appointment = require('../models/AppointmentModel')
// get all appointments
const getAllAppointments = async (req, res) => {
    const  appointments = await Appointment.find({}).sort({createdAt: -1})
    res.status(200).json(appointments)
}

// get one day's appointments
const getDayAppointments = async (req, res) => {
    const {id} = req.params

    const appointments = await Appointment.find({ date:id}).sort({createdAt: -1})

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
const deleteAppointment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({mssg: 'Appointment not found'})
    }

    const deletedAppointment = await Appointment.findByIdAndDelete(id)

    if(!deletedAppointment) {
        return res.status(404).json({mssg: 'Appointment not found'})
    }

    res.status(200).json({mssg: 'Appointment deleted successfully'})
}

// update an appointment

const updateAppointment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({mssg: 'Appointment not found'})
    }

    const appointment = await Appointment.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!appointment) {
        return res.status(404).json({mssg: 'Appointment not found'})
    }

    res.status(200).json({mssg: 'Appointment updated successfully'})
}

module.exports = {
    getAllAppointments,
    getDayAppointments,
    createAppointment,
    deleteAppointment,
    updateAppointment
}
