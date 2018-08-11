exports.register = function (server, options) {
  server.route(require('./refresh'))
  server.route(require('./create'))

}

exports.register.attributes = {
  name: 'http-resource-token'
}
