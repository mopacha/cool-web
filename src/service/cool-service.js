const config = require('config')
const baseUrl = config.coolAppHostUrl

function login (ctx) {
  const url = `${baseUrl}/login`
  return ctx.axios(ctx, { url, method: 'post' })
}

module.exports = {
  login
}
