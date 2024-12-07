//Express
const express = require('express')
const app = express()
app.use(express.json())

//Cors
const cors = require('cors')
app.use(cors())

//Mongoose
const mongoose = require('mongoose')

//Dotenv
require('dotenv').config()

const port = process.env.PORT

const routes = require('./routes/mainRoutes')

app.use('/api', routes)

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
    mongoose.connect(process.env.LINK_DB)
})