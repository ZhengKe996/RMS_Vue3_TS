import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface OWNRequestInterceptors<Type = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig // 请求成功拦截
  requestInterceptorCatch?: (error: any) => any // 请求失败拦截
  responseInterceptor?: (res: Type) => Type // 响应成功拦截
  responseInterceptorCatch?: (error: any) => any // 响应失败拦截
}
export interface OWNRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: OWNRequestInterceptors<T> // 扩展传入的参数
  showLoading?: boolean
}
