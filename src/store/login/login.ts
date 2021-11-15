/**
 * Module<S, R>: 这里的需要传入两个类型，没有设置默认类型
 *    S:模块中state的类型
 *    R:根store中的类型
 */
import { Module } from 'vuex'

import type { ILoginState } from './types' // S
import type { IRootState } from '../types' // R
import type { IAccount, IUserInfo } from '@/service/login/type'

import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from '@/service/login/login'
import loaclCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    // 登录逻辑
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)

      const { id, token } = loginResult.data
      commit('changeToken', token)
      loaclCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)

      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      loaclCache.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)

      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      loaclCache.setCache('userMenus', userMenus)

      // 跳转到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token: string = loaclCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = loaclCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = loaclCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
