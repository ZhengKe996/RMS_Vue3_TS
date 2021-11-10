/**
 * Module<S, R>: 这里的需要传入两个类型，没有设置默认类型
 *    S:模块中state的类型
 *    R:根store中的类型
 */
import { Module } from 'vuex'

import { ILoginState } from './types' // S
import { IRootState } from '../types' // R

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('accountLoginAction go', payload)
    }
  }
}

export default loginModule
