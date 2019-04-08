exports.up = function (knex, Promise) {
  return knex.schema.createTable('events', function (table) {
    table.increments('id')
    table.string('title', '40').notNullable()
    table.string('description', '250').notNullable()
    table.string('date', '40').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('events')
}