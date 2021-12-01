<template>
  <div class="catagory">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #parentId="scope">
        <el-tag v-show="scope.row.parentId" size="mini" plain :type="scope.row.parentId == '1' ? '' : 'info'">
          {{ scope.row.parentId }}
        </el-tag>
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigComputed"
      pageName="department"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [defaultInfo, pageModalRef, handleNewData, handleEditData] = usePageModal()

const modalConfigComputed = computed(() => {
  const store = useStore()

  // 编辑时 上级部门下拉列表的选项
  const departmentIiem = modalConfig.formItems.find((item) => item.field === 'parentId')
  departmentIiem!.options = store.state.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
</script>

<style scoped></style>
