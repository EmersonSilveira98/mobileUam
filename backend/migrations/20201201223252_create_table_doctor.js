exports.up = function(knex) {
    return knex.schema.createTable('doctor', table =>{
      table.increments('id').primary()
      table.string('name')
      table.string('date')
    })
  };
   
  exports.down = function(knex) {
    return knex.schema.dropTable('doctor')
  };