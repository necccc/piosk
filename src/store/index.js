
const { promisify } = require('util')
const redis = require("redis")
const store = redis.createClient({
	host: process.env.REDIS_URL
})

const get = promisify(store.get).bind(store);
const set = promisify(store.set).bind(store);

exports.setClient = (key, value) => set(key, JSON.stringify(value))
exports.getClient = (key) => get(key).then(value => JSON.parse(value))