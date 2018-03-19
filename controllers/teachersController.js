const teachersModel = require('../models/teachersModel')
const tm = new teachersModel()

class TeachersController {

  loginTeacher(req,res) {
    let data = [req.body.username,req.body.pass]

    tm.loginTeacher(data,(err,rows) => {
      if(err) return res.status(500).send({ message : `Ha ocurrido un error ${err}` })
      if(rows.length === 0) res.status(404).send({ message : 'No existe este profesor' })
      
      return res.status(200).send(res.json(rows))
    })
  }
}

module.exports = TeachersController