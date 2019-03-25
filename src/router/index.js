const page = require('../controller/index')
module.exports = [
  { path: '', ctrl: page.appOne },
  { path: 'appOne', ctrl: page.appOne },
  { path: 'appTwo', ctrl: page.appTwo },
  { path: 'api/login', ctrl: page.login, method: 'post' }
]
