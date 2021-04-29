'use strict'

const User = use('App/Models/User')

class SessionController {
  async create ({ request, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)

    const { username } = await User.findByOrFail('email', email)

    const data = {
      username,
      token,
    }

    return data

  }
  async logout ({ auth }) {
    await auth
      .authenticator('jwt')
      .revokeTokens()
  }

}

module.exports = SessionController
