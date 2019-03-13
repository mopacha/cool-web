const Koa = require('koa')
const middleware = require('./middleware/index')
const app = new Koa()

middleware.setContext(app)
middleware.view(app)
middleware.staticServe(app)
middleware.router(app)
middleware.listen(app)
