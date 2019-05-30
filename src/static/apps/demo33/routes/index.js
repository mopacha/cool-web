import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loadView = view => {
  return () =>
		import(/* webpackChunkName: "demo[index]" */ `../page/${view}.vue`)
}

export const routes = [
  { path: '/', component: loadView('login') },
  { path: '/login', name: 'login', component: loadView('login') },
  { path: '/home', name: 'home', component: loadView('home') },
  { path: '/detail', name: 'detail', component: loadView('detail') }
]

export default new Router({
  mode: 'hash',
  routes
})
