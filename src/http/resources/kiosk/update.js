const validator = require('../../../validator')
const { update } = require('../../../services/kiosk')
const KioskCreatedResponse = require('../../responses/KioskCreated')

module.exports = {
	method: 'PUT',
	path: '/kiosk/{id}',
	options: {
		auth: 'jwt',
		payload: {
			allow: 'application/json'
		},
		/*validate: {
			payload: validator([
				validator.json('request/CreateClient')
			])
		}
		*/
	},
	handler: async (request, h) => {
		const data = await update(request)
		return KioskCreatedResponse(data)
	}
}