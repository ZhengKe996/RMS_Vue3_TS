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
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
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
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // 将 routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取菜单操作权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 发生登录的网络请求
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult) // 0 ok  400 no

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

      // 发生初始化的网络请求（完整的角色role/部门department）调用根写法
      dispatch('getInitialDataAction', null, { root: true })
    },
    loadLocalLogin({ commit, dispatch }) {
      // 从本地读取token
      const token: string = loaclCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      // 发生初始化的网络请求（完整的角色role/部门department）调用根写法
      dispatch('getInitialDataAction', null, { root: true })

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
