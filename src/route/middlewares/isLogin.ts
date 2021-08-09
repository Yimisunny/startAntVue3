import { toLogin, checkLogin, checkToken, storageToken } from './login'

/**
 * @description 所有页面的路由守卫，在页面载入前的校验
 */
async function isLogin() {
  // 校验登陆
  if (await checkLogin()) {
    return true
  } else {
    let accessToken: string | object = await checkToken()

    // url中含有token
    //  设置token，并取消url中的accessToken
    if (accessToken) {
      storageToken(accessToken)
      return true
    } else {
      // cookie中不存在token，且url中不存在accessToken，直接跳转sso登陆
      toLogin()

      return false
    }
  }
}

export default isLogin
