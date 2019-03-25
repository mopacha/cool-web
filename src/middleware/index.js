const listen = require('./listen')
const bodyParser = require('./body-parser')
const setContext = require('./set-context')
const view = require('./view')
const router = require('./router')
const staticServe = require('./static-serve')

module.exports.default = module.exports = {
  listen,
  setContext,
  view,
  router,
  staticServe,
  bodyParser
}
