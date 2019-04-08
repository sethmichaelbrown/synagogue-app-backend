exports.up = function (knex, Promise) {
  return knex.schema.createTable('contributions', function (table) {
    table.increments('id')
    table.string('fName', '40').notNullable()
    table.string('lName', '40').notNullable()
    table.string('email', '100').notNullable()
    table.string('contribution', '100').notNullable()
    table.string('eventId', '40').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contributions')
}