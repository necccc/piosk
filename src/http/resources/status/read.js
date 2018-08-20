module.exports = {
  method: 'GET',
  path: process.env.CAPTION_SERVICE_BASEPATH + '/status',
  config: {
    auth: false,
    plugins: {
      'rate-limit': {
        enabled: false
      }
    }
  },
  handler: (request, reply) => reply('ok')
    .hold()
    .type('text/plain')
    .send()
}
