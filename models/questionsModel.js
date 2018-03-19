const pool = require('../database/connect')

class QuestionsModel {
  constructor () {
    this.getQuestiosnByTest = 'SELECT q.id,q.question,q.answer,q.is_correct,q.id_test,t.title,t.value_test FROM questions AS q INNER JOIN tests AS t ON t.id = q.id_test WHERE q.id_test = $1'
    this.addQuery = 'INSERT INTO questions(question,answer,id_test,is_correct) VALUES($1,$2,$3,$4)'
    this.editQuery = 'UPDATE questions SET question = $1,answer = $2,is_correct = $3 WHERE id = $4'
    this.deleteQuestionQuery = 'DELETE FROM questions WHERE id = $1'
  }

  add(data,cb) {
    pool.connect()
      .then(client => {
        client.query(this.addQuery,data)
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => { cb(err) })
      })
      .catch(err => { cb(err) })
  }

  getQuestionsByTest (id,cb) {
    pool.connect()
      .then(client => {
        client.query(this.getQuestiosnByTest,[id])
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => { cb(err) })
      })
      .catch(err => { cb(err) } )
  }

  editQuestion (data,cb) {
    pool.connect()
      .then(client => {
        client.query(this.editQuery,data)
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => {cb(err) } )
      })
      .catch(err => { cb(err) } )
  }

  deleteQuestion(id,cb) {
    pool.connect()
      .then(client => {
        client.query(this.deleteQuestionQuery,[id])
          .then(response => {
            cb(null,response.rows)
          })
          .catch(err => { cb(err) } )
      })
      .catch(err => { cb(err) } )
  }
}

module.exports = QuestionsModel