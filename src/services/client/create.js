const uuid = require('uuid/v4')
const moment = require('moment')

module.exports = async function ({ payload }) {
	const id = uuid()

	// TODO
	if (!global.clients) {
		global.clients = {}
	}
	global.clients[id] = {
		id,
		secret: payload.secret,
		updated_at: moment().unix(),
		created_at: moment().unix(),
	}

	return global.clients[id]

}