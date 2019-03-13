import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './app.vue'
import Detail from './page/login'
// const Home = () => import(/* webpackChunkName: 'wedgit' */ '../page/home')
// const Detail = () => import(/* webpackChunkName: 'wedgit' */ '../page/detail')

export const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]

export default new Router({
  mode: 'hash',
  routes
})
