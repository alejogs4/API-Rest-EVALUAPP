const pool = require('../database/connect')

class TeachersModel {
  constructor() {
    this.loginTeacherQuery = 'SELECT id,nombre,username FROM teachers WHERE username = $1 AND pass = $2'
  }  
  loginTeacher(data,cb) {
    pool.connect()
      .then(client => {
        client.query(this.loginTeacherQuery,data)
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => { cb(err) })
      })
      .catch(err => { cb(err) })
  }
}

module.exports = TeachersModel