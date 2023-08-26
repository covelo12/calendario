const express= require('express')
const {getAllAppointments,
    getDayAppointments,
    createAppointment,
    deleteAppointment,
    updateAppointment
    }= require('../controllers/calendarController')
const router = express.Router()

router.get('/',getAllAppointments)

router.get('/:id', getDayAppointments)

router.post('/',createAppointment )

router.delete('/:id', deleteAppointment)

router.patch('/:id', updateAppointment)

module.exports = router

