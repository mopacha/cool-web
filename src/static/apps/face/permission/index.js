import router from '../routes'
import { getCookie } from '@utils/storage'

router.beforeEach(async (to, from, next) => {
  const token = getCookie('login_id')

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
router.afterEach((to, from) => {})
