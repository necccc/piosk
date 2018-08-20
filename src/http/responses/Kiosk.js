module.exports = function (payload) {
	//if (payload.jwt) return { jwt }

	try {
		const { name, pages, created_at, updated_at, id } = payload
		return { name, pages, created_at, updated_at, id }
	} catch (e) {
		return payload
	}


}