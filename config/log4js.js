module.exports = {
  appenders: {
    out: {
      type: 'console'
    },
    cool: {
      type: 'dateFile',
      filename: `logs/cool-web`,
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      backups: 5,
      maxLogSize: 10485760,
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ['cool', 'out'],
      level: 'debug'
    }
  }
}
