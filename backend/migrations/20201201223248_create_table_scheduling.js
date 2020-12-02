exports.up = function(knex) {
    return knex.schema.createTable('scheduling', table => {
        table.increments('id').primary()
        table.integer('doctorId').references('id')
            .inTable('doctor')
        table.string('date').notNull()
        table.string('schedule').notNull()
        table.integer('userId').references('id')
          .inTable('users')
    })
        };
 
exports.down = function(knex) {
  return knex.schema.dropTable('scheduling')
};