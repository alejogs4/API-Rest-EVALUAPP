const pool = require('../database/connect')

class TestsModel {

  constructor () {
    this.querySelect = 'SELECT id,title,value_test,id_teacher,type from tests'
    this.queryInsert = 'INSERT INTO tests(title,value_test,id_teacher,type) VALUES($1,$2,$3,$4)'
  }

  getAll(cb) {
    pool.connect()
      .then(client => {
        client.query(this.querySelect)
        .then(response => {
          cb(null,response.rows)
        })
        .catch(err => {
          cb(err)
        })
      })
      .catch(err => {
        cb(err)
      })
  }

  add(data,cb) {
    pool.connect()
      .then(client => {
        client.query(this.queryInsert,data)
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err =>{
            cb(err)
          })
      })
      .catch(err => {
        cb(err)
      })
  }
}
module.exports = TestsModel