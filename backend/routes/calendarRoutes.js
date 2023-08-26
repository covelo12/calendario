const express= require('express')
const {createAppointment}= require('../controllers/calendarController')
const router = express.Router()

router.get('/',(req,res) => {
    res.json({mssg: 'All Appointments'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Day Appointments'})
})

router.post('/',createAppointment )

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete Appointment'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update Appointment'})
})

module.exports = router

