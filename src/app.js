const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()


// Rodas da API
const index = require('./routes/index.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use(index)
  


module.exports = app