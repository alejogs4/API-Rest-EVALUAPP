const QuestionsModel = require('../models/questionsModel')
const qm = new QuestionsModel()

class QuestionsController {

  add(req,res) {
    let data = [req.body.question,req.body.answer,req.body.id_test,req.body.is_correct]
    qm.add(data,(err,rows) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error ${err.message}` })

      return res.status(201).send(res.json(rows))
    })
    
  }

  getQuestionsByTest(req,res) {
    let testId = req.params.id

    qm.getQuestionsByTest(testId,(err,rows) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error ${err.message}` })
      if(rows.length === 0) return res.status(404).send({
        data : [] , message : 'No se han encontrado pruebas'
      })

      return res.status(200).send({data : res.json(rows)})
    })
  }

  editQuestion(req,res) {
    let data = [req.body.question,req.body.answer,req.body.is_correct,req.params.id]
    qm.editQuestion(data,(err,row) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error ${err.message}` })

      return res.status(201).send(res.json(row))
    })
  }

  deleteQuestion(req,res) {
    let id = req.params.id
    qm.deleteQuestion(id,(err,row) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error borrando ${err.message}` })
      return res.status(200).send(res.json(row))
    })
  }

}

module.exports = QuestionsController