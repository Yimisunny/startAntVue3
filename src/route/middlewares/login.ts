import gateway from '@/config/gateway.config'

import { setCookie, getCookie, urlToJson } from '@/utils'

// cookie中保存的token key
const TOKEN = 'projectName_access_token'

// 第三方登录完成后，url上携带的token key
const ACCESS_TOKEN = 'access_token'

/**
 * @description 判断是否登录
 */
const checkLogin = async () => {
  let token: string = getCookie(TOKEN)
  if (token) {
    return token
  } else {
    return false
  }
}

/**
 * @description 跳转到登录页，进行sso第三方登录
 */
const toLogin = () => {
  setCookie(TOKEN, '')
  window.location.href = `${gateway.baseApi}/api/login?redirect_url=${window.location.href}`
}

/**
 * @description 登出操作
 */
const toLogout = () => {
  setCookie(TOKEN, '')
  window.location.href = `${gateway.baseApi}/api/logout?redirect_url=${window.location.href}`
}

/**
 * @description 返回url中携带token参数
 */
const checkToken = () => {
  let { paramJson } = urlToJson()
  if (paramJson[ACCESS_TOKEN]) {
    return paramJson[ACCESS_TOKEN] || ''
  } else {
    return ''
  }
}

/**
 * storageToken(assesToken)
 * @param accessToken
 */
const storageToken = (accessToken: string | object) => {
  setCookie(TOKEN, accessToken)
}

export { TOKEN, ACCESS_TOKEN, checkLogin, toLogin, toLogout, checkToken, storageToken }
