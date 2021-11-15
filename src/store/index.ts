import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from './types'

import loginModule from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}
/**
 * 由于Vuex 与 TypeScript 的兼容性不够好，这样写可以解决在组件中调用Vuex中的数据时 有类型检测
 */
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
