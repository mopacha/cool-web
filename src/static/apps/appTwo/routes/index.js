import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Login = () => import(/* webpackChunkName: 'login' */ '../pages/login')

export const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login }
]

export default new Router({
  mode: 'hash',
  routes
})
