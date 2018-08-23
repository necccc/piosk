const uuid = require('uuid/v4')
const moment = require('moment')
const client = require('../client')
const store = require('../../store')

module.exports = async function ({ params, payload, auth }) {
	const { id: kiosk_id } = params
	const { id: user_id } = auth.credentials || {}

	if(!client.hasKiosk(user_id, kiosk_id)) {
		return Boom.notFound()
	}

	const data = {
		id: kiosk_id,
		name: payload.name,
		pages: payload.pages,
		updated_at: moment().unix(),
		created_at: moment().unix(),
	}

	store.del(kiosk_id)
	store.set(kiosk_id, data)

	return data
}