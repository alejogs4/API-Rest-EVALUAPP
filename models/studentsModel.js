const pool = require('../database/connect')

class StudentsModel {
  constructor() {
    this.addStudentQuery = 'INSERT INTO students(id,username,pass) VALUES($1,$2,$3)'
    this.loginStudentQuery = 'SELECT id,username,pass FROM students WHERE username = $1 AND pass = $2'
  }

  registryStudent(data,cb) {
    pool.connect()
      .then(client => {
        client.query(this.addStudentQuery,data)
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => { cb(err) })
      })
      .catch(err => { cb(err) })
  }
  
  loginStudent(data,cb) {
    pool.connect()
      .then(client => {
        client.query(this.loginStudentQuery,data)
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => { cb(err) })
      })
      .catch(err => { cb(err) })
  }
}

module.exports = StudentsModel