const client = require('../database/connect')

class StudentsModel {
  constructor() {
    this.addStudentQuery = 'INSERT INTO students(id,username,pass) VALUES($1,$2,$3)'
    this.loginStudentQuery = 'SELECT id,username,pass FROM students WHERE username = $1 AND pass = $2'
  }

  registryStudent(data, cb) {
    client.connect()
    client.query(this.addStudentQuery, data)
      .then(response => {
        cb(null, response.rows)
        client.end()
      })
      .catch(err => {
        cb(err)
        client.end()
      })

  }

  loginStudent(data, cb) {
    client.connect()
    client.query(this.loginStudentQuery, data)
      .then(response => {
        cb(null, response.rows)
        client.end()
      })
      .catch(err => {
        cb(err)
        client.end()
      })
  }
}

module.exports = StudentsModel