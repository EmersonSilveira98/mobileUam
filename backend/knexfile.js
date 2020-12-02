// Update with your config settings.
 
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'mobile',
    user:     'postgres',
    password: 'Cripixx25'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}