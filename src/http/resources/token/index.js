exports.register = function (server, options, next) {
  server.route(require('./refresh'))
  next()
}

exports.register.attributes = {
  name: 'http-resource-token'
}
