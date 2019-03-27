const config = require('config')
const Asker = require('../@cool/asker')
const baseURL = config.coolAppHostUrl

// headers: {
// 	'Content-Type': 'application/x-www-form-urlencoded'
// }

const login = (ctx, reqData) => {
  const url = `/adminbd/login`
  return Asker.post({ ctx, baseURL, url, data: reqData })
}

module.exports = { login }
