import type { RouteRecordRaw } from 'vue-router' // 引入vue-router中的类型

import { createRouter, createWebHashHistory } from 'vue-router'
import loaclCache from '@/utils/cache'
import { fitstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue')
    // 子路由 根据 userMenus 决定 动态注册
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/Not-found.vue')
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

  if (to.path === '/main') {
    return fitstMenu.url
  }
})

export default router
