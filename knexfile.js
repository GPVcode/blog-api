// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 const {
  DATABASE_URL = "postgres://smmmwzkj:oWwcTcsIW0oli9bx90m0pukZ2YfcykV4@heffalump.db.elephantsql.com/smmmwzkj",
} = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL, 
      filename: './dev.sqlite3'
    
  }
};