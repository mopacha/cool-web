/**
 * @description：
 * @author: moofyu@163.com
 */

'use strict'

const fs = require('fs')
const utils = require('../utils/utils')
const assets = {}
let webpackconfig = null
let timer = null

const getAssets = conf => {
  webpackconfig = conf
  Object.keys(conf.entry).forEach(key => {
    const content = fs.readFileSync(
      utils.slash(`${process.cwd()}/dist/scripts/apps/${key}.js`)
    )
    const pathReg = new RegExp('./static/apps/[^.]*.js', 'g')
    let match = pathReg.exec(content)
    while (match) {
      match &&
				(assets[match[0]] = Object.assign(assets[match[0]] || {}, {
				  [key]: conf.entry[key]
				}))
      match = pathReg.exec(content)
    }
  })
  return assets
}

const getRebuildConfig = (event, file) => {
  file = utils.slash(file)
  if (event === 'change' && /public\/scripts/.test(file)) {
    return (entry => {
      if (!Object.keys(entry || {}).length) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
          getAssets(webpackconfig)
        }, 20000)
      }
      return entry ? Object.assign({}, webpackconfig, { entry }) : null
    })(assets[`./${file}`])
  }
  return null
}
module.exports = {
  getAssets,
  getRebuildConfig
}
