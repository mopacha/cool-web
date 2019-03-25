const config = require('config')
const Asker = require('../@cool/asker')
const baseURL = config.coolAppHostUrl

// headers: {
// 	'Content-Type': 'application/x-www-form-urlencoded'
// }

const login = reqData => {
  const url = `/user/login`
  return Asker.post({
    baseURL,
    url,
    data: reqData
  })
}

module.exports = {
  login
}
