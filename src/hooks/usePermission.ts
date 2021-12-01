import { useStore } from '@/store'

/**
 *
 * @param pageName 页面名
 * @param hanldeName 操作方式
 * @returns 返回 Boolen值，用于判断是否有操作权限
 */
export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.loginModule.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  return !!permissions.find((item) => item.indexOf(verifyPermission) !== -1)
}
