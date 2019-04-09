const config = require('@coofy/config')

module.exports = {
  // 模板变量全局配置
  views: {
    staticDomain: config.staticDomain,
    staticHostUrl: `${config.staticDomain}${config.staticContextPath}`
  },

  // cool build
  staticAssets: {
    publicPath: `${config.staticDomain}${config.staticContextPath}`
  },

  // 透传
  proxys: {
    demo: {
      baseUrl: '',
      patterns: ['/query$']
    }
  }
}
