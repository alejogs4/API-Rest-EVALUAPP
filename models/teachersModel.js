const client = require('../database/connect')

class TeachersModel {
  constructor() {
    this.loginTeacherQuery = 'SELECT id,nombre,username FROM teachers WHERE username = $1 AND pass = $2'
  }
  loginTeacher(data, cb) {
    client.connect()
    client.query(this.loginTeacherQuery, data)
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

module.exports = TeachersModel