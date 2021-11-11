import { createStore } from 'vuex'
import type { IRootState } from './types'

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
  store.dispatch('login/loadLocalLogin')
}

export default store
