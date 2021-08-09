import Cookies from 'js-cookie'
import { RouteLocation } from 'vue-router'

// 第三方登录完成后，url上携带的token key
const ACCESS_TOKEN = 'access_token'

/**
 * @description 设置cookie
 * @param key
 * @param value
 * @param config { path: /abc/, expires: 6, // 过期时间:从创建或Date实例开始的天数 }
 */
function setCookie(key: string, value: string | object, config?: object) {
  let defaultConfig = {
    path: '/'
  }

  Cookies.set(key, value, config || defaultConfig)
}

/**
 *
 * @description 清除cookie
 * clearCookie('thisProject_access_token')
 * @param key
 */
function clearCookie(key: string) {
  Cookies.remove(key)
}

/**
 *
 * @description 获取cookie
 * getCookie('thisProject_access_token')
 * @param key
 */
function getCookie(key: string) {
  return Cookies.get(key)
}

/**
 *
 * @description 路由加载完成后，删掉url上的access_token参数
 * @param route f
 */
const clearUrlAccessToken = (route: RouteLocation) => {
  let { paramJson } = urlToJson(route.fullPath)

  if (paramJson['access_token']) {
    delete paramJson[ACCESS_TOKEN]

    // 去掉url上的accessToken
    let para = toQueryString(paramJson)

    let paraStr = para ? `?${para}` : ''

    // 去掉accessToken的url
    let url = route.path + paraStr

    // 利用replaceState更改当前history
    history.replaceState(null, '', url)
  }
}

/**
 *
 * @description 将obj转换成url参数形式，toQueryString({a:1,b:2})  =>   a=1&b=2
 * @param key
 * @param value
 */
function toQueryPair(key: string, value: string) {
  if (typeof value == 'undefined') {
    return key
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value))
}

/**
 *
 * @description 对象转url
 */
interface ToQueryString {
  [key: string]: {}
}
function toQueryString(obj: ToQueryString) {
  let ret: Array<any> = []
  for (let key in obj) {
    key = encodeURIComponent(key)
    let values: any = obj[key]
    if (values && values.constructor == Array) {
      //数组
      let queryValues = []
      for (let i = 0, len = values.length, value; i < len; i++) {
        value = values[i]
        queryValues.push(toQueryPair(key, value))
      }
      ret = ret.concat(queryValues)
    } else {
      //字符串
      ret.push(toQueryPair(key, values))
    }
  }
  return ret.join('&')
}

/**
 *
 * @description url转对象
 * @param selfUrl
 */
function urlToJson(selfUrl?: string) {
  const url = selfUrl ? selfUrl : window.location.href

  const reg = /\?(.*)$/ // 正则取？后的参数
  const urlMatch = url.match(reg) || []

  const param = urlMatch[1] || ''

  const output = {
    paramStr: param,
    paramJson: queryToObj(param)
  }

  return output
}

interface Request {
  [key: string]: {}
}
function queryToObj(str: string) {
  let theRequest: Request = {}
  if (str) {
    let strs = str.includes('&') ? str.split('&') : ('&' + str).split('&')
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].includes('=')) {
        theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
      }
    }
  }
  return theRequest
}

export { setCookie, getCookie, clearCookie, clearUrlAccessToken }
