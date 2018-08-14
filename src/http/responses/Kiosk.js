module.exports = function (payload) {
	//if (payload.jwt) return { jwt }

	try {
		const { name, pages, created_at, updated_at } = payload
		return { name, pages, created_at, updated_at }
	} catch (e) {
		return payload
	}


}