module.exports = async function ({ auth }) {
	const { id } = auth.credentials || {}

	if (!global.clients) {
		global.clients = {}
	}

	return global.clients[id]

}