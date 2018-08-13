const client = require('./client')
const kiosk = require('./kiosk')
//const token = require('./token')

exports.register = async function (server, options) {
  const basePath = process.env.SERVICE_BASEPATH

  return await server.register([client, kiosk], {
    routes: {
      prefix: basePath + '/v1'
    }
  })

  //server.route(require('./status/read'))
}

exports.name = 'http-routes'

