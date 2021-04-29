'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('registration_number').unsigned().notNullable()
      table.string('serie').notNullable()
      table.string('gender').notNullable()
      table.integer('age').unsigned().notNullable()
      table.string('cpf').notNullable()
      table.string('telephone').notNullable()
      table.integer('grade')
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema
