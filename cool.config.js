const path = require('path')

module.exports = {
  webpack: function (config) {
    config.entry['appOne'] = './src/static/apps/appOne/app.js'
    config.entry['appTwo'] = './src/static/apps/appTwo/app.js'

    config.output.path = path.join(__dirname, './dist')
    return config
  },
  devServer: {
    hot: false,
    port: 8686,
    publicPath: 'http://localhost:8686/koa-vue-static/'
  }
}
