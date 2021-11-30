import { ElMessage } from 'element-plus'

export function ownMessage(data: string, isType: boolean): void {
  const type = isType ? 'success' : 'error'
  ElMessage({
    showClose: true,
    message: data,
    type: type
  })
}
