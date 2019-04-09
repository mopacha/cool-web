const envConfig = require('./env-config')
const env = require('@coofy/env')(envConfig)

module.exports = {
  appName: `${env.APP_NAME}`,
  nodeLogsDir: `${env.NODE_LOGS_DIR}`,
  staticDomain: `${env.STATIC_HOST_URL}`,
  staticContextPath: `${env.STATIC_CONTEXT_PATH}`,
  coolAppHostUrl: `${env.COOL_APP_HOST_URL}`
}
