
const address = require('ip').address()

module.exports = async app => {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    app.context.logger.info(`mode: ${process.env.NODE_ENV}---server on: http://${address}:${port}`)
  })
}
