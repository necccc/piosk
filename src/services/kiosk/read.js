const store = require('../../store')

module.exports = async function ({ params }) {
	const { id } = params

	return store.get(id)
}