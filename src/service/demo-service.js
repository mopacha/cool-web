const config = require('config')
const Asker = require('@coofy/asker')
const baseURL = config.demoAppUrl

// headers: {
// 	'Content-Type': 'application/x-www-form-urlencoded'
// }

const login = (ctx, reqData) => {
  const url = `/query`
  return Asker.post({ ctx, baseURL, url, data: reqData })
}

module.exports = { login }
