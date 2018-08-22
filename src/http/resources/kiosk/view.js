const Boom = require('boom')
const { view } = require('../../../services/kiosk')

const KioskResponse = require('../../responses/Kiosk')

module.exports = {
	method: 'GET',
	path: '/kiosk/view',
	options: {
		auth: 'kiosk',
		/*validate: {
			payload: validator([
				validator.json('request/CreateClient')
			])
		}
		*/
	},
	handler: async (request, h) => {
		const data = await view(request)

console.log("path: '/kiosk/view'");


		if (!data) {
			return Boom.notFound()
		}
		return KioskResponse(data)
	}
}