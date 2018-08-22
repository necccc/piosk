const store = require('../../store')
const tokenAuth = require('../../auth/token')

module.exports = async function ({headers}) {

	const authorization = headers.authorization

	if (!authorization) {
		return Boom.unauthorized('Token required')
	}

	try {
		const payload = await tokenAuth.decode(authorization)
		const id = payload.sub
		const kiosk = payload.kioskId

		const userData = await store.get(id)

		await tokenAuth.validate(authorization, userData.secret)
	} catch(e) {
		return Boom.unauthorized(e.message)
	}
	return {}
}