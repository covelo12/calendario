const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AppointmentSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{timestaps: true})

module.exports = mongoose.model('Appointment', AppointmentSchema)
