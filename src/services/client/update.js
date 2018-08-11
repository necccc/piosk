const moment = require('moment')
const store = require('../../store')

module.exports = async function ({ payload, auth }) {
	const { id } = auth.credentials || {}

	const data = store.getClient(id)

	data.secret = payload.secret
	data.updated_at = moment().unix()

	store.setClient(id, data)

	return data

}