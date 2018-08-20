const Boom = require('boom')
const authToken = require('../../auth/token')
const store = require('../../store')

module.exports = async function ({ payload }) {
	const { token } = payload
	const github_id = await store.get(token)

	if (!github_id) {
		return Boom.unauthorized("No GitHub user here for that cookie")
	}

	const id = await store.get(github_id)

	if (!id) {
		return Boom.unauthorized("No user here for that GitHub user")
	}

	const client = await store.get(id)
	const jwt = await authToken.create({
		sub: id
	}, client.secret)

	return { jwt, name: client.name }
}