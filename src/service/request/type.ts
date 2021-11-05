import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface OWNRequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig; // 请求成功拦截
  requestInterceptorCatch: (error: any) => any; // 请求失败拦截
  responseInterceptor: (res: T) => T; // 响应成功拦截
  responseInterceptorCatch: (error: any) => any; // 响应失败拦截
}
export interface OWNRequestConfig extends AxiosRequestConfig {
  interceptors?: OWNRequestInterceptors; // 扩展传入的参数
}
