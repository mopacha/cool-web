/**
 * 监听
 */
module.exports.default = module.exports = async app => {
  // let port = app.context.port || 3333;
  const port = 3000
  app.listen(port, () => {
    app.context.logger.info(`server listen on ${port}`)
    // app.context.logger.info(`---------- mode: ${app.context.env} ----------`);
  })
}
