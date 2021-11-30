import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = (item?: any) => void

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
