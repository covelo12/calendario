const express= require('express')
const {getAllAppointments,
    getDayAppointments,
    createAppointment
    }= require('../controllers/calendarController')
const router = express.Router()

router.get('/',getAllAppointments)

router.get('/:id', getDayAppointments)

router.post('/',createAppointment )

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete Appointment'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update Appointment'})
})

module.exports = router

