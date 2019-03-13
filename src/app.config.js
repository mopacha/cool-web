const config = require('config')

module.exports = {
  // 模板变量全局配置
  views: {
    staticDomain: config.staticDomain,
    staticHostUrl: `${config.staticDomain}/koa2-vue-static`
  }
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
