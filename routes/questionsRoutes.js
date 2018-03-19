const express = require('express')
const questions = express.Router()
const questionsController = require('../controllers/questionsController')
const qt = new questionsController()

questions.get('/api/v1/questions/test/:id',qt.getQuestionsByTest)
questions.post('/api/v1/questions',qt.add)

module.exports = questions