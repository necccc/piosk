exports.register = function (server, options, next) {
	server.route(require('./create'))
	server.route(require('./read'))
	server.route(require('./update'))
	server.route(require('./delete'))

	next()
}

exports.register.attributes = {
	name: 'http-resource-kiosk'
}
