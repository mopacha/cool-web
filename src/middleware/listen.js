
const address = require('ip').address()
const chalk = require('chalk')
const figlet = require('figlet')

function printLogo (Log) {
  console.log(
    chalk.blue(
      figlet.textSync('cooL', {
        font: 'slant',
        horizontalLayout: 'full',
        verticalLayout: 'full'
      })
    )
  )
}

module.exports = async app => {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    app.context.logger.info(`mode: ${process.env.NODE_ENV}`)

    printLogo()
    console.log(`server on: http://${address}:${port}`)
  })
}
