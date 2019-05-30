import Vue from 'vue'
import App from './app.vue'
import router from './routes'
import './permission'
global.Vue = Vue
Vue.config.productionTip = false
require('./components/element-ui')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
