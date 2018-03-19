const TestsModel = require('../models/tests')
const tm = new TestsModel()

class TestsController {

  getAll(req,res) {
   tm.getAll((err,row) => {
     if(err) return res.status(500).send({ data : 'Ocurrio un error' , message : err })
     if(row.length === 0) res.status(200).send({ data : [] , message : 'No se encontraron datos' }) 
     return res.status(200).send( res.json(row) )
   }) 
  }

  add(req,res) {
    let data = [
      req.body.title,
      req.body.value_test,
      req.body.id_teacher,
      req.body.type
    ]
    tm.add(data,(err,row) => {
      if(err) res.status(500).send({ data : 'Ocurrio un error' , message : err.message })      
      return res.status(201).send({ data : res.json(row) })
    })
  }

}

module.exports = TestsController