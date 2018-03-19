const express = require('express')
const notes = express.Router()
const NotesController = require('../controllers/notesController')
const nc = new NotesController()

notes.post('/api/v1/note',nc.registryNote)
notes.get('/api/v1/note/:id',nc.getNotesByStudent)

module.exports = notes