import { Message } from 'element-ui'
import Http from '@coofy/http'
import { geteErrMsg } from '@utils/error'

const showError = msg => {
  Message({
    showClose: true,
    message: msg,
    type: 'error',
    duration: 2 * 1000
  })
}

const options = {
  baseUrl: '',
  timeout: 10000,
  headers: {}
}
const http = new Http(options)

const request = {
  ask: params =>
    new Promise((resolve, reject) => {
      http
        .ask(params)
        .then(res => {
          if (!res.status) {
            resolve(res)
          } else {
            const err = geteErrMsg(res.status)
            showError(err)
            reject(res)
          }
        })
        .catch(err => {
          let errMsg = ''
          if (err) {
            errMsg = geteErrMsg(err.status)
          } else {
            errMsg = '系统异常'
          }
          reject(err || errMsg)
          showError(errMsg)
        })
    })
}
export default request
