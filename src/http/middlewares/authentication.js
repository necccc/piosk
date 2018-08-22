exports.register = async function (server, options) {

  server.auth.scheme('jwt', require('../../auth/jwt-scheme'))
  server.auth.strategy('jwt', 'jwt')

  server.auth.scheme('kiosk', require('../../auth/kiosk-scheme'))
  server.auth.strategy('kiosk', 'kiosk')

  server.auth.default('jwt')
}

exports.name = 'http-middleware-auth'
