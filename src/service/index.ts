/**
 * service 统一出口
 */

import OWNRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const ownRequest = new OWNRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      console.log("单独实例————请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (error: any) => {
      console.log("单独实例————请求失败的拦截");
      return error;
    },
    responseInterceptor: (res: any) => {
      console.log("单独实例————响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (error: any) => {
      console.log("单独实例————响应失败的拦截");
      return error;
    },
  },
});
export default ownRequest;
