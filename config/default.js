const envConfig = require('./env-config')
const env = require(`${process.cwd()}/src/@cool/env`)(envConfig)

module.exports = {
  'staticDomain': `${env.STATIC_HOST_HTTPS_URL}`,
  'coolAppHostUrl': `${env.COOL_APP_HOST_URL}`
}
