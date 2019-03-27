module.exports = {
  appenders: {
    out: {
      type: 'console'
    },
    cheese: {
      type: 'dateFile',
      filename: `cool-logs/koa-vue-web`,
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['cheese', 'out'],
      level: 'debug'
    }
  }
}
