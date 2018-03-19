const express = require('express')
const students = express.Router()

const studentsController = require('../controllers/studentsController')
const sc = new studentsController()

students.post('/api/v1/student',sc.registryStudent)
students.post('/api/v1/student/login',sc.loginStudent)

module.exports = students