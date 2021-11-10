import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'normalize.css'
import './assets/css/index.less'

import { globalRegister } from './global' // 引入抽取出的第三方库
import ownRequest from './service/index' // 对应的实例

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)

/* ownRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独请求的res')
      return res
    }
  }
}) */

/**
 * 请求的数据类型，会传入内部定义的接口
 */
/* interface DataType {
  data: any
}

ownRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
    // showLoading: false
  })
  .then((res) => {
    console.log(res)
  })
 */
app.mount('#app')
