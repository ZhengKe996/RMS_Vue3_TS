/**
 * service 统一出口
 */

import OWNRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import loaclCache from '@/utils/cache'

const ownRequest = new OWNRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      /* 携带 token 的请求拦截 */
      const token = loaclCache.getCache('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}` // 给请求添加携带token的请求头
      }
      return config
    },
    requestInterceptorCatch: (error: any) => {
      return error
    },
    responseInterceptor: (res: any) => {
      return res.data
    },
    responseInterceptorCatch: (error: any) => {
      return error
    }
  }
})
export default ownRequest
