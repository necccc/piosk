const store = require('../../store')

module.exports = async function ({ params }) {
	const { id } = params

	const kiosk = store.get(id)
	kiosk.id = id

	return kiosk
}