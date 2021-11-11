import type { RouteRecordRaw } from 'vue-router' // 引入vue-router中的类型

import { createRouter, createWebHashHistory } from 'vue-router'
import loaclCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/mian'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/Main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

/**
 * 路由守卫: 验证是否有token，判断是否需要重新登录
 */
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = loaclCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
