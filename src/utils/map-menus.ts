/**
 *  1：先去加载默认所有的routes
 *  2：根据菜单获取需要添加的routes
 *     userMenus：
 *        type === 1 -> children -> type === 1
 *        type === 2 -> url -> route
 *
 *  require.context: webpack下的函数，用于查找文件
 *    第一个参数：文件路径
 *    第二个参数：是否递归查找
 *    第三个参数：匹配的正则表达式
 *
 *  require('../router/main' + key.split('.')[1]):webpack下的函数，用于读取文件
 *    参数：文件路径
 *    注：由于 require.context查找到的文件名是一个字符串：./xxx/xxx.ts 需要对字符串进行处理，才能正确读取文件
 *
 *  fitstMenu:
 *    用于保存菜单的第一条数据，由于/main 路径刷新时，不知道跳转到哪个子路由，所以需要重定向时跳转到第一条数据的地址
 */

import { RouteRecordRaw } from 'vue-router'
import type { IBreadcrumb } from '@/base-ui/breadcrumb'
let fitstMenu: any = null
/**
 *
 * @param userMenus vuex中存用户菜单数据（外部传入）
 * @returns 返回数据 在用户登录时实现动态路由的注册
 */
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('@/router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('@/router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 根据菜单获取需要添加的routes （递归）
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!fitstMenu) {
          fitstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
export { fitstMenu }

/**
 *
 * @param userMenus vuex中存用户菜单数据（外部传入）
 * @param currentPath 当前组件的路径（外部传入）
 * @returns 返回 nav-menu组件 使用的数据
 */
export function pathMapToMenu(userMenus: any[], currentPath: string, breadcrumbs?: IBreadcrumb[]): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: menu.url })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

/**
 * @param userMenus vuex中存储的用户菜单数据（外部传入）
 * @param currentPath 当前组件的路径（外部传入）
 * @returns 返回 breadcrumb组件 使用的数据
 */
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

/**
 *
 * @param userMenus vuex中存储的用户菜单数据（外部传入）
 * @returns 递归遍历，返回用户权限
 */
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

/**
 *
 * @param menuList 编辑时请求到的菜单列表（外部传入）
 * @returns 返回 菜单id的数组，在role组件中使用
 */
export function mapMenuLeafKeys(menuList: any[]) {
  const leafkeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafkeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leafkeys
}
