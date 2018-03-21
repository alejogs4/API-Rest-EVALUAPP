const client = require('../database/connect')

class QuestionsModel {
  constructor() {
    this.getQuestiosnByTest = 'SELECT q.id,q.question,q.answer,q.is_correct,q.id_test,t.title,t.value_test FROM questions AS q INNER JOIN tests AS t ON t.id = q.id_test WHERE q.id_test = $1'
    this.addQuery = 'INSERT INTO questions(question,answer,id_test,is_correct) VALUES($1,$2,$3,$4)'
    this.editQuery = 'UPDATE questions SET question = $1,answer = $2,is_correct = $3 WHERE id = $4'
    this.deleteQuestionQuery = 'DELETE FROM questions WHERE id = $1'
  }

  add(data, cb) {
    client.connect()
    client.query(this.addQuery, data)
      .then(response => {
        cb(null, response.rows)
        client.end()
      })
      .catch(err => {
        cb(err)
        client.end()
      })

  }

  getQuestionsByTest(id, cb) {
    client.connect()
    client.query(this.getQuestiosnByTest, [id])
      .then(response => {
        cb(null, response.rows)
        client.end()
      })
      .catch(err => {
        cb(err)
        client.end()
      })
  }

  editQuestion(data, cb) {
    client.connect()
    client.query(this.editQuery, data)
      .then(response => {
        cb(null, response.rows)
        client.end()
      })
      .catch(err => {
        cb(err)
        client.end()
      })
  }

  deleteQuestion(id, cb) {
    client.connect()
    client.query(this.deleteQuestionQuery, [id])
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

module.exports = QuestionsModel