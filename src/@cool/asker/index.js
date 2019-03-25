/* eslint-disable no-return-await */
const axios = require('axios')
const logger = require('../../utils/log4js')

axios.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error.response)
  }
)

const showInfo = (type, res, option) => {
  let defaults = {
    url: res.config.url,
    method: res.request.method
  }
  let options = JSON.stringify(Object.assign({}, defaults, option))
  if (type === 'info') {
    logger.info(options)
  } else if (type === 'error') {
    logger.error(options)
  }
}

let Asker = {}
Asker.request = async options => {
  options.headers = Object.assign(
    { 'Content-Type': 'application/json;charset=utf-8' },
    options.headers
  )
  return await axios(options)
    .then(function (res) {
      showInfo('info', res, {
        response: res.data
      })
      return res.data
    })
    .catch(function (res) {
      showInfo('error', res, {
        response: res.response.data
      })
      return { status: res.response.status, error: res.response.data }
    })
}

Asker.get = async options => {
  return await Asker.request(Object.assign({ method: 'get' }, options))
}

Asker.post = async options => {
  return await Asker.request(Object.assign({ method: 'post' }, options))
}

module.exports = Asker
