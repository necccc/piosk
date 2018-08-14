/**
 * @param {string} token - JWS token
 */
module.exports = function (payload) {

  if (payload.jwt) return { jwt }

  return payload
}
