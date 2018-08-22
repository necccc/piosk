const store = require('../../store')
const basePath = process.env.SERVICE_BASEPATH || ''

module.exports = async function (id, kioskId) {

	const kioskIdList = await store.getKioskIdsOfClient(id)

	return kioskIdList.includes(kioskId)
}