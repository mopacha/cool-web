/**
 * @description：
 * @author: moofyu@163.com
 */

'use strict'
const open = require('opn')

module.exports = argv => {
  const interfaces = require('os').networkInterfaces()
  const address = []
  let hostname = typeof argv.open === 'string' ? argv.open : '127.0.0.1'
  !(typeof argv.open === 'string') &&
		Object.keys(interfaces).forEach(key => {
		  interfaces[key].forEach(item => {
		    item.family === 'IPv4' &&
					!item.internal &&
					!/^192/.test(item.address) &&
					address.push(item.address)
		  })
		})
  hostname = address[0] ? address[0] : hostname
  argv.open &&
		open(`http://${hostname}:${process.env.PORT || '8181'}`).catch(err => {
		  console.log('err', err)
		})
}
