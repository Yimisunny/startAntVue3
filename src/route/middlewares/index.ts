import isLogin from './isLogin'
import { clearUrlAccessToken } from '@/utils'
import {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext
} from 'vue-router'

export function addMiddlewares(router: Router) {
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      // 所有页面的路由守卫，在页面载入前的校验，通过校验，才会进入当前页面的模版组件
      if (!(await isLogin())) {
        next(false)
        return
      }

      next(true)
    }
  )

  router.afterEach(route => {
    // 页面切换后，滚动到页面顶部
    window.scrollTo(0, 0)

    // pushstate清空url中的access_token
    clearUrlAccessToken(route)
  })
}
