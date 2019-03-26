const getIPAdress = require('../utils/getIPAdress')()

/**
 * 监听
 */
module.exports.default = module.exports = async app => {
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    app.context.logger.info(`mode: ${process.env.NODE_ENV}---server on: http://${getIPAdress}:${port}`)
  })
}
