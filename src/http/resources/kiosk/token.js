

// create a read-only token for the piosk clients
// token validated with secret
// token has userId, kioskId
//		get secret via userId
//		if secret validates token
//			read kiosk id
// 			kiosk id connected to clientId?
//				serve kiosk dataconst Boom = require('boom')
const { token } = require('../../../services/kiosk')
const KioskTokenResponse = require('../../responses/KioskToken')

module.exports = {
	method: 'GET',
	path: '/kiosk/{id}/token',
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
		const data = await token(request)

		if (!data) {
			return Boom.notFound()
		}
		return KioskTokenResponse(data)
	}
}