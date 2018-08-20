const store = require('../../store')
const authToken = require('../../auth/token')

module.exports = async function ({ params, auth }) {
	const { id } = auth.credentials || {}
	const { id: kioskId } = params

	const kiosk = store.get(kioskId)
	kiosk.id = id

	const client = await store.get(id)
	const token = await authToken.create({
		sub: id,
		kiosk: kioskId
	}, client.secret)

	return { token }
}