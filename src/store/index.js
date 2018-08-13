
const { promisify } = require('util')
const redis = require("redis")
const store = redis.createClient({
	host: process.env.REDIS_URL
})

const get = promisify(store.get).bind(store);
const set = promisify(store.set).bind(store);
const rpush = promisify(store.rpush).bind(store);
const lrange = promisify(store.lrange).bind(store);

exports.set = (key, value) => set(key, JSON.stringify(value))
exports.get = (key) => get(key).then(value => JSON.parse(value))

exports.setKioskIdForClient = (clientId, kioskId) => rpush(`KC__${clientId}`, kioskId)
exports.getKioskIdsOfClient = (clientId) => lrange(`KC__${clientId}`, 0, -1)