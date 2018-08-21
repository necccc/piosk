
const basePath = process.env.SERVICE_BASEPATH || ''

const skipPaths = [
  `${basePath}/v1/kiosk/view`,
  `${basePath}/v1/client`,
  `${basePath}/v1/token`
]

const shouldSkipAuth = (request) => {
  const skipByPath = skipPaths.includes(request.path)
  const skipByMethod = request.method === `post`

  if (process.env.DEBUG) {
    console.info('Skip auth on path', request.path, skipPaths,  skipByPath && skipByMethod);
  }

  return skipByPath && skipByMethod;
}

exports.register = async function (server, options) {
  server.auth.scheme('jwt', require('../../auth/scheme'))
  server.auth.strategy('jwt', 'jwt')
  server.auth.default('jwt')

  server.ext('onPreAuth', (request, h) => {
    request.auth.skip = shouldSkipAuth(request)
    return h.continue
  })
}

exports.name = 'http-middleware-auth'
