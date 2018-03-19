const studentsModel = require('../models/studentsModel')
const sm = new studentsModel()

class StudentsController {
  registryStudent(req,res) {
    let data = [req.body.id,req.body.username,req.body.pass]
    sm.registryStudent(data,(err,row) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error ${err}` })

      return res.status(201).send(res.json(row))
    })
  }

  loginStudent(req,res) {
    let data = [req.body.username,req.body.pass]

    sm.loginStudent(data,(err,rows) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error ${err}` })
      if(rows.length === 0) res.status(404).send({ message : 'No existe este estudiante' })
      
      return res.status(200).send(res.json(rows))
    })
  }
}

module.exports = StudentsController