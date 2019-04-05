const envConfig = require('./env-config')
const env = require('@coofy/env')(envConfig)

module.exports = {
  appName: `${env.APP_NAME}`,
  nodeLogsDir: `${env.NODE_LOGS_DIR}`,
  staticDomain: `${env.STATIC_HOST_HTTPS_URL}`,
  coolAppHostUrl: `${env.COOL_APP_HOST_URL}`
}
