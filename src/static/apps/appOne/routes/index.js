import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import(/* webpackChunkName: 'home' */ '../pages/home')
const Detail = () => import(/* webpackChunkName: 'detail' */ '../pages/detail')

export const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]

export default new Router({
  mode: 'hash',
  routes
})
