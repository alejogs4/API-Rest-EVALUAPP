const notesModel = require('../models/notesModel')
const nm = new notesModel()

class NotesController {
  registryNote(req,res) {
    let data = [req.body.id_test,req.body.id_student,req.body.value_test]
    nm.registryNote(data,(err,rows) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error : ${err.message}` })

      return res.status(201).send(res.json(rows))
    })
  }

  getNotesByStudent(req,res) {
    let id = req.params.id
    nm.getNotesByStudent(id,(err,rows) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error : ${err.message}` })
      if(rows.length === 0) return res.status(404).send({ message : 'El estudiante no tiene notas' })

      return res.status(200).send(res.json(rows))
    })

  }
}

module.exports = NotesController