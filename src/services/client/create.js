const uuid = require('uuid/v4')
const moment = require('moment')
const store = require('../../store')

module.exports = async function ({ payload }) {
	const id = uuid()
	const data = {
		id,
		secret: payload.secret,
		updated_at: moment().unix(),
		created_at: moment().unix(),
	}

	store.setClient(id, data)

	return data

}