const KoaBody = require('koa-body')
/**
 * koa-body
 */

module.exports.default = module.exports = async app => {
  app.use(KoaBody())
  app.context.logger.info('koa-body initialized')
}
