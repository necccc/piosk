
const basePath = process.env.SERVICE_BASEPATH

const isClientCreation = (request) => {
  return (request.path === `${basePath}/v1/client`)
    && (request.method === `post`)
}

exports.register = async function (server, options) {
  server.auth.scheme('jwt', require('../../auth/scheme'))
  server.auth.strategy('jwt', 'jwt')
  server.auth.default('jwt')

  server.ext('onPreAuth', (request, h) => {
    request.auth.skip = isClientCreation(request)
    return h.continue
  })
}

exports.name = 'http-middleware-auth'
