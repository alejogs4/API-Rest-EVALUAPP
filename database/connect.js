const { Client } = require('pg')
const connectionData = {
  user: 'alejandro',
  host: '',
  database: 'evaluaciones',
  password: '',
  port: 5432,
}
const client = new Client(connectionData)

module.exports = client

