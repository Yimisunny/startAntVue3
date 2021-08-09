import axios from 'axios'
// import env from '@/config/env'
import notification from 'ant-design-vue/es/notification'

const Axios = axios.create({
  timeout: 30 * 1000,
  responseType: 'json',
  // 是否允许带cookie
  withCredentials: false
})

// 修复IE缓存get请求结果问题
Axios.defaults.headers.get['Pragma'] = 'no-cache'
Axios.defaults.headers.get['Cache-Control'] = 'no-cache, no-store'

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // config.baseURL = env.apiBaseUrl

    // // 客户端Id（uuid）放到请求头中
    // config.headers['client-id'] = client.clientId

    return config
  },
  error => {
    // 对请求错误做些什么
    console.error(error)
    Promise.reject(error)
  }
)

// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    // 对响应数据做些事
    const config = response.config

    const res = response.data
    const code = 'code' in res ? res.code : res.Code
    if (code !== 0) {
      let message = ('message' in res ? res.message : res.Message) || '请求失败'

      console.error(message, config, response)

      // if (!config.allowAnonymous && noAuthCodes.indexOf(code) >= 0) {
      //   // 刷新页面，跳转到登录页
      //   return reloadWhenNoAuth()
      // }

      // 错误消息提示

      notification.error({ message: '请求失败', description: message })

      // 对特定错误码做特殊处理
      try {
      } catch (error) {
        console.error(error)
      }

      return Promise.reject(res)
    }

    if ('result' in res) {
      return res.result
    } else if ('data' in res) {
      return res.data
    } else {
      return res.Data
    }
  },
  error => {
    const response = error.response
    const config = response && response.config

    console.error(config, response)

    // 错误消息提示
    let message =
      (response && response.data && ('message' in response.data ? response.data.message : response.data.Message)) ||
      error.message

    // if (config && config.showError) {
    notification.error({ message: '网络异常', description: message })
    // }
    return Promise.reject(error)
  }
)

export default Axios
