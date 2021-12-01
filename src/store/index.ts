import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from './types'

import loginModule from './login/login'
import mainModule from './main/main'
import dashboardModule from './main/dashboard'

import { getPageListData } from '@/service/main/main'

const store = createStore<IRootState>({
  state: () => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 获取部门/角色/菜单列表
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 100 })
      const { list: departmentList } = departmentResult.data
      commit('changeEntireDepartment', departmentList)

      const roleResult = await getPageListData('/role/list', { offset: 0, size: 100 })
      const { list: roleList } = roleResult.data
      commit('changeEntireRole', roleList)

      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    loginModule,
    mainModule,
    dashboardModule
  }
})
export function setupStore() {
  // 页面重新载入时，调用
  store.dispatch('loginModule/loadLocalLogin')
}
/**
 * 由于Vuex 与 TypeScript 的兼容性不够好，这样写可以解决在组件中调用Vuex中的数据时 有类型检测
 */
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
