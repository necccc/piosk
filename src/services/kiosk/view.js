const store = require('../../store')
const tokenAuth = require('../../auth/token')

module.exports = async function ({headers}) {

	const authorization = headers.authorization

	if (!authorization) {
		return Boom.unauthorized('Token required')
	}

	try {
		const { kiosk } = await tokenAuth.decode(authorization)
		return store.get(kiosk)
	} catch(e) {
		return Boom.unauthorized(e.message)
	}
}