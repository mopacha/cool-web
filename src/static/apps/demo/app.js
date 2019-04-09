'use strict'
import Vue from 'vue'
import App from './app.vue'
import router from './routes'
global.Vue = Vue
Vue.config.productionTip = false
require('@static/libs')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
