const Boom = require('boom')
const moment = require('moment')
const { promisify } = require('util')
const crypto = require('crypto')
const authToken = require('../../auth/token')
const store = require('../../store')

module.exports = async function ({ payload }) {
	const { token } = payload
	const id = await store.get(token)

	if (!id) {
		return Boom.unauthorized()
	}

	const client = await store.get(id)
	const jwt = await authToken.create({
		sub: id
	}, client.secret)

	return { jwt }
}