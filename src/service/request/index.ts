import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { OWNRequestInterceptors, OWNRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import type { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

const DEFAULT_LOADING = true // 定义常量，需要修改时方便

class OWNRequest {
  instance: AxiosInstance
  interceptors?: OWNRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: OWNRequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

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

    /* 添加全局的拦截器 */
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全体实例拦截器————请求成功拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '数据正在请求中',
            background: 'rgba(123,123,123,0.5)'
          })
        }

        return config
      },
      (error) => {
        console.log('全体实例拦截器————请求失败拦截')
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全体实例拦截器————响应成功拦截')

        // 移除loading
        this.loading?.close()

        /**
         * 例子：
         *  某些请求看起来是成功的，但什么数据都没有返回。这时需要判断 是否有错误代码
         */

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return data
        }
      },
      (error) => {
        console.log('全体实例拦截器————响应失败拦截')

        // 移除loading
        this.loading?.close()

        /**
         * 例子：
         *  可采用 switch 对 HttpErrorCode 进行判断，返回对应的错误信息
         * */
        if (error.response.status === 404) {
          console.log('404 页面未找到！')
        }
        return error
      }
    )
  }

  request<Type>(config: OWNRequestConfig<Type>): Promise<Type> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config进行的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, Type>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 恢复其初始化值,这样不会影响下一次的请求
          this.showLoading = DEFAULT_LOADING

          // 将结果返回出去
          resolve(res)
        })
        .catch((error) => {
          // 恢复其初始化值,这样不会影响下一次的请求
          this.showLoading = DEFAULT_LOADING

          reject(error)
          return error
        })
    })
  }

  get<Type>(config: OWNRequestConfig<Type>): Promise<Type> {
    return this.request<Type>({ ...config, method: 'GET' })
  }

  post<Type>(config: OWNRequestConfig<Type>): Promise<Type> {
    return this.request<Type>({ ...config, method: 'POST' })
  }

  put<Type>(config: OWNRequestConfig<Type>): Promise<Type> {
    return this.request<Type>({ ...config, method: 'PUT' })
  }

  delete<Type>(config: OWNRequestConfig<Type>): Promise<Type> {
    return this.request<Type>({ ...config, method: 'DELETE' })
  }
}

export default OWNRequest
