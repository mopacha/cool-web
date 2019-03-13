'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Home from './home/index'
import Detail from './detail/index'

Vue.use(Router)

export const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

console.log(router)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
