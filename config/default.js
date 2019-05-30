const envConfig = require('./env-config')
const env = require('@coofy/env')(envConfig)

module.exports = {
  appName: `${env.APP_NAME}`,
  staticDomain: `${env.STATIC_HOST_URL}`,
  staticContextPath: `${env.STATIC_CONTEXT_PATH}`,
  demoAppUrl: `${env.DOMO_APP_URL}`,
}
