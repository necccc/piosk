const { read } = require('../../../services/client')

const ClientResponse = require('../../responses/Client')

module.exports = {
	method: 'GET',
	path: '/client',
	options: {
		/*validate: {
			payload: validator([
				validator.json('request/CreateClient')
			])
		}
		*/
	},
	handler: async (request, h) => {
		console.log('client update handler');

		const data = await read(request)
		return ClientResponse(data)
	}
}