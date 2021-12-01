<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal ref="pageModalRef" :defaultInfo="defaultInfo" pageName="category" :modalConfig="modalConfig" />
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
