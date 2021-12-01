<template>
  <div class="goods">
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
      pageName="goods"
    >
      <template #image="scope">
        <el-image style="width: 60px; height: 80px" :src="scope.row.imgUrl" :preview-src-list="[scope.row.imgUrl]">
        </el-image>
      </template>
      <template #status="scope">
        <el-button size="mini" plain :type="scope.row.status ? 'success' : 'info'">
          {{ scope.row.status ? '在售' : '下架' }}
        </el-button>
      </template>
    </page-content>
    <page-modal ref="pageModalRef" pageName="goods" :defaultInfo="defaultInfo" :modalConfig="modalConfig" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [defaultInfo, pageModalRef, handleNewData, handleEditData] = usePageModal()
</script>

<style scoped></style>
