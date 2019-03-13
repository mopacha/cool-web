const page = require('../controller/index')
module.exports = [
  { path: '', ctrl: page.appOne },
  { path: 'appOne', ctrl: page.appOne },
  { path: 'appTwo', ctrl: page.appTwo },
  { path: 'api/list', ctrl: page.list, method: 'post' }
]
