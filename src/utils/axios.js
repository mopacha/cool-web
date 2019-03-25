// const fs = require('fs')
const axios = require('axios')
/**
 * axios 请求数据
 */

module.exports = async (ctx, options) => {
  // 请求url
  console.log('request url: ', options.url)
  options.headers = { 'content-type': 'application/json;charset=utf-8' }
  // eslint-disable-next-line no-return-await
  return await axios(options)
    .then(function (res) {
      showInfo(ctx, 'info', res, {
        response: res.data
      })
      return res.data
    })
    .catch(function (res) {
      showInfo(ctx, 'error', res, {
        response: res.response.data
      })
      return { status: res.response.status, error: res.response.data }
    })
}

function showInfo (ctx, type, res, option) {
  let defaults = {
    url: res.config.url,
    method: res.request.method
  }
  let options = JSON.stringify(Object.assign({}, defaults, option))
  if (type === 'info') {
    ctx.logger.info(options)
  } else if (type === 'error') {
    ctx.logger.error(options)
  }
}
