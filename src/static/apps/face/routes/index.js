import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const loadView = view => {
  return () => import(/* webpackChunkName: "face[index]" */ `../page/${view}.vue`)
}

export const routes = [
  { path: '/', name: 'home', component: loadView('login') },
  { path: '/login', name: 'login', component: loadView('login') },
  { path: '/list', name: 'list', component: loadView('list') },
  { path: '/room', name: 'room', component: loadView('room') }
]

export default new Router({
  mode: 'hash',
  routes
})
