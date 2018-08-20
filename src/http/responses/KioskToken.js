module.exports = function (payload) {
	//if (payload.jwt) return { jwt }

	try {
		const { token } = payload
		return { token }
	} catch (e) {
		return payload
	}


}