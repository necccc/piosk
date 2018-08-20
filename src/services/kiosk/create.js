const uuid = require('uuid/v4')
const moment = require('moment')
const store = require('../../store')

module.exports = async function ({ payload, auth }) {
	const kiosk_id = uuid()
	const { id: user_id } = auth.credentials || {}
	const data = {
		id: kiosk_id,
		name: payload.name,
		pages: payload.pages,
		updated_at: moment().unix(),
		created_at: moment().unix(),
	}

	store.set(kiosk_id, data)
	store.setKioskIdForClient(user_id, kiosk_id)

	return data
}