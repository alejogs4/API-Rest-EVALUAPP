const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const testsRoutes = require('./routes/testsRoutes')
const questionsRoutes = require('./routes/questionsRoutes')
const studentsRoutes = require('./routes/studentsRoutes')
const notesRoutes = require('./routes/notesRoutes')
const teacherRoutes = require('./routes/teachersRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.use(testsRoutes)
app.use(questionsRoutes)
app.use(studentsRoutes)
app.use(notesRoutes)
app.use(teacherRoutes)


module.exports = app