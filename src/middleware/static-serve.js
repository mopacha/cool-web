const path = require('path')
const serve = require('koa-static')
/**
 * 静态文件
 */
module.exports.default = module.exports = async app => {
  // app.use(serve(path.join(path.resolve('./'))));
  app.use(serve(path.join(path.resolve('./dist'))))
  app.use(serve(path.join(path.resolve('./static'))))
  app.use(serve(path.join(path.resolve('./build'))))

  app.context.logger.info('static-serve initialized')
}
