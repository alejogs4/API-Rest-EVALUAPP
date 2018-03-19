const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const testsRoutes = require('./routes/testsRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))
app.use(testsRoutes)

module.exports = app