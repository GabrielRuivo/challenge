'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  addresses () {
    return this.hasMany('App/Models/StudentAddress')
  }

  grade () {
    return this.hasMany('App/Models/StudentGrade')
  }
}

module.exports = Student
