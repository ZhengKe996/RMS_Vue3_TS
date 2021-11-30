import { ref } from 'vue'
import PageContent from '@/components/page-content'
/**
 *  pageContentRef: 组件的Ref对象
 *  handleResetClick:高级检索清空按钮功能实现
 *  handleQueryClick:高级检索搜索按钮功能实现
 * @returns 给页面返回一个功能函数
 */
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
