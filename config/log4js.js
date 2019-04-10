const config = require('@coofy/config')

module.exports = {
  appenders: {
    out: {
      type: 'console'
    },
    cheese: {
      type: 'dateFile',
      filename: `cool-logs/${config.appName}`,
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
