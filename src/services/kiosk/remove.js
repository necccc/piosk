const uuid = require('uuid/v4')
const moment = require('moment')
const store = require('../../store')

module.exports = async function ({ params, payload, auth }) {

	const kiosk_id = params.id
	const { id: user_id } = auth.credentials || {}

	try {
		store.del(kiosk_id)
		store.removeKioskIdsOfClient(user_id, kiosk_id)
	} catch(e) {
		return Boom.badImplementation('remove error');
	}


	return 204
}