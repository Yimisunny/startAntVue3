import axios from '@/utils/axios'

export function api1(data: object) {
  return axios.post('url', data)
}

export function api2(params: object) {
  return axios.post('url', null, { params })
}