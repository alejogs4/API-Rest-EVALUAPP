const express = require('express')
const teachers = express.Router()
const TeacherController = require('../controllers/teachersController')
const tc = new TeacherController()

teachers.post('/api/v1/teacher',tc.loginTeacher)

module.exports = teachers