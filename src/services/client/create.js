const uuid = require('uuid/v4')
const moment = require('moment')
const { promisify } = require('util')
const crypto = require('crypto')
const token = require('../../auth/token')
const store = require('../../store')

module.exports = async function ({ payload }) {
	const id = uuid()

	const buf = await promisify(crypto.randomBytes)(256)
	const secret = buf.toString('hex')

	const data = {
		id,
		secret,
		name: payload.name,
		updated_at: moment().unix(),
		created_at: moment().unix(),
	}



// access token from payload
// bind that to a userid
// create secret
// store secret / token / userid

// generate jwt
// return jwt

	store.set(payload.token, id)
	store.set(id, data)

	const jwt = await token.create({
		sub: id
	}, secret)

	return { jwt }

}