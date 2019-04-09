const page = require('../controller/index')
module.exports = [
  { path: '', ctrl: page.demo },
  { path: 'demo', ctrl: page.demo },
  { path: 'api/login', ctrl: page.login, method: 'post' }
]
