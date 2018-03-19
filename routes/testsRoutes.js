const express = require('express')
const tests = express.Router()
const testsController = require('../controllers/testsController')

const tc = new testsController()

tests.get('/api/v1/tests',tc.getAll)
tests.post('/api/v1/test',tc.add)

module.exports = tests