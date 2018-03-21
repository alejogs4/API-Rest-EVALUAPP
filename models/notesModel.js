const client = require('../database/connect')

class NotesModel {
  constructor() {
    this.registryNoteQuery = 'INSERT INTO notes(id_test,id_student,value_test) VALUES($1,$2,$3)'
    this.getNotesQuery =
      'SELECT n.id_test,n.id_student,n.value_test,s.username FROM notes AS n INNER JOIN students AS s ON n.id_student = s.id WHERE s.id = $1'
  }

  registryNote(data, cb) {
    client.connect()
    client.query(this.registryNoteQuery, data)
      .then(response => {
        cb(null, response.rows)
        client.end()
      })
      .catch(err => {
        cb(err)
        client.end()
      })
  }

  getNotesByStudent(id, cb) {
    client.connect()
    client.query(this.getNotesQuery, [id])
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

module.exports = NotesModel