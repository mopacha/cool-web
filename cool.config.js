const path = require('path')
const config = require('@coofy/config')

module.exports = {
  preset: 'vue',
  webpack: function (config) {
    config.entry['demo'] = './src/static/apps/demo/app.js'
    config.output.path = path.join(__dirname, './dist')
    return config
  },
  devServer: {
    hot: false,
    port: 8086,
    publicPath: `${config.staticDomain}${config.staticContextPath}`
  }
}
