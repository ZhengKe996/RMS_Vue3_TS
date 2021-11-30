<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="users"
    >
      <template #status="scope">
        <el-button size="mini" plain :type="scope.row.enable ? 'success' : 'info'">
          {{ scope.row.enable ? '在线' : '离线' }}
        </el-button>
      </template>
    </page-content>
    <page-modal ref="pageModalRef" :defaultInfo="defaultInfo" pageName="users" :modalConfig="modalConfigComputed" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  name: 'users',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // page-model 相关的hook逻辑 如：是否显示密码框
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }

    // 动态添加部门和角色列表
    const modalConfigComputed = computed(() => {
      const store = useStore()

      const departmentIiem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      departmentIiem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })

      return modalConfig
    })

    const [defaultInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(newCallBack, editCallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfigComputed,
      pageContentRef,
      pageModalRef,
      handleResetClick,
      handleQueryClick,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style lang="less" scoped>
.own-form {
  .handle-btns {
    text-align: right;
    padding: 0px 50px 30px 0px;
  }
}
</style>
