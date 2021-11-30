<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="role"
    />
    <page-modal
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          ref="elTreeRef"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'

import { mapMenuLeafKeys } from '@/utils/map-menus'

import type { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  setup() {
    const store = useStore()
    // 解决 点击编辑时，ElTree组件无法回显
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallBack = (item: any) => {
      const leafKeys = mapMenuLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [defaultInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(undefined, editCallBack)

    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList: menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      defaultInfo,
      pageModalRef,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  },
  components: {
    PageContent,
    PageSearch,
    PageModal
  }
})
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
