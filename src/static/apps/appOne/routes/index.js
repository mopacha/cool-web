import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../page/home'
// import Detail from '../page/detail'
Vue.use(Router)
const Home = () => import(/* webpackChunkName: 'home' */ '../page/home')
const Detail = () => import(/* webpackChunkName: 'detail' */ '../page/detail')

export const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]

export default new Router({
  mode: 'hash',
  routes
})
