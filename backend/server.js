require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const calendarRoutes = require('./routes/calendarRoutes')

const app = express()
app.use(express.json())
app.use( (req, res, next) => {
  //console.log(req.path, req.method)
  next()
})

app.use('/api/days',calendarRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then( () => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to db && Server listening on port', process.env.PORT)
    })
  })
  .catch( (error) => {console.log(error)
  })
