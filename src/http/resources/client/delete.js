const { remove } = require('../../../services/client')

module.exports = {
	method: 'DELETE',
	path: '/client',
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
		await remove(request)

		return h.code(201)
	}
}