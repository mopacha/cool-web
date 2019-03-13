'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Login from './page/login'

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login }
]

Vue.use(Router)
export const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
