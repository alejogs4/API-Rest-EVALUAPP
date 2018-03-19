const express = require('express')
const questions = express.Router()
const questionsController = require('../controllers/questionsController')
const qt = new questionsController()

questions.get('/api/v1/questions/test/:id',qt.getQuestionsByTest)
questions.post('/api/v1/questions',qt.add)
questions.put('/api/v1/question/:id',qt.editQuestion)
questions.delete('/api/v1/question/:id',qt.deleteQuestion)

module.exports = questions