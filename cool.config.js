const path = require('path')

module.exports = {
  webpack: function (config) {
    config.entry['demo'] = './src/static/apps/demo/app.js'
    config.output.path = path.join(__dirname, './dist')
    return config
  },
  devServer: {
    hot: false,
    port: 8687,
    publicPath: 'http://localhost:8687/koa-vue-static/'
  }
}
