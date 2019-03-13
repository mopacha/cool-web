const logger = require('../utils/log4js')

/**
 * 包上通用内容到上下文(可变) 比如axios ,某些utils方法....
 */
function wrapCommonToContext (app) {
  app.context.logger = logger
}

function appContextConfig (app) {
  wrapCommonToContext(app)
}

/**
 * 设置上下文
 */
module.exports.default = module.exports = async app => {
  appContextConfig(app)
  app.context.logger.info('set-context initialized')
}
