import { ElMessageBox, ElMessage } from 'element-plus'

export async function ownDeleteMessage() {
  let IsDelete = false
  await ElMessageBox.confirm('是否删除此条数据', '警告', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
    showClose: false
  })
    .then(() => (IsDelete = true))
    .catch(() => {
      IsDelete = false
      ElMessage('用户取消删除')
    })
  return IsDelete
}
