const Boom = require('boom')
const { read } = require('../../../services/kiosk')

const KioskResponse = require('../../responses/Kiosk')

module.exports = {
	method: 'GET',
	path: '/kiosk/{id}',
	options: {
		auth: 'jwt',
		/*validate: {
			payload: validator([
				validator.json('request/CreateClient')
			])
		}
		*/
	},
	handler: async (request, h) => {
		const data = await read(request)

		if (!data) {
			return Boom.notFound()
		}
		return KioskResponse(data)
	}
}