'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Login from './login/index'
Vue.use(Router)
const RouterMap = [
  { path: '/', component: Login },
  { path: '/login', component: Login }
]

export const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterMap
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
