const moment = require('moment')

module.exports = async function ({ payload, auth }) {
	console.log(payload, auth);

	const { id } = auth.credentials || {}

	// TODO
	if (!global.clients) {
		global.clients = {}
	}

	const data = global.clients[id]

	data.secret = payload.secret
	data.updated_at = moment().unix()

	global.clients[id] = data

	return data

}