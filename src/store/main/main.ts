import { Module } from 'vuex'
import type { IMainState } from './types'
import type { IRootState } from '@/store/types'

import { ownMessage } from '@/base-ui/message/message'

import { getPageListData, deletePageData, createPageData, editPageData } from '@/service/main/main'

const systemModule: Module<IMainState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      goodsList: [],
      goodsCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  mutations: {
    changeUsersList(state, List: any[]) {
      state.usersList = List
    },
    changeUsersCount(state, Count: number) {
      state.usersCount = Count
    },
    changeRoleList(state, List: any[]) {
      state.roleList = List
    },
    changeRoleCount(state, Count: number) {
      state.roleCount = Count
    },
    changeGoodsList(state, List: any[]) {
      state.goodsList = List
    },
    changeGoodsCount(state, Count: number) {
      state.goodsCount = Count
    },
    changeMenuList(state, List: any[]) {
      state.menuList = List
    },
    changeMenuCount(state, Count: number) {
      state.menuCount = Count
    },
    changeDepartmentList(state, List: any[]) {
      state.departmentList = List
    },
    changeDepartmentCount(state, Count: number) {
      state.departmentCount = Count
    },
    changeCategoryList(state, List: any[]) {
      state.categoryList = List
    },
    changeCategoryCount(state, Count: number) {
      state.categoryCount = Count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.usersList
          case 'role':
            return state.roleList
          case 'goods':
            return state.goodsList
          case 'menu':
            return state.menuList
          case 'category':
            return state.categoryList
          case 'department':
            return state.departmentList
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 发送网络请求
    async getPageListAction({ commit }, payload: any) {
      // 处理数据
      const pageName = payload.pageName

      const pageUrl = `${pageName}/list`

      // 发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageResult, '请求到的数据')

      // 将数据存储到 state 中
      const { list, totalCount } = pageResult.data

      const changePageName = (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 处理数据
      const { pageName, id, ueryInfo } = payload
      const pageUrl = `/${pageName}/${id}`

      // 发送删除请求
      await deletePageData(pageUrl)
        .then((res) => {
          console.log(res, '删除')

          if (res.code === 0) ownMessage(res.data, true)
          else ownMessage(res.data, false)
        })
        .catch((err) => console.log(err.data))

      // 重新获取最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: ueryInfo
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`

      await createPageData(pageUrl, newData)
        .then((res) => {
          console.log(res, 'new')

          if (res.code === 0) ownMessage(res.data, true)
          else ownMessage(res.data, false)
        })
        .catch((err) => console.log(err.data))

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
        .then((res) => {
          if (res.code === 0) ownMessage(res.data, true)
          else ownMessage(res.data, false)
        })
        .catch((err) => console.log(err.data))

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
