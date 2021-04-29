'use strict'

const Student = use("App/Models/Student");

class StudentController {

  async index () {
    return await Student.query().with("addresses").fetch()
  }

  async show ({ params }) {
    const student = await Student.findOrFail(params.id)
    return student
  }

  async store ({ request }) {

    const data = request.only([
      "name",
      "registration_number",
      "serie",
      "gender",
      "age",
      "cpf",
      "telephone",
      "grade"
    ])
    const addresses = request.input('addresses')

    const student = await Student.create(data)

    await student.addresses().createMany(addresses)

    return student
  }

  async update ({ params, request }) {
    const data = request.only([
      "name",
      "registration_number",
      "serie",
      "gender",
      "age",
      "cpf",
      "telephone",
      "grade"
    ])

    const student = await Student.findOrFail(params.id)
    student.merge(data)
    await student.save()

    return student
  }

  async destroy ({ params }) {
    const student = await Student.findOrFail(params.id)
    return await student.delete()
  }
}

module.exports = StudentController
