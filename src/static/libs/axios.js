import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
const service = axios.create({
  baseURL: '/',
  timeout: 10000
})
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// eslint-disable-next-line no-undef
Vue.prototype.$http = service
