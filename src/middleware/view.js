const render = require('koa-art-template')
const path = require('path')
const viewcfg = require('../app.config').views
const root = path.join(path.resolve('./src/view'))

module.exports = async app => {
  render(app, {
    root,
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production',
    imports: {
      staticDomain: viewcfg.staticDomain,
      staticHostUrl: viewcfg.staticHostUrl
    }
  })

  app.context.logger.info('view initialized')
}
