// import '@babel/polyfill'
import Vue from 'vue'
import App from './app.vue'
import router from './routes'

global.Vue = Vue
Vue.config.productionTip = false

require('@utils/icon')
require('./components/element-ui')
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
