import { createStore } from 'vuex'
import { IRootState } from './types'

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

export default store
