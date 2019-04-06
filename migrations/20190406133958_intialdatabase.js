exports.up = function(knex, Promise) {
  return knex.schema.createTable('contributions', function(table){
    table.increments()
    table.string('sample')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contributions')
}