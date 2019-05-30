import '@babel/polyfill'
import Vue from 'vue'
import App from './app.vue'
import router from './routes'
import './permission'
import store from './store'
global.Vue = Vue
Vue.config.productionTip = false
require('./components/element-ui')
require('@utils/icon')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
