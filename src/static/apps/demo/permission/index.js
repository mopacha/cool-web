import router from '../routes'
import { getCookie } from '@utils/storage'
import store from '#/demo/store'

router.beforeEach(async (to, from, next) => {
  store.dispatch('onLoading', true)
  const token = getCookie('token')

  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from) => {
  store.dispatch('onLoading', false)
})
