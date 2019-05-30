import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)
const loadView = view => {
  return () =>
		import(/* webpackChunkName: "bastet[index]" */ `../page/${view}.vue`)
}

const routes = [
  {
    path: '/login',
    component: loadView('login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/list',
    children: [
      {
        path: 'list',
        name: 'List',
        component: loadView('list'),
        meta: { title: '工作台', icon: 'el-icon-menu' }
      }
    ]
  },
  {
    path: '/detail',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Detail',
        component: loadView('detail')
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-setting' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: loadView('table'),
        meta: { title: 'Table', icon: 'el-icon-info' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: loadView('tree'),
        meta: { title: 'Tree', icon: 'el-icon-edit' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: loadView('form'),
        meta: { title: 'Form', icon: 'el-icon-upload' }
      }
    ]
  }
]

export default new Router({
  mode: 'hash',
  routes
})
