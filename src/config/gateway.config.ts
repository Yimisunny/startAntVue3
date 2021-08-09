const protocol = window.location.protocol // 当前协议
const host = protocol + '//' + window.location.host // 当前带端口号的域名

// 开发环境地址(npm run dev)
const devHost = {
  baseApi: `https://www.baidu.net`,
  host: 'https://www.baidu.net'
}

// 测试环境地址(npm run test)
const testHost = {
  baseApi: `https://www.baidu.net`,
  host: host
}

// 预发布环境地址(npm run ppe)
const ppeHost = {
  baseApi: `https://www.baidu.net`,
  host: host
}

// 线上环境地址(npm run build)
const proHost = {
  baseApi: 'https://www.baidu.com',
  host: host
}

// 区分环境选择静态资源地址
const env = import.meta.env.VITE_APP_ENV

let exportConfig: Object = {}
if (env === 'production') {
  exportConfig = proHost
} else if (env === 'ppe') {
  exportConfig = ppeHost
} else if (env === 'test') {
  exportConfig = testHost
} else {
  exportConfig = devHost
}


export default exportConfig
