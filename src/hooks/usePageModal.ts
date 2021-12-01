import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = (item?: any) => void

/**
 *
 * @param newCb 外部传入的新建函数
 * @param editCb 外部传入的编辑函数
 *
 * @defaultInfo 编辑时显示给用户的原始数据
 * @pageModalRef 绑定到 PageModal组件上
 * @handleNewData 由外部调用的新建事件
 * @handleEditData 由外部调用的编辑事件
 */
export function usePageModal(newCb?: CallBackFn, editCb?: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    newCb && newCb() // 当有值时，进行调用
  }

  const defaultInfo = ref()
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    editCb && editCb(item)
  }

  return [defaultInfo, pageModalRef, handleNewData, handleEditData]
}
