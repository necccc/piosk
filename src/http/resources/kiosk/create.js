const validator = require('../../../validator')
const { create } = require('../../../services/kiosk')
const KioskCreatedResponse = require('../../responses/KioskCreated')

module.exports = {
	method: 'POST',
	path: '/kiosk',
	options: {
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
		const data = await create(request)
		return KioskCreatedResponse(data)
	}
}