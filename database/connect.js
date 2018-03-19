const { Pool } = require('pg')
const connectionData = {
  user: 'alejandro',
  host: '',
  database: 'evaluaciones',
  password: '',
  port: 5432,
}
const pool = new Pool(connectionData)

module.exports = pool

