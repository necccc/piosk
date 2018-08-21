const Boom = require('boom')
const { remove } = require('../../../services/kiosk')

const KioskResponse = require('../../responses/Kiosk')

module.exports = {
	method: 'DELETE',
	path: '/kiosk/{id}',
	options: {
		/*validate: {
			payload: validator([
				validator.json('request/CreateClient')
			])
		}
		*/
	},
	handler: async (request, h) => {
		const data = await remove(request)

		if (!data) {
			return Boom.notFound()
		}

		const response = h.response('');
		response.code(204)

		return response
	}
}