import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { OWNRequestInterceptors, OWNRequestConfig } from './type'

class OWNRequest {
  instance: AxiosInstance
  interceptors?: OWNRequestInterceptors

  constructor(config: OWNRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    /* 从 config 取出的拦截器是对应的实例拦截器 */
    this.instance.interceptors.request.use(
      // 使用请求拦截器
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      // 使用响应拦截器
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    /* 添加所有实例都有的拦截器 */
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全体实例拦截器————请求成功拦截')
        return config
      },
      (error) => {
        console.log('全体实例拦截器————请求失败拦截')
        return error
      }
    )

    this.instance.interceptors.request.use(
      (res) => {
        console.log('全体实例拦截器————响应成功拦截')

        return res
      },
      (error) => {
        console.log('全体实例拦截器————响应失败拦截')

        return error
      }
    )
  }

  request(config: OWNRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default OWNRequest
