import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Login = () => import(/* webpackChunkName: 'login' */ '../page/home')
const Home = () => import(/* webpackChunkName: 'home' */ '../page/home')
const Detail = () => import(/* webpackChunkName: 'detail' */ '../page/detail')

export const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]

export default new Router({
  mode: 'hash',
  routes
})
