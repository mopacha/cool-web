const config = require('config')

module.exports = {
  // 模板变量全局配置
  views: {
    staticDomain: config.staticDomain,
    staticHostUrl: `${config.staticDomain}/koa-vue-static`
  },

  staticAssets: {
    publicPath: `${config.staticDomain}/koa-vue-static`
  },

  //透传
  
}

// eslint-disable-next-line camelcase
// module.exports = node_env => {
//   const config = {
//     development: {
//       mode: 0
//     }
//   }

//   return Object.assign(
//     {
//       px2rem: false
//     },
//     config[node_env]
//   )
// }
