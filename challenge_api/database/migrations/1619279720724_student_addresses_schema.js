'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentAddressesSchema extends Schema {
  up () {
    this.create('student_addresses', (table) => {
      table.increments()
      /* Referenciando o student_id */
      table
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('district')
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('student_addresses')
  }
}

module.exports = StudentAddressesSchema
