exports.register = function (server, options) {
	server.route(require('./create'))
	server.route(require('./read'))
	//server.route(require('./update'))
	//server.route(require('./delete'))

}

exports.name = 'http-resource-kiosk'
