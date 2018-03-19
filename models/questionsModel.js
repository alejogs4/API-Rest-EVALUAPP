const pool = require('../database/connect')

class QuestionsModel {
  constructor () {
    this.getQuestiosnByTest = 'SELECT q.id,q.question,q.answer,q.is_correct,t.id,t.title,t.value_test FROM questions AS q INNER JOIN tests AS t ON t.id = q.id_test WHERE q.id_test = $1'
    this.addQuery = 'INSERT INTO questions(question,answer,id_test,is_correct) VALUES($1,$2,$3,$4)'
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
      .catch(err => {
        cb(err)
      })
  }

}

module.exports = QuestionsModel