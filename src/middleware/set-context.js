
let logger = require('log4js').getLogger('koa-vue-web:running')
logger.level = 'info'

module.exports = async (app) => {
  app.context.logger = logger
  app.context.logger.debug('set-context initialized')
}
