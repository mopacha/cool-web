const config = require('@coofy/config')

module.exports = {
  staticDomain: config.staticDomain,
  staticUrl: `${config.staticDomain}${config.staticContextPath}`,
  // 透传
  proxys: {
    demo: {
      baseUrl: config.demoAppUrl,
      patterns: ['/api/*']
    }
  }
}
